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
    <div className="section">
      <div className="page-header">
        <h1>{title}</h1>
        <p className="lead" style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
          <span className="muted">{item.date}</span>
        </p>
      </div>
      <article className="card" style={{ maxWidth: 920, margin: "0 auto" }}>
        {paras.length > 0 ? (
          <div style={{ display: "grid", gap: 12 }}>
            {paras.map((p, i) => (
              <p key={i} style={{ margin: 0 }}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="muted" style={{ margin: 0 }}>Placeholder body. Content to be added.</p>
        )}
      </article>
      <p className="muted" style={{ marginTop: 12 }}>
        <Link href={`/${locale}/news` as any}>← {dict.home.newsTitle}</Link>
      </p>
    </div>
  );
}

