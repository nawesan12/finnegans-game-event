export type Station = {
  id: string;
  floor: number;
  name: string;
  icon: string;
  subtitle: string;
  content: string;
  key: string[];
  color: string;
  position?: {
    top: number;
    left: number;
    rotation: string;
  };
  height?: number;
  textPosition: string;
  size?: string;
};

export const stations: Station[] = [
  {
    id: "proposito",
    floor: 3,
    name: "Propósito",
    icon: "/proposito.png",
    subtitle: "La dirección que elegimos",
    content:
      "Impulsar a las personas a crecer, crear e innovar, para transformar el presente y construir el futuro, juntos.",
    key: ["Revolución", "Meta", "Sentido"],
    color: "#ffca6c",
    position: {
      top: 10,
      left: 32,
      rotation: "0deg",
    },
    size: "70px",
    textPosition: "right",
  },
  {
    id: "calidad",
    floor: 5,
    name: "Calidad",
    icon: "/calidad.png",
    subtitle: "Excelencia en cada detalle",
    content:
      "Cuidamos cada aspecto de nuestro trabajo y aprendemos sin pausa, para diseñar soluciones que transformen y dejen una huella perdurable.",
    key: ["Excelencia", "Precisión", "Sobresaliente"],
    color: "#ff92de",
    position: {
      top: -32,
      left: 20,
      rotation: "-12deg",
    },
    size: "110px",
    textPosition: "right",
  },
  {
    id: "colaboracion",
    floor: 6,
    name: "Colaboración",
    icon: "/colaboracion.png",
    subtitle: "Crecer en equipo",
    content:
      "Compartimos conocimiento, fomentamos la inclusión y colaboramos con respeto y generosidad, construyendo comunidad a través de la cooperación.",
    key: ["Trabajo en equipo", "Sinergia", "Cooperación"],
    color: "#fd8100",
    position: {
      top: -36,
      left: 4,
      rotation: "0deg",
    },
    textPosition: "center",
    size: "74px",
  },
  {
    id: "compromiso",
    floor: 7,
    name: "Compromiso",
    icon: "/compromiso.png",
    subtitle: "Acción con propósito",
    content:
      "Cumplimos nuestras promesas con pasión y transparencia, actuamos con ética y perseveramos ante cualquier desafío para generar un impacto sostenible.",
    key: ["Responsabilidad", "Constancia", "Transparencia"],
    color: "#008584",
    position: {
      top: -32,
      left: -12,
      rotation: "0deg",
    },
    textPosition: "left",
    size: "80px",
  },
  {
    id: "creatividad",
    floor: 8,
    name: "Creatividad",
    icon: "/creatividad.png",
    subtitle: "Creando con impacto",
    content:
      "Exploramos nuevas ideas sin miedo, combinamos saberes diversos y transformamos obstáculos en oportunidades para materializar soluciones originales.",
    key: ["Innovación", "Originalidad", "Ingenio"],
    color: "#ff3f01",
    position: {
      top: 0,
      left: -20,
      rotation: "0deg",
    },
    textPosition: "center",
    size: "80px",
  },
  {
    id: "empatia",
    floor: 9,
    name: "Empatía",
    icon: "/empatia.png",
    subtitle: "Conexión Genuina",
    content:
      "Escuchamos activamente, adaptamos nuestro accionar para incluir a todos y promovemos el diálogo abierto como camino para crear valor compartido.",
    key: ["Comprensión", "Escucha activa", "Sensibilidad"],
    color: "#3985ff",
    position: {
      top: -8,
      left: -12,
      rotation: "0deg",
    },
    textPosition: "right",
    size: "110px",
  },
  {
    id: "liderazgo",
    floor: 10,
    name: "Liderazgo",
    icon: "/liderazgo.png",
    subtitle: "Somos ejemplo",
    content:
      "No esperamos el cambio: lo generamos. Guiamos con humildad, valentía y coherencia, inspirando a otros a crecer con cada gesto cotidiano.",
    key: ["Inspiración", "Dirección", "Guía"],
    color: "#9fba02",
    position: {
      top: -32,
      left: 12,
      rotation: "0deg",
    },
    textPosition: "right",
    size: "96px",
  },
];
