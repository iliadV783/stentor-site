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
  { id: "all", label: "Tutto", count: 11 },
  { id: "major", label: "Milestone", count: 7 },
  { id: "new", label: "Novità", count: 5 },
  { id: "improvements", label: "Miglioramenti", count: 7 },
  { id: "fixes", label: "Correzioni", count: 5 },
];

export const versionTag = "v0.1.74 · Audiodescrizione live";
export const versionRange = "· prototipo attuale";

export const years = [
  { y: "2026", n: 11, on: true },
  { y: "Ricerca", n: 1 },
];

export const entries = [
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
  {
    version: "0.1.73",
    date: "2026-06-19",
    type: "major",
    title: "Build TestFlight compatibile con macOS Monterey e Mac Intel",
    body: "Sténtor dispone ora di una build macOS universale per TestFlight, pensata per funzionare sia su Apple Silicon sia su Mac Intel, con deployment target abbassato a macOS Monterey 12.4. I Mac recenti continuano a usare automaticamente le rifiniture SwiftUI moderne, mentre i sistemi compatibili più vecchi usano fallback sicuri senza perdere il flusso teatrale principale.",
    changes: {
      improvements: [
        { title: "Archivio macOS universale", body: "La build macOS include sia Apple Silicon sia Intel, così i collaboratori possono testare la stessa versione anche su Mac Intel come i modelli 2018." },
        { title: "Compatibilità Monterey", body: "Il deployment target è stato abbassato a macOS 12.4, sostituendo o proteggendo le API SwiftUI disponibili solo da macOS 13 o macOS 14." },
        { title: "Rifiniture progressive", body: "Dettagli moderni come comportamento dello scroll, sfondi scroll nascosti e spaziatura tipografica vengono applicati solo quando la versione di macOS li supporta." },
        { title: "Sidebar collassabile mantenuta", body: "La sidebar compatta a sole icone resta disponibile e continua a proteggere l’interfaccia quando la finestra viene stretta." },
      ],
      fixes: [
        { title: "Permessi dei progetti recenti", body: "I progetti .stn recenti vengono riaperti con bookmark macOS persistenti, invece di affidarsi soltanto al percorso del file salvato." },
        { title: "Configurazione dell’archivio", body: "Le impostazioni Release sono state corrette per inviare a TestFlight una build universale, non solo Apple Silicon." },
      ],
    },
  },
  {
    version: "0.1.72",
    date: "2026-06-19",
    type: "major",
    title: "Varianti accessibili per tutte le lingue, ricerca battute e controllo più preciso del live",
    body: "Il lavoro del 19 giugno ha consolidato Sténtor come strumento per prove e sala: varianti linguistiche accessibili per tutte le lingue del progetto, ricerca immediata tra le battute, domande al pubblico più governabili e una proiezione live più pulita per cue tecnici e materiali non destinati agli spettatori.",
    changes: {
      new: [
        { title: "Varianti linguistiche accessibili", body: "La schermata Lingue distingue ogni lingua base dalla propria variante accessibile: it può generare it+, en può generare en+, fr può generare fr+ quando l’operatore abilita + accessibile." },
        { title: "Editor per le versioni +", body: "Nella pagina Testo l’operatore può lavorare anche sulla variante accessibile della battuta per qualunque lingua attiva, senza trattare le versioni + come lingue separate nella configurazione del progetto." },
        { title: "Ricerca battute", body: "È stata introdotta una funzione di ricerca nell’editor Testo per trovare rapidamente battute, cue e passaggi del copione durante preparazione e revisione." },
        { title: "Domande al pubblico più controllabili", body: "La pagina Inizio evolve verso un elenco unico di domande, con categorie Generali, Sopratitoli e Audiodescrizioni selezionabili e ordinamento pensato per l’uso reale dell’operatore." },
      ],
      improvements: [
        { title: "Versioni + non imposte all’avvio", body: "Nel progetto base la possibilità + accessibile resta visibile sulle lingue, ma non è già selezionata alla prima installazione: l’operatore decide quando attivarla." },
        { title: "Codici lingua più coerenti", body: "Sténtor usa codici brevi standard come it, en e fr, mantenendo la convenzione interna + solo per le varianti accessibili dei contenuti." },
        { title: "Smartphone del pubblico", body: "Quando una variante accessibile è attiva, il pubblico può vedere anche la scelta corrispondente, per esempio IT+, EN+ o FR+ accanto alle lingue base." },
        { title: "Omissione delle parentesi estesa", body: "L’opzione per omettere testo tra parentesi viene estesa anche alle parentesi quadre, così le indicazioni interne possono essere escluse dalle battute quando necessario." },
      ],
      fixes: [
        { title: "Cue luci non proiettati", body: "I cue tecnici di luce non vengono più trattati come testo da mostrare allo spettatore: durante una indicazione Luci lo schermo pubblico resta pulito." },
        { title: "Separazione tra gestione e contenuto", body: "La schermata Lingue configura quali lingue e varianti sono disponibili, mentre il testo effettivo delle varianti come it+, en+ o fr+ viene modificato nell’editor Testo." },
      ],
    },
  },
  {
    version: "0.1.71",
    date: "2026-06-18",
    type: "major",
    title: "L’import DOCX diventa più intelligente per i copioni teatrali",
    body: "Il lavoro del 18 giugno si è concentrato sul Parser nativo Apple: importazione DOCX più pulita, audiodescrizione gestita meglio, tagli di riga più naturali e prime strategie di prestazione per copioni molto lunghi.",
    changes: {
      improvements: [
        { title: "Riconoscimento dell’audiodescrizione", body: "Marcatori come AD vengono trattati come cue di audiodescrizione e non come personaggi, conservando il testo importato nel campo corretto." },
        { title: "Riconoscimento personaggi più pulito", body: "Indicazioni tecniche come Luce, Luci e note di regia hanno meno probabilità di essere scambiate per nomi di personaggi durante l’import DOCX." },
        { title: "Tagli di riga più naturali", body: "La divisione automatica del testo punta a una distribuzione più equilibrata, evitando spezzature innaturali e rispettando meglio il ritmo teatrale." },
        { title: "Opzione per il testo tra parentesi", body: "È stata preparata un’opzione del Parser per omettere dalle battute il testo tra parentesi quando serve separare dialogo, note interne e indicazioni sceniche." },
      ],
      fixes: [
        { title: "Reattività con copioni lunghi", body: "Sono stati analizzati i lag dell’editor Testo con copioni da oltre 1300 battute, con l’obiettivo di mantenere clic, selezione e scrolling immediati." },
      ],
    },
  },
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
      { label: "Prototipo", value: "0.1.74", accent: true },
      { label: "macOS", value: "12.4+ universale" },
      { label: "Architettura", value: "Intel + Apple Silicon" },
      { label: "TestFlight", value: "build 1.1 (2)" },
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
      { label: "App Apple", value: "● TestFlight universale", color: "green" as const },
      { label: "Compatibilità", value: "Monterey 12.4+" },
      { label: "Prossima priorità", value: "audiodescrizione live" },
    ],
  },
};

export const loadMore = "Altri aggiornamenti presto";