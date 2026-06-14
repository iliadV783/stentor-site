/**
 * Documentation navigation: sidebar groups + on-this-page TOC.
 * The body of the documentation page lives in docs.astro.
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
      { label: "Beta status", href: "#version", badge: "macOS", badgeNew: true },
    ],
  },
  {
    title: "Prepare",
    items: [
      { label: "Projects", href: "#projects" },
      { label: "Import text", href: "#import", badge: "New" },
      { label: "Text and languages", href: "#text" },
      { label: "Audio description", href: "#audio" },
    ],
  },
  {
    title: "Operate",
    items: [
      { label: "Timeline", href: "#timeline" },
      { label: "Regia", href: "#stage-desk" },
      { label: "Screens", href: "#screens" },
      { label: "Audience views", href: "#audience" },
    ],
  },
  {
    title: "Files and release",
    items: [
      { label: "Import and export", href: "#files" },
      { label: "macOS app", href: "#desktop" },
      { label: "What is still planned", href: "#planned" },
    ],
  },
];

export const tocItems = [
  { label: "Overview", href: "#overview", active: true },
  { label: "What Sténtor is", href: "#what-it-is" },
  { label: "Beta status", href: "#version" },
  { label: "Projects", href: "#projects" },
  { label: "Import text", href: "#import" },
  { label: "Text and languages", href: "#text" },
  { label: "Audio description", href: "#audio" },
  { label: "Timeline", href: "#timeline" },
  { label: "Regia", href: "#stage-desk" },
  { label: "Screens", href: "#screens" },
  { label: "Audience views", href: "#audience" },
  { label: "Import and export", href: "#files" },
  { label: "macOS app", href: "#desktop" },
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
    { href: "#", label: "Product" },
    { label: "Sténtor" },
  ],
  maintainer: "Sténtor documentation",
  lastUpdated: "Updated for the desktop beta",
  readingTime: "Reading time: 7 min",
};
