# Portfolio SEO + Content Update

This package contains a rebuilt `index.html` and the missing SEO files for your portfolio.

## Files

- `index.html` — replaces your current `index.html`
- `robots.txt` — tells Google what it can crawl (put at site root)
- `sitemap.xml` — helps Google index your sections (put at site root)
- `site.webmanifest` — for mobile install / PWA support (put at site root)

---

## What changed and why

### 1. SEO head (the biggest win)

Your old `<head>` had 4 tags. The new one has full coverage:

- **Title rewritten** for keyword stacking: `"Tahawar Ihsan — AI/ML Engineer | LLMs, LangGraph, RAG, FastAPI"`
- **Meta description** rewritten with target keywords and a hook
- **Meta keywords** added (low impact but doesn't hurt)
- **Canonical URL** — prevents duplicate-content penalties
- **Open Graph tags** — controls how your link looks when shared on LinkedIn, Facebook, Slack, WhatsApp
- **Twitter Card tags** — controls how your link looks when shared on X
- **JSON-LD Person schema** — this is the big one. Google uses this to understand "this is a person, here are their skills, employer, location, social profiles." It's what makes you appear in Google's Knowledge Graph and in "People also search for" results.

### 2. Content fixes

- **Hero subtitle** changed from `"Software Engineer | AI/ML Specialist"` → `"AI/ML Engineer | LLMs · LangGraph · Agentic AI Systems"`
- **Role title at NetSol** changed from `"Software Engineer (AI Core Team)"` → `"AI/ML Engineer (AI Core Team)"`
- **About section** rewritten with metrics and enterprise client name-drops (BMW, Mercedes)
- **Stats** changed: `"10+ Technologies"` was weak → replaced with `"5+ Enterprise Clients"`
- **Removed unverifiable RFP "60%" metric** that wasn't on your CV
- **Added missing NetSol bullets** from your CV: multi-tenant Check architecture, real-time voice agent (LiveKit/Vapi/Deepgram/ElevenLabs), AWS Textract document extraction, bank statement analysis
- **Skills section restructured** to match your CV categories — removed Java, Julia, LlamaIndex (which weren't on your CV); added LiteLLM, MCP, RAG, Prompt Engineering, Anthropic Claude, Llama, OpenAI, AWS Bedrock, AWS Textract, Logfire, Locust
- **Added 2 new featured projects:** "Real-Time Voice Agent (POC)" and "Document Extraction with AWS Textract" — these are your strongest recent work
- **CGPA 3.02 removed** — 2+ years into your career, the GPA hurts more than helps
- **Added a "Download CV" button** in both hero and contact sections
- **Added X / Twitter link** which was missing
- **Phone removed from public display** (still in JSON-LD for Google) — protects from spam while keeping it discoverable to recruiters who use search

---

## Deploy steps

### Step 1 — Replace files in your repo

```bash
# In your Portfolio repo
cp /path/to/new/index.html .
cp /path/to/new/robots.txt .
cp /path/to/new/sitemap.xml .
cp /path/to/new/site.webmanifest .
git add .
git commit -m "SEO: add OG/Twitter tags, JSON-LD schema, sitemap, robots.txt; update content"
git push
```

Netlify will auto-deploy.

### Step 2 — Make these images (10 minutes in Canva)

Place all of these at the **root of the repo** (next to `index.html`):

| File | Size | What it is |
|---|---|---|
| `og-image.png` | 1200×630 | Social share preview — your name, title, headshot, dark background |
| `favicon.ico` | 32×32 | Browser tab icon |
| `favicon-16x16.png` | 16×16 | Same |
| `favicon-32x32.png` | 32×32 | Same |
| `apple-touch-icon.png` | 180×180 | iPhone bookmark icon |
| `android-chrome-192x192.png` | 192×192 | Android install icon |
| `android-chrome-512x512.png` | 512×512 | Android install icon (large) |

**Easiest way:** Go to https://realfavicongenerator.net — upload one square logo/photo, it generates all 6 favicon files in one zip. For the OG image, use Canva's "Facebook Cover" template (1200×630), put your name, "AI/ML Engineer", and the key tech logos.

### Step 3 — Submit to Google Search Console (5 minutes)

1. Go to https://search.google.com/search-console
2. Add property: `https://portfolio-tahawar-ihsan.netlify.app`
3. Verify ownership — easiest is the HTML meta tag method (paste the tag they give you into `<head>`)
4. Once verified, go to "Sitemaps" in the left menu and submit: `sitemap.xml`
5. Use "URL Inspection" → paste your homepage URL → click "Request Indexing"

This makes Google start crawling you within hours instead of weeks.

### Step 4 — Submit to Bing too

https://www.bing.com/webmasters — same process. Bing powers DuckDuckGo and Yahoo, so this covers the other ~10% of searches.

### Step 5 — Test your social previews

- **LinkedIn:** https://www.linkedin.com/post-inspector/ — paste your URL, see the OG preview
- **Twitter / X:** https://cards-dev.twitter.com/validator — same
- **Facebook:** https://developers.facebook.com/tools/debug/ — same. Also click "Scrape Again" after deploying to clear their cache.

### Step 6 — Run a Lighthouse audit

In Chrome DevTools → Lighthouse tab → run "SEO" + "Performance" + "Accessibility" + "Best Practices" audits. Aim for 90+ across the board. The new HTML should already score 95+ on SEO.

---

## After deployment: longer-term SEO

These don't fit in the file but matter for ranking over the next few months:

1. **Buy a custom domain.** `tahawarihsan.dev` or `.com` costs ~$10/year and ranks far better than `*.netlify.app`. Set it up in Netlify → Domain settings.
2. **Write 2-3 Medium articles** linked from the portfolio. Topics that match your work and have search volume: "Building Production Agents with LangGraph and MCP", "RAG with MongoDB Atlas Vector Search vs Pinecone", "LiteLLM in Production: Model Routing and Cost Control". Each article = more backlinks pointing to your portfolio.
3. **Get backlinks.** Add your portfolio URL to: GitHub profile bio, LinkedIn Contact info, Medium bio, X bio, any forum signatures, your CV. Every backlink helps your domain authority.
4. **Update content quarterly.** Google rewards sites that update. Add new projects as you ship them.

---

## Quick reference: what your search ranking depends on

1. **Title tag** — done ✅
2. **Meta description** — done ✅
3. **H1 / H2 structure** — done ✅
4. **Keyword-rich content** — done ✅
5. **JSON-LD schema** — done ✅
6. **Sitemap submitted to Google** — your action ⏳
7. **Backlinks from LinkedIn, GitHub, Medium, X** — your action ⏳
8. **Custom domain** — your action ⏳
9. **Fresh content over time** — your action ⏳
10. **Page speed** — should be fine, this is a static site

Items 1–5 are now done in code. Items 6–9 are next-steps you control.
