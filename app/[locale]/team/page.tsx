import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { team, localizeRole, localizeText, type TeamRole } from "@/data/team";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.team.title };
}

export default async function TeamPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

  const by = (r: TeamRole) => team.filter((m) => m.roles.includes(r));
  const dedupe = (arr: typeof team) => {
    const seen = new Set<string>();
    return arr.filter((m) => (seen.has(m.id) ? false : (seen.add(m.id), true)));
  };

  const chairs = dedupe(by("chair"));
  const viceChairs = dedupe(by("viceChair"));
  const directors = dedupe(by("director").filter((m) => !m.roles.includes("chair") && !m.roles.includes("viceChair")));
  const officers = dedupe([...by("executive"), ...by("treasurer"), ...by("secretary")]);
  const advisors = dedupe(by("advisor"));

  const roleLine = (m: typeof team[number]) => m.roles.map((r) => localizeRole(r, locale, dict)).join(locale === 'en' ? ' / ' : '\u3001');
  const renderCard = (m: typeof team[number]) => (
    <div key={m.id} className="card person-card">
      <div className="portrait">
        <img src={m.photo || "/team/p1.svg"} alt={m.name} />
      </div>
      <h3>{m.name}</h3>
      <p className="muted" style={{ margin: 0 }}>{roleLine(m)}</p>
      {m.bio && <p className="muted">{localizeText(m.bio, locale)}</p>}
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.team.title}</h1>
          <p>{dict.team.intro}</p>
        </div>
      </div>

      <div className="section-lg">
        <section className="section">
          <h2 style={{ marginTop: 0 }}>{dict.team.sections.board}</h2>
          {chairs.length > 0 && (<div className="people-list-1" style={{ marginTop: 8 }}>{chairs.map(renderCard)}</div>)}
          {viceChairs.length > 0 && (<div className="people-list-2" style={{ marginTop: 16 }}>{viceChairs.map(renderCard)}</div>)}
          {directors.length > 0 && (<div className="people-list-2" style={{ marginTop: 16 }}>{directors.map(renderCard)}</div>)}
        </section>
        <section className="section">
          <h2 style={{ marginTop: 0 }}>{dict.team.sections.officers}</h2>
          <div className="people-list-3" style={{ marginTop: 8 }}>{officers.map(renderCard)}</div>
        </section>
        {advisors.length > 0 && (
          <section className="section">
            <h2 style={{ marginTop: 0 }}>{dict.team.sections.advisors}</h2>
            <div className="people-list-3" style={{ marginTop: 8 }}>{advisors.map(renderCard)}</div>
          </section>
        )}
        <section className="section">
          <blockquote>
            <p style={{ margin: 0 }}>{dict.team.disclaimer}</p>
          </blockquote>
        </section>
      </div>
    </div>
  );
}
