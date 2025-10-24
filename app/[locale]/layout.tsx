import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale, isLocale } from "@/lib/i18n";
import Nav from "@/components/Nav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import StructuredData from "@/components/StructuredData";
import { toIetfLang } from "@/lib/lang";
import RouteMarquee from "@/components/RouteMarquee";
import MobileMenu from "@/components/MobileMenu";

export async function generateStaticParams() {
  return locales.map((l) => ({ locale: l }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const alternates: Record<string, string> = {
    en: "/en",
    "zh-Hant": "/zh-hant",
    "zh-Hans": "/zh-hans",
  };
  return {
    alternates: { languages: alternates },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);

  const langAttr = toIetfLang(locale);
  const year = new Date().getFullYear();

  return (
    <html lang={langAttr}>
      <body>
        <a href="#content" className="visually-hidden-focusable" style={{position:"absolute",left:-10000,top:"auto",width:1,height:1,overflow:"hidden"}}>Skip to content</a>
        <header className="site-header">
          <div className="container site-header-inner">
            <Link href={`/${locale}`} className="brand" aria-label={dict.site.name}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" />
                <path d="M7 12h10M12 7v10" stroke="var(--accent)" strokeWidth="2" />
              </svg>
              <span>{dict.site.name}</span>
            </Link>
            <div className="desktop-only"><Nav dict={dict} locale={locale} /></div>
            <div className="desktop-only"><LanguageSwitcher current={locale} /></div>
            <MobileMenu dict={dict} locale={locale} />
          </div>
          <RouteMarquee />
        </header>
        <StructuredData siteUrl="https://lyuganhua.org" />
        <main id="content" className="container">{children}</main>
        <footer className="footer">
          <div className="container" style={{ textAlign: "center" }}>
            <p className="muted">{dict.footer.rights} © {year} · {dict.site.name}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
