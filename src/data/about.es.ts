const leonardoProfileUrl = "https://www.studium.unito.it/do/docenti.pl/Show?_id=lmancini";
const eticaProjectUrl = "https://unifind.unito.it/resource/project/MANL_PE_ATENEO_25_01";
const inlineLinkClass = "text-text underline decoration-red-500/60 underline-offset-4 hover:text-red-400 transition-colors";
const leonardoProfileLink = `<a href="${leonardoProfileUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">Leonardo Mancini</a>`;
const eticaProjectLink = `<a href="${eticaProjectUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">ETICA</a>`;

export const about = {
  hero: {
    eyebrow: "Acerca de Sténtor",
    title:
      'La escena en vivo necesita <em class="not-italic text-red-500">palabras vivas</em>.<br/>Para cada público.',
    description:
      "Sténtor es una herramienta multiplataforma para sobretítulos, traducción y audiodescripción en artes escénicas en vivo.",
    credit:
      `Creado y desarrollado por ${leonardoProfileLink} (Universidad de Turín, Italia), dentro del proyecto de participación pública ${eticaProjectLink}.`,
  },
  story: {
    eyebrow: "Origen",
    title: "Por qué existe Sténtor",
    paragraphs: [
      "Sténtor nace de un problema práctico: el espectáculo en vivo a menudo necesita más de una capa de texto. Una producción puede requerir sobretítulos, traducciones, notas de audiodescripción, cues para el operador, pantallas en la sala y teléfonos del público — todo mientras la función ocurre en tiempo real.",
      "El nombre remite a Esténtor en la mitología griega: no como imagen de combate, sino como la figura recordada por una voz de bronce. Homero lo describe como χαλκεόφωνος, de χαλκός, bronce, y φωνή, voz: dotado de una voz tan potente que equivalía a las voces de otros cincuenta juntos. Sténtor transforma esa imagen en una herramienta teatral: no un sonido más fuerte, sino una transmisión más clara de palabras, lenguas y descripciones.",
      `El proyecto es desarrollado por ${leonardoProfileLink} (Universidad de Turín, Italia) dentro del proyecto de participación pública ${eticaProjectLink}, como software impulsado por la investigación para las artes escénicas en vivo. Mantiene accesibles las herramientas esenciales e invita a quienes lo usan a aportar comentarios, notas de uso, respuestas del público y datos de investigación que ayuden al software a crecer a partir de funciones reales.`,
    ],
    pullQuote: {
      text: "El texto del espectáculo en vivo debería viajar con claridad: del guion al operador, del escenario a las pantallas, de la sala a cada dispositivo del público.",
      author: "Sténtor",
      role: "Principio del proyecto",
    },
  },
  numbers: {
    title: "Un modelo de software diferente",
    description:
      "Sténtor está construido alrededor del acceso, la investigación y el uso en vivo, más que alrededor de funciones bloqueadas o niveles empresariales.",
    items: [
      { value: "3", label: "capas centrales: sobretítulos, traducción, audiodescripción" },
      { value: "∞", label: "proyectos, idiomas y cues en cada plan" },
      { value: "3", label: "plataformas de escritorio: macOS, Windows y Linux" },
      { value: "EUPL", label: "modelo europeo de licencia open source" },
    ],
  },
} as const;