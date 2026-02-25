import type { MetadataRoute } from "next";
import { projects } from "./lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://piyushpaul.com";

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
