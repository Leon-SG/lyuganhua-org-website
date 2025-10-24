import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { getNews } from "@/data/news";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.home.newsTitle };
}

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const items = getNews(locale);
  return (
    <div className="section">
      <div className="page-header">
        <h1>{dict.home.newsTitle}</h1>
      </div>
      <div className="card" style={{ maxWidth: 920, margin: "0 auto" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {items.map((n) => (
            <li key={n.date} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
              <span className="muted" style={{ minWidth: 110 }}>{n.date}</span>
              {n.url ? (
                <a href={n.url}>{n.title}</a>
              ) : (
                <Link href={`/${locale}/news/${n.slug}` as any}>{n.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="muted" style={{ marginTop: 12, textAlign: "center" }}>
        <Link href={`/${locale}` as any}>{dict.nav.home}</Link>
      </p>
    </div>
  );
}
