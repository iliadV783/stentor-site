import { secondaryBento as baseSecondaryBento, codeTabs as baseCodeTabs } from "./features";

export const hero = {
  eyebrow: "Funzioni Sténtor 0.3.40",
  title: "Testo live multilingue,<br/>dal copione alla sala.",
  description:
    "Sténtor riunisce sopratitoli, traduzione, audio descrizione, schermi, telefoni del pubblico e accesso foyer con QR in un unico flusso local-first per teatri, festival e luoghi dello spettacolo dal vivo.",
};

export const showcase = [
  {
    number: "01",
    eyebrow: "01 — Spazio progetto",
    title: "Un progetto per tutti i livelli del testo live.",
    description:
      "Prepara copione originale, traduzioni, sopratitoli, note di audio descrizione, metadati, lingue e configurazione degli schermi nello stesso progetto modificabile.",
    bullets: [
      "Importa Word, TXT, SRT, WebVTT, CSV o JSON",
      "Configura le lingue una sola volta per testo, schermi, telefoni e foyer",
      "Mantieni insieme titolo, compagnia, note, cue, traduzioni e audio descrizione",
    ],
    cta: { href: "/it/docs", label: "Vedi il workflow" },
    illustration: "schemas" as const,
  },
  {
    number: "02",
    eyebrow: "02 — Regia / Stage desk",
    title: "Un banco live per l’operatore, non uno strumento generico per slide.",
    description:
      "Durante prova o spettacolo, la regia tiene visibili cue attuale, cue successivo, nero, timing, distribuzione agli schermi, dispositivi connessi e stato dell’audio descrizione.",
    bullets: [
      "Avanza, torna indietro e manda in nero da una vista live concentrata",
      "Segui cue attuale, cue successivo, timer, note e dispositivi connessi",
      "Privilegia il controllo manuale, con timing provato quando serve",
    ],
    cta: { href: "/it/docs#stage-desk", label: "Pilotare uno spettacolo" },
    illustration: "trace" as const,
  },
  {
    number: "03",
    eyebrow: "03 — Sala e pubblico",
    title: "Schermi, foyer e telefoni seguono lo stesso stato live.",
    description:
      "Sténtor può inviare il cue live agli schermi di sala, a una pagina foyer con QR code e agli spettatori collegati con il proprio telefono.",
    bullets: [
      "Schermi multipli con anteprima, lingua e stile",
      "Client web pubblico per sopratitoli, traduzione, audio descrizione o entrambe",
      "Modalità rete locale per testare in sala senza dipendere da internet",
    ],
    cta: { href: "/it/docs#audience", label: "Vedere il pubblico" },
    illustration: "regions" as const,
  },
];

export const secondaryBento = {
  ...baseSecondaryBento,
  title: "Costruito per il vero workflow teatrale.",
  description:
    "Strumenti pratici per preparare, pilotare, proiettare, descrivere e condividere il testo live multilingue.",
  cards: [
    { ...baseSecondaryBento.cards[0], title: "Audio descrizione come livello del progetto", desc: "Prepara le note vicino al copione, collegale ai cue, aggiungi audio per i test ed esporta materiale per la prova." },
    { ...baseSecondaryBento.cards[1], title: "Import ed export", desc: "Importa copioni e file di sottotitoli, poi esporta materiali strutturati per prova, archivio, tournée o revisione." },
    { ...baseSecondaryBento.cards[2], title: "Configurazione multilingue", desc: "Configura le lingue del progetto una sola volta, poi riusale nel testo, negli schermi, nei telefoni e nel foyer QR." },
    { ...baseSecondaryBento.cards[3], title: "Telefoni del pubblico", desc: "Gli spettatori scansionano un QR code e seguono sopratitoli, traduzioni, audio descrizione o entrambe durante lo spettacolo." },
    { ...baseSecondaryBento.cards[4], title: "Desktop-first, local-first", desc: "Sténtor evolve verso un’app desktop nativa, con viste web leggere per schermi e pubblico su rete locale." },
    { ...baseSecondaryBento.cards[5], title: "Note di campo dopo l’uso", desc: "Sténtor non chiede questionari prima del download. I feedback sono invitati dopo prove o spettacoli reali." },
  ],
};

export const codeTabs = {
  ...baseCodeTabs,
  title: "Un file progetto leggibile, non una scatola nera.",
  description:
    "Sténtor mantiene strutturato il testo di scena: metadati, lingue, cue, traduzioni, audio descrizione, schermi e stato live restano comprensibili e portabili.",
};

export const finalCta = {
  eyebrow: "Gratis da provare · nessun account richiesto",
  title: "Scarica prima.<br/>Condividi il feedback dopo.",
  body: "Usa Sténtor per portare sopratitoli, traduzioni e audio descrizioni dal copione alla sala, agli schermi, al foyer e ai telefoni del pubblico.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/docs", label: "Leggi il workflow", variant: "ghost" as const },
  ],
};
