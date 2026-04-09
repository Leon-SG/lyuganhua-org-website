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
        className="full-bleed page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.antiFraud.title}</h1>
          <p className="hero-subtitle">{dict.antiFraud.body}</p>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="container section-lg">
        <div className="section-header">
          <h2>{t("\u91CD\u8981\u63D0\u9192", "\u91CD\u8981\u63D0\u9192", "Important Reminders")}</h2>
          <p className="text-secondary">{dict.antiFraud.contact}</p>
          <span className="gold-line" />
        </div>

        <div className="card" style={{ maxWidth: 800, margin: "0 auto" }}>
          <ul style={{ display: "grid", gap: 14, paddingLeft: 20, margin: 0 }}>
            <li>
              {t(
                "\u5207\u52FF\u5411\u4EFB\u4F55\u8072\u7A31\u4EE3\u8868\u672C\u57FA\u91D1\u6703\u7684\u4EBA\u532F\u6B3E",
                "\u5207\u52FF\u5411\u4EFB\u4F55\u58F0\u79F0\u4EE3\u8868\u672C\u57FA\u91D1\u4F1A\u7684\u4EBA\u6C47\u6B3E",
                "Never send money to anyone claiming to represent us"
              )}
            </li>
            <li>
              {t(
                "\u672C\u57FA\u91D1\u6703\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u5F62\u5F0F\u7684\u8CC7\u52A9\u3001\u88DC\u52A9\u6216\u8CBB\u7528\u5831\u92B7",
                "\u672C\u57FA\u91D1\u4F1A\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u5F62\u5F0F\u7684\u8D44\u52A9\u3001\u8865\u52A9\u6216\u8D39\u7528\u62A5\u9500",
                "We do not offer funding, grants, or reimbursements"
              )}
            </li>
            <li>
              {t(
                "\u8ACB\u8A8D\u6E96\u5B98\u65B9\u57DF\u540D\uFF1Alyuganhua.org",
                "\u8BF7\u8BA4\u51C6\u5B98\u65B9\u57DF\u540D\uFF1Alyuganhua.org",
                "Verify the official domain: lyuganhua.org"
              )}
            </li>
            <li>
              {t(
                "\u5982\u6536\u5230\u53EF\u7591\u4FE1\u606F\uFF0C\u8ACB\u7ACB\u5373\u901A\u904E\u5B98\u65B9\u6E20\u9053\u6838\u5BE6",
                "\u5982\u6536\u5230\u53EF\u7591\u4FE1\u606F\uFF0C\u8BF7\u7ACB\u5373\u901A\u8FC7\u5B98\u65B9\u6E20\u9053\u6838\u5B9E",
                "If you receive suspicious messages, verify immediately through our official channels"
              )}
            </li>
          </ul>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link className="btn btn-primary" href={`/${locale}/contact` as any}>
            {dict.contact.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
