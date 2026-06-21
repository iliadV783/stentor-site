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
  { id: "all", label: "Tutto", count: 12 },
  { id: "major", label: "Milestone", count: 8 },
  { id: "new", label: "Novità", count: 6 },
  { id: "improvements", label: "Miglioramenti", count: 8 },
  { id: "fixes", label: "Correzioni", count: 6 },
];

export const versionTag = "v0.1.75 · Live AD e cloud WebDAV";
export const versionRange = "· prototipo attuale";

export const years = [
  { y: "2026", n: 12, on: true },
  { y: "Ricerca", n: 1 },
];

export const entries = [
  {
    version: "0.1.75",
    date: "2026-06-21",
    type: "major",
    title: "Audiodescrizione dal vivo e prima infrastruttura cloud reale",
    body: "La build TestFlight 1.1 (3) consolida due grandi linee di lavoro: la nuova infrastruttura per l’audiodescrizione dal vivo e una prima catena cloud reale basata su Nextcloud/WebDAV. Sténtor può ora configurare uno spazio cloud, custodire le credenziali nel Portachiavi macOS, testare la connessione, caricare progetti .stn e rilevarli nello spazio remoto.",
    changes: {
      new: [
        { title: "Account e Cloud", body: "È stata introdotta una schermata dedicata per scegliere tra uso locale, Sténtor Cloud futuro e cloud personalizzato del teatro o dell’ente." },
        { title: "Nextcloud/WebDAV reale", body: "Il profilo WebDAV può essere configurato con URL server, utente, cartella remota e dati di accesso custoditi in modo sicuro." },
        { title: "Upload progetti .stn", body: "Il progetto corrente può essere caricato nello spazio remoto /Stentor/Progetti e poi rilevato dall’elenco dei progetti condivisi." },
      ],
      improvements: [
        { title: "Audiodescrizione dal vivo", body: "Il lavoro sul canale AD live è stato consolidato come parte del flusso di regia, distinguendo cue audio, battute, luci e materiali destinati al pubblico." },
        { title: "Stati locale/cloud", body: "I progetti possono mostrare stati più espliciti: locale, associato al cloud, allineato, da sincronizzare o da scaricare." },
      ],
      fixes: [
        { title: "Feedback del test WebDAV", body: "Il test connessione ora espone esito, autenticazione, cartella remota, risposta PROPFIND e numero di progetti .stn rilevati." },
        { title: "Coerenza dello stato cloud", body: "Dopo upload o sincronizzazione, la lista condivisa aggiorna meglio lo stato del progetto corrente e distingue allineamento, modifiche locali e download remoto." },
      ],
    },
  },
  {
    version: "0.1.74",
    date: "2026-06-20",
    type: "major",
    title: "Introdotta l’audiodescrizione dal vivo",
    body: "Sténtor introduce una nuova modalità di audiodescrizione dal vivo, affiancata alle audiodescrizioni registrate.",
    changes: { new: [{ title: "Audiodescrizione live", body: "Cue pensati per essere letti o attivati dal vivo dall’operatore durante la rappresentazione." }], improvements: [{ title: "Canale AD più riconoscibile", body: "Le audiodescrizioni vengono trattate come materiale dedicato al canale audio." }], fixes: [{ title: "Separazione dai cue tecnici", body: "Luci, regia e note interne restano distinte dai contenuti destinati agli spettatori." }] },
  },
  { version: "0.1.73", date: "2026-06-19", type: "major", title: "Build TestFlight compatibile con macOS Monterey e Mac Intel", body: "Build macOS universale per TestFlight, Apple Silicon e Intel, con deployment target macOS Monterey 12.4.", changes: { improvements: [{ title: "Archivio universale", body: "La build include Apple Silicon e Intel." }], fixes: [{ title: "Configurazione dell’archivio", body: "Le impostazioni Release sono state corrette per TestFlight." }] } },
  { version: "0.1.72", date: "2026-06-19", type: "major", title: "Varianti accessibili, ricerca battute e controllo live", body: "Varianti linguistiche accessibili, ricerca immediata tra le battute e proiezione live più pulita.", changes: { new: [{ title: "Varianti linguistiche accessibili", body: "Ogni lingua può avere la propria variante + accessibile." }, { title: "Ricerca battute", body: "Ricerca rapida nell’editor Testo." }], improvements: [{ title: "Smartphone del pubblico", body: "Le varianti accessibili possono comparire accanto alle lingue base." }], fixes: [{ title: "Cue luci non proiettati", body: "Le indicazioni tecniche di luce non vengono mostrate allo spettatore." }] } },
  { version: "0.1.71", date: "2026-06-18", type: "major", title: "Import DOCX più intelligente", body: "Importazione DOCX più pulita, audiodescrizione gestita meglio e prime strategie di prestazione per copioni lunghi.", changes: { improvements: [{ title: "Riconoscimento AD", body: "Marcatori come AD vengono trattati come audiodescrizione." }], fixes: [{ title: "Reattività con copioni lunghi", body: "Analisi delle prestazioni con copioni da oltre 1300 battute." }] } },
  { version: "0.1.70", date: "2026-06-17", type: "major", title: "Beta Apple e sviluppo Windows avanzano", body: "Sténtor avanza verso TestFlight e verso una versione nativa Windows in C#.", changes: { new: [{ title: "Percorso Apple TestFlight", body: "Preparazione della distribuzione beta Apple." }, { title: "Edizione Windows", body: "Sviluppo nativo Windows in C#." }], improvements: [{ title: "Roadmap multipiattaforma", body: "Apple, Windows e dispositivi del pubblico restano parte di un unico ecosistema." }] } },
  { version: "0.1.64", date: "2026-06-05", type: "major", title: "Live Sync al centro del lavoro in sala", body: "Vista operatore, schermi e telefoni del pubblico condividono lo stato del cue live.", changes: { new: [{ title: "Telefoni del pubblico", body: "Gli spettatori possono seguire soprattitoli, traduzioni o audiodescrizioni." }], improvements: [{ title: "Concentrazione dell’operatore", body: "La vista live viene semplificata intorno al cue corrente." }] } },
  { version: "0.1.61", date: "2026-06-02", type: "minor", title: "App web del pubblico rifinita", body: "La pagina del pubblico diventa più pulita per l’uso in spettacolo.", changes: { improvements: [{ title: "Interfaccia meno rumorosa", body: "Meno testo tecnico durante lo spettacolo." }], fixes: [{ title: "Viewport mobile", body: "Il fondo della pagina viene regolato per smartphone." }] } },
  { version: "0.1.50", date: "2026-05-30", type: "minor", title: "Preparazione del copione e metadati", body: "Titolo, compagnia, lingue, cue, note e materiali di audiodescrizione entrano nel modello progetto.", changes: { new: [{ title: "Metadati di progetto", body: "Titolo e compagnia sono disponibili a livello di progetto." }], improvements: [{ title: "Pannello centrale", body: "Lo spazio di lavoro usa meglio la larghezza disponibile." }] } },
  { version: "0.1.40", date: "2026-05-26", type: "major", title: "Direzione desktop-first", body: "Sténtor viene sviluppato come app desktop per il lavoro teatrale.", changes: { new: [{ title: "Direzione multipiattaforma", body: "Obiettivo desktop-first per macOS, Windows e Linux." }] } },
  { version: "0.1.30", date: "2026-05-22", type: "minor", title: "Base import/export", body: "Prime basi per importare ed esportare formati teatrali pratici.", changes: { new: [{ title: "Import supportati", body: "Word, TXT, SRT, WebVTT, CSV e JSON." }], improvements: [{ title: "Export per prove e archivio", body: "Gli export sono pensati per prove, tournée e ricerca." }] } },
  { version: "0.1.20", date: "2026-05-18", type: "patch", title: "Feedback della ricerca", body: "Feedback, questionari e note di campo entrano nel flusso del progetto.", changes: { improvements: [{ title: "Conoscenza condivisa", body: "Il software resta collegato al lavoro con operatori, pubblico e spazi." }] } },
];

export const sideStats = {
  thisYear: {
    title: "Focus attuale",
    rows: [
      { label: "Prototipo", value: "0.1.75", accent: true },
      { label: "macOS", value: "12.4+ universale" },
      { label: "Architettura", value: "Intel + Apple Silicon" },
      { label: "TestFlight", value: "build 1.1 (3)" },
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
      { label: "App Apple", value: "● TestFlight 1.1 (3)", color: "green" as const },
      { label: "Cloud", value: "Nextcloud/WebDAV in anteprima" },
      { label: "Prossima priorità", value: "sincronizzazione collaborativa" },
    ],
  },
};

export const loadMore = "Altri aggiornamenti presto";