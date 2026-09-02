import type { BlogPost } from "./blog";

const author = { name: "Leonardo Mancini", role: "Ideengeber und Entwickler von Sténtor", initials: "LM" };

const categoryStyles = {
  research: { dot: "bg-blue-400", text: "text-blue-400", tag: "bg-blue-400/[0.08] text-blue-400 border-blue-400/25" },
  practice: { dot: "bg-stentor", text: "text-stentor", tag: "bg-stentor/[0.08] text-stentor border-stentor/25" },
  product: { dot: "bg-amber-400", text: "text-amber-400", tag: "bg-amber-400/[0.08] text-amber-400 border-amber-400/25" },
  fieldnotes: { dot: "bg-green-400", text: "text-green-400", tag: "bg-green-400/[0.08] text-green-400 border-green-400/25" },
} as const;

export const blog = {
  hero: {
    eyebrow: "Notizbuch",
    title: "Notizen zu Live-Text, Theater und Publikumsgeräten.",
    description: "Forschungsnotizen, Entwicklungsupdates und praktische Reflexionen zu Übertiteln, Übersetzung, Audiodeskription und geteiltem Wissen rund um Live-Aufführungen.",
    primaryCta: { href: "/de/contact", label: "Feldnotiz teilen" },
    secondaryCta: { href: "/de/changelog/", label: "Changelog lesen" },
  },
  categories: [
    { id: "all", label: "Alle Notizen" },
    { id: "research", label: "Forschung" },
    { id: "practice", label: "Praxis" },
    { id: "product", label: "Produkt" },
    { id: "fieldnotes", label: "Feldnotizen" },
  ],
  categoryLabels: { research: "Forschung", practice: "Praxis", product: "Produkt", fieldnotes: "Feldnotizen" },
  categoryStyles,
  posts: [
    { id: "why-stentor-starts-from-the-room", title: "Warum Sténtor im Raum beginnt", description: "Eine Notiz darüber, Übertitel, Übersetzungen und Audiodeskriptionen aus der Perspektive von Proberäumen, Live-Timing und Publikumspräsenz zu entwerfen.", date: "2026-06-05", category: "research", readingTime: "4 Min.", cover: "region-map", featured: true, author },
    { id: "same-tools-shared-responsibility", title: "Gleiche Werkzeuge, geteilte Verantwortung", description: "Warum Sténtor auf Unterstützung und Spenden setzt, statt zentrale Theaterwerkzeuge hinter Funktionsstufen zu sperren.", date: "2026-06-03", category: "practice", readingTime: "3 Min.", cover: "policy-hexagon", author },
    { id: "audience-phones-as-performance-infrastructure", title: "Publikums-Smartphones als Aufführungsinfrastruktur", description: "Persönliche Geräte können Teil eines Live-Text-Systems werden, ohne das Theater zu ersetzen: Sie erweitern, wie Publikum Sprache, Zugang und Kontext erhält.", date: "2026-06-01", category: "research", readingTime: "5 Min.", cover: "p95-ring", author },
    { id: "audio-description-next-to-the-script", title: "Audiodeskription neben dem Skript halten", description: "Audiodeskriptionsnotizen lassen sich leichter vorbereiten, überarbeiten und cuen, wenn sie mit dem Aufführungstext und seiner Live-Struktur verbunden bleiben.", date: "2026-05-29", category: "practice", readingTime: "4 Min.", cover: "iso-types", author },
    { id: "live-sync-notes-from-a-local-network-test", title: "Live Sync: Notizen aus einem lokalen Netzwerktest", description: "Frühe Beobachtungen zur Verbindung von Operator-Ansicht, Bildschirmen und Publikums-Smartphones über ein lokales Netzwerk im Raum.", date: "2026-05-26", category: "fieldnotes", readingTime: "3 Min.", cover: "traffic-line-chart", author },
    { id: "from-word-files-to-cues", title: "Von Word-Dateien zu Cues", description: "Eine praktische Entwicklungsnotiz zum Import von Aufführungsskripten und zum Bewahren sinnvoller Theaterstruktur, ohne ein starres Format zu erzwingen.", date: "2026-05-24", category: "product", readingTime: "4 Min.", cover: "iso-postgres", author },
  ] satisfies BlogPost[],
  loadMore: "Weitere Notizen bald",
  loadMoreHref: "/de/contact",
  relatedTitle: "Weiterlesen",
  finalCta: {
    eyebrow: "Feldnotizen teilen",
    title: "Sténtor im Raum genutzt? Erzählen Sie uns, was passiert ist.",
    body: "Kurze Notizen aus Proben, Publikumstests und Live-Aufführungen helfen, die Software und die Forschung dahinter zu formen. Keine Newsletter-Pflicht: Schreiben Sie einfach, wenn es etwas Nützliches zu teilen gibt.",
    primaryCta: { href: "/de/contact", label: "Notiz senden" },
    secondaryCta: { href: "mailto:info@stentor.live?subject=Sténtor Feldnotiz", label: "Per E-Mail schreiben" },
    fineprint: "Blog und Changelog bleiben öffentlich; direkter Kontakt reicht vorerst aus.",
  },
} as const;
