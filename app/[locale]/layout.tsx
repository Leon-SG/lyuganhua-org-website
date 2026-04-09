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

  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

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

        {/* ── Enhanced Footer ── */}
        <footer className="footer">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>{dict.site.name}</h3>
              <p>{dict.site.tagline}</p>
              <p style={{ marginTop: 8, fontSize: "0.88rem" }}>{dict.footer.noFees}</p>
            </div>
            <div className="footer-col">
              <h4>{t("快速連結", "快速链接", "Quick Links")}</h4>
              <Link href={`/${locale}/about` as any}>{dict.nav.about}</Link>
              <Link href={`/${locale}/life` as any}>{dict.nav.life}</Link>
              <Link href={`/${locale}/legacy` as any}>{dict.nav.legacy}</Link>
              <Link href={`/${locale}/news` as any}>{dict.nav.news}</Link>
              <Link href={`/${locale}/archives` as any}>{dict.nav.archives}</Link>
            </div>
            <div className="footer-col">
              <h4>{t("參與", "参与", "Get Involved")}</h4>
              <Link href={`/${locale}/participate` as any}>{dict.nav.participate}</Link>
              <Link href={`/${locale}/team` as any}>{dict.nav.team}</Link>
              <Link href={`/${locale}/contact` as any}>{dict.nav.contact}</Link>
              <Link href={`/${locale}/anti-fraud` as any}>{dict.nav.antiFraud}</Link>
              <Link href={`/${locale}/press-kit` as any}>{t("媒體素材", "媒体素材", "Press Kit")}</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{dict.footer.rights} &copy; {year} {dict.site.name}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
