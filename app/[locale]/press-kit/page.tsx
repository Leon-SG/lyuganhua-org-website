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
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.pressKit.title}</h1>
          <p>{dict.pressKit.intro}</p>
        </div>
      </div>

      <div className="section-lg">
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
              <p>
                <a className="cta" href={m.src} download>
                  {t("下載", "下载", "Download")}
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="section-alt-bg" style={{ marginTop: 48 }}>
          <div className="section-alt-inner">
            <h2 style={{ textAlign: "center", marginTop: 0, marginBottom: 16 }}>
              {t("使用指南", "使用指南", "Usage Guidelines")}
            </h2>
            <div className="grid-2">
              <div className="card">
                <h3>{t("標誌使用", "标志使用", "Logo Usage")}</h3>
                <ul style={{ display: "grid", gap: 8 }}>
                  <li>{t("請保持標誌完整，不得裁切或變形", "请保持标志完整，不得裁切或变形", "Keep the logo intact; do not crop or distort")}</li>
                  <li>{t("標誌周圍保留適當留白", "标志周围保留适当留白", "Maintain adequate clear space around the logo")}</li>
                  <li>{t("深色背景上使用白色版本", "深色背景上使用白色版本", "Use the white version on dark backgrounds")}</li>
                </ul>
              </div>
              <div className="card">
                <h3>{t("引用規範", "引用规范", "Attribution")}</h3>
                <ul style={{ display: "grid", gap: 8 }}>
                  <li>{t("使用時請註明出處", "使用时请注明出处", "Please credit the Foundation when using materials")}</li>
                  <li>{t("不得用於商業或募款用途", "不得用于商业或募款用途", "May not be used for commercial or fundraising purposes")}</li>
                  <li>{t("如需高分辨率文件，請通過官方郵箱聯繫", "如需高分辨率文件，请通过官方邮箱联系", "Contact us via official email for high-resolution files")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
