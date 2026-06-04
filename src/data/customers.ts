/**
 * Customers page content: hero, featured case study, customer card grid,
 * filter chips, logo wall, aggregate stats, quotes, and final CTA.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "For theatres, festivals and venues",
  title:
    'Use Sténtor wherever live performance text <em class="not-italic text-text-3 font-medium">needs to reach an audience.</em>',
  description:
    "Sténtor helps theatres prepare, cue and share surtitles, translations and audio descriptions across venue screens and audience phones — without turning every production into a technical project.",
};

// ─── Featured case study ──────────────────────────────────────────────────
export const featured = {
  brand: { initial: "S", name: "Sténtor in the venue" },
  title:
    'One workflow for <em class="text-red-500 not-italic">screens, phones and live cueing.</em>',
  description:
    "A theatre can use Sténtor to prepare the performance text before the show, operate cues from the regia, send surtitles to screens, and let spectators follow translation or audio description from their own smartphones.",
  stats: [
    { value: "3", label: "text layers in one project" },
    { value: "∞", label: "projects, languages and cues" },
    { value: "1", label: "operator-led Live Sync workflow" },
  ],
  link: { href: "/workflow", label: "See the workflow" },
  // HUD rows shown on the visual side (right column)
  hudRows: [
    { method: "LIVE", path: "operator cue", lat: "regia", emphasized: true },
    { method: "TXT", path: "surtitles on screen", lat: "synced", emphasized: true },
    { method: "WEB", path: "audience phones", lat: "synced", emphasized: false },
    { method: "AD", path: "audio-description notes", lat: "ready", emphasized: false },
  ],
  pullQuote: {
    text:
      "The same project can support the people preparing the text, the operator cueing it live, the screens in the room and the spectators following on their own devices.",
    author: "Sténtor",
    role: "Use case for venues",
  },
};

// ─── Filter chips ─────────────────────────────────────────────────────────
export const filters = ["All", "Surtitles", "Translation", "Audio description", "Audience phones", "Touring", "Research"];

export const filterCount = { showing: 6, total: 6 };

// ─── Customer cards ───────────────────────────────────────────────────────
// `illustration` maps to an SVG file under src/assets/illustrations/customer-*.svg
// Images are placeholders for now: copy only has been adapted to Sténtor.
type CustomerCard = {
  brand: string;
  industry: string;
  // Glyph: tailwind class string for the small square logo placeholder
  glyph: string;
  // Background tint applied to the card's illustration container
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
    title: "Host a foreign-language production with translated surtitles.",
    description:
      "Prepare the original script and translation in one project, then cue translated surtitles live for the audience while keeping the operator focused on timing.",
    stats: [
      { k: "2+", l: "Languages in one project" },
      { k: "Live", l: "Operator cueing" },
    ],
  },
  {
    brand: "Festivals",
    industry: "Surtitles",
    glyph: "",
    tint: "rgba(96,165,250,0.10)",
    illustration: "constellate",
    title: "Manage many shows without rebuilding the setup every night.",
    description:
      "Use the same desktop workflow for different productions, languages and cue structures across a festival, from rehearsal notes to live performance.",
    stats: [
      { k: "∞", l: "Projects and cues" },
      { k: "1", l: "Reusable workflow" },
    ],
  },
  {
    brand: "Audio description",
    industry: "Audio description",
    glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]",
    tint: "rgba(239,68,68,0.14)",
    illustration: "vector",
    title: "Prepare audio-description notes alongside the performance text.",
    description:
      "Keep descriptions, cues and textual references close to the script, so audio description can be prepared, revised and followed during the live event.",
    stats: [
      { k: "AD", l: "Notes and cues" },
      { k: "Script", l: "Context preserved" },
    ],
  },
  {
    brand: "Small venues",
    industry: "Audience phones",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.14)",
    illustration: "kettlebrook",
    title: "Offer personal-device surtitles without installing a complex system.",
    description:
      "Spectators can connect with their own smartphones and follow surtitles, translations or descriptions in sync with the operator's cues.",
    stats: [
      { k: "Web", l: "Audience client" },
      { k: "Sync", l: "With regia" },
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
      "A production can travel with its script, translations, surtitles and notes already structured, then adapt the output to each venue's screens and audience needs.",
    stats: [
      { k: "Export", l: "Ready scripts" },
      { k: "Cross", l: "Platform desktop" },
    ],
  },
  {
    brand: "Research feedback",
    industry: "Research",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.16)",
    illustration: "tessera",
    title: "Turn each use into feedback for better theatre tools.",
    description:
      "After a production, companies and venues can share usage notes, audience responses and practical observations that help Sténtor grow through real performances.",
    stats: [
      { k: "Forms", l: "Feedback after use" },
      { k: "Data", l: "Anonymous notes" },
    ],
  },
];

// ─── Logo wall ────────────────────────────────────────────────────────────
export const logoWall = {
  title: "Designed around theatre work, not generic software categories.",
  description:
    "Sténtor can support different people and moments in a production: from preparation to live operation, from the room to the audience device.",
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
    { name: "Research", glyph: "rounded-full" },
  ],
};

// ─── Aggregate stats strip ────────────────────────────────────────────────
export const stats = {
  title: "The same setup can serve different theatrical needs.",
  description:
    "Use Sténtor as a preparation tool, a live cueing desk, a screen output system, an audience-phone client and a research-feedback channel.",
  items: [
    { value: "3", suffix: " layers", label: "Surtitles, translation and audio description in one project" },
    { value: "∞", suffix: "", label: "Projects, languages and cues available across plans" },
    { value: "Live", suffix: " Sync", label: "Operator-led connection for screens and audience phones" },
  ],
};

// ─── Quote cards ──────────────────────────────────────────────────────────
export const quotes = [
  {
    stars: 5,
    text:
      "A theatre can start with a simple surtitling need and later add translation, audio-description notes or audience phones without changing the whole workflow.",
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
      "A venue can ask companies, operators and spectators for feedback after use, turning each performance into useful research for future tools.",
    av: "03",
    name: "Learn from use",
    role: "Research feedback",
  },
];

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  title: "Bring Sténtor into your theatre.",
  body:
    "Use it for a single production, a festival, a touring show or a research pilot. Start with the case that fits your venue, then expand the workflow when you need it.",
  ctas: [
    { href: "/signup", label: "Start for free", variant: "primary" as const },
    { href: "#contact", label: "Contact", variant: "ghost" as const },
  ],
};
