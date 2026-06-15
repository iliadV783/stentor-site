/**
 * For Theatres page content: venue use cases, live workflow,
 * preparation, screens, audience phones, audio description and field notes.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "For Theatres, Festivals and Venues",
  title:
    'Live text for the whole room, <em class="not-italic text-text-3 font-medium">without turning access into a technical burden.</em>',
  description:
    "Sténtor helps theatres prepare, cue and share surtitles, translations and audio description from one controlled project: the operator desk, venue screens, foyer QR access and audience phones can all follow the same live text workflow.",
};

// ─── Featured case study ──────────────────────────────────────────────────
export const featured = {
  brand: { initial: "S", name: "Sténtor in the venue" },
  title:
    'One performance workflow for <em class="text-red-500 not-italic">regia, screens, foyer and phones.</em>',
  description:
    "Prepare the script before the show, align translations and descriptions, cue the performance from the Stage desk, send text to configured screens, display a foyer QR page and let spectators follow selected languages or audio description from their own devices.",
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
      "The same project can support the person preparing the text, the operator cueing it live, the screens in the room, the foyer QR page and spectators following on their own devices.",
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
    brand: "International productions",
    industry: "Translation",
    glyph: "rounded-full",
    tint: "rgba(239,68,68,0.18)",
    illustration: "helio",
    title: "Host work in another language without multiplying systems.",
    description:
      "Keep the original script and translations in the same project, then decide what appears on venue screens and what remains available on audience phones.",
    stats: [
      { k: "2+", l: "Languages per project" },
      { k: "Live", l: "Operator cueing" },
    ],
  },
  {
    brand: "Festivals and seasons",
    industry: "Surtitles",
    glyph: "",
    tint: "rgba(96,165,250,0.10)",
    illustration: "constellate",
    title: "Move between productions without rebuilding the setup every night.",
    description:
      "Each show stays separate, but the live logic remains familiar: projects, cues, screens and audience access follow the same structure across rooms and dates.",
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
    title: "Prepare audio description next to the script, not in a separate island.",
    description:
      "Descriptions, cue references and optional audio files stay close to the text, so access work can be drafted, revised and tested inside the same production file.",
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
    title: "Give spectators personal-device text when projection is not enough.",
    description:
      "A QR code can open a local audience page where spectators follow the selected language, surtitles or audio-description text in sync with the operator’s cues.",
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
    title: "Carry one structured text project from venue to venue.",
    description:
      "The production can travel with script, translations, surtitles, audio-description notes and metadata already prepared, then adapt outputs to each venue’s screens and audience needs.",
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
    title: "Collect practical feedback after real use, not before download.",
    description:
      "After a rehearsal or performance, operators, companies and venues can share practical notes. Sténtor stays easy to try and learns from actual theatre conditions.",
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
    "Sténtor follows the real sequence of a production: preparation, live operation, screen output, foyer communication, audience devices and post-use field notes.",
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
    "Use Sténtor as a preparation tool, a live Stage desk, a screen output system, a foyer QR page, an audience-phone web app and an optional field-notes channel.",
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
      "Start with a simple surtitling need; add translation, audio description, foyer QR or audience phones later without changing the entire workflow.",
    av: "01",
    name: "Start simple",
    role: "Surtitles and screens",
  },
  {
    stars: 5,
    text:
      "Keep festival projects separated by production while using the same live cueing logic for different rooms, languages and technical setups.",
    av: "02",
    name: "Scale across events",
    role: "Festivals and seasons",
  },
  {
    stars: 5,
    text:
      "Use field notes after rehearsals and performances to improve the tool from real theatre work, not from abstract onboarding questionnaires.",
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
