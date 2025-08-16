export type Station = {
  id: string;
  floor: number;
  name: string;
  icon: string;
  subtitle: string;
  content: string;
  key: string;
  color: string;
  position?: {
    top: number;
    left: number;
    rotation: string;
  };
  height?: number;
  textPosition: string;
};

export const stations: Station[] = [
  {
    id: "calidad",
    floor: 6,
    name: "Calidad",
    icon: "/calidad.png",
    subtitle: "Excelencia en cada detalle",
    content:
      "Cuidamos cada aspecto de nuestro trabajo y aprendemos sin pausa, para diseñar soluciones que transformen y dejen una huella perdurable.",
    key: "Calidad",
    color: "#ff92de",
    position: {
      top: -48,
      left: 16,
      rotation: "-12deg",
    },
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
    key: "Colaboracion",
    color: "#fd8100",
    position: {
      top: -48,
      left: 4,
      rotation: "0deg",
    },
    textPosition: "center",
  },
  {
    id: "compromiso",
    floor: 6,
    name: "Compromiso",
    icon: "/compromiso.png",
    subtitle: "Acción con propósito",
    content:
      "Cumplimos nuestras promesas con pasión y transparencia, actuamos con ética y perseveramos ante cualquier desafío para generar un impacto sostenible.",
    key: "Compromiso",
    color: "#008584",
    position: {
      top: -56,
      left: -16,
      rotation: "0deg",
    },
    textPosition: "left",
  },
  {
    id: "creatividad",
    floor: 6,
    name: "Creatividad",
    icon: "/creatividad.png",
    subtitle: "Creando con impacto",
    content:
      "Exploramos nuevas ideas sin miedo, combinamos saberes diversos y transformamos obstáculos en oportunidades para materializar soluciones originales.",
    key: "Creatividad",
    color: "#ff3f01",
    position: {
      top: -32,
      left: -20,
      rotation: "0deg",
    },
    textPosition: "center",
  },
  {
    id: "empatia",
    floor: 6,
    name: "Empatía",
    icon: "/empatia.png",
    subtitle: "Conexión Genuina",
    content:
      "Escuchamos activamente, adaptamos nuestro accionar para incluir a todos y promovemos el diálogo abierto como camino para crear valor compartido.",
    key: "Empatia",
    color: "#3985ff",
    position: {
      top: -8,
      left: -12,
      rotation: "0deg",
    },
    textPosition: "right",
  },
  {
    id: "liderazgo",
    floor: 6,
    name: "Liderazgo",
    icon: "/liderazgo.png",
    subtitle: "Somos ejemplo",
    content:
      "No esperamos el cambio: lo generamos. Guiamos con humildad, valentía y coherencia, inspirando a otros a crecer con cada gesto cotidiano.",
    key: "Liderazgo",
    color: "#9fba02",
    position: {
      top: -32,
      left: 24,
      rotation: "0deg",
    },
    textPosition: "right",
  },
  {
    id: "proposito",
    floor: 6,
    name: "Propósito",
    icon: "/proposito.png",
    subtitle: "Seguimos nuestra visión",
    content:
      "Actuamos con intención, recordando siempre nuestra visión y misión, y transformamos cada esfuerzo en un paso hacia lo que verdaderamente importa.",
    key: "Proposito",
    color: "#ffca6c",
    position: {
      top: 6,
      left: 32,
      rotation: "0deg",
    },
    textPosition: "right",
  },
];
