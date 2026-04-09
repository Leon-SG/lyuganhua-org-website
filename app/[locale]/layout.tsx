import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { locales, isLocale } from "@/lib/i18n";
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
  return {
    alternates: { languages: { en: "/en", "zh-Hant": "/zh-hant", "zh-Hans": "/zh-hans" } },
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
  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

  return (
    <html lang={langAttr}>
      <body>
        <a href="#content" className="visually-hidden-focusable" style={{position:"absolute",left:-10000,top:"auto",width:1,height:1,overflow:"hidden"}}>Skip to content</a>

        <div className="utility-bar desktop-only">
          <div className="container utility-bar-inner">
            <span className="domain-badge">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1"/></svg>
              lyuganhua.org
            </span>
            <span>{dict.banner.noFees}</span>
          </div>
        </div>

        <header className="site-header">
          <div className="container site-header-inner">
            <Link href={`/${locale}`} className="brand" aria-label={dict.site.name}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" />
                <path d="M7 12h10M12 7v10" stroke="var(--gold)" strokeWidth="2" />
              </svg>
              <span>{dict.site.name}</span>
            </Link>
            <div className="desktop-only" style={{ display: "flex", alignItems: "center" }}>
              <Nav dict={dict} locale={locale} />
              <LanguageSwitcher current={locale} />
            </div>
            <MobileMenu dict={dict} locale={locale} />
          </div>
          <RouteMarquee />
        </header>

        <StructuredData siteUrl="https://lyuganhua.org" />
        <main id="content">{children}</main>

        <footer className="site-footer">
          <div className="container footer-top">
            <div className="footer-brand">
              <h3>{dict.site.name}</h3>
              <p>{dict.site.tagline}</p>
              <div className="no-fees-badge">{dict.footer.noFees}</div>
            </div>
            <div className="footer-col">
              <h4>{t("\u95DC\u65BC", "\u5173\u4E8E", "About")}</h4>
              <Link href={`/${locale}/about` as any}>{dict.nav.about}</Link>
              <Link href={`/${locale}/team` as any}>{dict.nav.team}</Link>
              <Link href={`/${locale}/anti-fraud` as any}>{dict.nav.antiFraud}</Link>
              <Link href={`/${locale}/press-kit` as any}>{t("\u5A92\u9AD4\u7D20\u6750", "\u5A92\u4F53\u7D20\u6750", "Press Kit")}</Link>
            </div>
            <div className="footer-col">
              <h4>{t("\u63A2\u7D22", "\u63A2\u7D22", "Explore")}</h4>
              <Link href={`/${locale}/life` as any}>{dict.nav.life}</Link>
              <Link href={`/${locale}/legacy` as any}>{dict.nav.legacy}</Link>
              <Link href={`/${locale}/archives` as any}>{dict.nav.archives}</Link>
              <Link href={`/${locale}/news` as any}>{dict.nav.news}</Link>
            </div>
            <div className="footer-col">
              <h4>{t("\u53C3\u8207", "\u53C2\u4E0E", "Get Involved")}</h4>
              <Link href={`/${locale}/participate` as any}>{dict.nav.participate}</Link>
              <Link href={`/${locale}/contact` as any}>{dict.nav.contact}</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>&copy; {year} {dict.site.name}. {dict.footer.rights}</span>
            <span>{dict.banner.domain}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
