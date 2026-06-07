/**
 * Workflow navigation: sidebar groups + on-this-page TOC.
 * The body of the Workflow page lives in docs.astro.
 */

export type DocsSidebarItem = {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  badgeNew?: boolean;
};

export type DocsSidebarGroup = {
  title: string;
  items: DocsSidebarItem[];
};

export const sidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Start here",
    items: [
      { label: "Overview", href: "#overview", active: true },
      { label: "What Sténtor is", href: "#what-it-is" },
      { label: "Current version", href: "#version", badge: "0.3.40", badgeNew: true },
    ],
  },
  {
    title: "Prepare",
    items: [
      { label: "Projects", href: "#projects" },
      { label: "Text and languages", href: "#text" },
      { label: "Audio description", href: "#audio" },
      { label: "Screens", href: "#screens" },
    ],
  },
  {
    title: "Live room",
    items: [
      { label: "Stage desk", href: "#stage-desk" },
      { label: "Audience phones", href: "#audience", badge: "Live Sync" },
      { label: "Foyer QR", href: "#foyer" },
      { label: "Local network", href: "#network" },
    ],
  },
  {
    title: "Files and builds",
    items: [
      { label: "Import and export", href: "#files" },
      { label: "Desktop builds", href: "#desktop" },
      { label: "What is still planned", href: "#planned" },
    ],
  },
];

export const tocItems = [
  { label: "Overview", href: "#overview", active: true },
  { label: "What Sténtor is", href: "#what-it-is" },
  { label: "Current version", href: "#version" },
  { label: "Projects", href: "#projects" },
  { label: "Text and languages", href: "#text" },
  { label: "Audio description", href: "#audio" },
  { label: "Screens", href: "#screens" },
  { label: "Stage desk", href: "#stage-desk" },
  { label: "Audience phones", href: "#audience" },
  { label: "Foyer QR", href: "#foyer" },
  { label: "Local network", href: "#network" },
  { label: "Import and export", href: "#files" },
  { label: "Desktop builds", href: "#desktop" },
  { label: "Planned", href: "#planned" },
];

export const tocActions = [
  { href: "/download", label: "Download Sténtor", icon: "playground" as const },
  { href: "/contact", label: "Share field notes", icon: "message-circle" as const },
  { href: "/features", label: "See features", icon: "edit" as const },
];

export const pageMeta = {
  breadcrumb: [
    { href: "#", label: "Docs" },
    { href: "#", label: "Workflow" },
    { label: "Sténtor 0.3.40" },
  ],
  maintainer: "Maintained by Leonardo Mancini",
  lastUpdated: "Based on Sténtor Desktop 0.3.40",
  readingTime: "Reading time: 8 min",
};
