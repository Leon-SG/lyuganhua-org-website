"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/lib/dictionaries";

export default function Nav({ dict, locale }: { dict: Dictionary; locale: string }) {
  const p = (s: string) => `/${locale}${s}`;
  const pathname = usePathname() || "/";
  const items = [
    { href: p(""), label: dict.nav.home },
    { href: p("/news"), label: (dict as any).nav.news ?? "News" },
    { href: p("/life"), label: (dict as any).nav.life ?? "Life" },
    { href: p("/legacy"), label: dict.nav.legacy },
    { href: p("/participate"), label: dict.nav.participate },
    { href: p("/team"), label: (dict as any).nav.team ?? "Team" }
  ];
  return (
    <nav className="nav" aria-label="Primary">
      {items.map((it) => {
        const active = pathname === it.href || pathname.startsWith(it.href + "/");
        return (
          <Link key={it.href} href={it.href as any} aria-current={active ? "page" : undefined} className={active ? "active" : undefined}>
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
