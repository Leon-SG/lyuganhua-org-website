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
    <div>
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.home.newsTitle}</h1>
        </div>
      </div>

      <div className="section-lg">
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gap: 20 }}>
          {items.map((n) => (
            <div key={n.slug} className="card">
              <div style={{ display: "flex", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
                <span className="tag">{n.date}</span>
                <h3 style={{ margin: 0, flex: 1 }}>
                  {n.url ? (
                    <a href={n.url}>{n.title}</a>
                  ) : (
                    <Link href={`/${locale}/news/${n.slug}` as any}>{n.title}</Link>
                  )}
                </h3>
              </div>
              {n.summary && (
                <p className="muted" style={{ margin: "8px 0 0" }}>{n.summary}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
