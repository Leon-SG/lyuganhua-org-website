import type { Metadata } from "next";
import Link from "next/link";
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
        className="full-bleed page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.archives.title}</h1>
          <p className="hero-subtitle">{dict.archives.intro}</p>
        </div>
      </div>

      {/* Archive Content */}
      <div className="container section-lg">
        <div className="section-header">
          <h2>{t("\u5B78\u8853\u8CC7\u6599\u8207\u5A92\u9AD4", "\u5B66\u672F\u8D44\u6599\u4E0E\u5A92\u4F53", "Academic Resources & Media")}</h2>
          <p className="text-secondary">
            {t(
              "\u700F\u89BD\u5442\u5E72\u83EF\u91AB\u751F\u7684\u5B78\u8853\u8AD6\u6587\u3001\u6F14\u8B1B\u8A2A\u8AC7\u8207\u5A92\u9AD4\u7D20\u6750",
              "\u6D4F\u89C8\u5415\u5E72\u534E\u533B\u751F\u7684\u5B66\u672F\u8BBA\u6587\u3001\u6F14\u8BB2\u8BBF\u8C08\u4E0E\u5A92\u4F53\u7D20\u6750",
              "Browse Dr. L\u00FC Ganhua\u2019s publications, talks, and media resources"
            )}
          </p>
          <span className="gold-line" />
        </div>

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
          {/* Publications */}
          <section className="card">
            <h3>{t("\u8AD6\u6587\u8207\u51FA\u7248", "\u8BBA\u6587\u4E0E\u51FA\u7248", "Publications")}</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              {publications.sort((a, b) => b.year - a.year).map((p) => (
                <li key={p.id} data-year={p.year}>
                  <strong>{p.year}</strong> &middot; {pick(p.title, locale)}
                  {p.venue && <span className="muted"> &mdash; {pick(p.venue, locale)}</span>}
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

          {/* Talks & Interviews */}
          <section className="card">
            <h3>{t("\u6F14\u8B1B\u8207\u8A2A\u8AC7", "\u6F14\u8BB2\u4E0E\u8BBF\u8C08", "Talks & Interviews")}</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              {talks.sort((a, b) => b.year - a.year).map((tt) => (
                <li key={tt.id} data-year={tt.year}>
                  <strong>{tt.year}</strong> &middot; {pick(tt.title, locale)}
                  {tt.event && <span className="muted"> &mdash; {pick(tt.event, locale)}</span>}
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

          {/* Media Kit */}
          <section className="card">
            <h3>{t("\u5A92\u9AD4\u7D20\u6750", "\u5A92\u4F53\u7D20\u6750", "Media Kit")}</h3>
            <p className="muted">{dict.pressKit.intro}</p>
            <div style={{ marginTop: 12 }}>
              <Link className="btn btn-ghost" href={`/${locale}/press-kit` as any}>
                {t("\u67E5\u770B", "\u67E5\u770B", "Open")}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
