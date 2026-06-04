# Lambda — SaaS Template for Astro 6

A modern, fast, production-ready **Astro 6** template for SaaS and developer-tool products. Token-driven dark UI, accessibility-audited, and built on Tailwind CSS v4.

**[Live demo →](https://lambda-saas.netlify.app)**

> **Heads up:** this is a complete, polished marketing site — every page is designed, content is organized into typed data files, and the demo build was audited with Lighthouse (99–100 across all four categories). Drop in your own copy, swap a few colors, and you have a sellable product page.

---

## Features

- **Astro 6** — latest version, fully typed, static by default
- **15 pre-built pages** — Home, Features, Pricing, Docs, Changelog, Blog (listing + post), Customers, About, Contact, Sign in, Sign up, Privacy, Terms, custom 404
- **Two content collections** — `blog` (MDX, with featured posts and category filters) and `changelog` (MDX, with month buckets and filter chips)
- **Tailwind CSS v4** via the first-party Vite plugin — token-driven design system in `src/styles/global.css`
- **Astro Fonts API** — self-hosted Geist + Geist Mono with auto-generated metric-adjusted fallback faces, designed to eliminate font-swap layout shift
- **Alpine.js 3** for the few bits of interactivity that need it: mobile menu, pricing toggle, code tabs, blog/changelog filters, contact form
- **Accessibility-audited** — Lighthouse 100 on the demo build, WCAG AA contrast on every text token, proper landmark structure, ARIA tabs pattern, semantic heading order
- **SEO ready** — meta tags, Open Graph, Twitter Cards, canonical URLs, sitemap, robots.txt, per-page descriptions
- **Reveal-on-scroll animations** — opt-in via `data-animate` attribute, one IntersectionObserver, honors `prefers-reduced-motion`
- **View Transitions** with Astro's `<ClientRouter />` — Alpine re-initializes automatically after each swap
- **Performance-first** — fonts preloaded, optimized fallbacks, no client-side framework, fully static output
- **Zero-config deploy** to Vercel, Netlify, Cloudflare Pages, or any static host

---

## Stack

- [Astro 6.2](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Alpine.js 3](https://alpinejs.dev) — via `@astrojs/alpinejs`
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- TypeScript (strict)

---

## Quick start

```bash
npm install
npm run dev
```

The site runs on `http://localhost:4321`.

### Scripts

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Starts the local dev server                   |
| `npm run build`    | Builds the production site to `./dist/`       |
| `npm run preview`  | Previews the production build locally         |
| `npm run astro`    | Runs any `astro` CLI command (`--help`, etc.) |

---

## Project structure

```
├── public/                       Static assets (favicons, og-default.png, robots.txt)
├── src/
│   ├── assets/
│   │   ├── icons/                36 SVG icons (imported as Astro components)
│   │   └── illustrations/        17 SVG illustrations (bento, customers, regions, etc.)
│   ├── components/
│   │   ├── Btn.astro             Primary button primitive
│   │   ├── Eyebrow.astro         Section eyebrow tag
│   │   ├── FinalCta.astro        Reusable bottom-of-page CTA
│   │   ├── Footer.astro          Global footer
│   │   ├── Logo.astro            Wordmark
│   │   ├── Nav.astro             Sticky nav with mobile drawer
│   │   └── sections/
│   │       ├── home/             Home-page sections (Hero, Bento, Metrics, etc.)
│   │       └── features/         Features-page sections (Hero, Showcase, CodeTabs, SecondaryBento)
│   │           └── illustrations/    Self-contained illustrations for the showcase
│   ├── content/
│   │   ├── blog/                 5 MDX blog posts
│   │   └── changelog/            5 MDX changelog entries
│   ├── data/                     All editable content (13 typed files — see below)
│   ├── layouts/
│   │   └── Layout.astro          Wraps every page (head, nav, main, footer, scroll observer)
│   ├── styles/
│   │   └── global.css            Tailwind import + design tokens + utilities
│   └── content.config.ts         Content collection schemas (Zod)
├── astro.config.mjs              Astro config + fonts + sitemap
└── tsconfig.json
```

---

## Routes

| Path                 | Source                              | Purpose                          |
| -------------------- | ----------------------------------- | -------------------------------- |
| `/`                  | `src/pages/index.astro`             | Home — hero, logo cloud, bento, metrics, pricing preview, testimonials |
| `/features`          | `src/pages/features.astro`          | Features deep-dive                |
| `/pricing`           | `src/pages/pricing.astro`           | Pricing tiers + compare table + FAQ |
| `/docs`              | `src/pages/docs.astro`              | Docs page with sidebar nav + code tabs + callouts |
| `/changelog`         | `src/pages/changelog.astro`         | Changelog with month buckets + filter chips |
| `/customers`         | `src/pages/customers.astro`         | Customer logos + case studies     |
| `/about`             | `src/pages/about.astro`             | Team, mission, timeline           |
| `/blog`              | `src/pages/blog.astro`              | Blog listing with featured + category filter |
| `/blog/[slug]`       | `src/pages/blog/[...slug].astro`    | Post detail with related posts    |
| `/contact`           | `src/pages/contact.astro`           | Contact form + departments + FAQ  |
| `/signin`            | `src/pages/signin.astro`            | Sign in form (`noindex`)          |
| `/signup`            | `src/pages/signup.astro`            | Sign up form (`noindex`)          |
| `/privacy`           | `src/pages/privacy.astro`           | Privacy policy (boilerplate)      |
| `/terms`             | `src/pages/terms.astro`             | Terms of service (boilerplate)    |
| `/404`               | `src/pages/404.astro`               | Custom not-found page (`noindex`) |

---

## Editing content

All editable copy lives in `src/data/`. Most customizations — copy, links, prices, team members, FAQ entries, navigation — happen here without opening a component.

| File | What it controls |
|---|---|
| `src/data/site.ts` | Site name, title, description, social links, copyright, footer status |
| `src/data/home.ts` | Home hero, logo cloud, bento, metrics, pricing preview, testimonials, finalCta |
| `src/data/features.ts` | Features hero, showcase rows, code tabs, secondary bento |
| `src/data/pricing.ts` | Pricing hero, plans, compare table, FAQ |
| `src/data/docs.ts` | Sidebar groups, page content, table of contents |
| `src/data/changelog.ts` | Hero, filter chips, year jump nav, side stats, version metadata |
| `src/data/blog.ts` | Blog hero, category styles, finalCta, related-posts heading |
| `src/data/customers.ts` | Customer logos, case studies, testimonial quotes |
| `src/data/about.ts` | Page title, intro, mission stats, team members, values, timeline |
| `src/data/contact.ts` | Contact hero, form fields, departments, FAQ items, sidebar info |
| `src/data/signin.ts` | Sign-in form copy + side panel mockup |
| `src/data/signup.ts` | Sign-up form copy + side panel mockup |
| `src/data/legal.ts` | Privacy + Terms section content (raw HTML used inside `.legal-prose`) |

### Blog posts (MDX)

Add a new file at `src/content/blog/my-post.mdx`:

```mdx
---
title: "My post title"
description: "Short SEO description shown on listings + meta description."
date: 2026-04-22
author:
  name: "Alex Rivera"
  initials: "AR"
  role: "Engineering"
category: "engineering"      # engineering | product | company | tutorial
tags: ["astro", "performance"]
readingTime: "5 min read"
cover: "region-map"          # one of: region-map, policy-hexagon, p95-ring,
                             # traffic-line-chart, iso-postgres, iso-types,
                             # iso-pulse, iso-deploy
featured: false              # set true to appear in the featured slot on /blog
---

Your MDX content here. Imports, JSX, and full Astro features available.
```

### Changelog entries (MDX)

Add a new file at `src/content/changelog/v2-5-0.mdx`:

```mdx
---
title: "Edge Functions, generally available."
description: "What shipped in this version."
date: 2026-05-01
version: "2.5.0"
type: "major"                # major | minor | patch
illustration: "region-map"   # optional — region-map | policy-hexagon
authors: ["AR", "MC"]        # initials displayed in stacked avatars
---

Your changelog body here. The page groups entries by month automatically.
```

---

## Design tokens

The Lambda design system is a token-driven dark surface scale defined in `src/styles/global.css` under `@theme`:

```css
@theme {
  /* Surface scale — darkest to lightest */
  --color-bg:        #0a0a0a;   /* page background */
  --color-deep:      #0c0c0c;   /* viewport / visualization backdrop */
  --color-sunken:    #0e0e0e;   /* inset stat panels */
  --color-surface:   #111111;   /* cards */
  --color-surface-2: #141414;   /* input areas */
  --color-elevated:  #171717;   /* raised cards */
  --color-raised:    #1f1f1f;   /* avatar gradient start */
  --color-chrome:    #2a2a2a;   /* decorative window dots */

  /* Text scale — every token meets WCAG AA on every surface */
  --color-text:   #fafafa;   /* primary    — ~19:1 on bg */
  --color-text-2: #a1a1aa;   /* secondary  — ~8:1  on bg */
  --color-text-3: #8b8b95;   /* tertiary   — ~5.7:1 on bg */
  --color-text-4: #828289;   /* quaternary — ~5.1:1 on bg */
}
```

Each token becomes a Tailwind utility automatically: `bg-deep`, `text-text-3`, `from-raised`, `to-sunken`, etc. Update the hex values to retheme — every utility across the site picks up the new colors.

The accent color (red) uses Tailwind's built-in `red-400` / `red-500` / `red-700` palette directly. To swap the accent, find/replace `text-red-500` and `bg-red-500` in `src/`.

---

## SEO

Every page passes optional props to `<Layout>`:

```astro
<Layout
  title="Pricing — Lambda"
  description="Transparent pricing. Pay for what you ship."
  active="pricing"
  image="/og-pricing.png"        // optional, defaults to /og-default.png
  ogType="website"               // "website" or "article" (auto-set on blog posts)
  noindex={false}                // true for signin/signup/404
  publishedTime={...}            // ISO date string for blog posts
  author={...}                   // author name for blog posts
>
  ...
</Layout>
```

Layout handles title, meta description, canonical URL, Open Graph, Twitter Cards, sitemap link, theme-color, and favicons. Blog posts get `ogType="article"` automatically.

---

## Sitemap & robots.txt

A sitemap is generated at build time via [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/). After `npm run build` you'll find:

- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`

Auth and utility pages (`/signin`, `/signup`, `/404`) are excluded from both the sitemap and indexed by setting `noindex` on their Layout call.

`public/robots.txt` references the sitemap so search engines discover it automatically.

### ⚠️ Before deploying to your real domain

You **must** update the site URL in **three places** — otherwise canonical URLs, OG tags, and the sitemap will still point to the placeholder domain:

1. **`astro.config.mjs`** — the `site` option:
   ```js
   export default defineConfig({
     site: 'https://your-product.com',
     // ...
   });
   ```
2. **`public/robots.txt`** — the `Sitemap:` line:
   ```
   Sitemap: https://your-product.com/sitemap-index.xml
   ```
3. **`src/data/site.ts`** — the `url` field (used by JSON-LD and as a fallback).

After changing these, re-run `npm run build` to regenerate the sitemap. Verify the canonical URLs in `dist/index.html` match before pushing live.

---

## Replacing the OG image

`public/og-default.png` is the social-share image used by every page (1200×630 px). Replace it with your own branded image — same filename, same dimensions. Per-page custom OG images can be passed as `image="/og-pricing.png"` to `<Layout>`.

---

## Contact form

`src/pages/contact.astro` ships as a plain HTML form with no `action`. The submit button uses Alpine to flip a `sent` flag and show a success state — no backend round-trip. Wire it up to whichever service you prefer:

- [Formspree](https://formspree.io) — set `action="https://formspree.io/f/YOUR_ID"` on the `<form>`
- [Web3Forms](https://web3forms.com) — free, no account required
- [Resend](https://resend.com) + a server endpoint (Astro supports SSR)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — add `data-netlify="true"` and you're done

---

## Performance

The template is optimized for Lighthouse scores in the high 90s out of the box (verified with `lambda-audit`):

- **Fonts** are self-hosted via Astro's [native Fonts API](https://docs.astro.build/en/guides/fonts/). Astro generates a metric-adjusted fallback face (`size-adjust`, `ascent-override`, `descent-override`) so the swap from system font to Geist is designed to be visually seamless and avoid layout shift.
- **WOFF2 preloaded** — `<Font preload />` emits a `<link rel="preload" as="font" crossorigin>` for the most critical weight.
- **No render-blocking JS** — Alpine.js loads as a small inline init plus the runtime. No client-side framework hydration.
- **Static output** — fully prerendered HTML for every route, including blog posts and changelog entries.
- **View Transitions** make page navigation feel instant without a SPA.

### Swapping fonts

The fonts are configured in `astro.config.mjs` under the `fonts:` array. To change `Geist` to (say) `Inter`, replace the family name + cssVariable in both entries, and update the references in `src/styles/global.css`:

```css
--font-sans: var(--font-inter);
--font-mono: var(--font-jetbrains-mono);
```

Astro will automatically generate metric-adjusted fallbacks for the new families on the next build.

---

## Customization tips

- **Colors, typography, spacing** — Tailwind v4 uses CSS-first configuration. Add or edit `@theme` tokens in `src/styles/global.css`.
- **Reveal-on-scroll animations** — already wired globally. Opt elements in with `data-animate` (default: fade up), `data-animate="left"`, `data-animate="right"`, or `data-animate="fade"`. Add inline `style="transition-delay: 100ms"` to stagger lists.
- **View transitions** — already enabled globally via `<ClientRouter />`. Add `transition:name` to specific elements for named animations.
- **Mobile menu** — the floating-card drawer in `src/components/Nav.astro` uses Alpine + locks scroll on `html`/`body`. Restyling: change the `<div>` classes; the open/close logic uses `x-data="{ open: false }"`.

---

## Legal pages

`src/pages/privacy.astro` and `src/pages/terms.astro` ship with **placeholder copy** plus a standard section outline (data collection, IP, liability, contact, etc.). They're styled via the `.legal-prose` class in `src/styles/global.css` and pull section content from `src/data/legal.ts`.

> ⚠️ **The placeholder text is not legal advice.** Replace every section with copy that reflects your actual practices and consult a lawyer in your jurisdiction before publishing.

The `lastUpdated` date sits at the top of each legal data file — keep it current.

---

## Browser support

| Browser | Support |
|---|---|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |

Evergreen browsers (last 2 versions). Astro 6's build target is modern ESM; legacy browsers are not supported.

---

## Deployment

Because the output is fully static, deploy to anywhere that serves HTML:

```bash
npm run build
# dist/ is ready to upload
```

Zero-config adapters exist for every major host. Docs: <https://docs.astro.build/en/guides/deploy/>.

---

## License

This template is sold under a commercial license through Astro Themes. You may use it on unlimited personal and client projects. Redistribution of the source code is not permitted.

---

## Support

Questions or issues? Reach out at info@lambdastudio.io.

Built by [Lambda Studio](https://lambdastudio.io).

---

## Credits

- Placeholder copy and product narratives are fictional.
- Icons are sourced from [Lucide](https://lucide.dev) and styled inline.
- Illustrations are SVG placeholders authored for this template.

Built on Astro 6.
