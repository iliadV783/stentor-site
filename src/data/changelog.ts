/**
 * Changelog page content for Sténtor.
 */

export const hero = {
  eyebrow: "Project log",
  title: "What changed in Sténtor.",
  description:
    "A public log of the software as it grows: desktop app work, Live Sync, audience web client, import/export, audio-description tools and research-facing improvements.",
  emailPlaceholder: "you@example.com",
  subscribeLabel: "Follow updates",
  subscribeLinks: [
    { href: "#", label: "RSS", icon: "rss" as const },
    { href: "mailto:info@stentor.live?subject=Sténtor changelog", label: "Email", icon: "mail" as const },
    { href: "/contact", label: "Feedback", icon: "discord" as const },
  ],
};

export const filters = [
  { id: "all", label: "All", count: 6 },
  { id: "major", label: "Milestones", count: 2 },
  { id: "new", label: "New", count: 2 },
  { id: "improvements", label: "Improvements", count: 2 },
  { id: "fixes", label: "Fixes", count: 1 },
];

export const versionTag = "v0.1.64 · Live Sync";
export const versionRange = "· current prototype";

export const years = [
  { y: "2026", n: 6, on: true },
  { y: "Research", n: 1 },
];

export const entries = [
  {
    version: "0.1.64",
    date: "2026-06-05",
    type: "major",
    title: "Live Sync becomes the centre of the room workflow",
    body: "The current prototype connects the operator view, screens and audience phones around a shared live cue state.",
    changes: {
      new: [
        { title: "Audience phones", body: "Spectators can connect with their own smartphone and follow surtitles, translations or audio descriptions." },
        { title: "Local room mode", body: "The project can be shared over a local network for theatre tests and rehearsals." },
      ],
      improvements: [
        { title: "Operator focus", body: "The live view is being simplified around current cue, next cue, blackout and connected devices." },
      ],
    },
  },
  {
    version: "0.1.61",
    date: "2026-06-02",
    type: "minor",
    title: "Audience web client refined for performance use",
    body: "The audience page moves toward a cleaner live view, especially on mobile devices and in landscape orientation.",
    changes: {
      improvements: [
        { title: "Reduced interface noise", body: "Less technical status text during the show, with settings and connection state kept discreet." },
        { title: "Language switching", body: "Interface language and subtitle language are treated as part of the audience experience." },
      ],
      fixes: [
        { title: "Mobile viewport", body: "The bottom of the page is adjusted to avoid being hidden by browser controls on smartphones." },
      ],
    },
  },
  {
    version: "0.1.50",
    date: "2026-05-30",
    type: "minor",
    title: "Script preparation and metadata model",
    body: "Project structure now reflects real production needs: title, company or collective, languages, cues, notes and audio-description material.",
    changes: {
      new: [
        { title: "Project metadata", body: "Title and company/collective are available as project-level fields." },
        { title: "Empty speaker fields", body: "Speaker or character can remain blank when it is not useful for the script." },
      ],
      improvements: [
        { title: "Central script panel", body: "The script workspace is being adjusted to use the available width more effectively." },
      ],
    },
  },
  {
    version: "0.1.40",
    date: "2026-05-26",
    type: "major",
    title: "Desktop-first direction confirmed",
    body: "Sténtor is being developed as a desktop app for theatre work, with web views for screens and audience devices.",
    changes: {
      new: [
        { title: "Cross-platform direction", body: "The target is a desktop-first tool for macOS, Windows and Linux." },
        { title: "Room-oriented architecture", body: "The app is shaped around rehearsal rooms, venues, local networks and live operation." },
      ],
    },
  },
  {
    version: "0.1.30",
    date: "2026-05-22",
    type: "minor",
    title: "Import and export groundwork",
    body: "Early import/export work focuses on practical theatrical formats rather than forcing users into a single source format.",
    changes: {
      new: [
        { title: "Supported imports", body: "Word, TXT, SRT, WebVTT, CSV and JSON are part of the preparation workflow." },
      ],
      improvements: [
        { title: "Export-ready scripts", body: "Exports are considered as rehearsal, archive, touring and research materials." },
      ],
    },
  },
  {
    version: "0.1.20",
    date: "2026-05-18",
    type: "patch",
    title: "Research feedback loop added to the project logic",
    body: "The website and workflow now make feedback, questionnaires and field notes part of the exchange around Sténtor.",
    changes: {
      improvements: [
        { title: "Shared knowledge", body: "Use of the software is connected to practical feedback from operators, audiences, artists and venues." },
      ],
    },
  },
];

export const sideStats = {
  thisYear: {
    title: "Current focus",
    rows: [
      { label: "Prototype", value: "0.1.64", accent: true },
      { label: "Live Sync", value: "active" },
      { label: "Audience client", value: "testing" },
      { label: "Feedback loop", value: "open" },
    ],
  },
  cadence: {
    title: "Development rhythm",
    bars: [28, 46, 34, 62, 54, 70, 48, 76, 66, 88, 58, 100],
    rangeStart: "May '26",
    rangeEnd: "Jun '26",
  },
  status: {
    title: "Status",
    rows: [
      { label: "Desktop app", value: "● prototype", color: "green" as const },
      { label: "Audience web client", value: "testing" },
      { label: "Next priority", value: "field feedback" },
    ],
  },
};

export const loadMore = "More project notes soon";
