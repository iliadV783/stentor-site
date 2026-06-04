/**
 * Changelog page chrome (sidebar, filters, stats). Individual entries are
 * still rendered from src/content/changelog, but the page language is Sténtor.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
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

// ─── Filter strip (sticky) ────────────────────────────────────────────────
export const filters = [
  { id: "all", label: "All", count: 8 },
  { id: "major", label: "Milestones", count: 2 },
  { id: "new", label: "New", count: 3 },
  { id: "improvements", label: "Improvements", count: 2 },
  { id: "fixes", label: "Fixes", count: 1 },
];

export const versionTag = "v0.1.64 · Live Sync";
export const versionRange = "· current prototype";

// ─── Year jump nav ────────────────────────────────────────────────────────
export const years = [
  { y: "2026", n: 8, on: true },
  { y: "2025", n: 0 },
  { y: "2024", n: 0 },
  { y: "Research", n: 1 },
];

// ─── Right rail stats ─────────────────────────────────────────────────────
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
