/**
 * Global site config: brand, nav, footer, social.
 * Edit here and it propagates to <Nav />, <Footer /> and the document <title>.
 */

export const site = {
  name: "Sténtor",
  legalName: "Sténtor",
  title: "Sténtor — Surtitles, translation and audio description for live performance",
  description:
    "Sténtor brings surtitles, translation and audio description to live performance, with a focused workflow for rehearsal rooms, theatres and festivals.",
  url: "https://stentor.live",
  locale: "en",
  copyright: "© 2026 Sténtor.",
  // Footer status: "<prefix> · ● <regions>"
  statusPrefix: "Built for live performance",
  statusRegions: "surtitles, translation, audio description",
  footerTagline:
    "Surtitles, translation and audio description for live performance.",
  social: {
    github: "https://github.com/iliadV783/stentor-site",
    x: "#",
    discord: "#",
    rss: "#",
  },
} as const;

export type NavId = "features" | "docs" | "customers";

export const nav: { href: string; label: string; id: NavId }[] = [
  { href: "/features", label: "Features", id: "features" },
  { href: "/docs", label: "Workflow", id: "docs" },
  { href: "/customers", label: "For theatres", id: "customers" },
];

export const navCta = {
  primary: { href: "/contact", label: "Contact" },
  secondary: { href: "/about", label: "About" },
};

export type FooterGroup = {
  title: string;
  links: { href: string; label: string }[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/docs", label: "Workflow" },
      { href: "/customers", label: "For theatres" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { href: "/features", label: "Surtitles" },
      { href: "/features", label: "Translation" },
      { href: "/features", label: "Audio description" },
      { href: "/customers", label: "Festivals" },
    ],
  },
  {
    title: "Project",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Notes" },
      { href: "/changelog", label: "Updates" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];
