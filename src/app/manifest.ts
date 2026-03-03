import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Danish Alfattah — Software Developer Portfolio",
    short_name: "Danish Alfattah",
    description:
      "Portfolio of Muhammad Danish Alfattah Lubis — Software Developer & CS Student at University of Brawijaya.",
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
