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
  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;
  const items = getNews(locale);

  return (
    <div>
      {/* Hero */}
      <div
        className="full-bleed page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.home.newsTitle}</h1>
          <p className="hero-subtitle">
            {t(
              "\u57FA\u91D1\u6703\u6700\u65B0\u52D5\u614B\u8207\u9032\u5C55",
              "\u57FA\u91D1\u4F1A\u6700\u65B0\u52A8\u6001\u4E0E\u8FDB\u5C55",
              "The latest updates and developments from the Foundation"
            )}
          </p>
        </div>
      </div>

      {/* News Items */}
      <div className="container section-lg">
        <div className="section-header">
          <h2>{t("\u5168\u90E8\u65B0\u805E", "\u5168\u90E8\u65B0\u95FB", "All News")}</h2>
          <span className="gold-line" />
        </div>

        <div className="stories-grid">
          {items.map((n) => (
            <article key={n.slug} className="story-card">
              <div className="story-card-body">
                <span className="tag">{n.date}</span>
                <h3>
                  {n.url ? (
                    <a href={n.url}>{n.title}</a>
                  ) : (
                    <Link href={`/${locale}/news/${n.slug}` as any}>{n.title}</Link>
                  )}
                </h3>
                {n.summary && <p className="text-secondary">{n.summary}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
