"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

function swapLocale(path: string, target: Locale) {
  const parts = path.split("/");
  // Expecting /{locale}/...; if not, default to root
  if (parts.length > 1 && locales.includes(parts[1] as Locale)) {
    parts[1] = target;
    return parts.join("/") || "/";
  }
  return `/${target}`;
}

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";
  return (
    <div className="lang-switch">
      {locales.map((l) => (
        <Link
          key={l}
          href={swapLocale(pathname, l) as any}
          className={l === current ? "active" : undefined}
          prefetch
        >
          {l === "en" ? "EN" : l === "zh-hant" ? "繁體" : "简体"}
        </Link>
      ))}
    </div>
  );
}
