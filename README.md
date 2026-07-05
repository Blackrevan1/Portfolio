# Krishna Bhabat — Engineering Profile

Personal portfolio for **Krishna Bhabat**, Backend & DevOps Engineer / Founding Engineer at
[Krit Intel](https://kritintel.com). Built with **React + Vite**.

**Design language:** a modern **warm-dark** portfolio — big sans headlines, generous spacing,
rounded elevated cards and a soft glow, in **IBM Plex Sans** (with IBM Plex Mono only for small
labels) and a signal-vermilion accent (`#ff5a33`). Its own identity, distinct from the other
founder sites.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Editing the content

**You almost never need to touch the components.** All copy — summary, stats, capabilities,
experience, projects, stack, education, contact — lives in one file:

```
src/data.js
```

Change the strings there and the site updates. A few notes:

- `profile.headline` / `contact.title` — the accent (vermilion) part goes inside `<em>…</em>`;
  `\n` in the headline is treated as a space.
- `nav` — the top-bar links; each item's `id` must match a section `id` in the markup
  (`about`, `experience`, `work`, `stack`, `contact`).
- `highlights` render as the hero stat row; `about.strengths` render as the About capability cards.
- To add a **downloadable résumé**: drop the PDF in `public/` (e.g. `public/Krishna_Bhabat.pdf`)
  and set `profile.resumeUrl = '/Krishna_Bhabat.pdf'`, then add a link/button to it.

Colors, fonts and spacing are CSS variables at the top of `src/styles/global.css` (`:root { … }`).
The signal accent is `--accent: #ff5a33`; swap it there to re-tint the whole site.

## Deploy

The build is a plain static site (`dist/`), so any static host works. Since Krit Intel already runs on
Cloudflare, the natural home is **Cloudflare Pages** on a `krishna.kritintel.com` subdomain:

### Option A — Cloudflare Pages (recommended, matches the team)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. After the first deploy, go to the Pages project → **Custom domains** → add
   `krishna.kritintel.com`. Cloudflare adds the CNAME automatically since the zone is already there.

### Option B — Any static host (Netlify / Vercel / GitHub Pages)

- **Netlify / Vercel:** import the repo; build `npm run build`, publish `dist`. The included
  `public/_redirects` handles SPA fallback on Netlify.
- **GitHub Pages:** `npm run build`, then publish `dist/`. If serving from a sub-path, set
  `base` in `vite.config.js` accordingly.

## Structure

```
index.html            # document shell, fonts, meta/OG tags, favicon
src/
  main.jsx            # entry
  App.jsx             # composes sections + scroll-reveal observer
  data.js             # ← all content lives here
  styles/
    global.css        # design tokens, layout, buttons, tags, reveal
    components.css     # navbar, hero, and each section's styles
  components/         # Navbar, Hero, About, Experience, Projects,
                      # Stack, Education, Contact, Footer, Icons
public/
  favicon.svg
  _redirects          # SPA fallback for Netlify-style hosts
```
