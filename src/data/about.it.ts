const leonardoProfileUrl = "https://www.studium.unito.it/do/docenti.pl/Show?_id=lmancini";
const eticaProjectUrl = "https://unifind.unito.it/resource/project/MANL_PE_ATENEO_25_01";
const inlineLinkClass = "text-text underline decoration-stentor/60 underline-offset-4 hover:text-stentor transition-colors";
const leonardoProfileLink = `<a href="${leonardoProfileUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">Leonardo Mancini</a>`;
const eticaProjectLink = `<a href="${eticaProjectUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">ETICA</a>`;

export const about = {
  hero: {
    eyebrow: "About Sténtor",
    title:
      'La scena dal vivo ha bisogno di <em class="not-italic text-stentor">parole vive</em>.<br/>Per ogni pubblico.',
    description:
      "Sténtor è uno strumento multipiattaforma per sopratitoli, traduzione e audiodescrizione nello spettacolo dal vivo.",
    credit:
      `Creato e sviluppato da ${leonardoProfileLink} (Università di Torino), nell’ambito del progetto di public engagement ${eticaProjectLink}.`,
  },
  story: {
    eyebrow: "Motivo e finalità del progetto",
    title: "Perché Sténtor",
    paragraphs: [
      "Sténtor nasce da un'esigenza pratica: gestire più livelli di testo nello spettacolo dal vivo. Una produzione può richiedere sopratitoli, traduzioni, note di audiodescrizione, note per la regia e per gli operatori, schermi in sala e dispositivi del pubblico — tutto mentre lo spettacolo accade in tempo reale.",
      "Il nome rimanda a Stentore nella mitologia greca, figura ricordata da Omero per la sua “voce di bronzo”. Sténtor trasforma quell’immagine in uno strumento teatrale: non come un suono più forte, ma come una trasmissione più chiara, su più livelli, di parole, lingue e audiodescrizioni.",
      `Il software è sviluppato e mantenuto da ${leonardoProfileLink} (Università di Torino) nell’ambito del progetto di public engagement ${eticaProjectLink}.`,
      "Attualmente disponibile per macOS e Windows, Sténtor è distribuito gratuitamente. Chi lo utilizza è invitato a contribuire al suo sviluppo e alla ricerca attraverso feedback, note d’uso e dati di ricerca, così da continuare a migliorare e far crescere il progetto.",
    ],
    pullQuote: {
      text: "Il testo dello spettacolo dal vivo dovrebbe viaggiare con chiarezza: dal copione all’operatore, dalla scena agli schermi, dalla sala a ogni dispositivo del pubblico.",
      author: "Sténtor",
      role: "Principio del progetto",
    },
  },
  numbers: {
    title: "Un modello software diverso",
    description:
      "Sténtor è costruito intorno ad accesso, ricerca e uso dal vivo, più che intorno a funzioni bloccate o livelli enterprise.",
    items: [
      { value: "3", label: "livelli centrali: sopratitoli, traduzione, audiodescrizione" },
      { value: "∞", label: "progetti, lingue e cue in ogni piano" },
      { value: "3", label: "piattaforme desktop: macOS e Windows" },
      { value: "Free", label: "download e attivazione gratuiti" },
    ],
  },
} as const;
