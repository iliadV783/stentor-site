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
  { id: "all", label: "Tutto", count: 14 },
  { id: "major", label: "Milestone", count: 10 },
  { id: "new", label: "Novità", count: 8 },
  { id: "improvements", label: "Miglioramenti", count: 10 },
  { id: "fixes", label: "Correzioni", count: 7 },
];

export const versionTag = "v0.1.77 · Prima sperimentazione dal vivo";
export const versionRange = "· prototipo attuale";

export const years = [
  { y: "2026", n: 14, on: true },
  { y: "Ricerca", n: 1 },
];

export const entries = [
  {
    version: "0.1.77",
    date: "2026-06-27",
    type: "major",
    title: "Prima sperimentazione dal vivo di Sténtor",
    body: "Questa sera, in occasione della rappresentazione de Il matrimonio di Witold Gombrowicz del gruppo teatrale universitario Tan Tan Teatro presso Villa Martini, a Cavagnolo, Sténtor viene provato per la prima volta in una situazione reale di spettacolo dal vivo. La sperimentazione riguarda in particolare l’uso del riconoscimento audio per tentare la sincronizzazione automatica dei sopratitoli durante la recita, in uno spazio all’aperto e con segnale proveniente dalla regia tecnica.",
    changes: {
      new: [
        { title: "Test in spettacolo reale", body: "Sténtor esce dal solo contesto di sviluppo e prova il proprio flusso live in una rappresentazione aperta al pubblico." },
        { title: "Sincronizzazione audio in campo", body: "Il riconoscimento audio viene usato per verificare se il sistema può seguire il copione e aiutare la sincronizzazione automatica dei sopratitoli durante la recita." },
      ],
      improvements: [
        { title: "Dati da condizioni operative reali", body: "La prova permette di osservare il comportamento del prototipo con voci dal vivo, microfonazione ambientale, spazio aperto e segnale audio proveniente dalla regia." },
        { title: "Verifica della tenuta live", body: "La sperimentazione serve a individuare limiti, margini di stabilità e priorità di sviluppo per l’uso di Sténtor in contesti performativi reali." },
      ],
    },
  },
  {
    version: "0.1.76",
    date: "2026-06-25",
    type: "major",
    title: "Testo live, sopratitoli bilingui, tutorial e nuova build di prova",
    body: "La nuova build amplia il lavoro in scena e la distribuzione beta: riconoscimento del testo dal vivo con sensibilità regolabile, proiezione bilingue dei sopratitoli, accessi più chiari, questionari compilabili anche dopo lo spettacolo, tutorial iniziale integrato, nuova build su TestFlight Apple e sviluppo Windows portato avanti in parallelo.",
    changes: {
      new: [
        { title: "Riconoscimento del testo dal vivo", body: "La sezione Regia può seguire il copione durante prove e repliche, aiutando l’operatore a riconoscere il punto della scena senza dipendere solo dall’avanzamento manuale dei cue." },
        { title: "Sensibilità regolabile alla scena", body: "Il riconoscimento automatico può essere impostato su tre modalità di sensibilità, così da adattarsi a scene più lente, dialoghi serrati o situazioni in cui serve maggiore prudenza prima di avanzare." },
        { title: "Questionari differiti", body: "I questionari per il pubblico possono essere raggiunti tramite QR code o link e compilati anche nei giorni successivi allo spettacolo, separando la raccolta dei feedback dal solo momento di uscita dalla sala." },
        { title: "Tutorial iniziale", body: "Una nuova introduzione guidata accompagna il primo avvio dell’app e resta riapribile dal menu Aiuto, con la possibilità di non mostrarla automaticamente all’avvio." },
      ],
      improvements: [
        { title: "Sopratitoli bilingui", body: "La proiezione può mostrare due lingue in parallelo, con controlli e diagnostica per individuare battute non tradotte o coperture incomplete prima della messa in onda." },
        { title: "Regia e memorie dei tempi", body: "Il flusso live integra meglio memorie dei tempi, riconoscimento del testo e controllo dei cue, offrendo all’operatore più modalità per seguire il ritmo reale della scena." },
        { title: "Accessi e account", body: "L’interfaccia distingue in modo più leggibile lavoro locale, accesso all’account e sincronizzazione, riducendo l’ambiguità tra uso offline e funzioni cloud." },
        { title: "Distribuzione Apple e Windows", body: "La build Apple prosegue su TestFlight, mentre lo sviluppo della versione nativa Windows avanza in parallelo per mantenere coerenza funzionale e visiva tra le piattaforme." },
      ],
      fixes: [
        { title: "Controlli sulle traduzioni mancanti", body: "Sono stati rafforzati gli avvisi che segnalano coperture bilingui incomplete, così la proiezione evita fallback poco controllati nei passaggi non ancora tradotti." },
        { title: "Tutorial senza audio", body: "L’introduzione guidata è solo visiva e non aggiunge suoni, notifiche acustiche o effetti durante l’uso dell’app." },
      ],
    },
  },
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
      { label: "Prototipo", value: "0.1.77", accent: true },
      { label: "macOS", value: "12.4+ universale" },
      { label: "Architettura", value: "Intel + Apple Silicon" },
      { label: "TestFlight", value: "build aggiornata" },
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
      { label: "App Apple", value: "● TestFlight aggiornata", color: "green" as const },
      { label: "Windows", value: "sviluppo nativo parallelo" },
      { label: "Prossima priorità", value: "test live e sincronizzazione audio" },
    ],
  },
};

export const loadMore = "Altri aggiornamenti presto";