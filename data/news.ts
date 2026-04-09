import type { Locale } from "@/lib/i18n";

export type NewsItem = {
  slug: string;
  date: string; // ISO yyyy-mm-dd
  titles: Partial<Record<Locale, string>>;
  summary?: Partial<Record<Locale, string>>;
  body?: Partial<Record<Locale, string[]>>; // paragraphs
  url?: string; // external link (if present, overrides internal detail)
};

export const news: NewsItem[] = [
  {
    slug: "website-grand-redesign",
    date: "2026-04-09",
    titles: {
      en: "Foundation website undergoes major redesign with grand visual identity",
      "zh-hans": "基金会网站全面改版，打造大气视觉形象",
      "zh-hant": "基金會網站全面改版，打造大氣視覺形象",
    },
    summary: {
      en: "The redesigned site features full-width hero banners, impact statistics, and a more immersive foundation-style experience.",
      "zh-hans": "改版网站采用全幅横幅、数据统计与沉浸式基金会风格设计。",
      "zh-hant": "改版網站採用全幅橫幅、數據統計與沉浸式基金會風格設計。",
    },
    body: {
      en: [
        "We are pleased to announce a comprehensive redesign of the Lü Ganhua Foundation website, reflecting the professionalism and dignity of a major American nonprofit foundation.",
        "The new design features full-width hero banners with curated background imagery, impact statistics highlighting Dr. Lü's legacy, a three-pillar mission section, and an enhanced footer with quick-access navigation.",
        "Each page now features a dedicated hero section that establishes visual context, while content has been significantly enriched across all three supported languages.",
      ],
      "zh-hans": [
        "我们很高兴宣布吕干华基金会网站的全面改版，其设计风格体现了美国大型非营利基金会的专业与庄重。",
        "新设计采用全幅横幅配精选背景图、影响力数据统计、三大支柱使命板块，以及增强版快速导航底栏。",
        "每个页面现均设有专属横幅区域以建立视觉语境，同时三种语言的内容均已大幅充实。",
      ],
      "zh-hant": [
        "我們很高興宣布呂干華基金會網站的全面改版，其設計風格體現了美國大型非營利基金會的專業與莊重。",
        "新設計採用全幅橫幅配精選背景圖、影響力數據統計、三大支柱使命板塊，以及增強版快速導航底欄。",
        "每個頁面現均設有專屬橫幅區域以建立視覺語境，同時三種語言的內容均已大幅充實。",
      ],
    },
  },
  {
    slug: "site-refresh",
    date: "2025-10-01",
    titles: {
      en: "Foundation site prototype refreshed with simpler design",
      "zh-hans": "网站原型焕新版面：白底与更简洁首页",
      "zh-hant": "網站原型換新版面：白底與更簡潔首頁",
    },
    summary: {
      en: "We updated the homepage to a dignified white theme with a key-image carousel and simple news.",
      "zh-hans": "首页切换为白底、关键图片轮播与简洁新闻模块。",
      "zh-hant": "首頁切換為白底、關鍵圖片輪播與簡潔新聞模組。",
    },
    body: {
      en: [
        "We refreshed the prototype to reduce distraction and present a more dignified, readable layout.",
        "The homepage now features a key-image carousel and a compact news list. Content and images are placeholders pending final materials.",
      ],
      "zh-hans": [
        "我们将原型调整为更庄重、易读的白底风格。",
        "首页采用关键图片轮播与简洁新闻列表；当前为占位内容，后续将替换为正式材料。",
      ],
      "zh-hant": [
        "我們將原型調整為更莊重、易讀的白底風格。",
        "首頁採用關鍵圖片輪播與簡潔新聞列表；當前為佔位內容，後續將替換為正式材料。",
      ],
    },
  },
  {
    slug: "oral-history-call",
    date: "2025-09-15",
    titles: {
      en: "Call for memories and oral history contributions",
      "zh-hans": "征集回忆与口述历史投稿",
      "zh-hant": "徵集回憶與口述歷史投稿",
    },
    summary: {
      en: "We invite colleagues, students, and patients to share their stories and memories of Dr. Lü Ganhua.",
      "zh-hans": "诚邀同事、学生和患者分享关于吕干华医生的故事与回忆。",
      "zh-hant": "誠邀同事、學生和患者分享關於呂干華醫生的故事與回憶。",
    },
    body: {
      en: [
        "We plan to collect memories and oral histories to preserve a fuller picture of the legacy.",
        "Whether you worked alongside Dr. Lü, studied under his guidance, or were touched by his care as a patient, your stories matter. We welcome contributions in any language.",
        "Details on consent, privacy, and access will follow. All participation is voluntary and free of charge.",
      ],
      "zh-hans": [
        "我们计划收集回忆与口述历史，以保存更完整的纪念脉络。",
        "无论您是吕医生的同事、学生还是患者，您的故事都弥足珍贵。我们欢迎任何语言的投稿。",
        "有关同意、隐私与使用的细节将另行公布。所有参与均为自愿且完全免费。",
      ],
      "zh-hant": [
        "我們計畫收集回憶與口述歷史，以保存更完整的紀念脈絡。",
        "無論您是呂醫生的同事、學生還是患者，您的故事都彌足珍貴。我們歡迎任何語言的投稿。",
        "有關同意、隱私與使用之細節將另行公布。所有參與均為自願且完全免費。",
      ],
    },
  },
  {
    slug: "scholarship-program-planning",
    date: "2025-09-01",
    titles: {
      en: "Scholarship and medical talent grant programs in planning phase",
      "zh-hans": "奖学金与医疗人才资助计划进入筹备阶段",
      "zh-hant": "獎學金與醫療人才資助計畫進入籌備階段",
    },
    summary: {
      en: "Initial planning underway for scholarship and medical talent development programs.",
      "zh-hans": "奖学金及医疗人才培养计划的初步规划正在推进中。",
      "zh-hant": "獎學金及醫療人才培養計畫的初步規劃正在推進中。",
    },
    body: {
      en: [
        "The Foundation is in the early planning stages for scholarship programs aimed at supporting outstanding students in medical and related disciplines.",
        "We are also developing a medical talent grant framework to support clinicians, trainees, and educators who embody Dr. Lü's commitment to patient-centered care.",
        "Further details, including eligibility criteria and application timelines, will be announced once finalized.",
      ],
      "zh-hans": [
        "基金会正在初步规划奖学金项目，旨在支持医学及相关学科的优秀学生。",
        "我们同时也在制定医疗人才资助框架，以支持践行吕医生以患者为中心理念的临床医生、学员和教育者。",
        "包括资格条件和申请时间表在内的详细信息将在确定后公布。",
      ],
      "zh-hant": [
        "基金會正在初步規劃獎學金項目，旨在支持醫學及相關學科的優秀學生。",
        "我們同時也在制定醫療人才資助框架，以支持踐行呂醫生以患者為中心理念的臨床醫生、學員和教育者。",
        "包括資格條件和申請時間表在內的詳細信息將在確定後公布。",
      ],
    },
  },
  {
    slug: "archive-structure",
    date: "2025-08-20",
    titles: {
      en: "Initial archive structure and media kit draft",
      "zh-hans": "初步档案结构与媒体素材包草案",
      "zh-hant": "初步檔案結構與媒體素材包草案",
    },
    summary: {
      en: "Working draft for publication/talks/media materials structure.",
      "zh-hans": "论文/演讲/媒体素材包的工作草案。",
      "zh-hant": "論文/演講/媒體素材包的工作草案。",
    },
    body: {
      en: [
        "We are drafting a structure for publications, talks, and the press kit to ensure all materials are properly cited and accessible.",
        "The archive will include academic papers, conference presentations, media interviews, and related documentation with full metadata.",
        "This is a placeholder update pending formal review.",
      ],
      "zh-hans": [
        "我们正在起草论文、演讲与媒体素材包的结构，以确保所有资料均有规范引用且可公开获取。",
        "档案将包含学术论文、会议报告、媒体访谈及相关文档，并附完整元数据。",
        "该内容为占位更新，待正式审阅后发布。",
      ],
      "zh-hant": [
        "我們正在起草論文、演講與媒體素材包的結構，以確保所有資料均有規範引用且可公開獲取。",
        "檔案將包含學術論文、會議報告、媒體訪談及相關文檔，並附完整元資料。",
        "該內容為佔位更新，待正式審閱後發布。",
      ],
    },
  },
];

export function getNews(locale: Locale) {
  return news
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((n) => ({
      slug: n.slug,
      date: n.date,
      title: n.titles[locale] || n.titles.en || "",
      summary: n.summary?.[locale] || n.summary?.en || "",
      url: n.url,
    }));
}

export function getNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug);
}
