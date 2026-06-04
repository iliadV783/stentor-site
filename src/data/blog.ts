/**
 * Blog index page strings + static post metadata for Sténtor.
 * The blog is used as a research notebook: field notes, practice notes,
 * development reflections and documentation around live-performance text.
 */

export type BlogCategory = "research" | "practice" | "product" | "fieldnotes";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  readingTime: string;
  cover: "region-map" | "policy-hexagon" | "p95-ring" | "traffic-line-chart" | "iso-postgres" | "iso-types" | "iso-pulse" | "iso-deploy";
  featured?: boolean;
  author: {
    name: string;
    role: string;
    initials: string;
  };
};

const author = {
  name: "Leonardo Mancini",
  role: "Creator and developer of Sténtor",
  initials: "LM",
};

export const blog = {
  hero: {
    eyebrow: "Notebook",
    title: "Notes on live text, theatre and audience devices.",
    description:
      "Research notes, development updates and practical reflections on surtitles, translation, audio description and shared knowledge around live performance.",
    emailPlaceholder: "you@example.com",
    subscribeLabel: "Follow updates",
  },

  categories: [
    { id: "all", label: "All notes" },
    { id: "research", label: "Research" },
    { id: "practice", label: "Practice" },
    { id: "product", label: "Product" },
    { id: "fieldnotes", label: "Field notes" },
  ],

  categoryStyles: {
    research: {
      dot: "bg-blue-400",
      text: "text-blue-400",
      tag: "bg-blue-400/[0.08] text-blue-400 border-blue-400/25",
    },
    practice: {
      dot: "bg-red-500",
      text: "text-red-500",
      tag: "bg-red-500/[0.08] text-red-500 border-red-500/25",
    },
    product: {
      dot: "bg-amber-400",
      text: "text-amber-400",
      tag: "bg-amber-400/[0.08] text-amber-400 border-amber-400/25",
    },
    fieldnotes: {
      dot: "bg-green-400",
      text: "text-green-400",
      tag: "bg-green-400/[0.08] text-green-400 border-green-400/25",
    },
  } as const,

  posts: [
    {
      id: "why-stentor-starts-from-the-room",
      title: "Why Sténtor starts from the room",
      description:
        "A note on designing surtitles, translations and audio descriptions from the perspective of rehearsal rooms, live timing and audience presence.",
      date: "2026-06-05",
      category: "research",
      readingTime: "4 min read",
      cover: "region-map",
      featured: true,
      author,
    },
    {
      id: "same-tools-shared-responsibility",
      title: "Same tools, shared responsibility",
      description:
        "Why Sténtor uses a support and donation model instead of locking core theatre tools behind feature tiers.",
      date: "2026-06-03",
      category: "practice",
      readingTime: "3 min read",
      cover: "policy-hexagon",
      author,
    },
    {
      id: "audience-phones-as-performance-infrastructure",
      title: "Audience phones as performance infrastructure",
      description:
        "Personal devices can become part of a live-text system without replacing the theatre: they extend how audiences receive language, access and context.",
      date: "2026-06-01",
      category: "research",
      readingTime: "5 min read",
      cover: "p95-ring",
      author,
    },
    {
      id: "audio-description-next-to-the-script",
      title: "Keeping audio description next to the script",
      description:
        "Audio-description notes are easier to prepare, revise and cue when they remain attached to the performance text and its live structure.",
      date: "2026-05-29",
      category: "practice",
      readingTime: "4 min read",
      cover: "iso-types",
      author,
    },
    {
      id: "live-sync-notes-from-a-local-network-test",
      title: "Live Sync: notes from a local-network test",
      description:
        "Early observations on connecting operator view, screens and audience phones over a local network in a room setting.",
      date: "2026-05-26",
      category: "fieldnotes",
      readingTime: "3 min read",
      cover: "traffic-line-chart",
      author,
    },
    {
      id: "from-word-files-to-cues",
      title: "From Word files to cues",
      description:
        "A practical development note on importing performance scripts and preserving useful theatrical structure without forcing a rigid format.",
      date: "2026-05-24",
      category: "product",
      readingTime: "4 min read",
      cover: "iso-postgres",
      author,
    },
  ] satisfies BlogPost[],

  loadMore: "More notes soon",
  relatedTitle: "Keep reading",

  finalCta: {
    eyebrow: "Share field notes",
    title: "Used Sténtor in a room? Tell us what happened.",
    body: "Short notes from rehearsals, audience tests and live performances help shape the software and the research behind it.",
    placeholder: "you@example.com",
    submitLabel: "Stay in touch",
    fineprint: "We use your email only for Sténtor updates and research-related communication.",
  },
} as const;
