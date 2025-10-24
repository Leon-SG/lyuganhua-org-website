import type { Locale } from "./i18n";

const dicts = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  "zh-hant": () => import("./dictionaries/zh-hant.json").then((m) => m.default),
  "zh-hans": () => import("./dictionaries/zh-hans.json").then((m) => m.default),
} as const;

export async function getDictionary(locale: Locale) {
  return dicts[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

