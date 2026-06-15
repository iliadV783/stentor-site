/**
 * Features page content. Components under src/components/sections/features/
 * read from this file. Rich text (with inline <em>, <code>, etc.) is stored
 * as HTML strings and rendered via set:html.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Sténtor features",
  title: "Multilingual live text,<br/>from script to room.",
  description:
    "Sténtor brings scripts, translations, surtitles, audio description, timelines, screens, audience phones and foyer QR access into one local-first workflow for theatres, festivals and performance spaces.",
};

// ─── Showcase rows (alternating side-by-side) ─────────────────────────────
type ShowcaseRow = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { href: string; label: string };
  illustration: "schemas" | "trace" | "regions";
};

export const showcase: ShowcaseRow[] = [
  {
    number: "01",
    eyebrow: "01 — Project workspace",
    title: "One project for every layer of live text.",
    description:
      "Prepare the original script, translations, surtitles, audio-description notes, project metadata, languages and screen setup in one editable project. Sténtor is designed to keep the structure of a performance visible while each cue remains flexible.",
    bullets: [
      "Import Word, TXT, SRT, WebVTT, CSV or JSON",
      "Configure project languages once and reuse them across screens, audience phones and foyer QR",
      "Keep title, company, notes, cues, translations and audio-description material together",
    ],
    cta: { href: "/docs#projects", label: "See project workflow" },
    illustration: "schemas",
  },
  {
    number: "02",
    eyebrow: "02 — Stage desk / Regia",
    title: "A live desk for the operator, not a generic slide tool.",
    description:
      "During rehearsal or performance, the Stage desk keeps the operator focused on current cue, next cue, blackout, timing, screen distribution, connected audience devices and audio-description state.",
    bullets: [
      "Advance, rewind and blackout from a focused live view",
      "Monitor current cue, next cue, timers, notes and connected devices",
      "Use manual control first, with rehearsed timing and recorded cue data where useful",
    ],
    cta: { href: "/docs#stage-desk", label: "Cue a show" },
    illustration: "trace",
  },
  {
    number: "03",
    eyebrow: "03 — Room and audience",
    title: "Screens, foyer and audience phones follow the same live state.",
    description:
      "Sténtor can send the live cue to venue screens, a foyer welcome page with QR code, and spectators connected with their own smartphones. The operator stays in control while each device receives the right language and mode.",
    bullets: [
      "Multiple configured screens with previews, language and style settings",
      "Audience web app for surtitles, translations, audio description or both",
      "Local-network mode for theatre tests without relying on internet access",
    ],
    cta: { href: "/docs#audience", label: "See audience workflow" },
    illustration: "regions",
  },
];

// Demo data for the trace illustration
export const traceRows = [
  { name: "Stage desk", lvl: "LIVE", lvlColor: "ok" as const, barColor: "amber" as const, left: 0, width: 100, ms: "operator" },
  { name: "└ current cue", barColor: "gray" as const, left: 2, width: 18, ms: "024" },
  { name: "└ screen outputs", barColor: "blue" as const, left: 22, width: 18, ms: "synced" },
  { name: "└ audio-description note", barColor: "green" as const, left: 44, width: 24, ms: "ready" },
  { name: "└ audience phones", lvl: "sync", lvlColor: "amber" as const, barColor: "amber" as const, left: 70, width: 25, ms: "following" },
  { name: "└ next cue preview", barColor: "blue" as const, left: 96, width: 4, ms: "next" },
];

// Region pins for the runtime illustration
export const regions = [
  { code: "REGIA", left: "47%", top: "45%", lat: "live" },
  { code: "SCREEN", left: "35%", top: "28%", lat: "synced" },
  { code: "PHONE", left: "58%", top: "34%", lat: "synced" },
  { code: "FOYER", left: "52%", top: "62%", lat: "QR" },
  { code: "IT", left: "41%", top: "58%", lat: "text" },
  { code: "EN", left: "62%", top: "55%", lat: "translation" },
];

// ─── Secondary bento (six smaller cards) ──────────────────────────────────
export const secondaryBento = {
  title: "Built for the real theatre workflow.",
  description: "Practical tools for people preparing, operating, projecting, describing and sharing multilingual live performance text.",
  cards: [
    {
      icon: "shield" as const,
      title: "Audio description as a project layer",
      desc: "Prepare description notes beside the script, link them to cue context, attach audio for tests and export material for rehearsal or revision.",
      demo: { type: "tags" as const, items: ["AD notes", "Cue links", "Audio files", "TXT", "CSV", "VTT"] },
    },
    {
      icon: "clock" as const,
      title: "Import and export",
      desc: "Bring in scripts and subtitle files, then export structured material for rehearsal, archive, touring, translation review or study.",
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
      title: "Multilingual project setup",
      desc: "Configure the languages of each project once, then reuse them across text preparation, screens, audience phones and foyer QR pages.",
      demo: {
        type: "progress" as const,
        percent: 86,
        label: "metadata · languages · cue layers · outputs",
      },
    },
    {
      icon: "chart-up" as const,
      title: "Audience phones",
      desc: "Spectators can connect through a QR code and follow surtitles, translations, audio description or both on their own devices during the show.",
      demo: { type: "bars" as const, heights: [20, 45, 35, 55, 70, 65, 80, 76, 90, 84] },
    },
    {
      icon: "box" as const,
      title: "Desktop-first, local-first",
      desc: "Sténtor is designed as a desktop workspace for live performance text. The current beta is available for macOS, while the project is being shaped with a broader cross-platform direction in mind.",
      demo: {
        type: "url-rows" as const,
        items: [
          { text: "current beta: macOS", highlighted: false },
          { text: "desktop workspace + local clients", highlighted: true },
        ],
      },
    },
    {
      icon: "cross-axis" as const,
      title: "Field notes after use",
      desc: "Sténtor does not require a tracking questionnaire before download. Field notes and audience responses are invited only after real rehearsal or performance use.",
      demo: {
        type: "tags" as const,
        items: ["Operators", "Audiences", "Venues", "Field notes", "Feedback", "Research"],
      },
    },
  ],
};

// ─── Code tabs (project structure demo) ────────────────────────────────────
export const codeTabs = {
  title: "A readable project file, not a black box.",
  description: "Sténtor keeps performance text structured: metadata, languages, cues, translations, audio-description notes, screen settings and live state can remain understandable and portable.",
  tabs: [
    { id: "ts", label: "Project", count: ".json" },
    { id: "go", label: "Cue", count: "text" },
    { id: "py", label: "AD", count: "audio" },
    { id: "curl", label: "Regia", count: "live" },
    { id: "resp", label: "Audience", count: "view" },
  ],
};

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "Free to try · no account required",
  title: "Download first.<br/>Share field notes later.",
  body: "Use Sténtor to bring scripts, translations, surtitles and audio descriptions from the script to the room, the screen, the foyer and the audience device.",
  ctas: [
    { href: "/download", label: "Download Sténtor", variant: "primary" as const },
    { href: "/docs", label: "Read the workflow", variant: "ghost" as const },
  ],
};
