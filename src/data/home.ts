/**
 * Homepage content. Each section maps to one component under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the layout or the SVG illustrations.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "v. 0.1.64 – Live Sync",
  title:
    'Surtitles, translation <em class="not-italic text-text-3 font-medium">and audio description.</em><br class="hidden sm:inline" /> Live.',
  description:
    "Sténtor offers theatres, artists and live-performance teams a simple way to prepare and share surtitles, translations and audio descriptions — with the same essential tools available to everyone.",
  ctas: [
    { href: "/signup", label: "Download Sténtor", variant: "primary" as const },
    { href: "/docs", label: "Read the workflow", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Cross-platform desktop", live: true },
    { label: "Audience web client" },
    { label: "Live Sync · EUPL license · Research-driven" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Live rehearsal · local network" },
    user: { name: "Operator", email: "18 audience phones synced" },
    title: "Operator view",
    timeframe: { prefix: "project / ", value: "Macbett" },
    stats: [
      { label: "Current cue", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Audience phones", value: "18", trend: "following", trendColor: "green" as const },
      { label: "Screens", value: "2", trend: "synced", trendColor: "green" as const },
      { label: "Languages", value: "IT · EN", trend: "ready", trendColor: "green" as const },
    ],
    currentCue: {
      label: "Current cue",
      text: "O my country, poor country!",
      meta: "English surtitles · screen 1",
    },
    nextCue: {
      label: "Next cue",
      text: "What hands are here?",
      meta: "Italian source · operator preview",
    },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 sent to screens · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 audience phones · ", s: "synced" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "audio description note · ", s: "ready" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "feedback channel · ", s: "open" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "cue 025 preview · ", s: "standby" },
    ],
  },
};

// ─── Logo cloud ───────────────────────────────────────────────────────────
export const logoCloud = {
  label: "ONE TEXT, MANY WAYS TO RECEIVE IT",
  bigNumber: "10,000+",
  logos: [
    { name: "Surtitles", glyph: "rounded-full" },
    { name: "Translation", glyph: "rotate-45" },
    { name: "Audio description", glyph: "" },
    { name: "Screens", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Audience phones", glyph: "rounded" },
    { name: "Feedback", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
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
export const bento = {
  title: "Everything for the text.<br/>Nothing in the way.",
  description:
    "Prepare scripts, translations, surtitles and audio-description notes in one focused workspace, then cue them live for screens and audience phones.",
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

// ─── Support preview (compact 3-plan card on home) ─────────────────────────
const fullFeatureSet = [
  "Same core features for everyone",
  "Unlimited projects, languages and cues",
  "Surtitles, translations and audio-description notes",
  "Import from Word, TXT, SRT, WebVTT, CSV and JSON",
  "Export-ready scripts",
  "Feedback and research exchange welcome",
];

export const pricingPreview = {
  title: "Same features.<br/>Support what fits your scale.",
  comparisonLink: { href: "/pricing", label: "See support model →" },
  plans: [
    {
      name: "Free",
      tag: "Independent",
      price: "€0",
      cycle: "/year",
      tagline: "For independent artists, students and very small teams who need access first.",
      features: fullFeatureSet,
      cta: { href: "/signup", label: "Download for free", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Pro",
      tag: "Suggested",
      tagAccent: true,
      price: "€19",
      cycle: "/year · support",
      tagline: "For companies, collectives and touring productions that can contribute a little more.",
      features: fullFeatureSet,
      cta: { href: "/signup", label: "Download and support", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Venues",
      tag: "Theatres",
      price: "€99",
      cycle: "/year · support",
      tagline: "For theatres, festivals, institutions and live-performance venues.",
      features: fullFeatureSet,
      cta: { href: "/contact", label: "Support as Venue", variant: "ghost" as const },
      highlighted: false,
    },
  ],
};

// ─── Final CTA at the bottom of the homepage ──────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Same tools · shared responsibility",
  title: "Bring live words to every audience.",
  body: "Sténtor keeps surtitles, translations and audio descriptions simple to prepare, cue and share. Download it, tell us how you plan to use it, and share feedback when the tool helps you in rehearsal or performance.",
  ctas: [
    { href: "/signup", label: "Download Sténtor", variant: "primary" as const },
    { href: "/contact", label: "Share feedback", variant: "ghost" as const },
  ],
};
