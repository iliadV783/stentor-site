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
    eyebrow: "Origine",
    title: "Perché esiste Sténtor",
    paragraphs: [
      "Sténtor nasce da un problema pratico: lo spettacolo dal vivo ha spesso bisogno di più livelli di testo. Una produzione può richiedere sopratitoli, traduzioni, note di audiodescrizione, cue per l’operatore, schermi in sala e telefoni del pubblico — tutto mentre lo spettacolo accade in tempo reale.",
      "Il nome rimanda a Stentore nella mitologia greca: non come immagine di combattimento, ma come figura ricordata per una voce di bronzo. Sténtor trasforma quell’immagine in uno strumento teatrale: non un suono più forte, ma una trasmissione più chiara di parole, lingue e descrizioni.",
      `Il progetto è sviluppato da ${leonardoProfileLink} (Università di Torino) nell’ambito del progetto di public engagement ${eticaProjectLink}, come software di ricerca per lo spettacolo dal vivo. Mantiene accessibili gli strumenti essenziali e invita chi lo usa a contribuire con feedback, note d’uso, risposte del pubblico e dati di ricerca che possano far crescere il software attraverso spettacoli reali.`,
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
