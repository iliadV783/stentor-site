/**
 * About page content. Update copy, swap stats, refresh team & timeline as
 * the company grows. Title fields accept inline HTML (`<em>`, `<br/>`).
 */

export type Stat = { value: string; suffix?: string; label: string };
export type Value = { number: string; title: string; description: string };
export type Milestone = { year: string; title: string; description: string };
export type TeamMember = { name: string; role: string; initial: string; bio: string };

const leonardoProfileUrl = "https://www.studium.unito.it/do/docenti.pl/Show?_id=lmancini";
const eticaProjectUrl = "https://unifind.unito.it/resource/project/MANL_PE_ATENEO_25_01";
const inlineLinkClass = "text-text underline decoration-stentor/60 underline-offset-4 hover:text-stentor transition-colors";
const leonardoProfileLink = `<a href="${leonardoProfileUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">Leonardo Mancini</a>`;
const eticaProjectLink = `<a href="${eticaProjectUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">ETICA</a>`;

export const about = {
  hero: {
    eyebrow: "About Sténtor",
    title:
      'Live performance needs <em class="not-italic text-stentor">live words</em>.<br/>For every audience.',
    description:
      "Sténtor is a cross-platform tool for surtitles, translation and audio description in live performance.",
    credit:
      `Created and developed by ${leonardoProfileLink} (University of Turin, Italy), within the public engagement project ${eticaProjectLink}.`,
  },

  story: {
    eyebrow: "Origin",
    title: "Why Sténtor exists",
    paragraphs: [
      "Sténtor starts from a practical problem: live performance often needs more than one layer of text. A production may need surtitles, translations, audio-description notes, operator cues, venue screens and audience phones — all while the show is happening in real time.",
      "The name refers to Stentor from Greek mythology: not as an image of combat, but as the figure remembered for a bronze voice. Sténtor turns that image into a theatre tool: not louder sound, but clearer transmission of words, languages and descriptions.",
      `The project is developed by ${leonardoProfileLink} (University of Turin, Italy) within the public engagement project ${eticaProjectLink}, as a research-driven software project for live performance. It keeps essential tools accessible and asks users to contribute feedback, usage notes, audience responses and research data that can help the software grow through real performances.`,
    ],
    pullQuote: {
      text: "Live performance text should travel clearly: from the script to the operator, from the stage to screens, from the room to each audience device.",
      author: "Sténtor",
      role: "Project principle",
    },
  },

  numbers: {
    title: "A different kind of software model",
    description:
      "Sténtor is built around access, research and live use rather than feature gates or enterprise tiers.",
    items: [
      { value: "3", label: "core layers: surtitles, translation, audio description" },
      { value: "∞", label: "projects, languages and cues across every plan" },
      { value: "3", label: "desktop platforms: macOS and Windows" },
      { value: "Free", label: "free download and activation" },
    ] as Stat[],
  },

  values: {
    eyebrow: "Principles",
    title: "What guides the project",
    description:
      "Sténtor is shaped by live rooms, rehearsal processes, audience experience and the need for practical tools that do not get in the way of performance.",
    items: [
      {
        number: "01",
        title: "Access without feature gates",
        description:
          "Core tools should remain available to artists, companies and venues alike. Pricing reflects context, not restricted access.",
      },
      {
        number: "02",
        title: "Built for live timing",
        description:
          "The operator view, cue structure and Live Sync model are designed around rehearsal rooms and performances, not generic document editing.",
      },
      {
        number: "03",
        title: "Audience devices matter",
        description:
          "Spectators can follow surtitles, translations and audio descriptions on their own phones, connected to the rhythm of the operator's cues.",
      },
      {
        number: "04",
        title: "Research grows through use",
        description:
          "Feedback, usage notes and audience responses help turn practical experience into better tools for live performance.",
      },
    ] as Value[],
  },

  timeline: {
    eyebrow: "Timeline",
    title: "How the project is taking shape",
    description: "A practical roadmap: from prototype to live use, research feedback and public release.",
    items: [
      {
        year: "0.1",
        title: "Desktop prototype",
        description:
          "A first desktop workflow for preparing projects, importing scripts, editing cues and managing surtitles, translations and notes.",
      },
      {
        year: "0.1.64",
        title: "Live Sync",
        description:
          "The operator view begins to connect live cueing with screens and audience phones, so spectators can follow the performance in sync.",
      },
      {
        year: "Beta",
        title: "Tests with real performances",
        description:
          "Companies, venues and spectators help evaluate the tool through rehearsals, live shows, feedback forms and usage observations.",
      },
      {
        year: "Public",
        title: "Public release and research exchange",
        description:
          "Sténtor moves toward a public release with free access, account-based activation and a clear research-feedback model.",
      },
      {
        year: "Next",
        title: "For theatres and festivals",
        description:
          "The project continues to grow around the needs of theatres, festivals, companies, translators, audio describers and live operators.",
      },
    ] as Milestone[],
  },

  team: {
    eyebrow: "Research-driven software",
    title: "Developed for theatre practice, shaped by research",
    description:
      "Sténtor is built for people who work with live performance text: theatre makers, surtitlers, translators, audio describers, operators, venues and festivals.",
    members: [
      { name: "Leonardo Mancini", role: "Creator and developer · University of Turin, Italy", initial: "LM", bio: "Developer of Sténtor and author of the project vision, working on tools for surtitles, translation, audio description and audience devices in live performance." },
      { name: "Performance text", role: "Scripts · cues · notes", initial: "PT", bio: "A single project can hold original text, translations, surtitles, audio-description notes and production metadata." },
      { name: "Live operation", role: "Operator view · Live Sync", initial: "LO", bio: "The operator advances cues during rehearsal or performance while screens and phones stay aligned with the live event." },
      { name: "Audience experience", role: "Phones · screens", initial: "AE", bio: "Spectators can connect with personal devices and choose the layer of text or description they need during the show." },
      { name: "Research feedback", role: "Usage · responses", initial: "RF", bio: "Feedback from creators and audiences helps improve the tool and understand how live-performance text is experienced." },
      { name: "Accessible distribution", role: "Free access model", initial: "AD", bio: "The project is built around free download, account-based activation and an accessible approach to software distribution." },
    ] as TeamMember[],
  },

  investors: {
    title: "Built around access and research",
    description:
      "Instead of traditional enterprise positioning, Sténtor is shaped by practical use, fair pricing and feedback from the field.",
    logos: [
      { name: "Accessible software" },
      { name: "Research-driven" },
      { name: "Live performance" },
      { name: "Audience feedback" },
      { name: "Free access" },
      { name: "Donations welcome" },
    ],
  },

  finalCta: {
    eyebrow: "Use it, test it, shape it",
    title: "Help Sténtor grow through real performances.",
    body: "Download the software, try it in rehearsal or in front of an audience, and share the feedback that helps turn practical theatre work into better tools.",
    ctas: [
      { label: "Start for free", href: "/signup", variant: "primary" as const },
      { label: "Contact", href: "/contact", variant: "ghost" as const },
    ],
  },
} as const;
