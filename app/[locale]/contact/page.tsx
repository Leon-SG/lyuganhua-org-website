import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.contact.title };
}

export default async function Contact({ params }: { params: { locale: string } }) {
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
            "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.contact.title}</h1>
          <p className="hero-subtitle">{dict.contact.body}</p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container section-lg">
        <div className="section-header">
          <h2>{t("\u806F\u7D61\u6211\u5011", "\u8054\u7CFB\u6211\u4EEC", "Get in Touch")}</h2>
          <p className="text-secondary">
            {t(
              "\u8ACB\u901A\u904E\u4EE5\u4E0B\u6E20\u9053\u8207\u6211\u5011\u53D6\u5F97\u806F\u7E6B",
              "\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u6E20\u9053\u4E0E\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB",
              "Reach out to us through any of the channels below"
            )}
          </p>
          <span className="gold-line" />
        </div>

        <div className="grid-2">
          {/* General Inquiries */}
          <div className="card">
            <h3>{t("\u4E00\u822C\u67E5\u8A62", "\u4E00\u822C\u67E5\u8BE2", "General Inquiries")}</h3>
            <p className="text-secondary">
              {t(
                "\u5982\u6709\u4E00\u822C\u6027\u554F\u984C\uFF0C\u8ACB\u901A\u904E\u4EE5\u4E0B\u96FB\u90F5\u5730\u5740\u8207\u6211\u5011\u806F\u7E6B\u3002\u6211\u5011\u6703\u5728\u5408\u7406\u6642\u9593\u5167\u56DE\u8986\u3002",
                "\u5982\u6709\u4E00\u822C\u6027\u95EE\u9898\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u7535\u90AE\u5730\u5740\u4E0E\u6211\u4EEC\u8054\u7CFB\u3002\u6211\u4EEC\u4F1A\u5728\u5408\u7406\u65F6\u95F4\u5185\u56DE\u590D\u3002",
                "For general questions, please reach out via the email address below. We will respond within a reasonable timeframe."
              )}
            </p>
            <p style={{ fontWeight: 600, marginTop: 12 }}>{dict.contact.email}</p>
            <p className="muted" style={{ marginTop: 4 }}>{dict.banner.domain}</p>
          </div>

          {/* Media & Press */}
          <div className="card">
            <h3>{t("\u5A92\u9AD4\u8207\u65B0\u805E", "\u5A92\u4F53\u4E0E\u65B0\u95FB", "Media & Press")}</h3>
            <p className="text-secondary">
              {t(
                "\u5A92\u9AD4\u5782\u8A62\u8ACB\u767C\u9001\u81F3\u5C08\u7528\u90F5\u7BB1\uFF08\u5373\u5C07\u958B\u901A\uFF09\u3002\u6211\u5011\u7684\u5A92\u9AD4\u7D20\u6750\u5305\u53EF\u4F9B\u4E0B\u8F09\u3002",
                "\u5A92\u4F53\u5782\u8BE2\u8BF7\u53D1\u9001\u81F3\u4E13\u7528\u90AE\u7BB1\uFF08\u5373\u5C06\u5F00\u901A\uFF09\u3002\u6211\u4EEC\u7684\u5A92\u4F53\u7D20\u6750\u5305\u53EF\u4F9B\u4E0B\u8F7D\u3002",
                "For press inquiries, please use the dedicated press email (coming soon). Our press kit is available for download."
              )}
            </p>
            <div style={{ marginTop: 16 }}>
              <Link className="btn btn-primary" href={`/${locale}/press-kit` as any}>
                {t("\u67E5\u770B\u5A92\u9AD4\u7D20\u6750", "\u67E5\u770B\u5A92\u4F53\u7D20\u6750", "View Press Kit")}
              </Link>
            </div>
          </div>

          {/* Submissions & Oral History */}
          <div className="card">
            <h3>{t("\u6295\u7A3F\u8207\u53E3\u8FF0\u6B77\u53F2", "\u6295\u7A3F\u4E0E\u53E3\u8FF0\u5386\u53F2", "Submissions & Oral History")}</h3>
            <p className="text-secondary">
              {t(
                "\u6B61\u8FCE\u6295\u7A3F\u56DE\u61B6\u3001\u7167\u7247\u6216\u53C3\u8207\u53E3\u8FF0\u6B77\u53F2\u8A08\u756B\u3002\u8ACB\u900F\u904E\u4E00\u822C\u67E5\u8A62\u90F5\u7BB1\u806F\u7E6B\uFF0C\u6216\u8A2A\u554F\u300C\u53C3\u8207\u300D\u9801\u9762\u4E86\u89E3\u8A73\u60C5\u3002",
                "\u6B22\u8FCE\u6295\u7A3F\u56DE\u5FC6\u3001\u7167\u7247\u6216\u53C2\u4E0E\u53E3\u8FF0\u5386\u53F2\u8BA1\u5212\u3002\u8BF7\u901A\u8FC7\u4E00\u822C\u67E5\u8BE2\u90AE\u7BB1\u8054\u7CFB\uFF0C\u6216\u8BBF\u95EE\u201C\u53C2\u4E0E\u201D\u9875\u9762\u4E86\u89E3\u8BE6\u60C5\u3002",
                "We welcome memory submissions, photos, or oral history participation. Please contact us via the general inquiry email, or visit the Participate page for details."
              )}
            </p>
            <div style={{ marginTop: 16 }}>
              <Link className="btn btn-primary" href={`/${locale}/participate` as any}>
                {dict.nav.participate}
              </Link>
            </div>
          </div>

          {/* Anti-Fraud Notice */}
          <div className="card">
            <h3>{t("\u53CD\u8A50\u63D0\u9192", "\u53CD\u8BC8\u63D0\u9192", "Anti-Fraud Notice")}</h3>
            <p className="text-secondary">
              {t(
                "\u672C\u57FA\u91D1\u6703\u5F9E\u4E0D\u6536\u53D6\u4EFB\u4F55\u8CBB\u7528\u3002\u5982\u9047\u53EF\u7591\u60C5\u6CC1\uFF0C\u8ACB\u901A\u904E\u5B98\u65B9\u57DF\u540D\u6838\u5BE6\u6216\u806F\u7E6B\u6211\u5011\u3002",
                "\u672C\u57FA\u91D1\u4F1A\u4ECE\u4E0D\u6536\u53D6\u4EFB\u4F55\u8D39\u7528\u3002\u5982\u9047\u53EF\u7591\u60C5\u51B5\uFF0C\u8BF7\u901A\u8FC7\u5B98\u65B9\u57DF\u540D\u6838\u5B9E\u6216\u8054\u7CFB\u6211\u4EEC\u3002",
                "The Foundation never charges fees. If you encounter suspicious activity, verify through our official domain or contact us."
              )}
            </p>
            <div style={{ marginTop: 16 }}>
              <Link className="btn btn-ghost" href={`/${locale}/anti-fraud` as any}>
                {dict.nav.antiFraud}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
