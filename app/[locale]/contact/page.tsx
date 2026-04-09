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
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.contact.title}</h1>
          <p>{dict.contact.body}</p>
        </div>
      </div>

      <div className="section-lg">
        <div className="grid-2">
          <div className="card">
            <h3>{t("一般查詢", "一般查询", "General Inquiries")}</h3>
            <p className="muted">
              {t(
                "如有一般性問題，請通過以下電郵地址與我們聯繫。我們會在合理時間內回覆。",
                "如有一般性问题，请通过以下电邮地址与我们联系。我们会在合理时间内回复。",
                "For general questions, please reach out via the email address below. We will respond within a reasonable timeframe."
              )}
            </p>
            <p style={{ fontWeight: 600, marginTop: 12 }}>{dict.contact.email}</p>
            <p className="muted" style={{ marginTop: 4 }}>{dict.banner.domain}</p>
          </div>
          <div className="card">
            <h3>{t("媒體與新聞", "媒体与新闻", "Media & Press")}</h3>
            <p className="muted">
              {t(
                "媒體垂詢請發送至專用郵箱（即將開通）。我們的媒體素材包可供下載。",
                "媒体垂询请发送至专用邮箱（即将开通）。我们的媒体素材包可供下载。",
                "For press inquiries, please use the dedicated press email (coming soon). Our press kit is available for download."
              )}
            </p>
            <Link className="cta" href={`/${locale}/press-kit` as any} style={{ marginTop: 12 }}>
              {t("查看媒體素材", "查看媒体素材", "View Press Kit")}
            </Link>
          </div>
          <div className="card">
            <h3>{t("投稿與口述歷史", "投稿与口述历史", "Submissions & Oral History")}</h3>
            <p className="muted">
              {t(
                "\u6B61\u8FCE\u6295\u7A3F\u56DE\u61B6\u3001\u7167\u7247\u6216\u53C3\u8207\u53E3\u8FF0\u6B77\u53F2\u8A08\u756B\u3002\u8ACB\u900F\u904E\u4E00\u822C\u67E5\u8A62\u90F5\u7BB1\u806F\u7E6B\uFF0C\u6216\u8A2A\u554F\u300C\u53C3\u8207\u300D\u9801\u9762\u4E86\u89E3\u8A73\u60C5\u3002",
                "\u6B22\u8FCE\u6295\u7A3F\u56DE\u5FC6\u3001\u7167\u7247\u6216\u53C2\u4E0E\u53E3\u8FF0\u5386\u53F2\u8BA1\u5212\u3002\u8BF7\u901A\u8FC7\u4E00\u822C\u67E5\u8BE2\u90AE\u7BB1\u8054\u7CFB\uFF0C\u6216\u8BBF\u95EE\u201C\u53C2\u4E0E\u201D\u9875\u9762\u4E86\u89E3\u8BE6\u60C5\u3002",
                "We welcome memory submissions, photos, or oral history participation. Please contact us via the general inquiry email, or visit the Participate page for details."
              )}
            </p>
            <Link className="cta" href={`/${locale}/participate` as any} style={{ marginTop: 12 }}>
              {dict.nav.participate}
            </Link>
          </div>
          <div className="card">
            <h3>{t("反詐提醒", "反诈提醒", "Anti-Fraud Notice")}</h3>
            <p className="muted">
              {t(
                "本基金會從不收取任何費用。如遇可疑情況，請通過官方域名核實或聯繫我們。",
                "本基金会从不收取任何费用。如遇可疑情况，请通过官方域名核实或联系我们。",
                "The Foundation never charges fees. If you encounter suspicious activity, verify through our official domain or contact us."
              )}
            </p>
            <Link className="cta" href={`/${locale}/anti-fraud` as any} style={{ marginTop: 12, background: "transparent", color: "var(--brand)", border: "2px solid var(--brand)" }}>
              {dict.nav.antiFraud}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
