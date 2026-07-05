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
  { id: "all", label: "All", count: 12 },
  { id: "major", label: "Milestones", count: 8 },
  { id: "new", label: "New", count: 6 },
  { id: "improvements", label: "Improvements", count: 8 },
  { id: "fixes", label: "Fixes", count: 6 },
];

export const versionTag = "v0.1.78 · More reliable direction, audience and audio descriptions";
export const versionRange = "· current prototype";

export const years = [
  { y: "2026", n: 12, on: true },
  { y: "Research", n: 1 },
];

export const entries = [
  {
    version: "0.1.78",
    date: "2026-07-05",
    type: "major",
    title: "Professional direction, a steadier audience page and more reliable audio descriptions",
    body: "This build consolidates Sténtor for rehearsal and live performance use. The work focuses on Direction, the Audience page, audio descriptions, questionnaires, show preparation and macOS build stability.",
    changes: {
      new: [
        { title: "AD monitor in Direction", body: "Direction now shows a dedicated audio-description card with cue status, connected recipients, listening devices and local controls." },
        { title: "Show preparation centre", body: "Direction brings together checks for script, surtitles, audio descriptions, server, connected devices and the AD channel." },
        { title: "Final audience screen", body: "At the end of the show, the Audience page displays a dedicated closing screen with a questionnaire prompt and the live interface hidden." },
        { title: "Split and merge lines", body: "The Text editor adds commands to split a line at the cursor or merge it with the next line." },
      ],
      improvements: [
        { title: "Clearer live Direction", body: "Cue scrolling keeps the operating point of the show clearer and better separates live advance, manual clicks and search." },
        { title: "Preloaded audio descriptions", body: "The Audience page receives a manifest of available audio files, tries to download them before use and prefers the local copy when available." },
        { title: "Device acknowledgements", body: "Phones can report AD cue receipt, start and completion, helping Direction separate delivery, network and playback issues." },
        { title: "More flexible audience modes", body: "Spectators can change mode during the live flow and, when the project allows it, use surtitles and audio description together." },
        { title: "Search returns to context", body: "In Direction and the Editor, double-clicking a result reopens the full script at the real position of the selected line." },
        { title: "Broader undo", body: "Command-Z covers more script operations, including text, row type, notes, local styles, moves, split and merge." },
        { title: "More detailed network monitor", body: "Direction exposes network quality, latency, missing acknowledgements, synced devices, reconnects and resyncs." },
        { title: "More configurable questionnaires", body: "Questionnaires can include a title and introductory text, making them easier to adapt to the show or research context." },
        { title: "Cleaner project archive", body: "Opening the same unchanged external .stn file repeatedly no longer creates duplicate managed copies." },
      ],
      fixes: [
        { title: "Post-show state reset", body: "The show-ended screen no longer remains active when opening, importing or creating another project." },
        { title: "Questionnaire only after explicit ending", body: "The Audience page no longer infers the end of the show simply from reaching the last cue." },
        { title: "Clean show reopening", body: "When the show is reopened, end-of-show states and captions are removed." },
        { title: "Accessible colours corrected", body: "Standard Italian remains neutral, while character colours apply to the accessible Italiano+ variant." },
        { title: "Direction sidebar no longer clipped", body: "Side panels can scroll vertically and remain accessible on shorter windows." },
        { title: "macOS 12 compatibility", body: "The System panel uses components compatible with the macOS 12 target, avoiding NavigationStack-related errors." },
        { title: "WebRTC framework fixed", body: "The symbolic structure of WebRTC.xcframework is repaired for macOS and Mac Catalyst." },
      ],
    },
  },
  {
    version: "0.1.74",
    date: "2026-06-20",
    type: "major",
    title: "Live audio description introduced",
    body: "Sténtor introduces a new live audio-description mode alongside recorded audio descriptions. A first operating framework has been set up to prepare, distinguish and control audio cues during the performance, keeping them separate from spoken lines, lights, stage notes and projected content.",
    changes: {
      new: [
        { title: "Live audio description", body: "In addition to recorded audio files, Sténtor can now manage cues designed to be read or triggered live by the operator during the performance." },
        { title: "Dedicated AD framework", body: "A first functional structure has been built to recognise, organise and control audio descriptions as an independent live channel." },
      ],
      improvements: [
        { title: "Clearer AD channel", body: "Audio descriptions are treated as material dedicated to the audio channel, not as ordinary script lines or character names." },
        { title: "Smoother live control", body: "The operator view helps locate and trigger audio-description cues at the right moment during the show." },
        { title: "Simpler audience access", body: "Access to audio descriptions on audience devices is made more direct, reducing the steps needed to listen." },
      ],
      fixes: [
        { title: "Separated from technical cues", body: "Lights, stage directions and internal notes remain distinct from content intended for audience screens or headphone listening." },
      ],
    },
  },
  { version: "0.1.73", date: "2026-06-19", type: "major", title: "TestFlight build compatible with macOS Monterey and Intel Macs", body: "Sténtor now has a universal macOS TestFlight build designed to run on both Apple Silicon and Intel Macs, with the minimum deployment lowered to macOS Monterey 12.4.", changes: { improvements: [ { title: "Universal macOS archive", body: "The macOS archive now includes both Apple Silicon and Intel architectures." }, { title: "Monterey compatibility", body: "The deployment target has been lowered to macOS 12.4." } ], fixes: [ { title: "Recent project permissions", body: "Recent .stn projects are reopened through persistent macOS security-scoped bookmarks." }, { title: "Archive configuration", body: "Release settings were corrected for a universal TestFlight build." } ] } },
  { version: "0.1.72", date: "2026-06-19", type: "major", title: "Accessible variants, line search and tighter live control", body: "Accessible language variants, instant line search, more controllable audience questions and cleaner live projection.", changes: { new: [ { title: "Accessible language variants", body: "Each base language can generate its accessible + variant." }, { title: "Editor for + versions", body: "Accessible versions can be edited in the Text page." }, { title: "Line search", body: "The Text editor can quickly find lines, cues and passages." } ], improvements: [ { title: "Audience smartphones", body: "Enabled accessible variants can appear alongside base languages." } ], fixes: [ { title: "Light cues not projected", body: "Technical light cues are no longer shown to spectators." } ] } },
  { version: "0.1.71", date: "2026-06-18", type: "major", title: "DOCX import becomes smarter for theatre scripts", body: "Cleaner DOCX import, better audio-description handling, more natural line breaks and first performance strategies for very long scripts.", changes: { improvements: [ { title: "Audio-description recognition", body: "Markers such as AD are treated as audio-description cues." }, { title: "Cleaner character detection", body: "Technical cues are less likely to be mistaken for character names." } ], fixes: [ { title: "Long-script responsiveness", body: "Text editor performance with scripts above 1300 lines was analysed." } ] } },
  { version: "0.1.70", date: "2026-06-17", type: "major", title: "Apple beta distribution and Windows development move forward", body: "The Apple version is being prepared for TestFlight distribution, while a native Windows edition is in active development.", changes: { new: [ { title: "Apple TestFlight path", body: "The macOS/iOS work now includes the publication track for Apple TestFlight." }, { title: "Windows edition", body: "A dedicated Windows version is in development." } ], improvements: [ { title: "Cross-platform roadmap", body: "Apple, Windows and audience devices remain part of one live-accessibility ecosystem." } ] } },
  { version: "0.1.64", date: "2026-06-05", type: "major", title: "Live Sync becomes the centre of the room workflow", body: "The current prototype connects the operator view, screens and audience phones around a shared live cue state.", changes: { new: [ { title: "Audience phones", body: "Spectators can connect with their own smartphone and follow surtitles, translations or audio descriptions." } ], improvements: [ { title: "Operator focus", body: "The live view is simplified around the current cue." } ] } },
  { version: "0.1.61", date: "2026-06-02", type: "minor", title: "Audience web app refined for performance use", body: "The audience page moves toward a cleaner live view.", changes: { improvements: [ { title: "Reduced interface noise", body: "Less technical status text during the show." } ], fixes: [ { title: "Mobile viewport", body: "The bottom of the page is adjusted for smartphones." } ] } },
  { version: "0.1.50", date: "2026-05-30", type: "minor", title: "Script preparation and metadata model", body: "Title, company or collective, languages, cues, notes and audio-description material enter the project model.", changes: { new: [ { title: "Project metadata", body: "Title and company/collective are available as project-level fields." } ], improvements: [ { title: "Central script panel", body: "The script workspace uses the available width more effectively." } ] } },
  { version: "0.1.40", date: "2026-05-26", type: "major", title: "Desktop-first direction confirmed", body: "Sténtor is being developed as a desktop app for theatre work.", changes: { new: [ { title: "Cross-platform direction", body: "The target is a desktop-first tool for macOS, Windows and Linux." } ] } },
  { version: "0.1.30", date: "2026-05-22", type: "minor", title: "Import and export groundwork", body: "Early import/export work focuses on practical theatrical formats.", changes: { new: [ { title: "Supported imports", body: "Word, TXT, SRT, WebVTT, CSV and JSON are part of the preparation workflow." } ], improvements: [ { title: "Export-ready scripts", body: "Exports are considered as rehearsal, archive, touring and research materials." } ] } },
  { version: "0.1.20", date: "2026-05-18", type: "patch", title: "Research feedback loop added to the project logic", body: "Feedback, questionnaires and field notes become part of the exchange around Sténtor.", changes: { improvements: [ { title: "Shared knowledge", body: "Use of the software is connected to practical feedback from operators, audiences, artists and venues." } ] } },
];

export const sideStats = {
  thisYear: {
    title: "Current focus",
    rows: [
      { label: "Prototype", value: "0.1.78", accent: true },
      { label: "macOS", value: "12.4+ universal" },
      { label: "Workflow", value: "Direction, audience and AD" },
      { label: "Next", value: "live reliability" },
    ],
  },
  cadence: {
    title: "Development rhythm",
    bars: [28, 46, 34, 62, 54, 70, 48, 76, 66, 88, 58, 100],
    rangeStart: "May '26",
    rangeEnd: "Jul '26",
  },
  status: {
    title: "Status",
    rows: [
      { label: "Apple app", value: "● TestFlight updated", color: "green" as const },
      { label: "Compatibility", value: "Monterey 12.4+" },
      { label: "Next priority", value: "Direction, audience and AD" },
    ],
  },
};

export const loadMore = "More project notes soon";