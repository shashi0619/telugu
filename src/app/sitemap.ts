import { MetadataRoute } from "next";
import { items2025, items2024, items2023, items2022 } from "@/components/data";

const allItems = [...items2025, ...items2024, ...items2023, ...items2022];

function toSlug(title: string) {
  return encodeURIComponent(title.replace(/\s+/g, "-").toLowerCase());
}

export default function sitemap(): MetadataRoute.Sitemap {
  const movieUrls: MetadataRoute.Sitemap = allItems.map((item) => ({
    url: `https://www.ottbiryani.com/movie/${toSlug(item.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.ottbiryani.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...movieUrls,
  ];
}
