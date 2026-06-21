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
        { title: "Credenziali sicure", body: "I dati sensibili della connessione WebDAV vengono custoditi nel Portachiavi macOS, mentre nei profili restano solo le informazioni operative non sensibili." },
        { title: "Stati locale/cloud", body: "I progetti possono mostrare stati più espliciti: locale, associato al cloud, allineato, da sincronizzare o da scaricare." },
        { title: "TestFlight salvata", body: "La build macOS universale è stata pubblicata su TestFlight come build 1.1 (3), con le nuove funzioni cloud presentate come anteprima infrastrutturale." },
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
    body: "Sténtor introduce una nuova modalità di audiodescrizione dal vivo, affiancata alle audiodescrizioni registrate. È stato impostato un primo framework operativo per preparare, distinguere e controllare i cue audio durante lo spettacolo, separandoli da battute, luci, regia e contenuti proiettati.",
    changes: {
      new: [
        { title: "Audiodescrizione live", body: "Oltre ai file audio registrati, Sténtor può ora gestire cue pensati per essere letti o attivati dal vivo dall’operatore durante la rappresentazione." },
        { title: "Framework AD dedicato", body: "È stata costruita una prima struttura funzionale per riconoscere, organizzare e comandare le audiodescrizioni come canale autonomo del live." },
      ],
      improvements: [
        { title: "Canale AD più riconoscibile", body: "Le audiodescrizioni vengono trattate come materiale dedicato al canale audio, non come normali battute o personaggi del copione." },
        { title: "Controllo live più fluido", body: "La regia aiuta l’operatore a individuare e attivare le audiodescrizioni nel momento corretto durante lo spettacolo." },
        { title: "Esperienza pubblico semplificata", body: "L’accesso alle audiodescrizioni sui dispositivi del pubblico viene reso più diretto, riducendo i passaggi necessari per ascoltare." },
      ],
      fixes: [
        { title: "Separazione dai cue tecnici", body: "Indicazioni come luci, regia e note interne restano distinte dai contenuti destinati agli spettatori o all’ascolto in cuffia." },
      ],
    },
  },
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