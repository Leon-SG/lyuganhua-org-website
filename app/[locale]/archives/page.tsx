import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { publications } from "@/data/publications";
import { talks } from "@/data/talks";
import { pick } from "@/data/types";
import YearFilter from "@/components/YearFilter";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.archives.title };
}

export default async function Archives({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

  return (
    <div>
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.archives.title}</h1>
          <p>{dict.archives.intro}</p>
        </div>
      </div>

      <div className="section-lg">
        <section style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
          <YearFilter years={[...publications.map(p=>p.year), ...talks.map(tt=>tt.year)]} onChange={(y: number | null)=>{
            const root = document.getElementById("archives-root");
            if (!root) return;
            for (const el of Array.from(root.querySelectorAll<HTMLElement>("[data-year]"))) {
              const yr = parseInt(el.dataset.year || "0", 10);
              el.style.display = y && yr !== y ? "none" : "";
            }
          }} />
        </section>

        <div id="archives-root" className="grid">
          <section className="card">
            <h3>{t("論文與出版", "论文与出版", "Publications")}</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              {publications.sort((a,b)=>b.year-a.year).map((p)=> (
                <li key={p.id} data-year={p.year}>
                  <strong>{p.year}</strong> · {pick(p.title, locale)}
                  {p.venue && <span className="muted"> — {pick(p.venue, locale)}</span>}
                  {p.url && (
                    <>
                      {" "}
                      <a href={p.url} target="_blank" rel="noopener noreferrer">link</a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className="card">
            <h3>{t("演講與訪談", "演讲与访谈", "Talks & Interviews")}</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              {talks.sort((a,b)=>b.year-a.year).map((tt)=> (
                <li key={tt.id} data-year={tt.year}>
                  <strong>{tt.year}</strong> · {pick(tt.title, locale)}
                  {tt.event && <span className="muted"> — {pick(tt.event, locale)}</span>}
                  {tt.url && (
                    <>
                      {" "}
                      <a href={tt.url} target="_blank" rel="noopener noreferrer">link</a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className="card">
            <h3>{t("媒體素材", "媒体素材", "Media Kit")}</h3>
            <p className="muted">{dict.pressKit.intro}</p>
            <a className="cta" href={`/${locale}/press-kit`} style={{ marginTop: 12 }}>
              {t("查看", "查看", "Open")}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
