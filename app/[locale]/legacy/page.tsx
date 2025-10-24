import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.legacy.title };
}

export default async function Legacy({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) => (locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en);

  return (
    <div className="section">
      <div className="page-header">
        <h1>{dict.legacy.title}</h1>
        <p className="lead">{dict.legacy.intro}</p>
      </div>
      <section className="section">
        <blockquote className="card">
          <p>“占位：如果有纪念语录或挚友寄语，可放置于此，语气诚挚克制，突出纪念的庄重。”</p>
        </blockquote>
      </section>
      <section className="section">
        <div className="grid-2">
          <article className="card">
            <h3>{t("追思 A", "追思 A", "Tribute A")}</h3>
            <p className="muted">占位：一段纪念文字或回忆摘要。Placeholder tribute text.</p>
          </article>
          <article className="card">
            <h3>{t("影像紀事", "影像纪事", "Photo Spotlight")}</h3>
            <div className="media-placeholder">16:9 image placeholder</div>
            <p className="muted" style={{ marginTop: 8 }}>占位：一张代表性图片与说明。Placeholder photo description.</p>
          </article>
          <article className="card">
            <h3>{t("故事節選", "故事节选", "Story Highlight")}</h3>
            <p className="muted">占位：纪念文章节选或链接。Placeholder article excerpt.</p>
          </article>
          <article className="card">
            <h3>{t("圖集", "图集", "Gallery")}</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
              <div className="media-placeholder">Photo</div>
              <div className="media-placeholder">Photo</div>
              <div className="media-placeholder">Photo</div>
              <div className="media-placeholder">Photo</div>
            </div>
          </article>
        </div>
      </section>
      <section className="section grid-2">
        <article className="card">
          <h3>{t("價值與原則", "价值与原则", "Values & Principles")}</h3>
          <ul className="list-plain">
            <li>• {t("專業與仁心並重", "专业与仁心并重", "Professional excellence and compassion")}</li>
            <li>• {t("尊重隱私與尊嚴", "尊重隐私与尊严", "Respect for privacy and dignity")}</li>
            <li>• {t("知識傳承與普惠", "知识传承与普惠", "Knowledge sharing and inclusiveness")}</li>
          </ul>
        </article>
        <article className="card">
          <h3>{t("追思摘錄", "追思摘录", "Memorial Excerpts")}</h3>
          <ul className="list-plain">
            <li>“{t("懷念與感謝，言簡意誠。", "怀念与感谢，言简意诚。", "In remembrance and gratitude.") }”</li>
            <li>“{t("他的教誨長存心間。", "他的教诲长存心间。", "His guidance stays with us.") }”</li>
          </ul>
        </article>
      </section>
      <div className="card">
        <h3>{t("參與紀念", "参与纪念", "Contribute a Memory")}</h3>
        <p className="muted">{t("歡迎投稿回憶、照片或音視頻。全程不收取任何費用。", "欢迎投稿回忆、照片或音视频。全程不收取任何费用。", "Share memories, photos, or audio/video. No fees of any kind.")}</p>
        <Link className="cta" href={`/${locale}/participate` as any}>{t("提交回憶", "提交回忆", "Submit a memory")}</Link>
      </div>
    </div>
  );
}
