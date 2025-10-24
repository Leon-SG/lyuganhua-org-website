import type { Locale } from "./i18n";

export function toIetfLang(locale: Locale): string {
  switch (locale) {
    case "zh-hant":
      return "zh-Hant";
    case "zh-hans":
      return "zh-Hans";
    default:
      return "en";
  }
}

