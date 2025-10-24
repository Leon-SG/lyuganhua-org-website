"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/dictionaries";

export default function MobileMenu({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    // close on route change
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // lock scroll when open
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const p = (s: string) => `/${locale}${s}`;
  const items = [
    { href: p(""), label: dict.nav.home },
    { href: p("/news"), label: (dict as any).nav.news ?? "News" },
    { href: p("/life"), label: (dict as any).nav.life ?? "Life" },
    { href: p("/legacy"), label: dict.nav.legacy },
    { href: p("/participate"), label: dict.nav.participate },
    { href: p("/team"), label: (dict as any).nav.team ?? "Team" },
  ];

  return (
    <>
      <button
        className="mobile-only mobile-toggle"
        aria-label="Menu"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden>☰</span>
      </button>
      {open && (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true">
          <nav aria-label="Mobile">
            <ul className="list-plain" style={{ display: "grid", gap: 6 }}>
              {items.map((it) => (
                <li key={it.href}>
                  <Link href={it.href as any} className="mobile-link">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

