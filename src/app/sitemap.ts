import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }, { url: `${site.url}/reviving-the-rasm`, changeFrequency: "monthly", priority: 0.8 }, { url: `${site.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 }];
}
