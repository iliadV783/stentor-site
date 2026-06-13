/**
 * Homepage content. Each section maps to one component under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the layout or the SVG illustrations.
 */

export const hero = {
  eyebrow: "Stentor ecosystem - Lite and Pro",
  title:
    'Surtitles, translation <em class="not-italic text-text-3 font-medium">and accessibility.</em><br class="hidden sm:inline" /> Live.',
  description:
    "Stentor is an ecosystem for live-performance text: a free cross-platform Lite app to start working on scripts, and a native macOS Pro app for professional live operation.",
  ctas: [
    { href: "/download", label: "Download Stentor", variant: "primary" as const },
    { href: "/request-pro", label: "Join the Pro beta", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Lite: macOS, Windows and Linux", live: true },
    { label: "Pro: native macOS for live production" },
    { label: "Surtitles · translation · audio description · audience devices" },
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
  label: "ONE PLATFORM, TWO DESKTOP APPS",
  bigNumber: "3 OS",
  logos: [
    { name: "Stentor Lite", glyph: "rounded-full" },
    { name: "Stentor Pro", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Audience web", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Built for<br/>live performance.",
  description:
    "Stentor keeps the performance text organized from preparation to live cueing, while separating a free cross-platform entry point from a professional native macOS control room.",
  items: [
    { value: "Lite", suffix: "", label: "Free Tauri app for macOS, Windows and Linux" },
    { value: "Pro", suffix: "", label: "Native macOS app for professional live production" },
    { value: "Live Sync", suffix: "", label: "For screens and audience phones" },
  ],
};

export const bento = {
  title: "One Stentor.<br/>Two ways to work.",
  description:
    "Start with the lightweight cross-platform app, then move to the native professional environment when rehearsals, screens, timeline, audience access and audio description need a dedicated live workflow.",
  cards: {
    types: {
      title: "Stentor Lite: start anywhere",
      desc: "A free Tauri app for macOS, Windows and Linux, designed to make script preparation, surtitles and translations accessible without a license barrier.",
    },
    p95: {
      title: "Stentor Pro: live control room",
      desc: "A native macOS app for rehearsals and performances, with cueing, timeline, screens, audience devices and audio-description workflows.",
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
      title: "Private beta for Pro",
      desc: "During testing, Pro access is controlled so theatres and companies can receive support, licenses and activation instructions safely.",
    },
  },
};

export const testimonials = {
  title: "A tool shaped by<br/>real performances.",
  description:
    "Stentor is developed with the people who use it: artists, operators, translators, theatres and audiences. The Lite app keeps access open; Pro grows through beta testing in real rooms.",
  quotes: [
    {
      text: "Use Lite to start preparing materials and understand the workflow before bringing Stentor into a production environment.",
      av: "01",
      name: "Start with Lite",
      role: "Free app · macOS, Windows, Linux",
    },
    {
      text: "Use Pro when the show needs a focused operator view, timeline, screens, audience devices and a professional live setup.",
      av: "02",
      name: "Move to Pro",
      role: "Native macOS · beta access",
    },
    {
      text: "Field notes from rehearsals, audiences and operators help us design better tools for live performance.",
      av: "03",
      name: "Improve the research",
      role: "Feedback · product",
    },
  ],
};

const liteFeatures = [
  "Free cross-platform desktop app",
  "Built with Tauri",
  "For macOS, Windows and Linux",
  "Script preparation, surtitles and translations",
  "Download without a Pro license",
];

const proFeatures = [
  "Native macOS app built with SwiftUI",
  "Timeline, cueing and live operator view",
  "Screens and audience-phone workflows",
  "Audio description and accessibility tools",
  "Private beta license and activation",
];

const institutionFeatures = [
  "For theatres, festivals and schools",
  "Trial licenses and multi-seat activation",
  "Support during testing and rehearsals",
  "Deployment guidance for real venues",
  "Future purchase flow prepared for account area",
];

export const pricingPreview = {
  title: "Choose the right<br/>Stentor path.",
  comparisonLink: { href: "/download", label: "Compare Lite and Pro →" },
  plans: [
    {
      name: "Stentor Lite",
      tag: "Free",
      price: "Lite",
      cycle: "/cross-platform",
      tagline: "For starting, preparing and experimenting without a license barrier.",
      features: liteFeatures,
      cta: { href: "/download", label: "Download Lite", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Stentor Pro",
      tag: "Beta",
      tagAccent: true,
      price: "Pro",
      cycle: "/macOS",
      tagline: "For professional live production, currently available in controlled beta.",
      features: proFeatures,
      cta: { href: "/request-pro", label: "Request Pro access", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Institutions",
      tag: "Teams",
      price: "Teams",
      cycle: "/venues",
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
  eyebrow: "Stentor Lite · Stentor Pro",
  title: "Start freely. Go live professionally.",
  body: "Download Stentor Lite to begin on macOS, Windows or Linux. Request Stentor Pro access when you need the native macOS control room for rehearsal and performance.",
  ctas: [
    { href: "/download", label: "Download Stentor", variant: "primary" as const },
    { href: "/request-pro", label: "Join the Pro beta", variant: "ghost" as const },
  ],
};
