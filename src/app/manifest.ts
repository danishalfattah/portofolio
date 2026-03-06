import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Danish Alfattah Lubis — Portfolio",
    short_name: "Muhammad Danish Alfattah Lubis",
    description:
          "Portfolio of Muhammad Danish Alfattah Lubis — Informatics Engineering Student at University of Brawijaya. Explore projects in web development, mobile apps, and AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
