/**
 * Homepage content. Each section maps to one component under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the layout or the SVG illustrations.
 */

export const hero = {
  eyebrow: "Free desktop app · No subscription required",
  title:
    'Free live-text software <em class="not-italic text-stentor font-medium">for performance.</em><br class="hidden sm:inline" />',
  description:
    "Prepare, translate and cue surtitles, captions, audio description and audience-phone text from one native desktop app for rehearsals and live performance.",
  ctas: [
    { href: "/download", label: "Download Sténtor", variant: "primary" as const },
    { href: "/account", label: "Account", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Free to use", live: true },
    { label: "Native desktop app for macOS and Windows" },
    { label: "Surtitles · translations · audio description · audience phones" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Live rehearsal · local network" },
    user: { name: "Operator", email: "18 viewer phones synced" },
    title: "Operator view",
    timeframe: { prefix: "project / ", value: "Macbett" },
    stats: [
      { label: "Current cue", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Viewer phones", value: "18", trend: "following", trendColor: "green" as const },
      { label: "Screens", value: "2", trend: "synced", trendColor: "green" as const },
      { label: "Languages", value: "IT · EN", trend: "ready", trendColor: "green" as const },
    ],
    currentCue: {
      label: "Current cue",
      text: "Veramente curioso! Bizzarra coincidenza!",
      meta: "Italian surtitles · screen 1",
    },
    nextCue: {
      label: "Next cue",
      text: "What hands are here?",
      meta: "Italian source · operator preview",
    },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 sent to screens · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 viewer phones · ", s: "synced" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "audio description note · ", s: "ready" },
      { t: "12:04:30", lvl: "ok", code: "note", m: "operator note · ", s: "saved" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "cue 025 preview · ", s: "standby" },
    ],
  },
};

export const logoCloud = {
  label: "FREE LIVE-PERFORMANCE TEXT ENVIRONMENT",
  bigNumber: "3 OS",
  logos: [
    { name: "Sténtor", glyph: "rounded-full" },
    { name: "Free", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Audience phones", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Built for<br/>live performance.",
  description:
    "Sténtor keeps performance text organized from preparation to live cueing, with a focused workflow for screens, audience phones, timelines and audio-description materials.",
  items: [
    { value: "Free", suffix: "", label: "Core desktop app with no subscription" },
    { value: "Desktop", suffix: "", label: "For macOS and Windows" },
    { value: "Live Sync", suffix: "", label: "For screens and audience phones" },
  ],
};

export const bento = {
  title: "One Sténtor.<br/>Two ways of working.",
  description:
    "Prepare scripts, structure translations, operate surtitles, control audience access and keep audio-description materials together in a dedicated live-performance environment.",
  cards: {
    types: {
      title: "Sténtor Lite: start anywhere",
      desc: "A free app for preparing source text, surtitles and translations on macOS and Windows.",
    },
    p95: {
      title: "Sténtor: live control room",
      desc: "A focused app for cueing, timeline, screens, audience phones and audio-description workflows across desktop platforms.",
    },
    edge: {
      title: "Viewers on phones",
      desc: "Spectators can connect with their own smartphones and follow surtitles, translations or audio descriptions in sync with the operator's cues.",
    },
    auth: {
      title: "Audio description and access",
      desc: "Keep audio-description notes beside the script and synchronize accessible content with the live performance.",
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
      text: "Use Sténtor to prepare materials and understand the workflow before bringing them into the performance space.",
      av: "01",
      name: "Prepare the work",
      role: "Scripts · surtitles · translations",
    },
    {
      text: "Use the live operator view when the show needs timing, timeline, screens, viewer phones and a focused performance setup.",
      av: "02",
      name: "Go live",
      role: "Operator view · access code",
    },
    {
      text: "Free software lowers the threshold for theatres, schools, festivals and independent companies to test live text in real conditions.",
      av: "03",
      name: "Keep it open to use",
      role: "Free app · live testing",
    },
  ],
};

const downloadFeatures = [
  "Free desktop app for macOS and Windows",
  "No monthly subscription for core desktop use",
  "Script preparation, surtitles and translations",
  "Timeline, cueing and live operator view",
  "Screens, audience phones and audio description",
];

const accountFeatures = [
  "Account area for enabled users",
  "Access code and activation details",
  "Available builds by platform",
  "Downloads collected in one place",
  "Setup details for rehearsal and performance",
];

const institutionFeatures = [
  "For theatres, festivals and schools",
  "Shared workflows for rehearsal rooms",
  "Support during testing and performances",
  "Deployment guidance for real venues",
  "Research feedback for future improvements",
];

export const pricingPreview = {
  title: "Free to download.<br/>Ready for live text.",
  comparisonLink: { href: "/download", label: "Open downloads →" },
  plans: [
    {
      name: "Sténtor",
      tag: "Free",
      price: "Free",
      cycle: "/desktop",
      tagline: "Install the app for preparing scripts, translations, surtitles, audio description and audience-phone text.",
      features: downloadFeatures,
      cta: { href: "/download", label: "Download Sténtor", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Account",
      tag: "Access",
      tagAccent: true,
      price: "Access",
      cycle: "/code",
      tagline: "Find your Sténtor access code, activation details and available builds.",
      features: accountFeatures,
      cta: { href: "/account", label: "Open Account", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Institutions",
      tag: "Setup",
      price: "Live",
      cycle: "/venues",
      tagline: "Prepare screens, phones and live-text workflows for real rehearsal rooms.",
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
  eyebrow: "Sténtor · Free desktop app",
  title: "Prepare the text. Go live without a subscription.",
  body: "Download Sténtor to begin on macOS, Windows or Linux. Use the Account area when you need your access code and enabled builds.",
  ctas: [
    { href: "/download", label: "Download Sténtor", variant: "primary" as const },
    { href: "/account", label: "Open Account", variant: "ghost" as const },
  ],
};
