/**
 * Changelog page content for Sténtor.
 */

export const hero = {
  eyebrow: "Project log",
  title: "What changed in Sténtor.",
  description:
    "A public log of the software as it grows: Apple beta distribution, Windows development, Live Sync, audience web app, import/export, audio-description tools and research-facing improvements.",
  emailPlaceholder: "you@example.com",
  subscribeLabel: "Follow updates",
  subscribeLinks: [
    { href: "#", label: "RSS", icon: "rss" as const },
    { href: "mailto:info@stentor.live?subject=Sténtor changelog", label: "Email", icon: "mail" as const },
    { href: "/contact", label: "Feedback", icon: "discord" as const },
  ],
};

export const filters = [
  { id: "all", label: "All", count: 11 },
  { id: "major", label: "Milestones", count: 7 },
  { id: "new", label: "New", count: 5 },
  { id: "improvements", label: "Improvements", count: 7 },
  { id: "fixes", label: "Fixes", count: 5 },
];

export const versionTag = "v0.1.74 · Phase 1 + cleaner production";
export const versionRange = "· current prototype";

export const years = [
  { y: "2026", n: 11, on: true },
  { y: "Research", n: 1 },
];

export const entries = [
  {
    version: "0.1.74",
    date: "2026-06-20",
    type: "major",
    title: "Phase 1 stabilisation and cleaner production workflow",
    body: "The latest work closes the first development phase of the Apple prototype with a cleaner production interface, a more readable import preview, stronger theatre-script handling and a clearer path toward beta collaborators and future cloud synchronisation.",
    changes: {
      new: [
        { title: "Phase 1 baseline", body: "The Apple/macOS prototype now has a more stable baseline for scripts, languages, audience screens, audio descriptions, live cues and TestFlight distribution." },
        { title: "Audience-question workflow", body: "The public questions area is moving toward one unified list with explicit General, Surtitles and Audio descriptions categories, so operators can see exactly what will appear on audience devices." },
      ],
      improvements: [
        { title: "Cleaner Production screen", body: "The unused public page label field has been removed from Production, reducing visual noise and avoiding a setting that did not create a clear visible result." },
        { title: "Import preview readability", body: "The import preview layout is being corrected so the script is no longer visually clipped on all four sides during review." },
        { title: "Project-package hygiene", body: "The project archive is kept lighter by excluding build artefacts, caches and generated material that are not needed for source development." },
        { title: "Roadmap clarified", body: "The next work is now framed around DOCX import stabilisation, Text editor performance, accessible language variants, audience screens, public questions and cloud-ready collaboration." },
      ],
      fixes: [
        { title: "Production field confusion", body: "A non-essential label that was enabled in the interface but not visible in the actual public result has been removed from the operator workflow." },
        { title: "Long-script focus", body: "Performance issues with large scripts remain a priority, with the goal of keeping scrolling and line selection immediate during rehearsal and live preparation." },
      ],
    },
  },
  {
    version: "0.1.73",
    date: "2026-06-19",
    type: "major",
    title: "TestFlight build compatible with macOS Monterey and Intel Macs",
    body: "Sténtor now has a universal macOS TestFlight build designed to run on both Apple Silicon and Intel Macs, with the minimum deployment lowered to macOS Monterey 12.4. Recent Macs keep the modern SwiftUI refinements automatically, while older supported systems use compatible fallbacks without losing the core theatre workflow.",
    changes: {
      improvements: [
        { title: "Universal macOS archive", body: "The macOS archive now includes both Apple Silicon and Intel architectures, so collaborators can test the same build across newer Macs and Intel machines such as 2018 models." },
        { title: "Monterey compatibility", body: "The deployment target has been lowered to macOS 12.4, replacing or guarding SwiftUI APIs that only exist on macOS 13 or macOS 14." },
        { title: "Progressive interface refinements", body: "Modern visual details such as scroll behaviour, hidden scroll backgrounds and letter spacing are applied only when the running macOS version supports them." },
        { title: "Collapsible sidebar kept", body: "The compact icon-only sidebar remains available and automatically protects the interface when the window becomes narrow." },
      ],
      fixes: [
        { title: "Recent project permissions", body: "Recent .stn projects are reopened through persistent macOS security-scoped bookmarks instead of relying only on saved file paths." },
        { title: "Archive configuration", body: "Release settings were corrected so TestFlight receives a universal build rather than an Apple Silicon-only archive." },
      ],
    },
  },
  {
    version: "0.1.72",
    date: "2026-06-19",
    type: "major",
    title: "Accessible variants for every language, line search and tighter live control",
    body: "The June 19 work strengthened Sténtor as a rehearsal and room tool: accessible language variants for every project language, instant line search, more controllable audience questions and cleaner live projection for technical cues and material that should not reach spectators.",
    changes: {
      new: [
        { title: "Accessible language variants", body: "The Languages screen now separates each base language from its accessible variant: it can generate it+, en can generate en+ and fr can generate fr+ when the operator enables + accessible." },
        { title: "Editor for + versions", body: "In the Text page, the operator can edit the accessible version of a line for any active language, without treating + versions as separate languages in project configuration." },
        { title: "Line search", body: "A search function has been introduced in the Text editor to quickly find lines, cues and passages during preparation and revision." },
        { title: "More controllable audience questions", body: "The Home page is moving toward one unified question list, with General, Surtitles and Audio descriptions categories that can be selected and ordered for real operator use." },
      ],
      improvements: [
        { title: "+ versions not forced at startup", body: "In the base project, the + accessible option remains visible for languages, but it is not already selected on first installation: the operator decides when to enable it." },
        { title: "More coherent language codes", body: "Sténtor uses short standard codes such as it, en and fr, keeping the internal + convention only for accessible content variants." },
        { title: "Audience smartphones", body: "When an accessible variant is enabled, the audience can also see the corresponding choice, such as IT+, EN+ or FR+ alongside the base languages." },
        { title: "Extended parenthesis omission", body: "The option to omit text in parentheses has been extended to square brackets, so internal notes can be excluded from spoken lines when needed." },
      ],
      fixes: [
        { title: "Light cues not projected", body: "Technical light cues are no longer treated as text to show spectators: during a Lights indication, the audience screen remains clean." },
        { title: "Separation between setup and content", body: "The Languages screen configures which languages and variants are available, while the actual text for variants such as it+, en+ or fr+ is edited in the Text editor." },
      ],
    },
  },
  {
    version: "0.1.71",
    date: "2026-06-18",
    type: "major",
    title: "DOCX import becomes smarter for theatre scripts",
    body: "The June 18 work focused on the native Apple parser: cleaner DOCX import, better audio-description handling, more natural line breaks and the first performance strategy for very long scripts.",
    changes: {
      improvements: [
        { title: "Audio-description recognition", body: "Markers such as AD are treated as audio-description cues rather than ordinary character names, while imported audio-description text is preserved in the right field." },
        { title: "Cleaner character detection", body: "Technical cues such as Light, Lights and stage directions are less likely to be mistaken for characters during DOCX import." },
        { title: "More natural line splitting", body: "Automatic line breaks aim for a more balanced distribution, avoiding awkward cuts and respecting the rhythm of theatrical text." },
        { title: "Parenthetical text option", body: "A parser option was prepared so text in parentheses can be omitted from spoken lines when the production needs to separate dialogue from notes." },
      ],
      fixes: [
        { title: "Long-script responsiveness", body: "Performance issues in the Text editor with scripts of more than 1300 lines were analysed, with the goal of keeping selection, clicking and scrolling immediate." },
      ],
    },
  },
  {
    version: "0.1.70",
    date: "2026-06-17",
    type: "major",
    title: "Apple beta distribution and Windows development move forward",
    body: "Sténtor advances on two fronts: the Apple version is being prepared for TestFlight distribution, while a native Windows edition is now in active C# development.",
    changes: {
      new: [
        { title: "Apple TestFlight path", body: "The macOS/iOS work now includes the publication track for beta testing through Apple TestFlight." },
        { title: "Windows C# edition", body: "A dedicated Windows version is in development with C#, moving beyond mockups into a real Windows 11-style desktop interface." },
        { title: "Accessible script checks", body: "The text editor direction now includes sober control warnings for long surtitles, helping operators keep lines within readable live limits." },
      ],
      improvements: [
        { title: "Character and AD import logic", body: "Script import work is being refined so markers such as AD can be treated as audio-description material rather than ordinary character names." },
        { title: "Cross-platform roadmap", body: "The product direction is clearer: Apple beta testing, Windows desktop development and audience devices remain part of one coherent live-accessibility ecosystem." },
      ],
    },
  },
  {
    version: "0.1.64",
    date: "2026-06-05",
    type: "major",
    title: "Live Sync becomes the centre of the room workflow",
    body: "The current prototype connects the operator view, screens and audience phones around a shared live cue state.",
    changes: {
      new: [
        { title: "Audience phones", body: "Spectators can connect with their own smartphone and follow surtitles, translations or audio descriptions." },
        { title: "Local room mode", body: "The project can be shared over a local network for theatre tests and rehearsals." },
      ],
      improvements: [
        { title: "Operator focus", body: "The live view is being simplified around current cue, next cue, blackout and connected devices." },
      ],
    },
  },
  {
    version: "0.1.61",
    date: "2026-06-02",
    type: "minor",
    title: "Audience web app refined for performance use",
    body: "The audience page moves toward a cleaner live view, especially on mobile devices and in landscape orientation.",
    changes: {
      improvements: [
        { title: "Reduced interface noise", body: "Less technical status text during the show, with settings and connection state kept discreet." },
        { title: "Language switching", body: "Interface language and subtitle language are treated as part of the audience experience." },
      ],
      fixes: [
        { title: "Mobile viewport", body: "The bottom of the page is adjusted to avoid being hidden by browser controls on smartphones." },
      ],
    },
  },
  {
    version: "0.1.50",
    date: "2026-05-30",
    type: "minor",
    title: "Script preparation and metadata model",
    body: "Project structure now reflects real production needs: title, company or collective, languages, cues, notes and audio-description material.",
    changes: {
      new: [
        { title: "Project metadata", body: "Title and company/collective are available as project-level fields." },
        { title: "Empty speaker fields", body: "Speaker or character can remain blank when it is not useful for the script." },
      ],
      improvements: [
        { title: "Central script panel", body: "The script workspace is being adjusted to use the available width more effectively." },
      ],
    },
  },
  {
    version: "0.1.40",
    date: "2026-05-26",
    type: "major",
    title: "Desktop-first direction confirmed",
    body: "Sténtor is being developed as a desktop app for theatre work, with web views for screens and audience devices.",
    changes: {
      new: [
        { title: "Cross-platform direction", body: "The target is a desktop-first tool for macOS, Windows and Linux." },
        { title: "Room-oriented architecture", body: "The app is shaped around rehearsal rooms, venues, local networks and live operation." },
      ],
    },
  },
  {
    version: "0.1.30",
    date: "2026-05-22",
    type: "minor",
    title: "Import and export groundwork",
    body: "Early import/export work focuses on practical theatrical formats rather than forcing users into a single source format.",
    changes: {
      new: [
        { title: "Supported imports", body: "Word, TXT, SRT, WebVTT, CSV and JSON are part of the preparation workflow." },
      ],
      improvements: [
        { title: "Export-ready scripts", body: "Exports are considered as rehearsal, archive, touring and research materials." },
      ],
    },
  },
  {
    version: "0.1.20",
    date: "2026-05-18",
    type: "patch",
    title: "Research feedback loop added to the project logic",
    body: "The website and workflow now make feedback, questionnaires and field notes part of the exchange around Sténtor.",
    changes: {
      improvements: [
        { title: "Shared knowledge", body: "Use of the software is connected to practical feedback from operators, audiences, artists and venues." },
      ],
    },
  },
];

export const sideStats = {
  thisYear: {
    title: "Current focus",
    rows: [
      { label: "Prototype", value: "0.1.74", accent: true },
      { label: "macOS", value: "12.4+ universal" },
      { label: "Workflow", value: "Phase 1 stable" },
      { label: "Next", value: "cloud sync + beta" },
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
      { label: "Apple app", value: "● TestFlight universal", color: "green" as const },
      { label: "Compatibility", value: "Monterey 12.4+" },
      { label: "Next priority", value: "cloud-ready collaboration" },
    ],
  },
};

export const loadMore = "More project notes soon";