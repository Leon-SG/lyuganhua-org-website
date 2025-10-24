import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import Carousel from "@/components/Carousel";
import { getNews } from "@/data/news";

export default async function Home({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);

  const slides = [
    { src: "/carousel/slide1.svg", alt: "Key image 1", title: dict.site.name, subtitle: dict.home.mission },
    { src: "/carousel/slide2.svg", alt: "Key image 2", title: dict.site.name, subtitle: dict.home.mission },
    { src: "/carousel/slide3.svg", alt: "Key image 3", title: dict.site.name, subtitle: dict.home.mission },
  ];
  const items = getNews(locale);
  const topItems = items.slice(0, 3);

  return (
    <div className="section">
      <section className="section" aria-label="Hero images">
        <Carousel slides={slides} autoInterval={7000} ariaLabel="Key images" />
      </section>

      <section className="section" aria-label="News">
        <div className="card" style={{ maxWidth: 920, margin: "0 auto" }}>
          <h3 style={{ marginTop: 0 }}>{dict.home.newsTitle}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {topItems.map((n) => (
              <li key={n.date} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                <span className="muted" style={{ minWidth: 100 }}>{n.date}</span>
                {n.url ? (
                  <a href={n.url}>{n.title}</a>
                ) : (
                  <Link href={`/${locale}/news/${n.slug}` as any}>{n.title}</Link>
                )}
              </li>
            ))}
          </ul>
          {/* 简洁列表：显示最近三条 */}
        </div>
      </section>
    </div>
  );
}
