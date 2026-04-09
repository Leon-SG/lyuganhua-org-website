import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { getNews } from "@/data/news";

export default async function Home({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);

  const items = getNews(locale);
  const topItems = items.slice(0, 3);

  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

  return (
    <div>
      {/* ── Hero Banner ── */}
      <div
        className="hero-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      >
        <div className="hero-banner-content">
          <h1>{dict.home.heroTitle}</h1>
          <p>{dict.home.heroSubtitle}</p>
          <div className="hero-actions">
            <Link className="cta" href={`/${locale}/legacy` as any}>
              {dict.home.ctaShare}
            </Link>
            <Link
              className="cta-outline"
              href={`/${locale}/about` as any}
            >
              {t("了解更多", "了解更多", "Learn More")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Impact Stats ── */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">
              {t("年醫學貢獻", "年医学贡献", "Years of Medical Service")}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">
              {t("指導學生", "指导学生", "Students Mentored")}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">
              {t("研究論文", "研究论文", "Research Publications")}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{t("無限", "无限", "Lasting")}</span>
            <span className="stat-label">
              {t("醫者仁心的傳承", "医者仁心的传承", "Legacy of Compassion")}
            </span>
          </div>
        </div>
      </div>

      {/* ── Mission / Pillars ── */}
      <div className="mission-section">
        <div className="mission-inner">
          <h2>{t("我們的使命", "我们的使命", "Our Mission")}</h2>
          <p className="lead">
            {t(
              "以莊重、獨立與透明的方式，保存呂干華醫生的醫學遺產，促進醫學教育與人文精神的傳承。",
              "以庄重、独立与透明的方式，保存吕干华医生的医学遗产，促进医学教育与人文精神的传承。",
              "To honor and preserve the medical legacy of Dr. Lü Ganhua through education, research, and compassionate service — with full independence and transparency."
            )}
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{t("知識保存", "知识保存", "Knowledge Preservation")}</h3>
              <p>
                {t(
                  "系統整理和保存呂干華醫生的學術論文、臨床研究和教學資料，建立可供公眾查閱的數位檔案。",
                  "系统整理和保存吕干华医生的学术论文、临床研究和教学资料，建立可供公众查阅的数字档案。",
                  "Systematically organizing and preserving Dr. Lü's academic papers, clinical research, and teaching materials in a publicly accessible digital archive."
                )}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{t("人才培育", "人才培育", "Talent Development")}</h3>
              <p>
                {t(
                  "透過獎學金和醫療人才資助計畫，支持新一代醫學專業人才的培養與發展。",
                  "通过奖学金和医疗人才资助计划，支持新一代医学专业人才的培养与发展。",
                  "Supporting the next generation of medical professionals through scholarships and talent development grants."
                )}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{t("仁心傳承", "仁心传承", "Compassion & Legacy")}</h3>
              <p>
                {t(
                  "收集和分享關於呂干華醫生仁心仁術的故事，讓醫者精神薪火相傳。",
                  "收集和分享关于吕干华医生仁心仁术的故事，让医者精神薪火相传。",
                  "Collecting and sharing stories of Dr. Lü's compassionate care, ensuring his spirit of healing endures for generations."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Latest News ── */}
      <div className="section-lg">
        <div className="news-list-card">
          <h3>{dict.home.newsTitle}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {topItems.map((n) => (
              <li key={n.date} className="news-item" style={{ flexDirection: "column", gap: 4 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span className="tag">{n.date}</span>
                  {n.url ? (
                    <a href={n.url} style={{ fontWeight: 600 }}>{n.title}</a>
                  ) : (
                    <Link href={`/${locale}/news/${n.slug}` as any} style={{ fontWeight: 600 }}>
                      {n.title}
                    </Link>
                  )}
                </div>
                {n.summary && <p className="muted" style={{ margin: 0, paddingLeft: 0 }}>{n.summary}</p>}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 20 }}>
            <Link className="cta" href={`/${locale}/news` as any}>
              {t("查看全部新聞", "查看全部新闻", "View All News")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div
        className="cta-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')",
        }}
      >
        <div className="cta-banner-content">
          <h2>
            {t(
              "加入我們，傳承醫者仁心",
              "加入我们，传承医者仁心",
              "Join Us in Honoring a Legacy of Healing"
            )}
          </h2>
          <p>
            {t(
              "無論是分享回憶、參與口述歷史，還是了解獎學金計畫——您的參與讓這份遺產更加豐富。",
              "无论是分享回忆、参与口述历史，还是了解奖学金计划——您的参与让这份遗产更加丰富。",
              "Whether sharing a memory, joining the oral history project, or learning about our scholarship programs — your participation enriches this legacy."
            )}
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="cta-outline" href={`/${locale}/participate` as any}>
              {dict.participate.title}
            </Link>
            <Link className="cta-outline" href={`/${locale}/contact` as any}>
              {dict.contact.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
