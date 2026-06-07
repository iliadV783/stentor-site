/**
 * For theatres page content: hero, featured use case, venue cards,
 * filter chips, logo wall, aggregate stats, quotes, and final CTA.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "For theatres, festivals and venues",
  title:
    'Run multilingual live text <em class="not-italic text-text-3 font-medium">without turning the show into a technical project.</em>',
  description:
    "Sténtor helps venues prepare, cue and share surtitles, translations and audio description through a local-first workflow: one operator desk, multiple screens, a foyer QR page and audience phones when needed.",
};

// ─── Featured case study ──────────────────────────────────────────────────
export const featured = {
  brand: { initial: "S", name: "Sténtor in the venue" },
  title:
    'One room workflow for <em class="text-red-500 not-italic">regia, screens, foyer and phones.</em>',
  description:
    "A theatre can prepare the text before the show, operate cues from the Stage desk, send surtitles to configured screens, show a foyer QR code before the performance, and let spectators follow translation or audio description from their own smartphones.",
  stats: [
    { value: "1", label: "operator-led Stage desk" },
    { value: "3", label: "surtitles · translation · audio description" },
    { value: "Local", label: "room network, no internet required" },
  ],
  link: { href: "/docs", label: "See the workflow" },
  hudRows: [
    { method: "LIVE", path: "Stage desk / Regia", lat: "operator", emphasized: true },
    { method: "TXT", path: "venue screens", lat: "synced", emphasized: true },
    { method: "QR", path: "foyer welcome page", lat: "ready", emphasized: false },
    { method: "WEB", path: "audience phones", lat: "following", emphasized: false },
    { method: "AD", path: "audio description", lat: "available", emphasized: false },
  ],
  pullQuote: {
    text:
      "The same project can support the people preparing the text, the operator cueing it live, the screens in the room, the foyer QR and the spectators following on their own devices.",
    author: "Sténtor",
    role: "Venue workflow",
  },
};

// ─── Filter chips ─────────────────────────────────────────────────────────
export const filters = ["All", "Surtitles", "Translation", "Audio description", "Audience phones", "Foyer", "Touring", "Research"];

export const filterCount = { showing: 6, total: 6 };

// ─── Customer cards ───────────────────────────────────────────────────────
type CustomerCard = {
  brand: string;
  industry: string;
  glyph: string;
  tint: string;
  illustration: "helio" | "constellate" | "vector" | "kettlebrook" | "orbital" | "tessera";
  title: string;
  description: string;
  stats: { k: string; l: string }[];
};

export const cards: CustomerCard[] = [
  {
    brand: "International hosting",
    industry: "Translation",
    glyph: "rounded-full",
    tint: "rgba(239,68,68,0.18)",
    illustration: "helio",
    title: "Host a foreign-language production with multilingual surtitles.",
    description:
      "Prepare the original text and one or more translations in the same project, then cue the right language to the right screen or audience device during the performance.",
    stats: [
      { k: "2+", l: "Languages per project" },
      { k: "Live", l: "Operator cueing" },
    ],
  },
  {
    brand: "Festivals",
    industry: "Surtitles",
    glyph: "",
    tint: "rgba(96,165,250,0.10)",
    illustration: "constellate",
    title: "Move between productions without rebuilding the setup every night.",
    description:
      "Keep each show as a separate project while reusing the same Stage desk logic, screen configuration approach and audience-phone workflow across rooms and dates.",
    stats: [
      { k: "∞", l: "Projects and cues" },
      { k: "1", l: "Reusable live workflow" },
    ],
  },
  {
    brand: "Audio description",
    industry: "Audio description",
    glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]",
    tint: "rgba(239,68,68,0.14)",
    illustration: "vector",
    title: "Prepare audio description in the same project as the text.",
    description:
      "Keep descriptions, cue references and optional audio files close to the script, so audio description can be prepared, revised, tested and shared without a separate workflow.",
    stats: [
      { k: "AD", l: "Notes and audio" },
      { k: "Cue", l: "Context preserved" },
    ],
  },
  {
    brand: "Audience phones",
    industry: "Audience phones",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.14)",
    illustration: "kettlebrook",
    title: "Offer personal-device text without installing a complex system.",
    description:
      "Spectators can scan a QR code and follow surtitles, translations, audio description or both from their own smartphones, in sync with the operator's cues.",
    stats: [
      { k: "QR", l: "Audience access" },
      { k: "Sync", l: "With Regia" },
    ],
  },
  {
    brand: "Touring productions",
    industry: "Touring",
    glyph: "rounded-full bg-transparent border-2 border-zinc-300",
    tint: "rgba(96,165,250,0.10)",
    illustration: "orbital",
    title: "Carry the same text project from venue to venue.",
    description:
      "A production can travel with its script, translations, surtitles, audio-description notes and metadata already structured, then adapt outputs to each venue's screens and audience needs.",
    stats: [
      { k: "Export", l: "Ready scripts" },
      { k: "Local", l: "Room network" },
    ],
  },
  {
    brand: "Field notes",
    industry: "Research",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.16)",
    illustration: "tessera",
    title: "Invite feedback after use, not before download.",
    description:
      "After a rehearsal or show, operators, companies and venues can share practical notes or audience responses. Sténtor stays free to try without a tracking questionnaire before download.",
    stats: [
      { k: "After", l: "Feedback after use" },
      { k: "Open", l: "No account required" },
    ],
  },
];

// ─── Logo wall ────────────────────────────────────────────────────────────
export const logoWall = {
  title: "Designed around theatre work, not generic software categories.",
  description:
    "Sténtor supports different people and moments in a production: preparation, live operation, projection, foyer communication, audience devices and post-use field notes.",
  logos: [
    { name: "Theatres", glyph: "rounded-full" },
    { name: "Festivals", glyph: "rotate-45" },
    { name: "Companies", glyph: "" },
    { name: "Touring", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Surtitlers", glyph: "rounded" },
    { name: "Translators", glyph: "rounded-full bg-transparent border-2 border-zinc-300" },
    { name: "Audio describers", glyph: "rounded" },
    { name: "Operators", glyph: "rounded-full" },
    { name: "Technicians", glyph: "" },
    { name: "Audience phones", glyph: "rotate-45" },
    { name: "Venue screens", glyph: "rounded" },
    { name: "Foyer QR", glyph: "rounded-full" },
  ],
};

// ─── Aggregate stats strip ────────────────────────────────────────────────
export const stats = {
  title: "One setup can serve different theatrical needs.",
  description:
    "Use Sténtor as a preparation tool, a live Stage desk, a screen output system, a foyer QR page, an audience-phone client and an optional field-notes channel.",
  items: [
    { value: "3", suffix: " layers", label: "Surtitles, translation and audio description in one project" },
    { value: "∞", suffix: " languages", label: "Multilingual by design, not limited to one bilingual pair" },
    { value: "Live", suffix: " Sync", label: "Operator-led connection for screens, foyer and audience phones" },
  ],
};

// ─── Quote cards ──────────────────────────────────────────────────────────
export const quotes = [
  {
    stars: 5,
    text:
      "A theatre can start with a simple surtitling need and later add translation, audio description, foyer QR or audience phones without changing the whole workflow.",
    av: "01",
    name: "Start simple",
    role: "Surtitles and screens",
  },
  {
    stars: 5,
    text:
      "A festival can keep projects separated by production while using the same live cueing logic for different rooms, languages and technical setups.",
    av: "02",
    name: "Scale across events",
    role: "Festivals and seasons",
  },
  {
    stars: 5,
    text:
      "A venue can invite operators, companies and spectators to share field notes after use, turning real performances into better tools without making download feel monitored.",
    av: "03",
    name: "Learn from use",
    role: "Field notes and research",
  },
];

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  title: "Bring Sténtor into your theatre.",
  body:
    "Use it for a single production, a festival, a touring show or a research pilot. Download first, test it in the room, and share field notes only when you have something concrete to tell us.",
  ctas: [
    { href: "/download", label: "Download Sténtor", variant: "primary" as const },
    { href: "/contact", label: "Contact", variant: "ghost" as const },
  ],
};
