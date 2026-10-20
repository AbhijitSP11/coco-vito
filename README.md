# Coco Vito

A café, gelato bar and all-day-kitchen website. Static HTML/CSS/JS — no build step.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy to Vercel

This is a zero-config static site. `vercel.json` sets clean URLs, asset caching
and basic security headers.

**Option A — CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

**Option B — Git / Dashboard**

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In the Vercel dashboard, **Add New → Project** and import the repo.
3. Framework preset: **Other**. Build command: *(none)*. Output directory: `./`.
4. Deploy.

No environment variables are required. The contact form is a front-end stub —
wire it to your mail provider (e.g. a Vercel Function or a service like Formspree)
when you're ready.

## Animations

Scroll-reveal animations use [AOS](https://michalsnik.github.io/aos/) (loaded from a
CDN). Custom pieces — the intro film, scroll-scrubbed videos and the hero — are
hand-built. All animation honours `prefers-reduced-motion`.
