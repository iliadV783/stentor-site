/**
 * Spanish homepage content for Sténtor.
 */

export const hero = {
  eyebrow: "Actualización v0.1.74 · Audiodescripción en vivo",
  title:
    'Sobretítulos, traducción <em class="not-italic text-text-3 font-medium">y audiodescripciones.</em><br class="hidden sm:inline" /> En vivo.',
  description:
    "Un entorno de regía para preparar textos, coordinar idiomas y audiodescripciones, sincronizar pantallas y dispositivos del público, recoger cuestionarios y trabajar en la nube durante ensayos y funciones.",
  ctas: [
    { href: "/es/download", label: "Descargar Sténtor", variant: "primary" as const },
    { href: "/es/solicitar-prueba", label: "Acceder a la beta Pro", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Lite: app gratuita multiplataforma", live: true },
    { label: "Pro: app profesional para macOS, Windows y Linux" },
    { label: "Sobretítulos · traducción · audiodescripción · público" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Ensayo en vivo · red local" },
    user: { name: "Regía", email: "18 teléfonos del público sincronizados" },
    title: "Vista de regía",
    timeframe: { prefix: "proyecto / ", value: "Macbett" },
    stats: [
      { label: "Cue actual", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Teléfonos", value: "18", trend: "siguen", trendColor: "green" as const },
      { label: "Pantallas", value: "2", trend: "sync", trendColor: "green" as const },
      { label: "Idiomas", value: "ES · IT", trend: "listos", trendColor: "green" as const },
    ],
    currentCue: { label: "Cue actual", text: "¡Quieren vivir en nosotros!", meta: "Sobretítulos españoles · pantalla 1" },
    nextCue: { label: "Cue siguiente", text: "Vogliono vivere in noi!", meta: "Fuente italiana · vista previa" },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 enviado a pantallas · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 teléfonos del público · ", s: "sync" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "nota de audiodescripción · ", s: "lista" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "canal de feedback · ", s: "abierto" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "vista previa cue 025 · ", s: "espera" },
    ],
  },
};

export const logoCloud = {
  label: "UN ECOSISTEMA, DOS APPS DE ESCRITORIO",
  bigNumber: "3 OS",
  logos: [
    { name: "Sténtor Lite", glyph: "rounded-full" },
    { name: "Sténtor", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Teléfonos del público", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Pensado para<br/>las artes escénicas en vivo.",
  description:
    "Sténtor organiza el texto escénico desde la preparación hasta la regía en vivo, con herramientas para pantallas, teléfonos del público, accesibilidad y trabajo multilingüe.",
  items: [
    { value: "Lite", suffix: "", label: "App gratuita para macOS, Windows y Linux" },
    { value: "5", suffix: "", label: "idiomas en el sitio; app diseñada para una interfaz multilingüe más amplia" },
    { value: "Live Sync", suffix: "", label: "Para pantallas y teléfonos del público" },
  ],
};

export const bento = {
  title: "Un solo Sténtor.<br/>Dos formas de trabajar.",
  description:
    "Empieza con la app ligera multiplataforma y pasa al entorno profesional cuando ensayos, pantallas, timeline, público y audiodescripción requieren un flujo en vivo dedicado.",
  cards: {
    types: { title: "Sténtor Lite: empieza en cualquier lugar", desc: "App gratuita para macOS, Windows y Linux, pensada para hacer accesible la preparación del texto, los sobretítulos y las traducciones sin barrera de licencia." },
    p95: { title: "Sténtor: cabina de regía", desc: "App profesional para ensayos y funciones, con cueing, timeline, pantallas, dispositivos del público y audiodescripción en plataformas de escritorio." },
    edge: { title: "Teléfonos del público sincronizados", desc: "Las personas en sala pueden conectarse con su propio smartphone y seguir sobretítulos, traducciones o audiodescripciones en sincronía con la regía." },
    auth: { title: "Sitio en 5 idiomas", desc: "El sitio está disponible en italiano, inglés, francés, español y alemán. La app Sténtor está diseñada para una interfaz multilingüe más amplia." },
    cron: { title: "Importar, exportar, circular", desc: "Importa archivos Word, TXT, SRT, WebVTT, CSV o JSON y comparte materiales para ensayos, archivo, giras y estudio." },
    migrations: { title: "Vista de regía clara", desc: "Avanza entre cues durante la función con una interfaz diseñada para timing, concentración y seguridad." },
    deploys: { title: "Beta para Pro", desc: "Durante las pruebas, el acceso Pro se organiza para ofrecer soporte, instrucciones y activación de forma segura." },
  },
};

export const testimonials = {
  title: "Una herramienta moldeada por<br/>funciones reales.",
  description:
    "Sténtor se desarrolla con quienes lo usan: artistas, operadores, traductoras, teatros y público. Lite mantiene el acceso abierto; Pro crece mediante beta tests en contextos reales.",
  quotes: [
    { text: "Usa Lite para empezar a preparar los materiales y comprender el flujo antes de llevar Sténtor a producción.", av: "01", name: "Empieza con Lite", role: "App gratuita · macOS, Windows, Linux" },
    { text: "Usa Pro cuando la función exige vista de regía, timeline, pantallas, dispositivos del público y un setup profesional en vivo.", av: "02", name: "Pasa a Pro", role: "App profesional · acceso beta" },
    { text: "Las notas de ensayos, público y operadores ayudan a diseñar mejores herramientas para las artes escénicas en vivo.", av: "03", name: "Mejora la investigación", role: "Feedback · producto" },
  ],
};

const liteFeatures = ["App desktop gratuita", "Para macOS, Windows y Linux", "Preparación de textos, sobretítulos y traducciones", "Descarga sin licencia Pro", "Sitio en 5 idiomas"];
const proFeatures = ["App desktop profesional", "Prevista para macOS, Windows y Linux", "Timeline, cueing y vista de regía en vivo", "Pantallas y teléfonos del público", "Audiodescripción y herramientas de accesibilidad", "Licencia beta y activación"];
const institutionFeatures = ["Para teatros, festivales y escuelas", "Licencias de prueba y multiusuario", "Soporte durante pruebas y ensayos", "Guía de configuración en espacios reales", "Área de cuenta preparada para uso futuro"];

export const pricingPreview = {
  title: "Elige el recorrido<br/>Sténtor adecuado.",
  comparisonLink: { href: "/es/download", label: "Comparar Lite y Pro →" },
  plans: [
    { name: "Sténtor Lite", tag: "Gratis", price: "Lite", cycle: "/multiplataforma", tagline: "Para empezar, preparar y experimentar sin barrera de licencia.", features: liteFeatures, cta: { href: "/es/download", label: "Descargar Lite", variant: "ghost" as const }, highlighted: false },
    { name: "Sténtor", tag: "Beta", tagAccent: true, price: "Pro", cycle: "/multiplataforma", tagline: "Para producción profesional en vivo, disponible ahora en beta controlada.", features: proFeatures, cta: { href: "/es/solicitar-prueba", label: "Solicitar acceso Pro", variant: "primary" as const }, highlighted: true },
    { name: "Instituciones", tag: "Equipo", price: "Team", cycle: "/espacios", tagline: "Para teatros, festivales, escuelas y organizaciones que preparan un uso real.", features: institutionFeatures, cta: { href: "/es/contact", label: "Hablemos", variant: "ghost" as const }, highlighted: false },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Sténtor Lite · Sténtor Pro",
  title: "Empieza libremente. Sal a escena profesionalmente.",
  body: "Descarga Sténtor Lite para empezar en macOS, Windows o Linux. Solicita acceso a Sténtor Pro cuando necesites un entorno profesional para ensayos y funciones.",
  ctas: [
    { href: "/es/download", label: "Descargar Sténtor", variant: "primary" as const },
    { href: "/es/solicitar-prueba", label: "Acceder a la beta Pro", variant: "ghost" as const },
  ],
};