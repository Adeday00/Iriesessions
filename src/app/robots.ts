import type { MetadataRoute } from "next";

const siteUrl = "https://iriesessions.netlify.app";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout/", "/shop/basket", "/thanks"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
