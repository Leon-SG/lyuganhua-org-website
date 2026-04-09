import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.antiFraud.title };
}

export default async function AntiFraud({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) =>
    locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en;

  return (
    <div>
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.antiFraud.title}</h1>
          <p>{dict.antiFraud.body}</p>
        </div>
      </div>

      <div className="section-lg">
        <div className="card" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h3>{t("重要提醒", "重要提醒", "Important Reminders")}</h3>
          <p>{dict.antiFraud.contact}</p>
          <ul style={{ display: "grid", gap: 10, marginTop: 16, paddingLeft: 20 }}>
            <li>
              {t(
                "切勿向任何聲稱代表本基金會的人匯款",
                "切勿向任何声称代表本基金会的人汇款",
                "Never send money to anyone claiming to represent us"
              )}
            </li>
            <li>
              {t(
                "本基金會不提供任何形式的資助、補助或費用報銷",
                "本基金会不提供任何形式的资助、补助或费用报销",
                "We do not offer funding, grants, or reimbursements"
              )}
            </li>
            <li>
              {t(
                "請認準官方域名：lyuganhua.org",
                "请认准官方域名：lyuganhua.org",
                "Verify the official domain: lyuganhua.org"
              )}
            </li>
            <li>
              {t(
                "如收到可疑信息，請立即通過官方渠道核實",
                "如收到可疑信息，请立即通过官方渠道核实",
                "If you receive suspicious messages, verify immediately through our official channels"
              )}
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link className="cta" href={`/${locale}/contact` as any}>
            {dict.contact.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
