/**
 * Homepage content. Each section maps to one component under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the layout or the SVG illustrations.
 */

export const hero = {
  eyebrow: "Sténtor ecosystem",
  title:
    'Surtitles, translation <em class="not-italic text-text-3 font-medium">and accessibility.</em><br class="hidden sm:inline" /> Live.',
  description:
    "Sténtor is a live-performance text environment for preparing scripts, operating surtitles, managing translations, audio description and audience access during rehearsals and performances.",
  ctas: [
    { href: "/download", label: "Download Sténtor", variant: "primary" as const },
    { href: "/account", label: "Account", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Desktop app for macOS, Windows and Linux", live: true },
    { label: "Account area" },
    { label: "Surtitles · translation · audio description · viewers on phones" },
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

export const logoCloud = {
  label: "ONE LIVE-PERFORMANCE TEXT ENVIRONMENT",
  bigNumber: "3 OS",
  logos: [
    { name: "Sténtor", glyph: "rounded-full" },
    { name: "Account", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Audience web", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Built for<br/>live performance.",
  description:
    "Sténtor keeps the performance text organized from preparation to live cueing, with a focused workflow for screens, audience devices, timelines and accessibility materials.",
  items: [
    { value: "Desktop", suffix: "", label: "For macOS, Windows and Linux" },
    { value: "Account", suffix: "", label: "Downloads and access code in one place" },
    { value: "Live Sync", suffix: "", label: "For screens and audience phones" },
  ],
};

export const bento = {
  title: "One Sténtor.<br/>One live workflow.",
  description:
    "Prepare scripts, structure translations, operate surtitles, control audience access and keep accessibility materials together in a dedicated live-performance environment.",
  cards: {
    types: {
      title: "Start from the script",
      desc: "Prepare source text, surtitles, translations and metadata in a structured workspace designed for rehearsal and performance.",
    },
    p95: {
      title: "Sténtor: live control room",
      desc: "A focused app for cueing, timeline, screens, audience devices and audio-description workflows across desktop platforms.",
    },
    edge: {
      title: "Audience phones, live in sync",
      desc: "Spectators can connect with their own smartphones and follow surtitles, translations or audio descriptions in sync with the operator's cues.",
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
      title: "Account and access code",
      desc: "Downloads and access details stay in the Account area, so every enabled user can retrieve the right build and access code safely.",
    },
  },
};

export const testimonials = {
  title: "A tool shaped by<br/>real performances.",
  description:
    "Sténtor is developed with the people who use it: artists, operators, translators, theatres and audiences. Feedback from rehearsal rooms and performances guides each design decision.",
  quotes: [
    {
      text: "Use Sténtor to start preparing materials and understand the workflow before bringing them into the performance space.",
      av: "01",
      name: "Prepare the work",
      role: "Scripts · surtitles · translations",
    },
    {
      text: "Use the live operator view when the show needs timing, timeline, screens, audience devices and a focused performance setup.",
      av: "02",
      name: "Go live",
      role: "Operator view · access code",
    },
    {
      text: "Field notes from rehearsals, audiences and operators help us design better tools for live performance.",
      av: "03",
      name: "Improve the research",
      role: "Feedback · product",
    },
  ],
};

const downloadFeatures = [
  "Desktop app for macOS, Windows and Linux",
  "Script preparation, surtitles and translations",
  "Timeline, cueing and live operator view",
  "Screens and audience-phone workflows",
  "Audio description and accessibility tools",
];

const accountFeatures = [
  "Account area for enabled users",
  "Access code and activation details",
  "Available builds by platform",
  "Support during testing and rehearsals",
  "Deployment guidance for real venues",
];

const institutionFeatures = [
  "For theatres, festivals and schools",
  "Shared workflows for rehearsal rooms",
  "Support during testing and performances",
  "Deployment guidance for real venues",
  "Research feedback for future improvements",
];

export const pricingPreview = {
  title: "Download Sténtor<br/>and manage access.",
  comparisonLink: { href: "/download", label: "Open downloads →" },
  plans: [
    {
      name: "Sténtor",
      tag: "Download",
      price: "App",
      cycle: "/desktop",
      tagline: "For preparing scripts, translations, surtitles and accessibility materials.",
      features: downloadFeatures,
      cta: { href: "/download", label: "Download Sténtor", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Account",
      tag: "Access",
      tagAccent: true,
      price: "Code",
      cycle: "/enabled users",
      tagline: "For retrieving your Sténtor access code, activation details and available builds.",
      features: accountFeatures,
      cta: { href: "/account", label: "Open Account", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Institutions",
      tag: "Venues",
      price: "Support",
      cycle: "/teams",
      tagline: "For theatres, festivals, schools and organizations preparing a real deployment.",
      features: institutionFeatures,
      cta: { href: "/contact", label: "Talk to us", variant: "ghost" as const },
      highlighted: false,
    },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Sténtor · Account",
  title: "Prepare the text. Go live with confidence.",
  body: "Download Sténtor to begin on macOS, Windows or Linux. Use the Account area when you need your access code and enabled builds.",
  ctas: [
    { href: "/download", label: "Download Sténtor", variant: "primary" as const },
    { href: "/account", label: "Open Account", variant: "ghost" as const },
  ],
};
