import type { MetadataRoute } from "next";

const locales = ["en", "zh-hant", "zh-hans"] as const;
const routes = ["", "/news", "/life", "/legacy", "/participate", "/team"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lyuganhua.org";
  const entries: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const r of routes) {
      entries.push({ url: `${base}/${l}${r}`, changeFrequency: "weekly", priority: r === "" ? 1 : 0.6 });
    }
  }
  // Root redirects to /en but keep it listed with low priority
  entries.push({ url: `${base}/`, changeFrequency: "yearly", priority: 0.1 });
  return entries;
}
