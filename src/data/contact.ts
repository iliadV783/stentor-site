/**
 * Contact page content.
 * icon values map to SVG filenames under src/assets/icons/.
 */

export type ContactChannel = {
  icon: "info" | "mail" | "discord" | "shield-check";
  label: string;
  description: string;
  href: string;
  cta: string;
};

export type ContactDepartment = {
  value: string;
  label: string;
};

export const contact = {
  eyebrow: "Contact",
  title: "Share your experience with Sténtor.",
  description:
    "Sténtor grows through real use. If you test the software in rehearsal, in a theatre, with an audience or inside a research context, your feedback, questionnaire responses and practical notes are extremely valuable.",

  channels: [
    {
      icon: "info",
      label: "Questionnaires",
      description:
        "Use this channel to share structured feedback after a rehearsal, public test, workshop or live performance.",
      href: "mailto:info@stentor.live?subject=Sténtor feedback questionnaire",
      cta: "Request a questionnaire",
    },
    {
      icon: "mail",
      label: "Research feedback",
      description:
        "Tell us what happened in the room: what worked, what was unclear, what spectators used and what should improve.",
      href: "mailto:leonardo.mancini@unito.it?subject=Sténtor research feedback",
      cta: "leonardo.mancini@unito.it",
    },
    {
      icon: "discord",
      label: "User experience",
      description:
        "Share comments from operators, surtitlers, translators, audio describers, technicians, theatre staff or spectators.",
      href: "mailto:info@stentor.live?subject=Sténtor user experience",
      cta: "info@stentor.live",
    },
    {
      icon: "shield-check",
      label: "Technical notes",
      description:
        "Report installation issues, Live Sync behaviour, import or export problems, device compatibility and local-network tests.",
      href: "mailto:info@stentor.live?subject=Sténtor technical notes",
      cta: "Send technical notes",
    },
  ] as ContactChannel[],

  form: {
    title: "Send feedback",
    description: "Use this form for comments, test notes or questionnaire follow-up.",
    namePlaceholder: "Your name",
    emailPlaceholder: "name@example.com",
    messagePlaceholder:
      "Tell us how you used Sténtor, who was involved, what worked, what did not, and what feedback came from operators or audience members.",
    submitLabel: "Send feedback",
    successTitle: "Feedback received",
    successBody:
      "Thank you. Your experience helps us improve Sténtor and understand how live-performance text is used in real rooms.",
    departments: [
      { value: "questionnaire", label: "Questionnaire / structured feedback" },
      { value: "performance", label: "Rehearsal or live performance test" },
      { value: "audience", label: "Audience feedback" },
      { value: "operator", label: "Operator / technical notes" },
      { value: "research", label: "Research collaboration" },
      { value: "other", label: "Other" },
    ] as ContactDepartment[],
  },

  enterprise: {
    eyebrow: "Research exchange",
    title: "Use the software, share the experience.",
    description:
      "Instead of a sales process, Sténtor asks users to contribute observations, questionnaires and feedback from real use. Every response helps improve the tool and the research behind it.",
    cta: { label: "Send feedback", href: "mailto:info@stentor.live?subject=Sténtor feedback" },
    stats: [
      { value: "Use", label: "try it in context" },
      { value: "Share", label: "send feedback" },
      { value: "Grow", label: "improve the tool" },
    ],
  },
} as const;
