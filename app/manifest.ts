import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rohan Upendra Patil Portfolio",
    short_name: "Rohan's Portfolio",
    description:
      "Rohan Upendra Patil's personal portfolio showcasing projects in Machine Learning, AI, and Computer Science.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "computer science",
      "machine learning",
      "artificial intelligence",
      "development",
      "nextjs",
      "react",
      "student",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}