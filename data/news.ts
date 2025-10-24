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
      en: "Initial call for stories to support the memorial archive (placeholder).",
      "zh-hans": "面向社会的故事征集与口述访谈（占位）。",
      "zh-hant": "面向社會的故事徵集與口述訪談（佔位）。",
    },
    body: {
      en: [
        "We plan to collect memories and oral histories to preserve a fuller picture of the legacy.",
        "Details on consent, privacy, and access will follow. This is a placeholder announcement.",
      ],
      "zh-hans": [
        "我们计划收集回忆与口述历史，以保存更完整的纪念脉络。",
        "有关同意、隐私与使用的细节将另行公布。本条为占位公告。",
      ],
      "zh-hant": [
        "我們計畫收集回憶與口述歷史，以保存更完整的紀念脈絡。",
        "有關同意、隱私與使用之細節將另行公布。本條為佔位公告。",
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
      en: "Working draft for publication/talks/media materials (placeholder).",
      "zh-hans": "论文/演讲/媒体素材包的工作草案（占位）。",
      "zh-hant": "論文/演講/媒體素材包的工作草案（佔位）。",
    },
    body: {
      en: [
        "We are drafting a structure for publications, talks, and the press kit.",
        "This is a placeholder update pending formal review.",
      ],
      "zh-hans": [
        "我们正在起草论文、演讲与媒体素材包的结构。",
        "该内容为占位更新，待正式审阅后发布。",
      ],
      "zh-hant": [
        "我們正在起草論文、演講與媒體素材包的結構。",
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
      url: n.url,
    }));
}

export function getNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug);
}
