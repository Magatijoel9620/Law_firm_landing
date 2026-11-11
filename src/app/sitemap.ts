import type { MetadataRoute } from "next";
import { insightArticles } from "@/lib/editorial-content";
import { offices, practiceAreas } from "@/lib/firm-data";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kanyij-advocates.co.ke").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/insights`, changeFrequency: "monthly", priority: 0.7 },
    ...practiceAreas.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...offices.map((office) => ({
      url: `${siteUrl}/offices/${office.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.65,
    })),
    ...insightArticles.map((article) => ({
      url: `${siteUrl}/insights/${article.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.55,
    })),
  ];

  return routes;
}
