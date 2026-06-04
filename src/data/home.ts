/**
 * Homepage content. Each section maps to one component under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the layout or the SVG illustrations.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "v. 0.1.64 – Live Sync",
  // Rich text rendered via set:html — keep <em>, <br/> etc. inline.
  title:
    'Surtitles, translation <em class="not-italic text-text-3 font-medium">and audio description.</em><br class="hidden sm:inline" /> Live.',
  description:
    "Sténtor offers theatres, artists and live-performance teams a simple way to prepare and share surtitles, translations and audio descriptions — with the same essential tools available to everyone.",
  ctas: [
    { href: "/signup", label: "Start free trial", variant: "primary" as const },
    { href: "#demo", label: "Watch 2-min demo", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Cross-platform desktop", live: true },
    { label: "Audience web client" },
    { label: "Live Sync · EUPL license · Research-driven" },
  ],
  // Mock dashboard preview shown under the hero.
  mock: {
    workspace: { name: "Acme Corp", env: "Production · us-east-1" },
    user: { name: "Maya Chen", email: "maya@acme.co" },
    title: "Overview",
    timeframe: { prefix: "production / ", value: "last 24h" },
    stats: [
      { label: "Requests", value: "4.21M", trend: "▲ 12.4%", trendColor: "green" as const },
      { label: "P95 latency", value: "68", suffix: "ms", trend: "▼ 4.1%", trendColor: "red" as const },
      { label: "Error rate", value: "0.04", suffix: "%", trend: "▲ stable", trendColor: "green" as const },
      { label: "DB connections", value: "214", suffix: "/500", trend: "▲ 6.2%", trendColor: "green" as const },
    ],
    logs: [
      { t: "12:04:21", lvl: "ok", code: "200", m: "POST /v1/checkout · ", s: "42ms" },
      { t: "12:04:20", lvl: "ok", code: "200", m: "GET /v1/users/me · ", s: "11ms" },
      { t: "12:04:18", lvl: "info", code: "fn", m: "invoice.send → resend.email · ", s: "312ms" },
      { t: "12:04:16", lvl: "warn", code: "429", m: "retry GET /v1/exports · ", s: "backoff 800ms" },
      { t: "12:04:13", lvl: "ok", code: "200", m: "POST /v1/webhooks/stripe · ", s: "28ms" },
      { t: "12:04:09", lvl: "ok", code: "201", m: "db.subscriptions insert · ", s: "19ms" },
    ],
  },
};

// ─── Logo cloud ───────────────────────────────────────────────────────────
export const logoCloud = {
  label: "TRUSTED BY TEAMS AT",
  bigNumber: "10,000+",
  // glyph: a Tailwind class string applied to a 5×5 zinc-300 square.
  // Keep glyphs minimal — they are abstract logo placeholders.
  logos: [
    { name: "Northwind", glyph: "rounded-full" },
    { name: "Helio", glyph: "rotate-45" },
    { name: "Constellate", glyph: "" },
    { name: "Vector Labs", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Kettlebrook", glyph: "rounded" },
    { name: "Orbital", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

// ─── Metrics strip ────────────────────────────────────────────────────────
export const metrics = {
  title: "Built for<br/>live performance.",
  description:
    "From script preparation to live cueing, Sténtor keeps every layer of the performance text in one place.",
  items: [
    { value: "Unlimited", suffix: "", label: "Projects, languages and cues" },
    { value: "3", suffix: " layers", label: "Surtitles, translation, audio description" },
    { value: "Live Sync", suffix: "", label: "For screens and audience phones" },
  ],
};

// ─── Bento (feature grid) ─────────────────────────────────────────────────
// Header copy only — the per-card structure is laid out in Bento.astro
// because each card has unique illustrations and demo content.
export const bento = {
  title: "Everything for the text.<br/>Nothing in the way.",
  description:
    "Prepare scripts, translations, surtitles and audio-description notes in one focused workspace, then cue them live for screens and audience phones.",
  // Card titles + descriptions are editable here. Visuals stay inline.
  cards: {
    types: {
      title: "Script-first workflow",
      desc: "Import a script, split it into cues, add translations and keep notes together without losing the structure of the performance text.",
    },
    p95: {
      title: "Audience phones, live in sync",
      desc: "Spectators can connect with their own smartphones and follow surtitles, translations or audio descriptions in sync with the operator's cues.",
    },
    edge: {
      title: "Built for live rooms",
      desc: "A focused workflow for rehearsal rooms, theatres and festivals — from script preparation to live cueing and audience devices.",
    },
    auth: {
      title: "One project, shared knowledge",
      desc: "Keep original text, translations, surtitles, audio-description notes, project metadata and research feedback together.",
    },
    cron: {
      title: "Import, export, circulate",
      desc: "Bring in Word, TXT, SRT, WebVTT, CSV or JSON files, then share scripts for rehearsal, archive, touring and study.",
    },
    migrations: {
      title: "Clear operator view",
      desc: "Move through cues during the show with a clean interface designed for timing, focus and confidence.",
    },
    deploys: {
      title: "Same tools, shared practice",
      desc: "Core live-performance tools stay available across plans. Pricing reflects context, while feedback helps the whole project grow.",
    },
  },
};

// ─── Research exchange ────────────────────────────────────────────────────
export const testimonials = {
  title: "A tool shaped by<br/>real performances.",
  description:
    "Sténtor is developed with the people who use it. We keep the software accessible, and ask in return for feedback, usage notes and audience responses that help the research grow.",
  quotes: [
    {
      text: "Tell us how Sténtor worked in rehearsals, during the show and in the relationship between operator, stage and audience.",
      av: "01",
      name: "Share your experience",
      role: "Research input · creators",
    },
    {
      text: "Use spectators' responses to understand how surtitles, translations and audio descriptions are experienced on personal devices.",
      av: "02",
      name: "Collect audience feedback",
      role: "Research input · audiences",
    },
    {
      text: "Anonymous usage notes and statistics help us design better tools for live performance, without locking features behind higher tiers.",
      av: "03",
      name: "Improve the research",
      role: "Research input · product",
    },
  ],
};

// ─── Pricing preview (compact 3-plan card on home) ────────────────────────
const fullFeatureSet = [
  "Unlimited projects",
  "Unlimited languages",
  "Unlimited cues",
  "Surtitles, audio descriptions and notes",
  "Import from Word, TXT, SRT and JSON",
  "Export-ready scripts",
];

export const pricingPreview = {
  title: "Same features.<br/>Choose what fits your scale.",
  comparisonLink: { href: "/pricing", label: "Compare every plan →" },
  plans: [
    {
      name: "Free",
      tag: "Independent",
      price: "€0",
      cycle: "/year",
      tagline: "For independent artists and very small teams.",
      features: fullFeatureSet,
      cta: { href: "/signup", label: "Start for free", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Pro",
      tag: "Companies",
      tagAccent: true,
      price: "€19",
      cycle: "/year",
      tagline: "For companies, collectives and touring productions.",
      features: fullFeatureSet,
      cta: { href: "/signup", label: "Choose Pro", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Venues",
      tag: "Theatres",
      price: "€99",
      cycle: "/year",
      tagline: "For theatres, festivals and live-performance venues.",
      features: fullFeatureSet,
      cta: { href: "#contact", label: "Choose Venues", variant: "ghost" as const },
      highlighted: false,
    },
  ],
};

// ─── Final CTA at the bottom of the homepage ──────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Same tools · fair pricing",
  title: "Bring live words to every audience.",
  body: "Sténtor keeps surtitles, translations and audio descriptions simple to prepare, cue and share — for independent artists, companies and venues alike.",
  ctas: [
    { href: "/signup", label: "Start for free", variant: "primary" as const },
    { href: "#contact", label: "Contact", variant: "ghost" as const },
  ],
};
