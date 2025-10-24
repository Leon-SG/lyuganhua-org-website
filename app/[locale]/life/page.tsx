import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { timeline } from "@/data/timeline";
import { pick } from "@/data/types";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: (dict as any).life?.title ?? "Life" };
}

export default async function Life({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);

  const decadeLabel = (y: number) => {
    const d = Math.floor(y / 10) * 10;
    if (locale === "zh-hans") return `${d}年代`;
    if (locale === "zh-hant") return `${d}年代`;
    return `${d}s`;
  };
  const groups = timeline
    .slice()
    .sort((a, b) => a.year - b.year)
    .reduce<Record<string, typeof timeline>>((acc, ev) => {
      const key = String(Math.floor(ev.year / 10) * 10);
      (acc[key] ||= []).push(ev);
      return acc;
    }, {});

  return (
    <div className="section">
      <div className="page-header">
        <h1>{(dict as any).life?.title ?? "Life"}</h1>
        <p className="lead">{(dict as any).life?.intro ?? "A timeline of milestones."}</p>
      </div>
      <section className="section">
        {Object.keys(groups).sort().map((k) => (
          <div key={k} style={{ marginBottom: 18 }}>
            <h2 style={{ margin: "0 0 8px" }}>{decadeLabel(parseInt(k, 10))}</h2>
            <ol className="timeline">
              {groups[k].map((ev) => (
                <li key={ev.id} className="timeline-item">
                  <h3>{ev.year} · {pick(ev.title, locale)}</h3>
                  {ev.description && <p>{pick(ev.description, locale)}</p>}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
}
