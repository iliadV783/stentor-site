/**
 * Changelog page chrome (sidebar, filters, stats). Individual entries live
 * in src/content/changelog/ as MDX — edit those to add a new release.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Shipping every Tuesday",
  title: "What we shipped.",
  description:
    "Releases, fixes, and the occasional retrospective on what we learned in production. Subscribe to get the next one in your inbox the moment it goes live.",
  emailPlaceholder: "you@company.com",
  subscribeLabel: "Subscribe",
  subscribeLinks: [
    { href: "#", label: "RSS", icon: "rss" as const },
    { href: "#", label: "Email", icon: "mail" as const },
    { href: "#", label: "Discord", icon: "discord" as const },
  ],
};

// ─── Filter strip (sticky) ────────────────────────────────────────────────
export const filters = [
  { id: "all", label: "All", count: 128 },
  { id: "major", label: "Major", count: 14 },
  { id: "new", label: "New", count: 62 },
  { id: "improvements", label: "Improvements", count: 34 },
  { id: "fixes", label: "Fixes", count: 18 },
];

export const versionTag = "v2.4.0 · current";
export const versionRange = "· last 12 months";

// ─── Year jump nav ────────────────────────────────────────────────────────
export const years = [
  { y: "2026", n: 14, on: true },
  { y: "2025", n: 62 },
  { y: "2024", n: 38 },
  { y: "2023", n: 14 },
];

// ─── Right rail stats ─────────────────────────────────────────────────────
export const sideStats = {
  thisYear: {
    title: "This year",
    rows: [
      { label: "Releases", value: "14", accent: true },
      { label: "PRs merged", value: "312" },
      { label: "Contributors", value: "28" },
      { label: "Open issues closed", value: "186" },
    ],
  },
  cadence: {
    title: "Release cadence",
    bars: [32, 58, 22, 78, 44, 90, 28, 64, 38, 72, 50, 100],
    rangeStart: "May '25",
    rangeEnd: "Apr '26",
  },
  status: {
    title: "Status",
    rows: [
      { label: "All systems", value: "● operational", color: "green" as const },
      { label: "Uptime · 90d", value: "99.99%" },
      { label: "Last incident", value: "42d ago" },
    ],
  },
};

export const loadMore = "Load 23 more from 2026";
