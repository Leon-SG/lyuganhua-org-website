import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { getNewsBySlug } from "@/data/news";

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const item = getNewsBySlug(params.slug);
  if (!item) return { title: dict.home.newsTitle };
  const title = item.titles[locale] || item.titles.en || dict.home.newsTitle;
  return { title };
}

export default async function NewsDetail({ params }: { params: { locale: string; slug: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const item = getNewsBySlug(params.slug);
  if (!item) return notFound();
  const title = item.titles[locale] || item.titles.en || "";
  const paras = item.body?.[locale] || item.body?.en || [];

  return (
    <div>
      <div className="full-bleed section-cool" style={{ padding: "48px 0" }}>
        <div className="container">
          <p style={{ margin: "0 0 8px" }}>
            <Link href={`/${locale}/news` as any} className="text-secondary">&larr; {dict.home.newsTitle}</Link>
          </p>
          <h1 style={{ margin: "0 0 8px" }}>{title}</h1>
          <span className="tag">{item.date}</span>
        </div>
      </div>

      <div className="container section-lg">
        <article className="card" style={{ maxWidth: 800, margin: "0 auto" }}>
          {paras.length > 0 ? (
            <div style={{ display: "grid", gap: 16 }}>
              {paras.map((p, i) => (
                <p key={i} style={{ margin: 0, lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="text-secondary" style={{ margin: 0 }}>Placeholder body. Content to be added.</p>
          )}
        </article>
      </div>
    </div>
  );
}
