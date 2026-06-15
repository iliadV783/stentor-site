/**
 * Contenuti della pagina Per i teatri: casi d'uso, regia dal vivo,
 * preparazione, schermi, telefoni del pubblico, audio-descrizione e note sul campo.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Per teatri, festival e spazi di spettacolo",
  title:
    'Testo dal vivo per tutta la sala, <em class="not-italic text-text-3 font-medium">senza trasformare l’accessibilità in un peso tecnico.</em>',
  description:
    "Sténtor aiuta i teatri a preparare, mandare in scena e condividere soprattitoli, traduzioni e audio-descrizione da un unico progetto controllato: postazione di regia, schermi di sala, accesso QR nel foyer e telefoni del pubblico possono seguire lo stesso flusso di testo dal vivo.",
};

// ─── Featured case study ──────────────────────────────────────────────────
export const featured = {
  brand: { initial: "S", name: "Sténtor nello spazio teatrale" },
  title:
    'Un solo flusso di spettacolo per <em class="text-red-500 not-italic">regia, schermi, foyer e telefoni.</em>',
  description:
    "Prepara il copione prima dello spettacolo, allinea traduzioni e descrizioni, guida la rappresentazione dalla postazione di regia, invia il testo agli schermi configurati, mostra una pagina QR nel foyer e permette agli spettatori di seguire lingue selezionate o audio-descrizione dai propri dispositivi.",
  stats: [
    { value: "1", label: "postazione di regia" },
    { value: "3", label: "soprattitoli · traduzione · audio-descrizione" },
    { value: "Locale", label: "rete di sala, senza internet obbligatorio" },
  ],
  link: { href: "/docs", label: "Vedi il flusso di lavoro" },
  hudRows: [
    { method: "DAL VIVO", path: "Regia", lat: "operatore", emphasized: true },
    { method: "TESTO", path: "schermi di sala", lat: "sincrono", emphasized: true },
    { method: "QR", path: "pagina di benvenuto nel foyer", lat: "pronta", emphasized: false },
    { method: "TEL", path: "telefoni del pubblico", lat: "in ascolto", emphasized: false },
    { method: "AD", path: "audio-descrizione", lat: "disponibile", emphasized: false },
  ],
  pullQuote: {
    text:
      "Lo stesso progetto può sostenere chi prepara il testo, chi lo manda in scena, gli schermi in sala, la pagina QR nel foyer e gli spettatori che seguono dal proprio dispositivo.",
    author: "Sténtor",
    role: "Flusso per lo spazio teatrale",
  },
};

// ─── Filter chips ─────────────────────────────────────────────────────────
export const filters = ["Tutti", "Soprattitoli", "Traduzione", "Audio-descrizione", "Telefoni del pubblico", "Foyer", "Tournée", "Ricerca"];

export const filterCount = { showing: 6, total: 6 };

// ─── Customer cards ───────────────────────────────────────────────────────
type CustomerCard = {
  brand: string;
  industry: string;
  glyph: string;
  tint: string;
  illustration: "helio" | "constellate" | "vector" | "kettlebrook" | "orbital" | "tessera";
  title: string;
  description: string;
  stats: { k: string; l: string }[];
};

export const cards: CustomerCard[] = [
  {
    brand: "Produzioni internazionali",
    industry: "Traduzione",
    glyph: "rounded-full",
    tint: "rgba(239,68,68,0.18)",
    illustration: "helio",
    title: "Ospita spettacoli in un’altra lingua senza moltiplicare i sistemi.",
    description:
      "Tieni copione originale e traduzioni nello stesso progetto, poi decidi cosa appare sugli schermi di sala e cosa resta disponibile sui telefoni del pubblico.",
    stats: [
      { k: "2+", l: "Lingue per progetto" },
      { k: "Dal vivo", l: "Avanzamento in regia" },
    ],
  },
  {
    brand: "Festival e stagioni",
    industry: "Soprattitoli",
    glyph: "",
    tint: "rgba(96,165,250,0.10)",
    illustration: "constellate",
    title: "Passa da una produzione all’altra senza ricostruire l’impianto ogni sera.",
    description:
      "Ogni spettacolo resta separato, ma la logica dal vivo rimane familiare: progetti, battute, schermi e accesso del pubblico seguono la stessa struttura in sale e date diverse.",
    stats: [
      { k: "∞", l: "Progetti e battute" },
      { k: "1", l: "Flusso dal vivo riutilizzabile" },
    ],
  },
  {
    brand: "Audio-descrizione",
    industry: "Audio-descrizione",
    glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]",
    tint: "rgba(239,68,68,0.14)",
    illustration: "vector",
    title: "Prepara l’audio-descrizione accanto al copione, non in un’isola separata.",
    description:
      "Descrizioni, riferimenti alle battute e file audio opzionali restano vicini al testo, così il lavoro di accessibilità può essere scritto, rivisto e provato nello stesso file di produzione.",
    stats: [
      { k: "AD", l: "Note e audio" },
      { k: "Battuta", l: "Contesto conservato" },
    ],
  },
  {
    brand: "Telefoni del pubblico",
    industry: "Dispositivi del pubblico",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.14)",
    illustration: "kettlebrook",
    title: "Offri testo su dispositivo personale quando la proiezione non basta.",
    description:
      "Un codice QR può aprire una pagina locale per il pubblico, dove seguire la lingua selezionata, i soprattitoli o il testo dell’audio-descrizione in sincronia con la regia.",
    stats: [
      { k: "QR", l: "Accesso del pubblico" },
      { k: "Sincrono", l: "Con la regia" },
    ],
  },
  {
    brand: "Produzioni in tournée",
    industry: "Tournée",
    glyph: "rounded-full bg-transparent border-2 border-zinc-300",
    tint: "rgba(96,165,250,0.10)",
    illustration: "orbital",
    title: "Porta un solo progetto testuale strutturato da un teatro all’altro.",
    description:
      "La produzione può viaggiare con copione, traduzioni, soprattitoli, note di audio-descrizione e metadati già preparati, adattando poi le uscite agli schermi e alle necessità di ogni spazio.",
    stats: [
      { k: "Esporta", l: "Copioni pronti" },
      { k: "Locale", l: "Rete di sala" },
    ],
  },
  {
    brand: "Note sul campo",
    industry: "Ricerca",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.16)",
    illustration: "tessera",
    title: "Raccogli riscontri pratici dopo l’uso reale, non prima dello scaricamento.",
    description:
      "Dopo una prova o uno spettacolo, operatori, compagnie e teatri possono condividere note pratiche. Sténtor resta facile da provare e impara dalle condizioni reali del teatro.",
    stats: [
      { k: "Dopo", l: "Riscontri dopo l’uso" },
      { k: "Aperto", l: "Nessun account obbligatorio" },
    ],
  },
];

// ─── Logo wall ────────────────────────────────────────────────────────────
export const logoWall = {
  title: "Progettato intorno al lavoro teatrale, non a categorie software generiche.",
  description:
    "Sténtor segue la sequenza reale di una produzione: preparazione, regia dal vivo, uscita sugli schermi, comunicazione nel foyer, dispositivi del pubblico e note dopo l’uso.",
  logos: [
    { name: "Teatri", glyph: "rounded-full" },
    { name: "Festival", glyph: "rotate-45" },
    { name: "Compagnie", glyph: "" },
    { name: "Tournée", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Soprattitolatori", glyph: "rounded" },
    { name: "Traduttori", glyph: "rounded-full bg-transparent border-2 border-zinc-300" },
    { name: "Audio-descrittori", glyph: "rounded" },
    { name: "Operatori", glyph: "rounded-full" },
    { name: "Tecnici", glyph: "" },
    { name: "Telefoni del pubblico", glyph: "rotate-45" },
    { name: "Schermi di sala", glyph: "rounded" },
    { name: "QR nel foyer", glyph: "rounded-full" },
  ],
};

// ─── Aggregate stats strip ────────────────────────────────────────────────
export const stats = {
  title: "Un solo assetto può servire esigenze teatrali diverse.",
  description:
    "Usa Sténtor come strumento di preparazione, postazione di regia dal vivo, sistema di uscita per schermi, pagina QR nel foyer, pagina per i telefoni del pubblico e canale facoltativo per note sul campo.",
  items: [
    { value: "3", suffix: " livelli", label: "Soprattitoli, traduzione e audio-descrizione in un solo progetto" },
    { value: "∞", suffix: " lingue", label: "Multilingue per impostazione, non limitato a una sola coppia bilingue" },
    { value: "Dal vivo", suffix: " sincrono", label: "Connessione guidata dalla regia per schermi, foyer e telefoni del pubblico" },
  ],
};

// ─── Quote cards ──────────────────────────────────────────────────────────
export const quotes = [
  {
    stars: 5,
    text:
      "Parti da un’esigenza semplice di soprattitolazione; aggiungi traduzione, audio-descrizione, QR nel foyer o telefoni del pubblico senza cambiare tutto il flusso di lavoro.",
    av: "01",
    name: "Inizia semplice",
    role: "Soprattitoli e schermi",
  },
  {
    stars: 5,
    text:
      "Mantieni separati i progetti di un festival e usa la stessa logica di avanzamento dal vivo per sale, lingue e configurazioni tecniche diverse.",
    av: "02",
    name: "Cresci su più eventi",
    role: "Festival e stagioni",
  },
  {
    stars: 5,
    text:
      "Usa le note sul campo dopo prove e spettacoli per migliorare lo strumento a partire dal lavoro teatrale reale, non da questionari astratti.",
    av: "03",
    name: "Impara dall’uso",
    role: "Note sul campo e ricerca",
  },
];

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  title: "Porta Sténtor nel tuo teatro.",
  body:
    "Usalo per una singola produzione, un festival, uno spettacolo in tournée o una sperimentazione di ricerca. Scaricalo, provalo in sala e condividi note sul campo solo quando hai qualcosa di concreto da raccontarci.",
  ctas: [
    { href: "/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/contact", label: "Contatti", variant: "ghost" as const },
  ],
};
