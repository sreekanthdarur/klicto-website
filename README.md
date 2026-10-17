# Klicto website

Static marketing and legal site for [klicto.in](https://klicto.in). No framework and no runtime dependencies.

## Build

```
npm run build
```

`scripts/build.mjs` renders every page from `site/pages.mjs` and `site/legal.mjs` into `dist/`, copies `public/` and the stylesheet, and writes `sitemap.xml` and `robots.txt`.

The build fails if any page has:

- a title of 60 characters or more, or a description of 160 or more
- a dead internal link or anchor, a missing file, or an image without alt text or size
- placeholder or banned wording (see the `banned` pattern in `scripts/build.mjs`)
- invalid structured data

## Deploy (Cloudflare Workers static assets)

```
npm run build
npx wrangler deploy
```

For a preview that does not touch production: `npx wrangler versions upload`.

## Where to edit

- Business facts (operator, address, email, support hours, effective date): `SITE` in `scripts/lib.mjs`. Change them once and every page, the footer and the legal pages follow.
- Page copy: `site/pages.mjs`. Legal text: `site/legal.mjs`.
- Styles: `site/site.css`.
- Images: `public/assets/` (WebP).

## Notes

- The site sets no cookies and has no analytics. If analytics is added, update `site/legal.mjs` (Cookie Policy and Privacy Policy) and add a consent banner first.
- No phone or WhatsApp number is shown. Add it to the contact page and `SITE` when it is active.
- Add the Play Store button to `/download/` only when a live listing URL exists.
- The in-app Terms and Privacy text must match the website versions exactly.
