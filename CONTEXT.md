# Project Context for AI Coding Assistants

## Project: Tahawar Ihsan — Portfolio v2.0

Personal portfolio for Tahawar Ihsan, AI/ML Engineer based in Lahore, Pakistan, working at NetSol Technologies on agentic AI systems.

## Tech Stack
- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v3.4
- **Animation:** Framer Motion
- **Fonts:** Geist Sans + Geist Mono (via `geist` package)
- **Deployment:** Netlify (static export via `output: 'export'` in next.config.js)
- **Build output:** `out/` directory

## File Structure
```
/
├── app/
│   ├── globals.css         CSS variables, grain, base styles
│   ├── layout.tsx          Root layout + SEO metadata + JSON-LD
│   └── page.tsx            Main page (composes all sections)
├── components/
│   ├── Nav.tsx             Sticky nav with scroll-aware blur
│   ├── Hero.tsx            Hero with typewriter
│   ├── AgentDiagram.tsx    SVG agent workflow animation
│   ├── About.tsx           About + stats
│   ├── Work.tsx            Experience timeline
│   ├── Projects.tsx        Enterprise + personal projects
│   ├── Skills.tsx          Stack grid
│   ├── Education.tsx       Education + certifications
│   ├── Contact.tsx         Contact CTAs
│   └── Footer.tsx          Footer
├── lib/
│   └── data.ts             ⭐ ALL content lives here
└── public/
    ├── robots.txt
    ├── sitemap.xml
    ├── site.webmanifest
    └── (favicons, og-image, CV pdf — to be added)
```

## Design System
- **Background:** Near-black `#0a0a0b` with `bg-elevated` `#111113` and `bg-card` `#161618`
- **Text hierarchy:** `ink` (white) → `ink-muted` → `ink-dim` → `ink-faint`
- **Single accent:** Electric blue `#3b82f6` (`accent`), with `accent-glow` `#60a5fa`
- **Lines/borders:** `line` `#27272a` with `line-subtle` and `line-bright`
- **NO gradients** beyond the very subtle radial in hero/contact
- **Sharp corners** (no rounded except buttons that explicitly use it)
- **Mono font** for: labels, project tags, dates, ids, technical accents
- **Sans display** for: headings, body, navigation
- **Grain overlay** is a fixed `<body class="grain">` SVG noise — subtle warmth

## Content Source of Truth
- `lib/data.ts` contains all profile info, experience, projects, skills, education
- Edit data there, not in components
- If you need to add a section, add typed data in `data.ts` first, then build the component

## Positioning Rules
1. Title is **always** "AI/ML Engineer", never "Software Engineer"
2. Public enterprise clients: only BMW and Mercedes
3. Never invent metrics — only use numbers that exist in the user's CV
4. The owner is in Pakistan but targets remote/global roles

## SEO Requirements (do not remove)
- `<title>` and `<meta name="description">` in `app/layout.tsx`
- Open Graph + Twitter Card metadata
- JSON-LD Person schema (already in layout.tsx)
- `sitemap.xml` and `robots.txt` in `public/`
- Canonical URL

## Common Tasks

### Adding a new project
1. Add to `projects` array in `lib/data.ts`
2. Set `category` to `'enterprise' | 'personal' | 'academic'`
3. If it's enterprise but you can't show a link, leave `link` undefined — UI shows "case study coming soon"

### Changing colors
1. Edit `tailwind.config.ts` color tokens
2. Don't add new accent colors — single-accent is intentional

### Adding a blog section
1. Add `Blog` to nav items in `Nav.tsx`
2. Create `components/Blog.tsx` matching existing section patterns
3. Add a Medium RSS fetch or hardcode article cards
4. Add the section to `app/page.tsx`
5. Update `sitemap.xml`

## Don't Do
- Don't switch to Tailwind v4 alpha (we use stable 3.4)
- Don't add `framer-motion` to server components — those that import it use `'use client'`
- Don't introduce new color palettes — palette is locked
- Don't change to a different font family without updating SKILL.md guidance
- Don't add Google Analytics — privacy-respecting analytics only (Plausible or Cloudflare Web Analytics)

## Deployment
- Push to GitHub `main` branch → Netlify auto-builds via `netlify.toml`
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 20 (set in netlify.toml)
