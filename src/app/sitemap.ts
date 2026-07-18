import type { MetadataRoute } from "next";
import { allItems } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/journal", "/music", "/opportunities", "/sessions", "/shop"];
  const routes = [...new Set([...staticRoutes, ...allItems.map((item) => item.href)])];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.6,
  }));
}
