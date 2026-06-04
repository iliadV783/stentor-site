/**
 * Features page content. Components under src/components/sections/features/
 * read from this file. Rich text (with inline <em>, <code>, etc.) is stored
 * as HTML strings and rendered via set:html.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Sténtor features",
  title: "Everything live performance text needs,<br/>from script to audience.",
  description:
    "Sténtor brings surtitles, translations, audio-description notes, live cueing, screens and audience phones into one focused workflow for theatre, festivals and live performance.",
};

// ─── Showcase rows (alternating side-by-side) ─────────────────────────────
// Each row pairs a copy block with a custom illustration. Visuals stay in
// the .astro template; this file holds copy + the trace/region demo data.
type ShowcaseRow = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { href: string; label: string };
  // Used by Showcase.astro to pick which illustration to render on the right
  illustration: "schemas" | "trace" | "regions";
};

export const showcase: ShowcaseRow[] = [
  {
    number: "01",
    eyebrow: "01 — Copione",
    title: "One script, many layers of performance text.",
    description:
      "Prepare the original script, translations, surtitles, notes and project metadata in one place. Sténtor keeps the structure of the performance visible while letting each cue remain editable.",
    bullets: [
      "Import from Word, TXT, SRT, WebVTT, CSV or JSON",
      "Keep title, company, languages and production notes together",
      "Leave speaker or character fields empty when they are not needed",
    ],
    cta: { href: "/docs", label: "Read the workflow" },
    illustration: "schemas",
  },
  {
    number: "02",
    eyebrow: "02 — Regia",
    title: "A clear operator view for the live moment.",
    description:
      "During rehearsal or performance, Regia gives the operator a focused cueing interface: current cue, next cue, blackout, timing and the confidence to move through the show without visual noise.",
    bullets: [
      "Advance, rewind and blackout from one live view",
      "Keep timing, current cue and next cue visible",
      "Use the same project from rehearsal to performance",
    ],
    cta: { href: "/docs", label: "Cue a show" },
    illustration: "trace",
  },
  {
    number: "03",
    eyebrow: "03 — Live Sync",
    title: "Screens and audience phones follow the operator.",
    description:
      'Sténtor can send the live cue state to venue screens and to spectators connected with their own smartphones. The operator stays in control while each device follows the performance text in sync.',
    bullets: [
      "Audience web client for personal devices",
      "Screen output for surtitles and translations",
      "Local-network mode for rehearsal rooms and venues",
    ],
    cta: { href: "/customers", label: "See theatre use cases" },
    illustration: "regions",
  },
];

// Demo data for the trace illustration (row 02 / Observability)
export const traceRows = [
  { name: "Current cue", lvl: "LIVE", lvlColor: "ok" as const, barColor: "amber" as const, left: 0, width: 100, ms: "Regia" },
  { name: "└ surtitles on screen", barColor: "gray" as const, left: 2, width: 18, ms: "synced" },
  { name: "└ translation layer", barColor: "blue" as const, left: 22, width: 18, ms: "ready" },
  { name: "└ audio-description note", barColor: "green" as const, left: 44, width: 24, ms: "queued" },
  { name: "└ audience phones", lvl: "sync", lvlColor: "amber" as const, barColor: "amber" as const, left: 70, width: 25, ms: "connected" },
  { name: "└ next cue preview", barColor: "blue" as const, left: 96, width: 4, ms: "next" },
];

// Region pins for the runtime illustration (row 03 / Runtime)
export const regions = [
  { code: "REGIA", left: "47%", top: "45%", lat: "live" },
  { code: "SCREEN", left: "35%", top: "28%", lat: "synced" },
  { code: "PHONE", left: "58%", top: "34%", lat: "synced" },
  { code: "AD", left: "52%", top: "62%", lat: "ready" },
  { code: "IT", left: "41%", top: "58%", lat: "text" },
  { code: "EN", left: "62%", top: "55%", lat: "translation" },
];

// ─── Secondary bento (six smaller cards) ──────────────────────────────────
export const secondaryBento = {
  title: "Built for the work around the performance.",
  description: "Practical tools for people preparing, cueing, translating, describing and sharing live performance text.",
  cards: [
    {
      icon: "shield" as const,
      title: "Audio description beside the script",
      desc: "Prepare description notes with their cue context, then revise, rehearse and export them without separating them from the performance text.",
      // demo type: a list of pill tags
      demo: { type: "tags" as const, items: ["AD notes", "Cue links", "TXT", "CSV", "VTT", "Audio"] },
    },
    {
      icon: "clock" as const,
      title: "Import and export",
      desc: "Bring in scripts and subtitle files, then export structured material for revision, rehearsal, archiving or touring.",
      demo: {
        type: "cron-rows" as const,
        items: [
          { schedule: "import", name: "script.docx", status: "cues detected" },
          { schedule: "export", name: "show.en.srt", status: "ready" },
        ],
      },
    },
    {
      icon: "refresh-ccw" as const,
      title: "Project metadata",
      desc: "Keep title, company or collective, languages, notes and production context inside the same project file.",
      demo: {
        type: "progress" as const,
        percent: 72,
        label: "metadata · languages · notes · cue layers",
      },
    },
    {
      icon: "chart-up" as const,
      title: "Audience devices",
      desc: "Spectators can use their own smartphones to follow surtitles, translations or audio descriptions during the show.",
      demo: { type: "bars" as const, heights: [20, 45, 35, 55, 70, 65, 80, 76, 90, 84] },
    },
    {
      icon: "box" as const,
      title: "Cross-platform desktop",
      desc: "Sténtor is designed as a desktop-first tool for macOS, Windows and Linux, with web views for audience and screens.",
      demo: {
        type: "url-rows" as const,
        items: [
          { text: "macOS · Windows · Linux", highlighted: false },
          { text: "desktop app + audience web client", highlighted: true },
        ],
      },
    },
    {
      icon: "cross-axis" as const,
      title: "Research feedback",
      desc: "After rehearsals or performances, usage notes and audience responses can help improve the tool and the research around live text.",
      demo: {
        type: "tags" as const,
        items: ["Operators", "Audiences", "Venues", "Usage notes", "Feedback", "Research"],
      },
    },
  ],
};

// ─── Code tabs (multi-language SDK demo) ──────────────────────────────────
// Tabs metadata only. The actual code samples remain inline in CodeTabs.astro
// because they contain heavy syntax-highlighting markup.
export const codeTabs = {
  title: "A project file, not a black box.",
  description: "Sténtor keeps performance text structured: metadata, languages, cues, translations, audio-description notes and live state can all remain understandable and portable.",
  tabs: [
    { id: "ts", label: "Project", count: ".json" },
    { id: "go", label: "Cue", count: "text" },
    { id: "py", label: "AD", count: "notes" },
    { id: "curl", label: "Live", count: "sync" },
    { id: "resp", label: "Audience", count: "view" },
  ],
};

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "Ready for rehearsal",
  title: "Prepare the text.<br/>Cue the show. Share it live.",
  body: 'Use Sténtor to bring surtitles, translations and audio descriptions from the script to the room, the screen and the audience device.',
  ctas: [
    { href: "/signup", label: "Start for free", variant: "primary" as const },
    { href: "/docs", label: "Read the workflow", variant: "ghost" as const },
  ],
};
