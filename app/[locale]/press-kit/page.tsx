import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { mediaItems } from "@/data/media";
import { pick } from "@/data/types";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.pressKit.title };
}

export default async function PressKit({ params }: { params: { locale: string } }) {
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
            "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.pressKit.title}</h1>
          <p className="hero-subtitle">{dict.pressKit.intro}</p>
        </div>
      </div>

      {/* Media Items */}
      <div className="container section-lg">
        <div className="section-header">
          <h2>{t("\u53EF\u7528\u7D20\u6750", "\u53EF\u7528\u7D20\u6750", "Available Assets")}</h2>
          <p className="text-secondary">
            {t(
              "\u4EE5\u4E0B\u7D20\u6750\u53EF\u4F9B\u5A92\u9AD4\u53CA\u516C\u958B\u5831\u5C0E\u4F7F\u7528",
              "\u4EE5\u4E0B\u7D20\u6750\u53EF\u4F9B\u5A92\u4F53\u53CA\u516C\u5F00\u62A5\u9053\u4F7F\u7528",
              "The following assets are available for press and media use"
            )}
          </p>
          <span className="gold-line" />
        </div>

        <div className="grid">
          {mediaItems.map((m) => (
            <div key={m.id} className="card">
              <h3>{pick(m.title, locale)}</h3>
              {m.type === "logo" && (
                <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, border: "1px solid var(--border)" }}>
                  <img src={m.src} alt={pick(m.title, locale)} style={{ width: 180, height: "auto" }} />
                </div>
              )}
              {m.credit && <p className="muted">{pick(m.credit, locale)}</p>}
              {m.usage && <p className="muted">{pick(m.usage, locale)}</p>}
              <div style={{ marginTop: 12 }}>
                <a className="btn btn-primary" href={m.src} download>
                  {t("\u4E0B\u8F09", "\u4E0B\u8F7D", "Download")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="full-bleed section-warm" style={{ padding: "var(--section-gap, 64px) 0" }}>
        <div className="container">
          <div className="section-header">
            <h2>{t("\u4F7F\u7528\u6307\u5357", "\u4F7F\u7528\u6307\u5357", "Usage Guidelines")}</h2>
            <span className="gold-line" />
          </div>

          <div className="grid-2">
            <div className="card">
              <h3>{t("\u6A19\u8A8C\u4F7F\u7528", "\u6807\u5FD7\u4F7F\u7528", "Logo Usage")}</h3>
              <ul style={{ display: "grid", gap: 8 }}>
                <li>{t("\u8ACB\u4FDD\u6301\u6A19\u8A8C\u5B8C\u6574\uFF0C\u4E0D\u5F97\u88C1\u5207\u6216\u8B8A\u5F62", "\u8BF7\u4FDD\u6301\u6807\u5FD7\u5B8C\u6574\uFF0C\u4E0D\u5F97\u88C1\u5207\u6216\u53D8\u5F62", "Keep the logo intact; do not crop or distort")}</li>
                <li>{t("\u6A19\u8A8C\u5468\u570D\u4FDD\u7559\u9069\u7576\u7559\u767D", "\u6807\u5FD7\u5468\u56F4\u4FDD\u7559\u9002\u5F53\u7559\u767D", "Maintain adequate clear space around the logo")}</li>
                <li>{t("\u6DF1\u8272\u80CC\u666F\u4E0A\u4F7F\u7528\u767D\u8272\u7248\u672C", "\u6DF1\u8272\u80CC\u666F\u4E0A\u4F7F\u7528\u767D\u8272\u7248\u672C", "Use the white version on dark backgrounds")}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{t("\u5F15\u7528\u898F\u7BC4", "\u5F15\u7528\u89C4\u8303", "Attribution")}</h3>
              <ul style={{ display: "grid", gap: 8 }}>
                <li>{t("\u4F7F\u7528\u6642\u8ACB\u8A3B\u660E\u51FA\u8655", "\u4F7F\u7528\u65F6\u8BF7\u6CE8\u660E\u51FA\u5904", "Please credit the Foundation when using materials")}</li>
                <li>{t("\u4E0D\u5F97\u7528\u65BC\u5546\u696D\u6216\u52DF\u6B3E\u7528\u9014", "\u4E0D\u5F97\u7528\u4E8E\u5546\u4E1A\u6216\u52DF\u6B3E\u7528\u9014", "May not be used for commercial or fundraising purposes")}</li>
                <li>{t("\u5982\u9700\u9AD8\u5206\u8FA8\u7387\u6587\u4EF6\uFF0C\u8ACB\u901A\u904E\u5B98\u65B9\u90F5\u7BB1\u806F\u7E6B", "\u5982\u9700\u9AD8\u5206\u8FA8\u7387\u6587\u4EF6\uFF0C\u8BF7\u901A\u8FC7\u5B98\u65B9\u90AE\u7BB1\u8054\u7CFB", "Contact us via official email for high-resolution files")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
