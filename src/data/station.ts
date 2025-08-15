export type Station = {
  id: string;
  floor: number;
  name: string;
  icon: string;
  subtitle: string;
  content: string;
  key: string;
  color: string;
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
    key: "key1",
    color: "#ff92de",
  },
  {
    id: "colaboracion",
    floor: 6,
    name: "Colaboración",
    icon: "/colaboracion.png",
    subtitle: "Crecer en equipo",
    content:
      "Compartimos conocimiento, fomentamos la inclusión y colaboramos con respeto y generosidad, construyendo comunidad a través de la cooperación.",
    key: "key2",
    color: "#fd8100",
  },
  {
    id: "compromiso",
    floor: 6,
    name: "Compromiso",
    icon: "/compromiso.png",
    subtitle: "Acción con propósito",
    content:
      "Cumplimos nuestras promesas con pasión y transparencia, actuamos con ética y perseveramos ante cualquier desafío para generar un impacto sostenible.",
    key: "key2",
    color: "#008584",
  },
  {
    id: "creatividad",
    floor: 6,
    name: "Creatividad",
    icon: "/creatividad.png",
    subtitle: "Creando con impacto",
    content:
      "Exploramos nuevas ideas sin miedo, combinamos saberes diversos y transformamos obstáculos en oportunidades para materializar soluciones originales.",
    key: "key2",
    color: "#ff3f01",
  },
  {
    id: "empatia",
    floor: 6,
    name: "Empatía",
    icon: "/empatia.png",
    subtitle: "Conexión Genuina",
    content:
      "Escuchamos activamente, adaptamos nuestro accionar para incluir a todos y promovemos el diálogo abierto como camino para crear valor compartido.",
    key: "key2",
    color: "#3985ff",
  },
  {
    id: "liderazgo",
    floor: 6,
    name: "Liderazgo",
    icon: "/liderazgo.png",
    subtitle: "Somos ejemplo",
    content:
      "No esperamos el cambio: lo generamos. Guiamos con humildad, valentía y coherencia, inspirando a otros a crecer con cada gesto cotidiano.",
    key: "key2",
    color: "#9fba02",
  },
  {
    id: "proposito",
    floor: 6,
    name: "Propósito",
    icon: "/proposito.png",
    subtitle: "Somos ejemplo",
    content: "Content 2",
    key: "key2",
    color: "#ffca6c",
  },
];
