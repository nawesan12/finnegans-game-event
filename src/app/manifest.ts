import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Finnegans Evento",
    short_name: "Finnegans Evento",
    description: "Finnegans",
    start_url: "/",
    display: "standalone",
    background_color: "#04102d",
    theme_color: "#4bc3fe",
    icons: [
      {
        src: "/finnegans.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/finnegans.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
