import Image from "next/image";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { mediaItems } from "@/data/media";
import { pick } from "@/data/types";

export default async function PressKit({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return (
    <div className="section">
      <h1>{dict.pressKit.title}</h1>
      <p className="muted">{dict.pressKit.intro}</p>
      <div className="grid" style={{ marginTop: 16 }}>
        {mediaItems.map((m) => (
          <div key={m.id} className="card">
            <h3>{pick(m.title, locale)}</h3>
            {m.type === "logo" && (
              <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 12, border: "1px solid var(--border)" }}>
                <img src={m.src} alt={pick(m.title, locale)} style={{ width: 180, height: "auto" }} />
              </div>
            )}
            {m.credit && <p className="muted">{pick(m.credit, locale)}</p>}
            {m.usage && <p className="muted">{pick(m.usage, locale)}</p>}
            <p>
              <a className="cta" href={m.src} download>
                Download
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
