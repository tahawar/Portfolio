# Tahawar Ihsan — Portfolio v2.0

Personal portfolio for Tahawar Ihsan, AI/ML Engineer.
Built with Next.js 15, Tailwind CSS, Framer Motion, and Geist fonts.
Deploys as a static site to Netlify.

## Tech

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Geist Sans + Mono** for typography
- **Static export** for Netlify (no server runtime needed)

## Local development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
# → output goes to ./out
```

## Deployment to Netlify

The site auto-deploys when you push to `main`. Netlify reads `netlify.toml` for build config.

### First-time setup (replacing the old static portfolio)

If you already have a Netlify site at `portfolio-tahawar-ihsan.netlify.app`:

1. **Push this code to a new repo** (or replace your existing portfolio repo contents).
2. In Netlify dashboard → your site → **Site configuration → Build & deploy → Continuous deployment → Repository**: point it at the new repo / branch.
3. Netlify auto-detects Next.js. Build command: `npm run build`. Publish dir: `out`.
4. Push to `main` → Netlify builds and deploys.

Your existing `*.netlify.app` URL stays the same.

### If you want a clean swap

1. Keep your old repo as-is (it will stay live until you change Netlify).
2. Create new repo for v2 (`portfolio-v2`).
3. Push v2 code, deploy it as a Netlify Deploy Preview first to verify.
4. Once verified, update your existing Netlify site to point at the v2 repo.

## Required files to add to `public/`

Before deploying, drop these into `public/`:

- `Tahawar_ihsan_CV.pdf` — your latest CV (download button uses this)
- `og-image.png` — 1200×630 social share preview
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- `apple-touch-icon.png` (180×180)
- `android-chrome-192x192.png`, `android-chrome-512x512.png`

Generate all favicons at once with [realfavicongenerator.net](https://realfavicongenerator.net).

## Editing content

All content lives in `lib/data.ts` — name, experience, projects, skills, education, certifications, links. Edit there, save, and the site updates.

## Project structure

```
app/
  globals.css     Tailwind + grain texture + base styles
  layout.tsx      SEO metadata, fonts, JSON-LD schema
  page.tsx        Composes all sections
components/
  Nav.tsx
  Hero.tsx
  AgentDiagram.tsx   Animated SVG agent workflow
  About.tsx
  Work.tsx
  Projects.tsx
  Skills.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts         ⭐ Edit content here
public/
  robots.txt
  sitemap.xml
  site.webmanifest
  (your favicons, OG image, CV PDF)
CONTEXT.md        Briefing for AI coding assistants
.cursorrules      Auto-loaded rules for Cursor
netlify.toml      Netlify build config
```

## Design philosophy

- **One accent color** (electric blue `#3b82f6`). No gradients beyond subtle radial.
- **Near-black** background. Sharp corners.
- **Mono font** for technical accents (labels, tags, dates).
- **Animated agent diagram** in hero — the differentiator.
- **Subtle grain** for warmth (SVG noise overlay).

## License

MIT
