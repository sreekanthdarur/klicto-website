import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, loadImageSizes } from './lib.mjs';
import { marketingPages, notFound } from '../site/pages.mjs';
import { legalPages } from '../site/legal.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'public'), dist, { recursive: true });
cpSync(join(root, 'site', 'site.css'), join(dist, 'site.css'));
cpSync(join(root, 'site', 'site.js'), join(dist, 'site.js'));

loadImageSizes(join(root, 'public', 'assets'), readdirSync(join(root, 'public', 'assets')).filter((f) => f.endsWith('.webp')));

const pages = [...marketingPages(), ...legalPages()];
const all = [...pages, notFound()];

const fileFor = (p) => (p.endsWith('.html') ? p : p + 'index.html');
for (const { path, html } of all) {
  const out = join(dist, fileFor(path));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
  .map(({ path }) => `<url><loc>${SITE.url}${path}</loc><lastmod>${SITE.updatedIso}</lastmod></url>`)
  .join('\n')}\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

// ---- Checks ----
const errors = [];
const known = new Set(all.map((p) => p.path));
const banned = /revolutioni|seamless|cutting-edge|unlock|empower|fast-paced|AI-powered|\bAI\b|\bTBD\b|\bTODO\b|lorem|to be filled|yet to do|\[[^\]]*\]|\u2014|\u2013|[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/iu;
const mojibake = /\u00c3|\u00e2\u20ac|\u00c2/;

for (const { path, html } of pages) {
  const title = /<title>(.*?)<\/title>/.exec(html)[1];
  const desc = /<meta name="description" content="(.*?)">/.exec(html)[1];
  const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  if (decode(title).length >= 60) errors.push(`${path}: title ${decode(title).length} chars: ${title}`);
  if (decode(desc).length >= 160) errors.push(`${path}: description ${decode(desc).length} chars`);
  if (path === '/' && !/30 days/i.test(title + desc)) errors.push('Home needs the 30-day offer in title or description');

  const visible = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<head>[\s\S]*?<\/head>/, '');
  const text = visible.replace(/<[^>]+>/g, ' ');
  const m = banned.exec(text);
  if (m) errors.push(`${path}: banned or placeholder text "${m[0]}" near "${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ')}"`);
  if (mojibake.test(html)) errors.push(`${path}: encoding problem`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) errors.push(`${path}: needs exactly one h1`);
  for (const im of html.matchAll(/<img [^>]*>/g)) {
    if (!/ alt="/.test(im[0]) || !/ width="/.test(im[0]) || !/ height="/.test(im[0])) errors.push(`${path}: image missing alt or size ${im[0]}`);
  }

  const ids = new Set([...html.matchAll(/ id="([^"]+)"/g)].map((x) => x[1]));
  for (const a of html.matchAll(/href="([^"]+)"/g)) {
    const h = a[1];
    if (/^(mailto:|https?:)/.test(h)) continue;
    if (h.startsWith('#')) { if (!ids.has(h.slice(1))) errors.push(`${path}: dead anchor ${h}`); continue; }
    const [p] = h.split('#');
    if (p.startsWith('/') && !known.has(p) && !existsSync(join(dist, p))) errors.push(`${path}: dead link ${h}`);
  }
  for (const s of html.matchAll(/src="(\/[^"]+)"/g)) if (!existsSync(join(dist, s[1]))) errors.push(`${path}: missing file ${s[1]}`);
  for (const s of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(s[1]); } catch { errors.push(`${path}: invalid JSON-LD`); }
  }
}

if (errors.length) {
  console.error('Build checks failed:\n' + errors.map((e) => ' - ' + e).join('\n'));
  process.exit(1);
}
console.log(`Built ${all.length} pages. All checks passed.`);
