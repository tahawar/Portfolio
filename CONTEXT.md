# Project Context for AI Coding Assistants (Cursor, Claude Code, Copilot, etc.)

> Read this file before making changes to the codebase. It explains who I am, what this project is, what I care about, and the rules I want you to follow.

---

## Who I am

**Name:** Tahawar Ihsan
**Role:** AI/ML Engineer at NetSol Technologies (AI Core Team)
**Location:** Lahore, Punjab, Pakistan
**Stack I work with daily:** Python, FastAPI, LangChain, LangGraph, LiteLLM, MCP, OpenAI, Claude, Llama, Pinecone, MongoDB Atlas Vector Search, AWS (Lambda, ECS, S3, Bedrock, Textract), Docker, RabbitMQ, Celery, n8n, Langfuse, DSPy.

**Public profiles:**
- Portfolio: https://portfolio-tahawar-ihsan.netlify.app
- LinkedIn: https://www.linkedin.com/in/tahawar-ihsan
- GitHub: https://github.com/tahawar
- X / Twitter: https://x.com/tahawarihsan
- Medium: https://medium.com/@tahawarihsan
- Email: tahawarihsan@gmail.com

---

## What this project is

A static portfolio website hosted on Netlify at `portfolio-tahawar-ihsan.netlify.app`.

**Stack:**
- Plain HTML / CSS / vanilla JavaScript (no framework)
- Font Awesome 6.4.0 (loaded via CDN)
- Deployed via Netlify on push to `main`

**File layout:**
```
/
├── index.html              ← main page (single-page site)
├── styles.css              ← all styles
├── script.js               ← theme toggle, nav, scroll behavior
├── robots.txt              ← SEO
├── sitemap.xml             ← SEO
├── site.webmanifest        ← PWA / mobile install
├── Tahawar_ihsan_CV.pdf    ← downloadable CV (latest version)
├── og-image.png            ← social share preview (1200×630)
├── favicon.ico             ← browser tab icon
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── images/                 ← old project images
└── assets/                 ← old assets
```

**Site sections (in order):** Home (hero) → About → Experience → Skills → Projects → Education → Contact → Footer.

---

## Positioning and tone

I want to be perceived as an **AI/ML Engineer** — not a generic Software Engineer. Specifically: someone who ships **production GenAI systems** (agentic workflows, RAG, LLM orchestration) for enterprise clients. Key differentiators worth surfacing:

- Real enterprise client work: **BMW, Mercedes**
- Production agentic AI with **LangGraph + MCP + LiteLLM**
- Real-time voice agents (LiveKit, Vapi, Deepgram, ElevenLabs)
- Document AI with AWS Textract
- Multi-tenant SaaS architecture
- LLM observability (Langfuse, DSPy, Logfire)

**Tone:** confident but not arrogant; specific, not vague; metrics where possible (95% accuracy, 40% time reduction); engineer-credible, not marketing fluff.

**Words to prefer:** "shipped", "designed", "architected", "built", "production", "scalable", "compliant", "auditable".
**Words to avoid:** "passionate", "synergy", "leverage" (as a verb), "guru", "rockstar", "ninja", "world-class".

---

## SEO requirements (don't break these)

The site is optimized for Google + LinkedIn/X social previews. **Do not remove** any of the following from `index.html` `<head>` without asking:

- `<title>` and `<meta name="description">` — keyword-targeted, don't shorten
- Canonical URL `<link rel="canonical">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site`, `twitter:creator`)
- JSON-LD `<script type="application/ld+json">` Person schema
- Favicon and manifest links

If you add a new section or page, also:
- Add a corresponding entry in `sitemap.xml`
- Update the JSON-LD `knowsAbout` array if you add new skills
- Keep semantic HTML: one `<h1>`, then `<h2>` per section, then `<h3>` for items

---

## Content rules

**Single source of truth for facts about my career:**
1. My CV (`Tahawar_ihsan_CV.pdf` in this repo) — most authoritative
2. My LinkedIn profile
3. This portfolio (`index.html`)

If you find any conflict between these three (different dates, different metrics, different bullet phrasing), **flag it instead of guessing**. Common conflict points:
- Codrivity dates (LinkedIn says Nov 2023; CV/portfolio say Jul 2023 — I need to pick one)
- Job title at NetSol (official HR title is "Software Engineer", but I present as "AI/ML Engineer" on portfolio/LinkedIn — that's intentional; don't "correct" it)

**Never invent metrics or claims.** If a number isn't in my CV or in a previous version of the portfolio, don't add it. Better to leave a bullet without a number than to make one up.

**Enterprise clients I can mention publicly:** BMW, Mercedes (these are confirmed and already public in my materials).
**Don't mention:** any other client names, internal product details beyond what's already in `index.html`, specific financial figures, or anything from internal NetSol systems.

---

## Code style for this project

- **Plain HTML, no frameworks.** Don't suggest switching to React/Next/Astro unless I explicitly ask.
- **Vanilla CSS.** No Tailwind, no preprocessors. Keep styles in `styles.css`.
- **Vanilla JS.** No jQuery, no libraries beyond what's already imported.
- **Mobile-first.** Anything you change must work on a 375px-wide viewport (iPhone SE).
- **Accessibility:** keep `aria-label` on icon-only links, use semantic tags, maintain color contrast.
- **External links:** always `target="_blank" rel="noopener"`.
- **Don't break theme toggle.** `script.js` handles light/dark mode via a `data-theme` attribute on `<html>` or `<body>` — preserve that.

---

## What I might ask you to do

Likely requests, and how to handle them:

| Request | What to do |
|---|---|
| "Add a new project to the Projects section" | Match the existing `.project-card` markup pattern. Use `.featured` class for NetSol/Codrivity projects, plain `.project-card` for personal/academic. Include `project-tags` and either a GitHub link or "Enterprise project — case study coming soon" span. |
| "Add a blog/articles section" | Pull from Medium RSS feed via JavaScript, or hand-curate cards linking to specific articles. Section ID `#articles`, place between Projects and Education. Add to nav and sitemap. |
| "Add dark mode" | Already exists — see `.theme-toggle` button and `script.js`. Don't duplicate. |
| "Improve SEO" | Don't add more meta keywords (low value). Focus on: (a) writing real article pages with content, (b) adding internal links, (c) compressing images, (d) improving Core Web Vitals. |
| "Make it faster" | Lazy-load images (`loading="lazy"`), self-host Font Awesome if external CDN is slow, minify HTML/CSS/JS on build. |
| "Add an analytics tag" | Use Plausible or Cloudflare Web Analytics, not Google Analytics (privacy + GDPR). Place script before `</head>`. |
| "Add a contact form" | Use Netlify Forms (free) — add `netlify` attribute to a `<form>` tag. No backend needed. |

---

## What NOT to do without asking

- **Don't** change my role title from "AI/ML Engineer" back to "Software Engineer" anywhere on the portfolio
- **Don't** add my CGPA back to the Education section
- **Don't** add Java, Julia, or LlamaIndex to the Skills section (I don't actively use them)
- **Don't** add my phone number to the public-facing contact section (it's intentionally in JSON-LD only)
- **Don't** invent enterprise client names beyond BMW and Mercedes
- **Don't** rewrite the entire site in a framework
- **Don't** delete the JSON-LD schema block — it's what gets me into Google's Knowledge Graph

---

## Quick reference — current positioning copy

**Headline / Title tag:**
> Tahawar Ihsan — AI/ML Engineer | LLMs, LangGraph, RAG, FastAPI

**Hero subtitle:**
> AI/ML Engineer | LLMs · LangGraph · Agentic AI Systems

**Meta description (used in Google results and social previews):**
> AI/ML Engineer building production GenAI systems with LangGraph, LLMs, RAG, FastAPI, and AWS. 2+ years shipping agentic AI for enterprise clients including BMW and Mercedes.

**About section opener:**
> I'm an AI/ML Engineer with 2+ years of experience building production GenAI systems for enterprise clients including BMW and Mercedes.

Keep these consistent across all surfaces (portfolio, LinkedIn, X, CV). If you change one, flag the others.

---

## When in doubt

Ask. I'd rather you ask one clarifying question than make 3 wrong assumptions. Default behavior: explain what you're about to change before changing it, and call out any tradeoffs.
