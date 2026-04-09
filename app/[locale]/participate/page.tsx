import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.participate.title };
}

export default async function Participate({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) => (locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en);

  return (
    <div>
      {/* Hero */}
      <div
        className="full-bleed page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.participate.title}</h1>
          <p>{dict.participate.intro}</p>
        </div>
      </div>

      {/* Ways to Participate */}
      <div className="container section-lg">
        <div className="section-header">
          <h2>{t("參與方式", "参与方式", "Ways to Participate")}</h2>
          <p className="text-secondary">
            {t(
              "我們提供多種方式讓您參與紀念和傳承呂干華醫生的精神遺產。所有參與均為自願且完全免費。",
              "我们提供多种方式让您参与纪念和传承吕干华医生的精神遗产。所有参与均为自愿且完全免费。",
              "We offer multiple ways for you to participate in commemorating and carrying forward Dr. Lü Ganhua's legacy. All participation is voluntary and completely free."
            )}
          </p>
          <span className="gold-line" />
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{t("投稿回憶", "投稿回忆", "Submit Memories")}</h3>
            <p>
              {t(
                "分享您與呂醫生的故事、回憶或見證。文字、照片、音視頻均可。",
                "分享您与吕医生的故事、回忆或见证。文字、照片、音视频均可。",
                "Share your stories, memories, or testimonials about Dr. Lü. Text, photos, and audio/video are all welcome."
              )}
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{t("口述歷史", "口述历史", "Oral History Project")}</h3>
            <p>
              {t(
                "參與口述歷史計畫，以您的親身經歷為呂醫生的人生增添珍貴的第一手記錄。",
                "参与口述历史计划，以您的亲身经历为吕医生的人生增添珍贵的第一手记录。",
                "Join our oral history project to add invaluable first-hand accounts to Dr. Lü's life record."
              )}
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{t("學術資料", "学术资料", "Academic Materials")}</h3>
            <p>
              {t(
                "如您持有呂醫生的論文、講義或研究資料副本，歡迎提供以豐富檔案庫。",
                "如您持有吕医生的论文、讲义或研究资料副本，欢迎提供以丰富档案库。",
                "If you have copies of Dr. Lü's papers, lecture notes, or research materials, please contribute them to enrich our archive."
              )}
            </p>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Scholarships & Grants */}
      <div className="container section-lg">
        <h2 style={{ marginTop: 0 }}>{dict.participate.givingTitle}</h2>
        <p className="text-secondary" style={{ marginBottom: 24 }}>
          {t(
            "以下計畫旨在以呂干華醫生之名回饋社會，培養新一代醫學人才。",
            "以下计划旨在以吕干华医生之名回馈社会，培养新一代医学人才。",
            "The following programs aim to give back to society in Dr. Lü Ganhua's name, nurturing the next generation of medical talent."
          )}
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>{dict.participate.scholarshipsTitle}</h3>
            <p className="text-secondary">{dict.participate.scholarshipsDesc}</p>
            <ul className="list-plain" style={{ marginTop: 12, display: "grid", gap: 8 }}>
              <li>
                {t(
                  "• 面向醫學及相關學科的優秀學生",
                  "• 面向医学及相关学科的优秀学生",
                  "• For outstanding students in medical and related disciplines"
                )}
              </li>
              <li>
                {t(
                  "• 依據需求和學業成績綜合評定",
                  "• 依据需求和学业成绩综合评定",
                  "• Based on combined need and academic merit assessment"
                )}
              </li>
              <li>
                {t(
                  "• 申請流程與時程（待公布）",
                  "• 申请流程与时程（待公布）",
                  "• Application process and timeline (to be announced)"
                )}
              </li>
            </ul>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <a className="cta" href={`/${locale}/contact`}>{dict.participate.ctaApply}</a>
              <a className="cta" href={`/${locale}/contact`} style={{ background: "transparent", color: "var(--brand)" }}>{dict.participate.ctaLearnMore}</a>
            </div>
          </div>
          <div className="card">
            <h3>{dict.participate.medTalentTitle}</h3>
            <p className="text-secondary">{dict.participate.medTalentDesc}</p>
            <ul className="list-plain" style={{ marginTop: 12, display: "grid", gap: 8 }}>
              <li>
                {t(
                  "• 支持臨床培訓、住院醫/實習及教學項目",
                  "• 支持临床培训、住院医/实习及教学项目",
                  "• Support for clinical training, residency, and teaching projects"
                )}
              </li>
              <li>
                {t(
                  "• 促進國際醫學交流與合作",
                  "• 促进国际医学交流与合作",
                  "• Promoting international medical exchange and collaboration"
                )}
              </li>
              <li>
                {t(
                  "• 審核原則與流程（待公布）",
                  "• 审核原则与流程（待公布）",
                  "• Review principles and process (to be announced)"
                )}
              </li>
            </ul>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <a className="cta" href={`/${locale}/contact`}>{dict.participate.ctaApply}</a>
              <a className="cta" href={`/${locale}/contact`} style={{ background: "transparent", color: "var(--brand)" }}>{dict.participate.ctaLearnMore}</a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="full-bleed cta-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')",
        }}
      >
        <div className="cta-banner-content">
          <h2>
            {t(
              "聯繫我們",
              "联系我们",
              "Get in Touch"
            )}
          </h2>
          <p>
            {t(
              "如有任何問題或希望了解更多，歡迎通過官方渠道與我們聯繫。",
              "如有任何问题或希望了解更多，欢迎通过官方渠道与我们联系。",
              "If you have any questions or would like to learn more, please reach out through our official channels."
            )}
          </p>
          <Link className="cta-outline" href={`/${locale}/contact` as any}>
            {dict.contact.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
