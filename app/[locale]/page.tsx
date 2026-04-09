import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { getNews } from "@/data/news";

export default async function Home({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const items = getNews(locale);
  const topItems = items.slice(0, 4);
  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

  return (
    <div>
      <div className="hero-banner full-bleed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}>
        <div className="hero-banner-content">
          <h1>{dict.home.heroTitle}</h1>
          <p className="hero-subtitle">{dict.home.heroSubtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-white" href={`/${locale}/about` as any}>{t("\u4E86\u89E3\u57FA\u91D1\u6703", "\u4E86\u89E3\u57FA\u91D1\u4F1A", "About the Foundation")}</Link>
            <Link className="btn btn-outline" href={`/${locale}/participate` as any}>{t("\u53C3\u8207\u6211\u5011", "\u53C2\u4E0E\u6211\u4EEC", "Get Involved")}</Link>
          </div>
        </div>
      </div>

      <div className="full-bleed section-brand stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><span className="stat-number">30+</span><span className="stat-label">{t("\u5E74\u91AB\u5B78\u670D\u52D9", "\u5E74\u533B\u5B66\u670D\u52A1", "Years of Medical Service")}</span></div>
            <div className="stat-item"><span className="stat-number">500+</span><span className="stat-label">{t("\u6307\u5C0E\u5B78\u751F", "\u6307\u5BFC\u5B66\u751F", "Students Mentored")}</span></div>
            <div className="stat-item"><span className="stat-number">100+</span><span className="stat-label">{t("\u7814\u7A76\u8AD6\u6587", "\u7814\u7A76\u8BBA\u6587", "Research Publications")}</span></div>
            <div className="stat-item"><span className="stat-number">{t("\u7121\u9650", "\u65E0\u9650", "Lasting")}</span><span className="stat-label">{t("\u91AB\u8005\u4EC1\u5FC3\u7684\u50B3\u627F", "\u533B\u8005\u4EC1\u5FC3\u7684\u4F20\u627F", "Legacy of Compassion")}</span></div>
          </div>
        </div>
      </div>

      <div className="full-bleed section-warm" style={{ padding: "var(--section-gap) 0" }}>
        <div className="container">
          <div className="section-header">
            <h2>{t("\u6211\u5011\u7684\u4F7F\u547D", "\u6211\u4EEC\u7684\u4F7F\u547D", "Our Mission")}</h2>
            <p>{t("\u4EE5\u83AB\u91CD\u3001\u7368\u7ACB\u8207\u900F\u660E\u7684\u65B9\u5F0F\uFF0C\u4FDD\u5B58\u5442\u5E72\u83EF\u91AB\u751F\u7684\u91AB\u5B78\u907A\u7522\uFF0C\u4FC3\u9032\u91AB\u5B78\u6559\u80B2\u8207\u4EBA\u6587\u7CBE\u795E\u7684\u50B3\u627F\u3002", "\u4EE5\u5E84\u91CD\u3001\u72EC\u7ACB\u4E0E\u900F\u660E\u7684\u65B9\u5F0F\uFF0C\u4FDD\u5B58\u5415\u5E72\u534E\u533B\u751F\u7684\u533B\u5B66\u9057\u4EA7\uFF0C\u4FC3\u8FDB\u533B\u5B66\u6559\u80B2\u4E0E\u4EBA\u6587\u7CBE\u795E\u7684\u4F20\u627F\u3002", "To honor and preserve the medical legacy of Dr. L\u00FC Ganhua through education, research, and compassionate service \u2014 with full independence and transparency.")}</p>
            <span className="gold-line" />
          </div>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80')" }} />
              <div className="focus-card-body">
                <h3>{t("\u77E5\u8B58\u4FDD\u5B58\u8207\u6A94\u6848", "\u77E5\u8BC6\u4FDD\u5B58\u4E0E\u6863\u6848", "Knowledge Preservation")}</h3>
                <p>{t("\u7CFB\u7D71\u6574\u7406\u548C\u4FDD\u5B58\u5442\u5E72\u83EF\u91AB\u751F\u7684\u5B78\u8853\u8AD6\u6587\u3001\u81E8\u5E8A\u7814\u7A76\u548C\u6559\u5B78\u8CC7\u6599\uFF0C\u5EFA\u7ACB\u53EF\u4F9B\u516C\u773E\u67E5\u95B1\u7684\u6578\u4F4D\u6A94\u6848\u3002", "\u7CFB\u7EDF\u6574\u7406\u548C\u4FDD\u5B58\u5415\u5E72\u534E\u533B\u751F\u7684\u5B66\u672F\u8BBA\u6587\u3001\u4E34\u5E8A\u7814\u7A76\u548C\u6559\u5B66\u8D44\u6599\uFF0C\u5EFA\u7ACB\u53EF\u4F9B\u516C\u4F17\u67E5\u9605\u7684\u6570\u5B57\u6863\u6848\u3002", "Systematically preserving Dr. L\u00FC's academic papers, clinical research, and teaching materials in a publicly accessible digital archive.")}</p>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80')" }} />
              <div className="focus-card-body">
                <h3>{t("\u4EBA\u624D\u57F9\u80B2\u8207\u734E\u5B78\u91D1", "\u4EBA\u624D\u57F9\u80B2\u4E0E\u5956\u5B66\u91D1", "Talent Development & Scholarships")}</h3>
                <p>{t("\u900F\u904E\u734E\u5B78\u91D1\u548C\u91AB\u7642\u4EBA\u624D\u8CC7\u52A9\u8A08\u756B\uFF0C\u652F\u6301\u65B0\u4E00\u4EE3\u91AB\u5B78\u5C08\u696D\u4EBA\u624D\u7684\u57F9\u990A\u8207\u767C\u5C55\u3002", "\u901A\u8FC7\u5956\u5B66\u91D1\u548C\u533B\u7597\u4EBA\u624D\u8D44\u52A9\u8BA1\u5212\uFF0C\u652F\u6301\u65B0\u4E00\u4EE3\u533B\u5B66\u4E13\u4E1A\u4EBA\u624D\u7684\u57F9\u517B\u4E0E\u53D1\u5C55\u3002", "Supporting the next generation of medical professionals through scholarships and talent development grants.")}</p>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80')" }} />
              <div className="focus-card-body">
                <h3>{t("\u4EC1\u5FC3\u50B3\u627F\u8207\u53E3\u8FF0\u6B77\u53F2", "\u4EC1\u5FC3\u4F20\u627F\u4E0E\u53E3\u8FF0\u5386\u53F2", "Compassion & Oral History")}</h3>
                <p>{t("\u6536\u96C6\u540C\u4E8B\u3001\u5B78\u751F\u53CA\u60A3\u8005\u7684\u56DE\u61B6\u8207\u898B\u8B49\uFF0C\u4EE5\u591A\u5143\u89D2\u5EA6\u5B8C\u6574\u5448\u73FE\u5442\u91AB\u751F\u7684\u91AB\u8005\u98A8\u7BC4\u3002", "\u6536\u96C6\u540C\u4E8B\u3001\u5B66\u751F\u53CA\u60A3\u8005\u7684\u56DE\u5FC6\u4E0E\u89C1\u8BC1\uFF0C\u4EE5\u591A\u5143\u89D2\u5EA6\u5B8C\u6574\u5448\u73B0\u5415\u533B\u751F\u7684\u533B\u8005\u98CE\u8303\u3002", "Collecting memories and testimonials from colleagues, students, and patients, presenting Dr. L\u00FC's legacy from multiple perspectives.")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "var(--section-gap) 24px" }}>
        <div className="section-header">
          <h2>{dict.home.newsTitle}</h2>
          <p>{t("\u57FA\u91D1\u6703\u6700\u65B0\u52D5\u614B\u8207\u9032\u5C55", "\u57FA\u91D1\u4F1A\u6700\u65B0\u52A8\u6001\u4E0E\u8FDB\u5C55", "The latest updates and developments from the Foundation")}</p>
          <span className="gold-line" />
        </div>
        <div className="stories-grid">
          {topItems.map((n) => (
            <article key={n.slug} className="story-card">
              <div className="story-card-body">
                <span className="tag">{n.date}</span>
                <h3>{n.url ? <a href={n.url}>{n.title}</a> : <Link href={`/${locale}/news/${n.slug}` as any}>{n.title}</Link>}</h3>
                {n.summary && <p>{n.summary}</p>}
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link className="btn btn-ghost" href={`/${locale}/news` as any}>{t("\u67E5\u770B\u5168\u90E8\u65B0\u805E", "\u67E5\u770B\u5168\u90E8\u65B0\u95FB", "View All News")} &rarr;</Link>
        </div>
      </div>

      <div className="full-bleed section-cool" style={{ padding: "64px 0" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <blockquote style={{ border: "none", background: "transparent", padding: 0 }}>
            <p style={{ fontSize: "1.4rem", fontStyle: "italic", lineHeight: 1.6 }}>
              {t("\u300C\u91AB\u8005\u4E4B\u9053\uFF0C\u5728\u65BC\u4EE5\u4EC1\u5FC3\u5F85\u4EBA\uFF0C\u4EE5\u5C08\u696D\u6FDF\u4E16\u3002\u4E0D\u6C42\u805E\u9054\uFF0C\u4F46\u6C42\u7121\u6127\u65BC\u5FC3\u3002\u300D", "\u201C\u533B\u8005\u4E4B\u9053\uFF0C\u5728\u4E8E\u4EE5\u4EC1\u5FC3\u5F85\u4EBA\uFF0C\u4EE5\u4E13\u4E1A\u6D4E\u4E16\u3002\u4E0D\u6C42\u95FB\u8FBE\uFF0C\u4F46\u6C42\u65E0\u6127\u4E8E\u5FC3\u3002\u201D", "The way of medicine lies in treating others with compassion and serving the world with expertise. Seek not fame, but only peace of conscience.")}
            </p>
          </blockquote>
        </div>
      </div>

      <div className="full-bleed cta-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')" }}>
        <div className="cta-banner-content">
          <h2>{t("\u52A0\u5165\u6211\u5011\uFF0C\u50B3\u627F\u91AB\u8005\u4EC1\u5FC3", "\u52A0\u5165\u6211\u4EEC\uFF0C\u4F20\u627F\u533B\u8005\u4EC1\u5FC3", "Join Us in Honoring a Legacy of Healing")}</h2>
          <p>{t("\u7121\u8AD6\u662F\u5206\u4EAB\u56DE\u61B6\u3001\u53C3\u8207\u53E3\u8FF0\u6B77\u53F2\uFF0C\u9084\u662F\u4E86\u89E3\u734E\u5B78\u91D1\u8A08\u756B\u2014\u2014\u60A8\u7684\u53C3\u8207\u8B93\u9019\u4EFD\u907A\u7522\u66F4\u52A0\u8C50\u5BCC\u3002", "\u65E0\u8BBA\u662F\u5206\u4EAB\u56DE\u5FC6\u3001\u53C2\u4E0E\u53E3\u8FF0\u5386\u53F2\uFF0C\u8FD8\u662F\u4E86\u89E3\u5956\u5B66\u91D1\u8BA1\u5212\u2014\u2014\u60A8\u7684\u53C2\u4E0E\u8BA9\u8FD9\u4EFD\u9057\u4EA7\u66F4\u52A0\u4E30\u5BCC\u3002", "Whether sharing a memory, joining our oral history project, or learning about scholarship programs \u2014 your participation enriches this legacy.")}</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-white" href={`/${locale}/participate` as any}>{dict.participate.title}</Link>
            <Link className="btn btn-outline" href={`/${locale}/contact` as any}>{dict.contact.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
