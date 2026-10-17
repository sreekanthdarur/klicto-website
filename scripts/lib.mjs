import { readFileSync } from 'node:fs';

export const SITE = {
  url: 'https://klicto.in',
  name: 'Klicto',
  email: 'info@klicto.in',
  operator: 'Sreekanth Darur',
  address: 'Raichur, Karnataka, India',
  jurisdiction: 'Raichur, Karnataka',
  hours: '10 AM to 7 PM IST, seven days a week',
  effective: '21 October 2026',
  effectiveIso: '2026-10-21',
  updated: '18 October 2026',
  updatedIso: '2026-10-18',
  year: 2026,
  planLine: 'Plans are announced before your free period ends.',
  ogImage: '/assets/phone.webp',
};

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const sizes = {};
export function loadImageSizes(dir, names) {
  for (const n of names) sizes[n] = webpSize(readFileSync(`${dir}/${n}`));
}

function webpSize(b) {
  const type = b.toString('ascii', 12, 16);
  if (type === 'VP8X') return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  if (type === 'VP8L') {
    const v = b.readUInt32LE(21);
    return { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1 };
  }
  return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
}

export function img(name, alt, { eager = false, cls = '' } = {}) {
  const s = sizes[name];
  if (!s) throw new Error('Unknown image ' + name);
  return `<img src="/assets/${name}" alt="${esc(alt)}" width="${s.w}" height="${s.h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}${cls ? ` class="${cls}"` : ''}>`;
}

export const NAV = [
  ['/features/', 'Features'],
  ['/how-it-works/', 'How it works'],
  ['/who-its-for/', 'Who it is for'],
  ['/pricing/', 'Pricing'],
  ['/faq/', 'FAQ'],
  ['/contact/', 'Support'],
];

export const LEGAL = [
  ['/terms/', 'Terms of Use'],
  ['/privacy/', 'Privacy Policy'],
  ['/refund-and-cancellation/', 'Refund and Cancellation'],
  ['/acceptable-use/', 'Acceptable Use'],
  ['/data-deletion/', 'Data Deletion'],
  ['/grievance-redressal/', 'Grievance Redressal'],
  ['/cookie-policy/', 'Cookie Policy'],
  ['/disclaimer/', 'Disclaimer'],
];

function header(path) {
  const links = NAV.map(([h, t]) => `<a href="${h}"${path === h ? ' aria-current="page"' : ''}>${t}</a>`).join('');
  return `<header class="nav"><div class="wrap navrow"><a class="brand" href="/" aria-label="Klicto home"><img src="/assets/logo.webp" alt="" width="45" height="45">Klicto</a><button class="btn menu" id="menu" type="button" aria-expanded="false" aria-controls="links">Menu</button><nav class="links" id="links" aria-label="Main">${links}<a href="/download/" class="btn primary">Start 30 days free</a></nav></div></header>`;
}

function footer() {
  const prod = [...NAV.slice(0, 4), ['/gst-and-compliance/', 'GST and compliance'], ['/security/', 'Security and data'], ['/download/', 'Download']];
  const li = (arr) => arr.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('');
  return `<footer class="footer"><div class="wrap"><div class="footgrid"><div><div class="brand footbrand">Klicto</div><p>Billing for small shops in India. Android app.</p><p><a class="maillink" href="mailto:${SITE.email}">${SITE.email}</a><br>Support: ${SITE.hours}</p></div><div><h2>Product</h2><ul>${li(prod)}</ul></div><div><h2>Company</h2><ul>${li([['/our-story/', 'Our story'], ['/faq/', 'FAQ'], ['/contact/', 'Contact and support'], ['/grievance-redressal/', 'Grievance officer']])}</ul></div><div><h2>Legal</h2><ul>${li(LEGAL)}</ul></div></div><p class="legalline">Klicto is operated by ${SITE.operator}, ${SITE.address}. Copyright ${SITE.year} ${SITE.operator}. All rights reserved.</p></div></footer>`;
}

export function page({ path, title, desc, body, schema = [], noindex = false, ogType = 'website' }) {
  const canonical = SITE.url + path;
  const ld = schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('');
  const og = SITE.url + SITE.ogImage;
  const html = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${canonical}">${noindex ? '<meta name="robots" content="noindex">' : ''}<meta name="theme-color" content="#ffc900"><link rel="icon" href="/klicto-mark.svg" type="image/svg+xml"><meta property="og:type" content="${ogType}"><meta property="og:site_name" content="Klicto"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${og}"><meta property="og:locale" content="en_IN"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${og}"><link rel="stylesheet" href="/site.css"><script>document.documentElement.classList.add('js')</script>${ld}</head><body><a class="skip" href="#main">Skip to content</a>${header(path)}<main id="main">${body}</main>${footer()}<script src="/site.js" defer></script></body></html>`;
  return { path, html };
}

export const hero = (eyebrow, h1, lead) =>
  `<section class="pagehero"><div class="wrap"><div class="eyebrow">${eyebrow}</div><h1>${h1}</h1><p class="lead">${lead}</p></div></section>`;

export const cta = (title = 'Start your 30 days free', text = 'No card needed. Full access from the first day.') =>
  `<section class="section warm"><div class="wrap center"><h2>${title}</h2><p>${text}</p><p><a class="btn primary" href="/download/">Start 30 days free</a></p></div></section>`;

export const section = (inner, cls = '') => `<section class="section ${cls}"><div class="wrap">${inner}</div></section>`;

export const card = (h, p, tag = 'h3') => `<div class="card"><${tag}>${h}</${tag}><p>${p}</p></div>`;

export const faqLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
});

export const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Klicto',
  url: SITE.url,
  logo: SITE.url + '/assets/logo.webp',
  email: SITE.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Raichur', addressRegion: 'Karnataka', addressCountry: 'IN' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: SITE.email, areaServed: 'IN', availableLanguage: ['English'] },
};

export const appLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Klicto',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android',
  description: 'Billing app for small shops in India. Create bills from a photo, voice or typing, with GST support, customer ledger and sales reports.',
  url: SITE.url,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: '30 days of full access, no card needed.' },
};

export const legalPage = (path, title, desc, intro, sections) => {
  const toc = sections.map(([h], i) => `<li><a href="#s${i + 1}">${h}</a></li>`).join('');
  const body = sections.map(([h, html], i) => `<section id="s${i + 1}"><h2>${i + 1}. ${h}</h2>${html}</section>`).join('');
  return page({
    path,
    title: `${title} | Klicto`,
    desc,
    body: `<section class="pagehero"><div class="wrap"><div class="eyebrow">Legal</div><h1>${title}</h1><p class="meta">Effective date: <time datetime="${SITE.effectiveIso}">${SITE.effective}</time> &middot; Last updated: <time datetime="${SITE.updatedIso}">${SITE.updated}</time></p></div></section><section class="section"><div class="wrap legal"><p class="lead">${intro}</p><nav class="toc" aria-label="On this page"><strong>On this page</strong><ol>${toc}</ol></nav>${body}<p class="meta">Questions about this page: <a href="mailto:${SITE.email}">${SITE.email}</a></p></div></section>`,
  });
};
