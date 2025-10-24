import Link from "next/link";
import { Dictionary } from "@/lib/dictionaries";
import { getNews } from "@/data/news";

export default function NoFeesBanner({ dict, locale }: { dict: Dictionary; locale: string }) {
  const latest = getNews(locale as any)[0];
  return (
    <div className="banner">
      <div className="container" style={{ padding: "10px 16px" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "baseline" }}>
          <strong>{dict.site.name}</strong>
          <span className="muted">{dict.site.tagline}</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6, alignItems: "center" }}>
          <span>{dict.banner.noFees}</span>
          <span className="muted">{dict.banner.domain}</span>
          {latest && (
            <span>
              <strong>{dict.home.newsTitle}:</strong>{" "}
              <Link href={`/${locale}/news` as any}>{latest.title}</Link>
            </span>
          )}
          <span className="muted" style={{ marginLeft: "auto" }}>{dict.contact.email}</span>
        </div>
      </div>
    </div>
  );
}
