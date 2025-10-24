import type { Locale } from "@/lib/i18n";

export type TeamRole = "chair" | "viceChair" | "director" | "executive" | "treasurer" | "secretary" | "advisor";

export type TeamMember = {
  id: string;
  name: string;
  roles: TeamRole[];
  photo?: string;
  bio?: Partial<Record<Locale, string>>;
};

export const team: TeamMember[] = [
  {
    id: "chair",
    name: "[占位] 張三",
    roles: ["chair"],
    photo: "/team/p1.svg",
    bio: {
      "zh-hans": "[占位] 具长期公共服务经历，负责基金会治理与监督。",
      "zh-hant": "【佔位】具長期公共服務經驗，負責基金會管治與監督。",
      en: "[Placeholder] Longstanding public service experience; oversees governance."
    }
  },
  {
    id: "vice-1",
    name: "[占位] 副主席甲",
    roles: ["viceChair"],
    photo: "/team/p2.svg",
    bio: {
      "zh-hans": "[占位] 负责理事会协调工作。",
      "zh-hant": "【佔位】負責理事會協調工作。",
      en: "[Placeholder] Coordinates board activities."
    }
  },
  {
    id: "vice-2",
    name: "[占位] 副主席乙",
    roles: ["viceChair"],
    photo: "/team/p3.svg",
    bio: {
      "zh-hans": "[占位] 负责对外联系与沟通。",
      "zh-hant": "【佔位】負責對外聯繫與溝通。",
      en: "[Placeholder] Oversees external relations."
    }
  },
  {
    id: "director-1",
    name: "[占位] 李四",
    roles: ["director"],
    photo: "/team/p2.svg",
    bio: {
      "zh-hans": "[占位] 关注学术与公共交流。",
      "zh-hant": "【佔位】關注學術與公共交流。",
      en: "[Placeholder] Focuses on scholarly and public engagement."
    }
  },
  {
    id: "director-2",
    name: "[占位] 王六",
    roles: ["director"],
    photo: "/team/p4.svg",
    bio: {
      "zh-hans": "[占位] 关注合规与治理。",
      "zh-hant": "【佔位】關注合規與管治。",
      en: "[Placeholder] Focuses on compliance and governance."
    }
  },
  {
    id: "executive",
    name: "[占位] 王五",
    roles: ["executive", "secretary"],
    photo: "/team/p3.svg",
    bio: {
      "zh-hans": "[占位] 负责日常运营与文书。",
      "zh-hant": "【佔位】負責日常營運與文書。",
      en: "[Placeholder] Handles day-to-day operations and secretary duties."
    }
  },
  {
    id: "treasurer",
    name: "[占位] 趙六",
    roles: ["treasurer"],
    photo: "/team/p4.svg",
    bio: {
      "zh-hans": "[占位] 负责财务与报告。",
      "zh-hant": "【佔位】負責財務與報告。",
      en: "[Placeholder] Responsible for finance and reporting."
    }
  },
  {
    id: "advisor-1",
    name: "[占位] 顧問 A",
    roles: ["advisor"],
    photo: "/team/p2.svg",
    bio: {
      "zh-hans": "[占位] 提供专业建议（非董事）。",
      "zh-hant": "【佔位】提供專業建議（非董事）。",
      en: "[Placeholder] Provides professional advice (non-director)."
    }
  }
];

export function localizeRole(role: TeamRole, locale: Locale, dict: any): string {
  return (dict?.team?.roles?.[role as keyof typeof dict.team.roles]) || role;
}

export function localizeText<T extends Partial<Record<Locale, string>>>(obj: T | undefined, locale: Locale): string | undefined {
  if (!obj) return undefined;
  return obj[locale] || obj.en || obj["zh-hans"] || obj["zh-hant"];
}
