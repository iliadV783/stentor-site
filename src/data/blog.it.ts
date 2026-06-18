import type { BlogPost } from "./blog";

const author = { name: "Leonardo Mancini", role: "Ideatore e sviluppatore di Sténtor", initials: "LM" };

const categoryStyles = {
  research: { dot: "bg-blue-400", text: "text-blue-400", tag: "bg-blue-400/[0.08] text-blue-400 border-blue-400/25" },
  practice: { dot: "bg-red-500", text: "text-red-500", tag: "bg-red-500/[0.08] text-red-500 border-red-500/25" },
  product: { dot: "bg-amber-400", text: "text-amber-400", tag: "bg-amber-400/[0.08] text-amber-400 border-amber-400/25" },
  fieldnotes: { dot: "bg-green-400", text: "text-green-400", tag: "bg-green-400/[0.08] text-green-400 border-green-400/25" },
} as const;

export const blog = {
  hero: {
    eyebrow: "Notebook",
    title: "Appunti su testo live, teatro e dispositivi del pubblico.",
    description: "Note di ricerca, aggiornamenti di sviluppo e riflessioni pratiche su soprattitoli, traduzione, audiodescrizione e conoscenza condivisa nello spettacolo dal vivo.",
    primaryCta: { href: "/it/contact", label: "Condividi una nota dal campo" },
    secondaryCta: { href: "/it/changelog/", label: "Leggi il changelog" },
  },
  categories: [
    { id: "all", label: "Tutte le note" },
    { id: "research", label: "Ricerca" },
    { id: "practice", label: "Pratica" },
    { id: "product", label: "Prodotto" },
    { id: "fieldnotes", label: "Note dal campo" },
  ],
  categoryLabels: { research: "ricerca", practice: "pratica", product: "prodotto", fieldnotes: "note dal campo" },
  categoryStyles,
  posts: [
    { id: "why-stentor-starts-from-the-room", title: "Perché Sténtor parte dalla sala", description: "Una nota sul progettare soprattitoli, traduzioni e audiodescrizioni dal punto di vista delle sale prova, del tempo live e della presenza del pubblico.", date: "2026-06-05", category: "research", readingTime: "4 min", cover: "region-map", featured: true, author },
    { id: "same-tools-shared-responsibility", title: "Stessi strumenti, responsabilità condivisa", description: "Perché Sténtor usa un modello di supporto e donazione invece di bloccare gli strumenti teatrali essenziali dietro livelli a pagamento.", date: "2026-06-03", category: "practice", readingTime: "3 min", cover: "policy-hexagon", author },
    { id: "audience-phones-as-performance-infrastructure", title: "I telefoni del pubblico come infrastruttura dello spettacolo", description: "I dispositivi personali possono diventare parte di un sistema di testo live senza sostituire il teatro: estendono il modo in cui il pubblico riceve lingua, accesso e contesto.", date: "2026-06-01", category: "research", readingTime: "5 min", cover: "p95-ring", author },
    { id: "audio-description-next-to-the-script", title: "Tenere l’audiodescrizione accanto al copione", description: "Le note di audiodescrizione sono più facili da preparare, correggere e mandare in cue quando restano collegate al testo dello spettacolo e alla sua struttura live.", date: "2026-05-29", category: "practice", readingTime: "4 min", cover: "iso-types", author },
    { id: "live-sync-notes-from-a-local-network-test", title: "Live Sync: note da un test su rete locale", description: "Prime osservazioni sul collegamento tra vista operatore, schermi e telefoni del pubblico attraverso una rete locale in sala.", date: "2026-05-26", category: "fieldnotes", readingTime: "3 min", cover: "traffic-line-chart", author },
    { id: "from-word-files-to-cues", title: "Dai file Word ai cue", description: "Una nota pratica di sviluppo sull’importazione di copioni e sulla conservazione della struttura teatrale utile senza imporre un formato rigido.", date: "2026-05-24", category: "product", readingTime: "4 min", cover: "iso-postgres", author },
  ] satisfies BlogPost[],
  loadMore: "Altre note presto",
  loadMoreHref: "/it/contact",
  relatedTitle: "Continua a leggere",
  finalCta: {
    eyebrow: "Condividi note dal campo",
    title: "Hai usato Sténtor in sala? Raccontaci com’è andata.",
    body: "Brevi note da prove, test con il pubblico e spettacoli dal vivo aiutano a orientare il software e la ricerca. Nessuna newsletter: basta scriverci quando c’è qualcosa di utile da condividere.",
    primaryCta: { href: "/it/contact", label: "Invia una nota" },
    secondaryCta: { href: "mailto:info@stentor.live?subject=Nota dal campo Sténtor", label: "Scrivici via email" },
    fineprint: "Blog e changelog restano pubblici; per ora il contatto diretto è sufficiente.",
  },
} as const;
