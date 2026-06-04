/**
 * Blog index page strings + category metadata.
 * Posts themselves live as MDX files in `src/content/blog/`.
 */

export type BlogCategory = "engineering" | "product" | "company" | "tutorial";

export const blog = {
  hero: {
    eyebrow: "Blog",
    title: "Notes from the team",
    description:
      "Engineering deep-dives, product launches, and the occasional manifesto. We try to write the kind of posts we'd want to read.",
    emailPlaceholder: "you@company.com",
    subscribeLabel: "Subscribe",
  },

  // Used by both the index filter row and the post-page category badges.
  categories: [
    { id: "all", label: "All posts" },
    { id: "engineering", label: "Engineering" },
    { id: "product", label: "Product" },
    { id: "company", label: "Company" },
    { id: "tutorial", label: "Tutorials" },
  ],

  // Maps category → tailwind classes (dot + text + ring).
  categoryStyles: {
    engineering: {
      dot: "bg-blue-400",
      text: "text-blue-400",
      tag: "bg-blue-400/[0.08] text-blue-400 border-blue-400/25",
    },
    product: {
      dot: "bg-red-500",
      text: "text-red-500",
      tag: "bg-red-500/[0.08] text-red-500 border-red-500/25",
    },
    company: {
      dot: "bg-amber-400",
      text: "text-amber-400",
      tag: "bg-amber-400/[0.08] text-amber-400 border-amber-400/25",
    },
    tutorial: {
      dot: "bg-green-400",
      text: "text-green-400",
      tag: "bg-green-400/[0.08] text-green-400 border-green-400/25",
    },
  } as const,

  loadMore: "Load more posts",

  relatedTitle: "Keep reading",

  finalCta: {
    eyebrow: "Stay in the loop",
    title: "One email a month. No filler.",
    body: "Every post we publish, plus a short note from the team about what we're working on. Unsubscribe in one click.",
    placeholder: "you@company.com",
    submitLabel: "Subscribe",
    fineprint: "We use your email only for the newsletter. See our Privacy Policy.",
  },
} as const;
