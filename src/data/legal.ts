import type { Locale } from "../i18n/config";

type LegalSection = {
  id: string;
  title: string;
  body: string;
};

export type LegalPageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  tocLabel: string;
  sections: LegalSection[];
  contact: {
    title: string;
    body: string;
  };
};

type LegalKind = "privacy" | "terms";

export const legal: Record<LegalKind, Record<Locale, LegalPageContent>> = {
  privacy: {
    en: {
      metaTitle: "Sténtor – Privacy Policy",
      metaDescription: "How Sténtor handles contact details, feedback, questionnaires and research-related information.",
      eyebrow: "Legal · Privacy",
      title: "Privacy Policy",
      effectiveDate: "Effective June 16, 2026",
      intro: "This page explains how Sténtor handles information connected with the website, the software, feedback forms, questionnaires and research exchange.",
      tocLabel: "On this page",
      sections: [
        { id: "overview", title: "1. Overview", body: '<p>Sténtor is a research-driven software project for surtitles, translation and audio description in live performance. For privacy questions, email <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "data", title: "2. Information we may receive", body: '<p>We may receive contact details, messages, feedback, questionnaire answers, audience comments, technical notes, field notes and basic website or diagnostic information. Please avoid sending sensitive personal information unless it is necessary.</p><p>If you choose to sign in with Google or Microsoft, Sténtor may receive the basic account information needed for authentication, such as your email address and name. These providers are used only for account access, not for advertising, profiling or marketing tracking.</p>' },
        { id: "use", title: "3. How information is used", body: '<p>Information is used to reply to messages, understand how Sténtor works in real rooms, improve the software and documentation, maintain the project, and support research on live-performance text.</p><p>We do not sell personal data and we do not use it for third-party advertising.</p>' },
        { id: "research", title: "4. Feedback and research", body: '<p>Feedback, questionnaires, audience responses and field notes may be used to improve Sténtor and support research on surtitles, translation, audio description and audience devices. Where possible, public discussion uses aggregated or de-identified information.</p>' },
        { id: "content", title: "5. Project content", body: '<p>Scripts, translations, notes, audio-description material and project files remain the responsibility of the person or organisation using Sténtor. Only share material when you have the right to do so.</p>' },
        { id: "rights", title: "6. Retention and requests", body: '<p>We keep information only as long as needed for communication, project development, research documentation or archival purposes. You may ask to access, correct or delete personal information by emailing <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "cookies", title: "7. Cookies and analytics", body: '<p>The website uses only technical and functional technologies necessary to operate the website, account access, downloads and access-code management. Sténtor does not use advertising cookies, profiling cookies or third-party marketing trackers.</p>' },
        { id: "changes", title: "8. Updates", body: '<p>This page may be updated as Sténtor develops. The effective date shows the latest version.</p>' }
      ],
      contact: { title: "Questions?", body: 'Email <a href="mailto:info@stentor.live">info@stentor.live</a>.' }
    },
    it: {
      metaTitle: "Sténtor – Informativa sulla privacy",
      metaDescription: "Come Sténtor gestisce contatti, feedback, questionari e informazioni legate alla ricerca.",
      eyebrow: "Legale · Privacy",
      title: "Informativa sulla privacy",
      effectiveDate: "In vigore dal 16 giugno 2026",
      intro: "Questa pagina spiega come Sténtor gestisce le informazioni connesse al sito, al software, ai moduli di feedback, ai questionari e allo scambio di ricerca.",
      tocLabel: "In questa pagina",
      sections: [
        { id: "overview", title: "1. Panoramica", body: '<p>Sténtor è un progetto software orientato alla ricerca per soprattitoli, traduzione e audio-descrizione nello spettacolo dal vivo. Per domande sulla privacy, scrivi a <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "data", title: "2. Informazioni che possiamo ricevere", body: '<p>Possiamo ricevere dati di contatto, messaggi, feedback, risposte a questionari, commenti del pubblico, note tecniche, osservazioni sul campo e informazioni tecniche di base relative al sito o alla diagnostica. Evita di inviare dati personali sensibili se non è necessario.</p><p>Se scegli di accedere con Google o Microsoft, Sténtor può ricevere le informazioni di base necessarie per l’autenticazione, come indirizzo email e nome. Questi provider sono usati solo per l’accesso all’account, non per pubblicità, profilazione o tracciamento marketing.</p>' },
        { id: "use", title: "3. Come vengono usate le informazioni", body: '<p>Le informazioni sono usate per rispondere ai messaggi, capire come Sténtor funziona in contesti reali, migliorare software e documentazione, mantenere il progetto e sostenere la ricerca sul testo nello spettacolo dal vivo.</p><p>Non vendiamo dati personali e non li usiamo per pubblicità di terze parti.</p>' },
        { id: "research", title: "4. Feedback e ricerca", body: '<p>Feedback, questionari, risposte del pubblico e note sul campo possono essere usati per migliorare Sténtor e sostenere la ricerca su soprattitoli, traduzione, audio-descrizione e dispositivi del pubblico. Quando possibile, la discussione pubblica usa informazioni aggregate o anonimizzate.</p>' },
        { id: "content", title: "5. Contenuti del progetto", body: '<p>Copioni, traduzioni, note, materiali di audio-descrizione e file di progetto restano responsabilità della persona o dell’organizzazione che usa Sténtor. Condividi materiale solo quando hai il diritto di farlo.</p>' },
        { id: "rights", title: "6. Conservazione e richieste", body: '<p>Conserviamo le informazioni solo per il tempo necessario alla comunicazione, allo sviluppo del progetto, alla documentazione di ricerca o ad archivi di progetto. Puoi chiedere accesso, correzione o cancellazione dei dati personali scrivendo a <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "cookies", title: "7. Cookie e analytics", body: '<p>Il sito usa solo tecnologie tecniche e funzionali necessarie al funzionamento del sito, dell’accesso account, dei download e della gestione dei codici di accesso. Sténtor non usa cookie pubblicitari, cookie di profilazione o tracker marketing di terze parti.</p>' },
        { id: "changes", title: "8. Aggiornamenti", body: '<p>Questa pagina può essere aggiornata con l’evoluzione di Sténtor. La data di entrata in vigore indica l’ultima versione.</p>' }
      ],
      contact: { title: "Domande?", body: 'Scrivi a <a href="mailto:info@stentor.live">info@stentor.live</a>.' }
    },
    fr: {
      metaTitle: "Sténtor – Politique de confidentialité",
      metaDescription: "Comment Sténtor traite les coordonnées, retours, questionnaires et informations liées à la recherche.",
      eyebrow: "Légal · Confidentialité",
      title: "Politique de confidentialité",
      effectiveDate: "En vigueur le 16 juin 2026",
      intro: "Cette page explique comment Sténtor traite les informations liées au site, au logiciel, aux formulaires de retour, aux questionnaires et aux échanges de recherche.",
      tocLabel: "Sur cette page",
      sections: [
        { id: "overview", title: "1. Vue d’ensemble", body: '<p>Sténtor est un projet logiciel orienté recherche pour les surtitres, la traduction et l’audiodescription dans le spectacle vivant. Pour toute question de confidentialité, écrivez à <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "data", title: "2. Informations que nous pouvons recevoir", body: '<p>Nous pouvons recevoir des coordonnées, messages, retours, réponses à des questionnaires, commentaires du public, notes techniques, observations de terrain et informations techniques de base liées au site ou au diagnostic. Évitez d’envoyer des informations personnelles sensibles sauf si cela est nécessaire.</p><p>Si vous choisissez de vous connecter avec Google ou Microsoft, Sténtor peut recevoir les informations de base nécessaires à l’authentification, comme votre adresse e-mail et votre nom. Ces fournisseurs sont utilisés uniquement pour l’accès au compte, pas pour la publicité, le profilage ou le suivi marketing.</p>' },
        { id: "use", title: "3. Utilisation des informations", body: '<p>Les informations sont utilisées pour répondre aux messages, comprendre le fonctionnement de Sténtor dans des contextes réels, améliorer le logiciel et la documentation, maintenir le projet et soutenir la recherche sur le texte dans le spectacle vivant.</p><p>Nous ne vendons pas de données personnelles et nous ne les utilisons pas pour de la publicité de tiers.</p>' },
        { id: "research", title: "4. Retours et recherche", body: '<p>Les retours, questionnaires, réponses du public et notes de terrain peuvent être utilisés pour améliorer Sténtor et soutenir la recherche sur les surtitres, la traduction, l’audiodescription et les appareils du public. Lorsque c’est possible, les discussions publiques utilisent des informations agrégées ou anonymisées.</p>' },
        { id: "content", title: "5. Contenus de projet", body: '<p>Les scripts, traductions, notes, matériaux d’audiodescription et fichiers de projet restent sous la responsabilité de la personne ou de l’organisation qui utilise Sténtor. Ne partagez du contenu que lorsque vous avez le droit de le faire.</p>' },
        { id: "rights", title: "6. Conservation et demandes", body: '<p>Nous conservons les informations uniquement le temps nécessaire à la communication, au développement du projet, à la documentation de recherche ou à l’archivage du projet. Vous pouvez demander l’accès, la correction ou la suppression de données personnelles en écrivant à <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "cookies", title: "7. Cookies et analytics", body: '<p>Le site utilise uniquement des technologies techniques et fonctionnelles nécessaires au fonctionnement du site, de l’accès au compte, des téléchargements et de la gestion des codes d’accès. Sténtor n’utilise pas de cookies publicitaires, de cookies de profilage ni de traceurs marketing tiers.</p>' },
        { id: "changes", title: "8. Mises à jour", body: '<p>Cette page peut être mise à jour au fur et à mesure de l’évolution de Sténtor. La date d’entrée en vigueur indique la dernière version.</p>' }
      ],
      contact: { title: "Questions ?", body: 'Écrivez à <a href="mailto:info@stentor.live">info@stentor.live</a>.' }
    },
    es: {
      metaTitle: "Sténtor – Política de privacidad",
      metaDescription: "Cómo Sténtor gestiona datos de contacto, comentarios, cuestionarios e información relacionada con la investigación.",
      eyebrow: "Legal · Privacidad",
      title: "Política de privacidad",
      effectiveDate: "Vigente desde el 16 de junio de 2026",
      intro: "Esta página explica cómo Sténtor gestiona la información relacionada con el sitio web, el software, los formularios de comentarios, los cuestionarios y el intercambio de investigación.",
      tocLabel: "En esta página",
      sections: [
        { id: "overview", title: "1. Resumen", body: '<p>Sténtor es un proyecto de software orientado a la investigación para sobretítulos, traducción y audio descripción en artes escénicas en vivo. Para preguntas sobre privacidad, escribe a <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "data", title: "2. Información que podemos recibir", body: '<p>Podemos recibir datos de contacto, mensajes, comentarios, respuestas a cuestionarios, observaciones del público, notas técnicas, notas de campo e información técnica básica del sitio o de diagnóstico. Evita enviar información personal sensible salvo que sea necesario.</p><p>Si eliges iniciar sesión con Google o Microsoft, Sténtor puede recibir la información básica necesaria para la autenticación, como tu dirección de correo electrónico y tu nombre. Estos proveedores se usan solo para el acceso a la cuenta, no para publicidad, elaboración de perfiles o seguimiento de marketing.</p>' },
        { id: "use", title: "3. Cómo se usa la información", body: '<p>La información se usa para responder mensajes, entender cómo funciona Sténtor en contextos reales, mejorar el software y la documentación, mantener el proyecto y apoyar la investigación sobre texto en artes escénicas en vivo.</p><p>No vendemos datos personales ni los usamos para publicidad de terceros.</p>' },
        { id: "research", title: "4. Comentarios e investigación", body: '<p>Los comentarios, cuestionarios, respuestas del público y notas de campo pueden usarse para mejorar Sténtor y apoyar la investigación sobre sobretítulos, traducción, audio descripción y dispositivos del público. Cuando es posible, la discusión pública utiliza información agregada o anonimizada.</p>' },
        { id: "content", title: "5. Contenido del proyecto", body: '<p>Los guiones, traducciones, notas, materiales de audio descripción y archivos de proyecto siguen siendo responsabilidad de la persona u organización que usa Sténtor. Comparte material solo cuando tengas derecho a hacerlo.</p>' },
        { id: "rights", title: "6. Conservación y solicitudes", body: '<p>Conservamos la información solo durante el tiempo necesario para la comunicación, el desarrollo del proyecto, la documentación de investigación o el archivo del proyecto. Puedes solicitar acceso, corrección o eliminación de datos personales escribiendo a <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "cookies", title: "7. Cookies y analítica", body: '<p>El sitio utiliza solo tecnologías técnicas y funcionales necesarias para operar el sitio, el acceso a cuentas, las descargas y la gestión de códigos de acceso. Sténtor no usa cookies publicitarias, cookies de perfilado ni rastreadores de marketing de terceros.</p>' },
        { id: "changes", title: "8. Actualizaciones", body: '<p>Esta página puede actualizarse a medida que Sténtor evoluciona. La fecha de vigencia indica la versión más reciente.</p>' }
      ],
      contact: { title: "¿Preguntas?", body: 'Escribe a <a href="mailto:info@stentor.live">info@stentor.live</a>.' }
    },
    de: {
      metaTitle: "Sténtor – Datenschutzerklärung",
      metaDescription: "Wie Sténtor Kontaktdaten, Feedback, Fragebögen und forschungsbezogene Informationen verarbeitet.",
      eyebrow: "Rechtliches · Datenschutz",
      title: "Datenschutzerklärung",
      effectiveDate: "Gültig ab 16. Juni 2026",
      intro: "Diese Seite erklärt, wie Sténtor Informationen im Zusammenhang mit der Website, der Software, Feedback-Formularen, Fragebögen und Forschungsaustausch behandelt.",
      tocLabel: "Auf dieser Seite",
      sections: [
        { id: "overview", title: "1. Überblick", body: '<p>Sténtor ist ein forschungsorientiertes Softwareprojekt für Übertitel, Übersetzung und Audiodeskription im Live-Bereich. Bei Fragen zum Datenschutz schreiben Sie an <a href="mailto:info@stentor.live">info@stentor.live</a>.</p>' },
        { id: "data", title: "2. Informationen, die wir erhalten können", body: '<p>Wir können Kontaktdaten, Nachrichten, Feedback, Fragebogenantworten, Publikumsrückmeldungen, technische Notizen, Feldnotizen sowie grundlegende Website- oder Diagnoseinformationen erhalten. Bitte senden Sie keine sensiblen personenbezogenen Daten, sofern dies nicht erforderlich ist.</p><p>Wenn Sie sich mit Google oder Microsoft anmelden, kann Sténtor die für die Authentifizierung notwendigen Basisdaten erhalten, etwa Ihre E-Mail-Adresse und Ihren Namen. Diese Anbieter werden nur für den Kontozugang verwendet, nicht für Werbung, Profiling oder Marketing-Tracking.</p>' },
        { id: "use", title: "3. Verwendung der Informationen", body: '<p>Informationen werden genutzt, um Nachrichten zu beantworten, zu verstehen, wie Sténtor in realen Räumen funktioniert, Software und Dokumentation zu verbessern, das Projekt zu pflegen und Forschung zu Text im Live-Bereich zu unterstützen.</p><p>Wir verkaufen keine personenbezogenen Daten und verwenden sie nicht für Werbung Dritter.</p>' },
        { id: "research", title: "4. Feedback und Forschung", body: '<p>Feedback, Fragebögen, Publikumsreaktionen und Feldnotizen können verwendet werden, um Sténtor zu verbessern und Forschung zu Übertiteln, Übersetzung, Audiodeskription und Publikumsgeräten zu unterstützen. Soweit möglich, nutzt öffentliche Kommunikation aggregierte oder anonymisierte Informationen.</p>' },
        { id: "content", title: "5. Projektinhalte", body: '<p>Skripte, Übersetzungen, Notizen, Audiodeskriptionsmaterial und Projektdateien bleiben in der Verantwortung der Person oder Organisation, die Sténtor nutzt. Teilen Sie Material nur, wenn Sie dazu berechtigt sind.</p>' },
        { id: "rights", title: "6. Aufbewahrung und Anfragen", body: '<p>Wir bewahren Informationen nur so lange auf, wie es für Kommunikation, Projektentwicklung, Forschungsdokumentation oder Projektarchivierung erforderlich ist. Sie können Zugang, Berichtigung oder Löschung personenbezogener Daten per E-Mail an <a href="mailto:info@stentor.live">info@stentor.live</a> anfragen.</p>' },
        { id: "cookies", title: "7. Cookies und Analyse", body: '<p>Die Website nutzt nur technische und funktionale Technologien, die für den Betrieb der Website, den Kontozugang, Downloads und die Verwaltung von Zugangscodes erforderlich sind. Sténtor verwendet keine Werbe-Cookies, Profiling-Cookies oder Marketing-Tracker Dritter.</p>' },
        { id: "changes", title: "8. Aktualisierungen", body: '<p>Diese Seite kann aktualisiert werden, während sich Sténtor weiterentwickelt. Das Gültigkeitsdatum zeigt die neueste Version an.</p>' }
      ],
      contact: { title: "Fragen?", body: 'Schreiben Sie an <a href="mailto:info@stentor.live">info@stentor.live</a>.' }
    }
  },
  terms: {
    en: {
      metaTitle: "Sténtor – Terms of Service",
      metaDescription: "Terms of Service for Sténtor, a research-driven software project for live-performance text.",
      eyebrow: "Legal · Terms",
      title: "Terms of Service",
      effectiveDate: "Effective June 16, 2026",
      intro: "These terms describe the basic conditions for using Sténtor, a research-driven software project for surtitles, translation and audio description in live performance.",
      tocLabel: "On this page",
      sections: [
        { id: "acceptance", title: "1. Acceptance", body: '<p>By accessing the Sténtor website, using the software, sending feedback or answering project questionnaires, you agree to these Terms and to the Privacy Policy.</p>' },
        { id: "purpose", title: "2. Purpose", body: '<p>Sténtor helps prepare, cue and share surtitles, translations, audio-description notes and related live-performance text. It is intended for artistic, cultural, educational and research contexts.</p>' },
        { id: "support", title: "3. Access, support and donations", body: '<p>Sténtor aims to keep the same core features available to everyone. Suggested support or donation levels may vary according to the size, resources and context of use, but they do not create paid support, priority service or different core functionality.</p>' },
        { id: "use", title: "4. Responsible use", body: '<p>Use Sténtor responsibly. Do not use it to infringe the rights of others, share material without permission, disrupt the project or related services, misrepresent the project, or create unreasonable risk for artists, venues, audiences or participants.</p>' },
        { id: "content", title: "5. Your content", body: '<p>You are responsible for scripts, translations, notes, audio-description material, project files, recordings, feedback and any other content you import, create, display, export or share using Sténtor.</p>' },
        { id: "feedback", title: "6. Feedback and research exchange", body: '<p>You are encouraged to provide feedback, questionnaire responses, audience observations, technical notes and field notes. By sending feedback, you allow Sténtor to use it to improve the software, documentation and research.</p>' },
        { id: "licensing", title: "7. Licensing and attribution", body: '<p>Sténtor may include open-source components and may be distributed under open-source licensing terms indicated in the repository or release materials. The Sténtor name, website copy, branding, documentation and research materials may have separate attribution requirements unless expressly licensed otherwise.</p>' },
        { id: "changes", title: "8. Changes", body: '<p>Sténtor is an evolving project. Features, workflows, documentation, support channels, donation levels and these Terms may change over time. The effective date shows the latest version.</p>' }
      ],
      contact: { title: "Questions?", body: 'Email <a href="mailto:info@stentor.live">info@stentor.live</a> or write to Leonardo Mancini, c/o Department of Humanities, University of Turin, Via Sant\'Ottavio 20 – 10124, Turin, Italy.' }
    },
    it: {
      metaTitle: "Sténtor – Termini di servizio",
      metaDescription: "Termini di servizio di Sténtor, progetto software orientato alla ricerca per il testo nello spettacolo dal vivo.",
      eyebrow: "Legale · Termini",
      title: "Termini di servizio",
      effectiveDate: "In vigore dal 16 giugno 2026",
      intro: "Questi termini descrivono le condizioni di base per usare Sténtor, un progetto software orientato alla ricerca per soprattitoli, traduzione e audio-descrizione nello spettacolo dal vivo.",
      tocLabel: "In questa pagina",
      sections: [
        { id: "acceptance", title: "1. Accettazione", body: '<p>Accedendo al sito di Sténtor, usando il software, inviando feedback o rispondendo ai questionari del progetto, accetti questi Termini e l’Informativa sulla privacy.</p>' },
        { id: "purpose", title: "2. Scopo", body: '<p>Sténtor aiuta a preparare, mandare in scena e condividere soprattitoli, traduzioni, note di audio-descrizione e altri testi per lo spettacolo dal vivo. È pensato per contesti artistici, culturali, educativi e di ricerca.</p>' },
        { id: "support", title: "3. Accesso, supporto e donazioni", body: '<p>Sténtor mira a mantenere le stesse funzioni principali disponibili per tutti. Livelli suggeriti di supporto o donazione possono variare in base a dimensioni, risorse e contesto d’uso, ma non creano supporto a pagamento, servizio prioritario o funzioni principali diverse.</p>' },
        { id: "use", title: "4. Uso responsabile", body: '<p>Usa Sténtor responsabilmente. Non usarlo per violare diritti altrui, condividere materiale senza autorizzazione, disturbare il progetto o i servizi collegati, rappresentare falsamente il progetto o creare rischi irragionevoli per artisti, luoghi, pubblico o partecipanti.</p>' },
        { id: "content", title: "5. I tuoi contenuti", body: '<p>Sei responsabile di copioni, traduzioni, note, materiali di audio-descrizione, file di progetto, registrazioni, feedback e qualsiasi altro contenuto importato, creato, mostrato, esportato o condiviso usando Sténtor.</p>' },
        { id: "feedback", title: "6. Feedback e scambio di ricerca", body: '<p>Sei incoraggiato a fornire feedback, risposte a questionari, osservazioni del pubblico, note tecniche e note sul campo. Inviando feedback, autorizzi Sténtor a usarlo per migliorare software, documentazione e ricerca.</p>' },
        { id: "licensing", title: "7. Licenze e attribuzione", body: '<p>Sténtor può includere componenti open source e può essere distribuito secondo i termini di licenza indicati nel repository o nei materiali di rilascio. Il nome Sténtor, i testi del sito, il branding, la documentazione e i materiali di ricerca possono avere requisiti di attribuzione separati salvo licenza espressa diversa.</p>' },
        { id: "changes", title: "8. Modifiche", body: '<p>Sténtor è un progetto in evoluzione. Funzioni, workflow, documentazione, canali di supporto, livelli di donazione e questi Termini possono cambiare nel tempo. La data di entrata in vigore indica l’ultima versione.</p>' }
      ],
      contact: { title: "Domande?", body: 'Scrivi a <a href="mailto:info@stentor.live">info@stentor.live</a> oppure a Leonardo Mancini, c/o Dipartimento di Studi Umanistici, Università di Torino, Via Sant\'Ottavio 20 – 10124 Torino, Italia.' }
    },
    fr: {
      metaTitle: "Sténtor – Conditions d’utilisation",
      metaDescription: "Conditions d’utilisation de Sténtor, projet logiciel orienté recherche pour le texte dans le spectacle vivant.",
      eyebrow: "Légal · Conditions",
      title: "Conditions d’utilisation",
      effectiveDate: "En vigueur le 16 juin 2026",
      intro: "Ces conditions décrivent les règles de base pour utiliser Sténtor, un projet logiciel orienté recherche pour les surtitres, la traduction et l’audiodescription dans le spectacle vivant.",
      tocLabel: "Sur cette page",
      sections: [
        { id: "acceptance", title: "1. Acceptation", body: '<p>En accédant au site Sténtor, en utilisant le logiciel, en envoyant des retours ou en répondant aux questionnaires du projet, vous acceptez ces Conditions et la Politique de confidentialité.</p>' },
        { id: "purpose", title: "2. Objet", body: '<p>Sténtor aide à préparer, déclencher et partager des surtitres, traductions, notes d’audiodescription et textes liés au spectacle vivant. Il est destiné à des contextes artistiques, culturels, éducatifs et de recherche.</p>' },
        { id: "support", title: "3. Accès, soutien et dons", body: '<p>Sténtor vise à garder les mêmes fonctions principales accessibles à tous. Les niveaux suggérés de soutien ou de don peuvent varier selon la taille, les ressources et le contexte d’utilisation, mais ils ne créent pas de support payant, de service prioritaire ni de fonctions principales différentes.</p>' },
        { id: "use", title: "4. Utilisation responsable", body: '<p>Utilisez Sténtor de manière responsable. Ne l’utilisez pas pour porter atteinte aux droits d’autrui, partager du contenu sans autorisation, perturber le projet ou les services liés, présenter le projet de manière trompeuse ou créer des risques déraisonnables pour les artistes, lieux, publics ou participants.</p>' },
        { id: "content", title: "5. Vos contenus", body: '<p>Vous êtes responsable des scripts, traductions, notes, matériaux d’audiodescription, fichiers de projet, enregistrements, retours et tout autre contenu importé, créé, affiché, exporté ou partagé avec Sténtor.</p>' },
        { id: "feedback", title: "6. Retours et échange de recherche", body: '<p>Vous êtes encouragé à fournir des retours, réponses à des questionnaires, observations du public, notes techniques et notes de terrain. En envoyant des retours, vous autorisez Sténtor à les utiliser pour améliorer le logiciel, la documentation et la recherche.</p>' },
        { id: "licensing", title: "7. Licences et attribution", body: '<p>Sténtor peut inclure des composants open source et être distribué selon les conditions de licence indiquées dans le dépôt ou les matériaux de publication. Le nom Sténtor, les textes du site, l’identité visuelle, la documentation et les matériaux de recherche peuvent avoir des exigences d’attribution distinctes sauf licence explicite contraire.</p>' },
        { id: "changes", title: "8. Modifications", body: '<p>Sténtor est un projet en évolution. Les fonctions, workflows, documentations, canaux de support, niveaux de don et ces Conditions peuvent changer au fil du temps. La date d’entrée en vigueur indique la dernière version.</p>' }
      ],
      contact: { title: "Questions ?", body: 'Écrivez à <a href="mailto:info@stentor.live">info@stentor.live</a> ou à Leonardo Mancini, c/o Department of Humanities, University of Turin, Via Sant\'Ottavio 20 – 10124, Turin, Italy.' }
    },
    es: {
      metaTitle: "Sténtor – Términos de servicio",
      metaDescription: "Términos de servicio de Sténtor, proyecto de software orientado a la investigación para texto en artes escénicas en vivo.",
      eyebrow: "Legal · Términos",
      title: "Términos de servicio",
      effectiveDate: "Vigente desde el 16 de junio de 2026",
      intro: "Estos términos describen las condiciones básicas para usar Sténtor, un proyecto de software orientado a la investigación para sobretítulos, traducción y audio descripción en artes escénicas en vivo.",
      tocLabel: "En esta página",
      sections: [
        { id: "acceptance", title: "1. Aceptación", body: '<p>Al acceder al sitio de Sténtor, usar el software, enviar comentarios o responder cuestionarios del proyecto, aceptas estos Términos y la Política de privacidad.</p>' },
        { id: "purpose", title: "2. Finalidad", body: '<p>Sténtor ayuda a preparar, lanzar y compartir sobretítulos, traducciones, notas de audio descripción y otros textos relacionados con artes escénicas en vivo. Está pensado para contextos artísticos, culturales, educativos y de investigación.</p>' },
        { id: "support", title: "3. Acceso, apoyo y donaciones", body: '<p>Sténtor busca mantener las mismas funciones principales disponibles para todos. Los niveles sugeridos de apoyo o donación pueden variar según el tamaño, los recursos y el contexto de uso, pero no crean soporte de pago, servicio prioritario ni funciones principales diferentes.</p>' },
        { id: "use", title: "4. Uso responsable", body: '<p>Usa Sténtor de forma responsable. No lo uses para infringir derechos de terceros, compartir material sin permiso, alterar el proyecto o servicios relacionados, presentar falsamente el proyecto o crear riesgos irrazonables para artistas, espacios, públicos o participantes.</p>' },
        { id: "content", title: "5. Tus contenidos", body: '<p>Eres responsable de guiones, traducciones, notas, materiales de audio descripción, archivos de proyecto, grabaciones, comentarios y cualquier otro contenido que importes, crees, muestres, exportes o compartas usando Sténtor.</p>' },
        { id: "feedback", title: "6. Comentarios e intercambio de investigación", body: '<p>Se te anima a aportar comentarios, respuestas a cuestionarios, observaciones del público, notas técnicas y notas de campo. Al enviar comentarios, permites que Sténtor los use para mejorar el software, la documentación y la investigación.</p>' },
        { id: "licensing", title: "7. Licencias y atribución", body: '<p>Sténtor puede incluir componentes de código abierto y distribuirse bajo los términos de licencia indicados en el repositorio o en los materiales de lanzamiento. El nombre Sténtor, los textos del sitio, la marca, la documentación y los materiales de investigación pueden tener requisitos de atribución separados salvo licencia expresa en contrario.</p>' },
        { id: "changes", title: "8. Cambios", body: '<p>Sténtor es un proyecto en evolución. Las funciones, flujos de trabajo, documentación, canales de soporte, niveles de donación y estos Términos pueden cambiar con el tiempo. La fecha de vigencia indica la versión más reciente.</p>' }
      ],
      contact: { title: "¿Preguntas?", body: 'Escribe a <a href="mailto:info@stentor.live">info@stentor.live</a> o a Leonardo Mancini, c/o Department of Humanities, University of Turin, Via Sant\'Ottavio 20 – 10124, Turin, Italy.' }
    },
    de: {
      metaTitle: "Sténtor – Nutzungsbedingungen",
      metaDescription: "Nutzungsbedingungen für Sténtor, ein forschungsorientiertes Softwareprojekt für Text im Live-Bereich.",
      eyebrow: "Rechtliches · Bedingungen",
      title: "Nutzungsbedingungen",
      effectiveDate: "Gültig ab 16. Juni 2026",
      intro: "Diese Bedingungen beschreiben die grundlegenden Regeln für die Nutzung von Sténtor, einem forschungsorientierten Softwareprojekt für Übertitel, Übersetzung und Audiodeskription im Live-Bereich.",
      tocLabel: "Auf dieser Seite",
      sections: [
        { id: "acceptance", title: "1. Annahme", body: '<p>Durch den Zugriff auf die Sténtor-Website, die Nutzung der Software, das Senden von Feedback oder das Beantworten von Projektfragebögen stimmen Sie diesen Bedingungen und der Datenschutzerklärung zu.</p>' },
        { id: "purpose", title: "2. Zweck", body: '<p>Sténtor hilft beim Vorbereiten, Auslösen und Teilen von Übertiteln, Übersetzungen, Audiodeskriptionsnotizen und verwandtem Text im Live-Bereich. Es ist für künstlerische, kulturelle, pädagogische und forschungsbezogene Kontexte gedacht.</p>' },
        { id: "support", title: "3. Zugang, Unterstützung und Spenden", body: '<p>Sténtor zielt darauf ab, dieselben Kernfunktionen für alle verfügbar zu halten. Vorgeschlagene Unterstützungs- oder Spendenstufen können je nach Größe, Ressourcen und Nutzungskontext variieren, begründen aber keinen bezahlten Support, keinen Prioritätsdienst und keine unterschiedlichen Kernfunktionen.</p>' },
        { id: "use", title: "4. Verantwortliche Nutzung", body: '<p>Nutzen Sie Sténtor verantwortungsvoll. Verwenden Sie es nicht, um Rechte Dritter zu verletzen, Material ohne Erlaubnis zu teilen, das Projekt oder verbundene Dienste zu stören, das Projekt falsch darzustellen oder unangemessene Risiken für Künstler, Spielstätten, Publikum oder Teilnehmende zu schaffen.</p>' },
        { id: "content", title: "5. Ihre Inhalte", body: '<p>Sie sind verantwortlich für Skripte, Übersetzungen, Notizen, Audiodeskriptionsmaterial, Projektdateien, Aufnahmen, Feedback und alle weiteren Inhalte, die Sie mit Sténtor importieren, erstellen, anzeigen, exportieren oder teilen.</p>' },
        { id: "feedback", title: "6. Feedback und Forschungsaustausch", body: '<p>Sie werden ermutigt, Feedback, Fragebogenantworten, Publikumsbeobachtungen, technische Notizen und Feldnotizen bereitzustellen. Durch das Senden von Feedback erlauben Sie Sténtor, dieses zur Verbesserung von Software, Dokumentation und Forschung zu verwenden.</p>' },
        { id: "licensing", title: "7. Lizenzierung und Attribution", body: '<p>Sténtor kann Open-Source-Komponenten enthalten und unter den in Repository oder Release-Materialien angegebenen Open-Source-Lizenzbedingungen verteilt werden. Der Name Sténtor, Website-Texte, Branding, Dokumentation und Forschungsmaterialien können separate Attributionsanforderungen haben, sofern sie nicht ausdrücklich anders lizenziert sind.</p>' },
        { id: "changes", title: "8. Änderungen", body: '<p>Sténtor ist ein sich entwickelndes Projekt. Funktionen, Workflows, Dokumentation, Supportkanäle, Spendenstufen und diese Bedingungen können sich im Laufe der Zeit ändern. Das Gültigkeitsdatum zeigt die neueste Version an.</p>' }
      ],
      contact: { title: "Fragen?", body: 'Schreiben Sie an <a href="mailto:info@stentor.live">info@stentor.live</a> oder an Leonardo Mancini, c/o Department of Humanities, University of Turin, Via Sant\'Ottavio 20 – 10124, Turin, Italy.' }
    }
  }
};

export const privacy = legal.privacy.en;
export const terms = legal.terms.en;

export function getLegalPage(kind: LegalKind, locale: Locale): LegalPageContent {
  return legal[kind][locale] ?? legal[kind].en;
}
