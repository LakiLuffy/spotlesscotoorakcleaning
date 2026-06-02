import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://spotlesscohousecleanerstoorak.com",
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
