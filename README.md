# Sténtor site

Public marketing site for **Sténtor**: surtitles, translation and audio description for live performance.

Live site: https://www.stentor.live

## Purpose

The site presents Sténtor to artists, theatres, festivals and live-performance teams. The focus is not to frame the product only as an accessibility tool, but as a practical live-text system for:

- surtitles;
- translation;
- audio description;
- audience phones;
- theatre and festival screens;
- rehearsal, touring and research workflows.

## Stack

- Astro 6
- Tailwind CSS v4
- Alpine.js
- MDX
- TypeScript
- Netlify hosting
- Porkbun domain/DNS

## Local development

```bash
npm install
npm run dev
```

The local site runs at:

```bash
http://localhost:4321
```

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro` | Runs Astro CLI commands |

## Main content files

Most public copy lives in `src/data/`:

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Global brand, navigation, footer and SEO defaults |
| `src/data/home.ts` | Homepage hero, sections, pricing/support preview and final CTA |
| `src/data/features.ts` | Feature-page copy |
| `src/data/docs.ts` | Workflow page copy |
| `src/data/customers.ts` | Theatre/festival use-case page copy |
| `src/data/about.ts` | About page copy |
| `src/data/contact.ts` | Contact page copy |
| `src/data/legal.ts` | Privacy and terms copy |

## Public routes

Current site structure:

| Path | Purpose |
| --- | --- |
| `/` | Homepage |
| `/features` | Product features |
| `/docs` | Workflow |
| `/for-theatres` | Theatres, festivals and venues |
| `/about` | Project background |
| `/contact` | Contact and access request |
| `/blog` | Notes |
| `/changelog` | Updates |
| `/privacy` | Privacy policy |
| `/terms` | Terms |

## Brand notes

- Product name: **Sténtor**.
- Historical reference: **Στέντωρ**, the mythological figure known for his powerful voice.
- English tagline: **Surtitles, translation and audio description for live performance.**
- Preferred positioning: live-performance text infrastructure, not only accessibility.

## Deployment

The site is deployed on Netlify from the `main` branch of this repository.

The canonical production URL is:

```txt
https://www.stentor.live
```

The Astro config, robots file and site data should all continue to use this production URL.
