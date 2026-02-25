import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Piyush Paul — Full-Stack Developer & Engineer",
    short_name: "Piyush Paul",
    description:
      "Portfolio of Piyush Paul — Full-Stack Developer and Backend Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f8f6",
    theme_color: "#b49350",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
