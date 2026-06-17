# ankayma-web

Marketing site + blog for **ankayma.com** — served via GitHub Pages (custom domain, apex).

Static HTML (no generator yet). Add a blog post by creating
`blog/<slug>/index.html` and adding a card to `blog/index.html`.
Migrate to an SSG (Hugo) when post volume makes a hand-maintained index painful (~8–10 posts) or RSS is needed.

## Structure
- `index.html`, `honest-limits.html`, `privacy.html`, `terms.html` — landing + legal (moved out of `open-client/docs`).
- `blog/` — canonical home for technical writing. Each post: `blog/<slug>/index.html`.
- `CNAME` — `ankayma.com` (apex, GitHub Pages custom domain).
- `style.css`, `favicon.svg` — shared.

## Publishing model
ankayma.com is the **canonical** home. Syndicate elsewhere (Medium with `canonical_url` set here, LinkedIn excerpt + link, X thread) pointing back — never let a copy outrank the original.

Product transparency docs (architecture traces, QC discipline) stay in `ankayma/open-client`.
