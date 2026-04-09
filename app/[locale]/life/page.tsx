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

  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

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
    <div>
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{(dict as any).life?.title ?? "Life"}</h1>
          <p>{(dict as any).life?.intro ?? "A timeline of milestones."}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="section-lg">
        <p style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", fontSize: "1.1rem", color: "var(--muted)" }}>
          {t(
            "以下時間軸記錄了呂干華醫生一生的重要里程碑——從早年成長，到醫學教育、臨床實踐、學術研究，直至其影響深遠的社區服務與精神傳承。",
            "以下时间轴记录了吕干华医生一生的重要里程碑——从早年成长，到医学教育、临床实践、学术研究，直至其影响深远的社区服务与精神传承。",
            "The following timeline traces the major milestones of Dr. Lü Ganhua's life — from his early years through medical education, clinical practice, academic research, and his far-reaching community service and spiritual legacy."
          )}
        </p>
      </div>

      {/* Timeline */}
      <div className="section">
        {Object.keys(groups).sort().map((k) => (
          <div key={k} style={{ marginBottom: 28 }}>
            <h2 style={{ margin: "0 0 12px" }}>{decadeLabel(parseInt(k, 10))}</h2>
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
      </div>

      {/* Note */}
      <div className="section">
        <blockquote style={{ maxWidth: 720, margin: "0 auto" }}>
          <p>
            {t(
              "以上內容為初步梳理，更詳盡的生平資料正在整理中。歡迎提供補充信息或更正。",
              "以上内容为初步梳理，更详尽的生平资料正在整理中。欢迎提供补充信息或更正。",
              "The above is an initial compilation. More detailed biographical information is being prepared. Contributions and corrections are welcome."
            )}
          </p>
        </blockquote>
      </div>
    </div>
  );
}
