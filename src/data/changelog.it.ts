/**
 * Italian updates page content for Sténtor.
 */

export const ui = {
  jumpTo: "Vai a",
  milestone: "Milestone",
  patch: "Patch",
  new: "Novità",
  improvements: "Miglioramenti",
  fixes: "Correzioni",
  releaseStats: "Statistiche aggiornamenti",
};

export const hero = {
  eyebrow: "Aggiornamenti",
  title: "Cosa è cambiato in Sténtor.",
  description:
    "Un registro pubblico delle versioni, dei prototipi e degli avanzamenti del progetto: distribuzione beta Apple, sviluppo Windows, Live Sync, app web per il pubblico, import/export, strumenti di audiodescrizione e miglioramenti legati alla ricerca.",
  subscribeLinks: [
    { href: "#", label: "RSS", icon: "rss" as const },
    { href: "mailto:info@stentor.live?subject=Aggiornamenti Sténtor", label: "Email", icon: "mail" as const },
    { href: "/it/contact", label: "Feedback", icon: "discord" as const },
  ],
};

export const filters = [
  { id: "all", label: "Tutto", count: 7 },
  { id: "major", label: "Milestone", count: 3 },
  { id: "new", label: "Novità", count: 3 },
  { id: "improvements", label: "Miglioramenti", count: 3 },
  { id: "fixes", label: "Correzioni", count: 1 },
];

export const versionTag = "v0.1.70 · TestFlight + Windows";
export const versionRange = "· prototipo attuale";

export const years = [
  { y: "2026", n: 7, on: true },
  { y: "Ricerca", n: 1 },
];

export const entries = [
  {
    version: "0.1.70",
    date: "2026-06-17",
    type: "major",
    title: "La distribuzione beta Apple e lo sviluppo Windows avanzano",
    body: "Sténtor avanza su due fronti: la versione Apple viene preparata per la distribuzione tramite TestFlight, mentre una versione nativa Windows è ora in sviluppo attivo con C#.",
    changes: {
      new: [
        { title: "Percorso Apple TestFlight", body: "Il lavoro macOS/iOS include ora il percorso di pubblicazione per il beta testing tramite Apple TestFlight." },
        { title: "Edizione Windows in C#", body: "Una versione dedicata per Windows è in sviluppo con C#, passando dai mockup a una vera interfaccia desktop in stile Windows 11." },
        { title: "Controlli accessibili sul testo", body: "La direzione dell’editor include avvisi sobri per battute e soprattitoli lunghi, aiutando gli operatori a restare entro limiti leggibili dal vivo." },
      ],
      improvements: [
        { title: "Logica di importazione per personaggi e AD", body: "L’import dei copioni viene raffinato affinché marcatori come AD siano trattati come materiale di audiodescrizione e non come nomi di personaggi." },
        { title: "Roadmap multipiattaforma", body: "La direzione del prodotto è più chiara: beta Apple, desktop Windows e dispositivi del pubblico restano parti di un unico ecosistema per l’accessibilità live." },
      ],
    },
  },
  {
    version: "0.1.64",
    date: "2026-06-05",
    type: "major",
    title: "Live Sync diventa il centro del lavoro in sala",
    body: "Il prototipo attuale collega vista operatore, schermi e telefoni del pubblico intorno a uno stato condiviso del cue live.",
    changes: {
      new: [
        { title: "Telefoni del pubblico", body: "Gli spettatori possono collegarsi con il proprio smartphone e seguire soprattitoli, traduzioni o audiodescrizioni." },
        { title: "Modalità sala locale", body: "Il progetto può essere condiviso su una rete locale per test in teatro e prove." },
      ],
      improvements: [
        { title: "Concentrazione dell’operatore", body: "La vista live viene semplificata intorno a cue corrente, cue successivo, blackout e dispositivi connessi." },
      ],
    },
  },
  {
    version: "0.1.61",
    date: "2026-06-02",
    type: "minor",
    title: "App web del pubblico rifinita per l’uso in spettacolo",
    body: "La pagina del pubblico si muove verso una vista live più pulita, soprattutto su dispositivi mobili e in orientamento orizzontale.",
    changes: {
      improvements: [
        { title: "Interfaccia meno rumorosa", body: "Meno testo tecnico durante lo spettacolo, con impostazioni e stato della connessione mantenuti discreti." },
        { title: "Cambio lingua", body: "Lingua dell’interfaccia e lingua dei sottotitoli sono trattate come parte dell’esperienza del pubblico." },
      ],
      fixes: [
        { title: "Viewport mobile", body: "Il fondo della pagina viene regolato per evitare che sia nascosto dai controlli del browser sugli smartphone." },
      ],
    },
  },
  {
    version: "0.1.50",
    date: "2026-05-30",
    type: "minor",
    title: "Preparazione del copione e modello dei metadati",
    body: "La struttura del progetto riflette esigenze produttive reali: titolo, compagnia o collettivo, lingue, cue, note e materiale di audiodescrizione.",
    changes: {
      new: [
        { title: "Metadati di progetto", body: "Titolo e compagnia/collettivo sono disponibili come campi a livello di progetto." },
        { title: "Campi personaggio vuoti", body: "Il campo speaker o personaggio può restare vuoto quando non è utile per il copione." },
      ],
      improvements: [
        { title: "Pannello centrale del copione", body: "Lo spazio di lavoro del copione viene regolato per usare meglio la larghezza disponibile." },
      ],
    },
  },
  {
    version: "0.1.40",
    date: "2026-05-26",
    type: "major",
    title: "Confermata la direzione desktop-first",
    body: "Sténtor viene sviluppato come app desktop per il lavoro teatrale, con viste web per schermi e dispositivi del pubblico.",
    changes: {
      new: [
        { title: "Direzione multipiattaforma", body: "L’obiettivo è uno strumento desktop-first per macOS, Windows e Linux." },
        { title: "Architettura orientata alla sala", body: "L’app è modellata intorno a sale prova, venue, reti locali e operazione live." },
      ],
    },
  },
  {
    version: "0.1.30",
    date: "2026-05-22",
    type: "minor",
    title: "Base per importazione ed esportazione",
    body: "Il primo lavoro su import/export si concentra su formati teatrali pratici, senza costringere gli utenti a un unico formato sorgente.",
    changes: {
      new: [
        { title: "Import supportati", body: "Word, TXT, SRT, WebVTT, CSV e JSON fanno parte del flusso di preparazione." },
      ],
      improvements: [
        { title: "Copioni pronti per l’esportazione", body: "Gli export sono pensati come materiali per prove, archivio, tournée e ricerca." },
      ],
    },
  },
  {
    version: "0.1.20",
    date: "2026-05-18",
    type: "patch",
    title: "Ciclo di feedback della ricerca aggiunto alla logica del progetto",
    body: "Il sito e il flusso di lavoro rendono feedback, questionari e note di campo parte dello scambio intorno a Sténtor.",
    changes: {
      improvements: [
        { title: "Conoscenza condivisa", body: "L’uso del software è collegato a feedback pratici da operatori, pubblico, artiste e artisti, e spazi." },
      ],
    },
  },
];

export const sideStats = {
  thisYear: {
    title: "Focus attuale",
    rows: [
      { label: "Prototipo", value: "0.1.70", accent: true },
      { label: "Apple TestFlight", value: "pubblicazione" },
      { label: "Windows C#", value: "in sviluppo" },
      { label: "Ciclo feedback", value: "aperto" },
    ],
  },
  cadence: {
    title: "Ritmo di sviluppo",
    bars: [28, 46, 34, 62, 54, 70, 48, 76, 66, 88, 58, 100],
    rangeStart: "Mag '26",
    rangeEnd: "Giu '26",
  },
  status: {
    title: "Stato",
    rows: [
      { label: "App Apple", value: "● TestFlight", color: "green" as const },
      { label: "App Windows", value: "sviluppo C#" },
      { label: "Prossima priorità", value: "feedback beta" },
    ],
  },
};

export const loadMore = "Altri aggiornamenti presto";
