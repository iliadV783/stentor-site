/**
 * Workflow navigation: sidebar groups + on-this-page TOC.
 * The body of the Workflow page currently lives in docs.astro;
 * this file keeps the page navigation and metadata in one place.
 */

export type DocsSidebarItem = {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  // When true the badge uses the accent color (e.g. "new")
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
      { label: "Overview", href: "#quickstart", active: true },
      { label: "What you need", href: "#prerequisites" },
      { label: "Install and open", href: "#install" },
      { label: "Create a project", href: "#init" },
    ],
  },
  {
    title: "Prepare",
    items: [
      { label: "Import a script", href: "#init" },
      { label: "Project metadata", href: "#init", badge: "new", badgeNew: true },
      { label: "Languages", href: "#define-model" },
      { label: "Cues and markers", href: "#define-model" },
      { label: "Audio descriptions", href: "#define-model" },
    ],
  },
  {
    title: "Cue live",
    items: [
      { label: "Operator view", href: "#endpoints" },
      { label: "Screens", href: "#endpoints" },
      { label: "Audience phones", href: "#deploy", badge: "Live Sync" },
      { label: "Blackout and timing", href: "#endpoints" },
    ],
  },
  {
    title: "Share and export",
    items: [
      { label: "Save projects", href: "#install" },
      { label: "Export scripts", href: "#define-model" },
      { label: "Offline show package", href: "#deploy" },
      { label: "Research feedback", href: "#feedback" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "Keyboard shortcuts", href: "#endpoints" },
      { label: "Supported imports", href: "#init" },
      { label: "Local network setup", href: "#deploy" },
      { label: "Desktop builds", href: "#install" },
    ],
  },
];

export const tocItems = [
  { label: "What you need", href: "#prerequisites" },
  { label: "1. Install and open", href: "#install", active: true },
  { label: "2. Create or import a project", href: "#init" },
  { label: "3. Prepare cues and layers", href: "#define-model" },
  { label: "4. Cue the show", href: "#endpoints" },
  { label: "Operator view", href: "#endpoints", sub: true },
  { label: "Screens and audience phones", href: "#endpoints", sub: true },
  { label: "5. Run Live Sync in the room", href: "#deploy" },
  { label: "6. Share feedback", href: "#feedback" },
];

// Right-rail action links shown below the TOC.
export const tocActions = [
  { href: "#feedback", label: "Send feedback", icon: "message-circle" as const },
  { href: "/features", label: "See features", icon: "playground" as const },
  { href: "/about", label: "About the project", icon: "edit" as const },
];

// Page metadata shown above the H1.
export const pageMeta = {
  breadcrumb: [
    { href: "#", label: "Docs" },
    { href: "#", label: "Workflow" },
    { label: "Quickstart" },
  ],
  maintainer: "Maintained by Leonardo Mancini",
  lastUpdated: "Based on Sténtor 0.3.6",
  readingTime: "Reading time: 7 min",
};
