export type Locale = "en" | "zh-hant" | "zh-hans";

export type Localized<T = string> = {
  en: T;
  "zh-hant"?: T;
  "zh-hans"?: T;
};

export interface TimelineEvent {
  id: string;
  year: number;
  title: Localized;
  description?: Localized;
  place?: Localized;
}

export interface Publication {
  id: string;
  year: number;
  title: Localized;
  venue?: Localized;
  authors?: Localized;
  url?: string;
  doi?: string;
}

export interface TalkOrInterview {
  id: string;
  year: number;
  title: Localized;
  event?: Localized;
  url?: string;
}

export interface MediaItem {
  id: string;
  type: "logo" | "photo";
  title: Localized;
  src: string; // path under public/
  credit?: Localized;
  usage?: Localized; // usage notes
}

export function pick<T = string>(loc: Localized<T>, locale: Locale): T {
  return (loc[locale] ?? loc["zh-hant"] ?? loc["zh-hans"] ?? loc.en) as T;
}

