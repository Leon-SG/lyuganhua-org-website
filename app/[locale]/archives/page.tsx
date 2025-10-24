import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { publications } from "@/data/publications";
import { talks } from "@/data/talks";
import { pick } from "@/data/types";
import YearFilter from "@/components/YearFilter";
import { use } from "react";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.archives.title };
}

export default async function Archives({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);

  // Small client-managed filter using a React hook via use() pattern is not ideal in Next 14;
  // keep server-rendered lists and simple client filter components separated.
  return (
    <div className="section">
      <h1>{dict.archives.title}</h1>
      <p className="muted">{dict.archives.intro}</p>
      <section className="section" style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <YearFilter years={[...publications.map(p=>p.year), ...talks.map(t=>t.year)]} onChange={(y)=>{
          const root = document.getElementById("archives-root");
          if (!root) return;
          for (const el of Array.from(root.querySelectorAll<HTMLElement>("[data-year]"))) {
            const yr = parseInt(el.dataset.year || "0", 10);
            el.style.display = y && yr !== y ? "none" : "";
          }
        }} />
      </section>

      <div id="archives-root" className="grid" style={{ marginTop: 8 }}>
        <section className="card">
          <h3>Publications</h3>
          <ul>
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
          <h3>Talks & Interviews</h3>
          <ul>
            {talks.sort((a,b)=>b.year-a.year).map((t)=> (
              <li key={t.id} data-year={t.year}>
                <strong>{t.year}</strong> · {pick(t.title, locale)}
                {t.event && <span className="muted"> — {pick(t.event, locale)}</span>}
                {t.url && (
                  <>
                    {" "}
                    <a href={t.url} target="_blank" rel="noopener noreferrer">link</a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className="card">
          <h3>Media Kit</h3>
          <p className="muted">{dict.pressKit.intro}</p>
          <a className="cta" href={`/${locale}/press-kit`}>Open</a>
        </section>
      </div>
    </div>
  );
}
