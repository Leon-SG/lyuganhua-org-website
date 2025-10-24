import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.participate.title };
}

export default async function Participate({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) => (locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en);

  return (
    <div className="section">
      <div className="page-header">
        <h1>{dict.participate.title}</h1>
        <p className="lead">{dict.participate.intro}</p>
      </div>
      <section className="section">
        <h2 style={{ marginTop: 0 }}>{dict.participate.givingTitle}</h2>
        <div className="grid-2" style={{ marginTop: 12 }}>
          <div className="card">
            <h3>{dict.participate.scholarshipsTitle}</h3>
            <p className="muted">{dict.participate.scholarshipsDesc}</p>
            <ul className="list-plain" style={{ marginTop: 8 }}>
              <li>• {t("資助對象與條件（佔位）", "资助对象与条件（占位）", "Eligibility (placeholder)")}</li>
              <li>• {t("申請流程與時程（佔位）", "申请流程与时程（占位）", "Application process & timeline (placeholder)")}</li>
              <li>• {t("獎助金額與名額（佔位）", "奖助金额与名额（占位）", "Award amount & slots (placeholder)")}</li>
            </ul>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <a className="cta" href={`/${locale}/contact`}>{dict.participate.ctaApply}</a>
              <a className="cta" href={`/${locale}/contact`}>{dict.participate.ctaLearnMore}</a>
            </div>
          </div>
          <div className="card">
            <h3>{dict.participate.medTalentTitle}</h3>
            <p className="muted">{dict.participate.medTalentDesc}</p>
            <ul className="list-plain" style={{ marginTop: 8 }}>
              <li>• {t("培訓/實習/教學之支援（佔位）", "培训/实习/教学之支持（占位）", "Support for training / residency / teaching (placeholder)")}</li>
              <li>• {t("臨床項目與交流（佔位）", "临床项目与交流（占位）", "Clinical projects & exchange (placeholder)")}</li>
              <li>• {t("申請與審核原則（佔位）", "申请与审核原则（占位）", "Application & review principles (placeholder)")}</li>
            </ul>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <a className="cta" href={`/${locale}/contact`}>{dict.participate.ctaApply}</a>
              <a className="cta" href={`/${locale}/contact`}>{dict.participate.ctaLearnMore}</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
