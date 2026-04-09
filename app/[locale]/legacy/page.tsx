import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.legacy.title };
}

export default async function Legacy({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  const t = (zhh: string, zhs: string, en: string) => (locale === "zh-hant" ? zhh : locale === "zh-hans" ? zhs : en);

  return (
    <div>
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.legacy.title}</h1>
          <p>{dict.legacy.intro}</p>
        </div>
      </div>

      {/* Memorial Quote */}
      <div className="section-lg">
        <blockquote style={{ maxWidth: 800, margin: "0 auto" }}>
          <p>
            {t(
              "\u300C\u91AB\u8005\u4E4B\u9053\uFF0C\u5728\u65BC\u4EE5\u4EC1\u5FC3\u5F85\u4EBA\uFF0C\u4EE5\u5C08\u696D\u6FDF\u4E16\u3002\u4E0D\u6C42\u805E\u9054\uFF0C\u4F46\u6C42\u7121\u6127\u65BC\u5FC3\u3002\u300D",
              "\u201C\u533B\u8005\u4E4B\u9053\uFF0C\u5728\u4E8E\u4EE5\u4EC1\u5FC3\u5F85\u4EBA\uFF0C\u4EE5\u4E13\u4E1A\u6D4E\u4E16\u3002\u4E0D\u6C42\u95FB\u8FBE\uFF0C\u4F46\u6C42\u65E0\u6127\u4E8E\u5FC3\u3002\u201D",
              "The way of medicine lies in treating others with compassion and serving the world with expertise. Seek not fame, but only peace of conscience."
            )}
          </p>
        </blockquote>
      </div>

      {/* Tributes */}
      <div className="section">
        <h2 style={{ marginTop: 0, marginBottom: 24 }}>
          {t("追思與致敬", "追思与致敬", "Tributes & Remembrance")}
        </h2>
        <div className="grid-2">
          <article className="card">
            <h3>{t("同事追憶", "同事追忆", "A Colleague's Remembrance")}</h3>
            <p className="muted">
              {t(
                "呂醫生是我共事多年的搭檔，他的耐心、細心和對病人的關懷令所有人動容。每一次會診，他都如同對待家人般傾心投入。（占位文字）",
                "吕医生是我共事多年的搭档，他的耐心、细心和对病人的关怀令所有人动容。每一次会诊，他都如同对待家人般倾心投入。（占位文字）",
                "Dr. Lü was my partner for many years. His patience, attentiveness, and care for patients moved everyone. Every consultation, he was wholly devoted — as if treating family. (Placeholder text)"
              )}
            </p>
          </article>
          <article className="card">
            <h3>{t("學生感言", "学生感言", "A Student's Testimony")}</h3>
            <p className="muted">
              {t(
                "呂老師不僅教給我們醫學知識，更以身作則教會我們如何做一個有溫度的醫者。他的教誨將伴隨我的整個職業生涯。（占位文字）",
                "吕老师不仅教给我们医学知识，更以身作则教会我们如何做一个有温度的医者。他的教诲将伴随我的整个职业生涯。（占位文字）",
                "Dr. Lü taught us not just medical knowledge, but showed by example how to be a warm and caring physician. His teachings will accompany my entire career. (Placeholder text)"
              )}
            </p>
          </article>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="section-alt-bg">
        <div className="section-alt-inner">
          <h2 style={{ marginTop: 0, textAlign: "center", marginBottom: 32 }}>
            {t("影像紀事", "影像纪事", "Photo Gallery")}
          </h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            <div className="media-placeholder">
              {t("臨床教學", "临床教学", "Clinical teaching")}
            </div>
            <div className="media-placeholder">
              {t("學術會議", "学术会议", "Academic conference")}
            </div>
            <div className="media-placeholder">
              {t("社區服務", "社区服务", "Community service")}
            </div>
            <div className="media-placeholder">
              {t("師生合影", "师生合影", "Faculty & students")}
            </div>
          </div>
          <p className="muted" style={{ textAlign: "center", marginTop: 16 }}>
            {t(
              "更多照片將持續更新。歡迎投稿珍貴影像。",
              "更多照片将持续更新。欢迎投稿珍贵影像。",
              "More photos will be added over time. We welcome your photo contributions."
            )}
          </p>
        </div>
      </div>

      {/* Values & Principles */}
      <div className="section-lg">
        <div className="grid-2">
          <article className="card">
            <h3>{t("價值與原則", "价值与原则", "Values & Principles")}</h3>
            <ul className="list-plain" style={{ display: "grid", gap: 10 }}>
              <li>
                {t(
                  "• 專業與仁心並重——以嚴謹的學術態度和人文關懷服務每一位患者",
                  "• 专业与仁心并重——以严谨的学术态度和人文关怀服务每一位患者",
                  "• Professional excellence and compassion — serving every patient with academic rigor and human warmth"
                )}
              </li>
              <li>
                {t(
                  "• 尊重隱私與尊嚴——保護每一位相關人士的個人權利",
                  "• 尊重隐私与尊严——保护每一位相关人士的个人权利",
                  "• Respect for privacy and dignity — protecting the personal rights of all involved"
                )}
              </li>
              <li>
                {t(
                  "• 知識傳承與普惠——讓醫學智慧惠及更廣泛的人群",
                  "• 知识传承与普惠——让医学智慧惠及更广泛的人群",
                  "• Knowledge sharing and inclusiveness — bringing medical wisdom to a broader audience"
                )}
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>{t("追思摘錄", "追思摘录", "Memorial Excerpts")}</h3>
            <ul className="list-plain" style={{ display: "grid", gap: 10 }}>
              <li style={{ fontStyle: "italic" }}>
                &ldquo;{t(
                  "懷念與感謝，言簡意誠。他留給世間的不僅是醫術，更是一種精神。",
                  "怀念与感谢，言简意诚。他留给世间的不仅是医术，更是一种精神。",
                  "In remembrance and gratitude. He left the world not only medical skill, but a spirit."
                )}&rdquo;
              </li>
              <li style={{ fontStyle: "italic" }}>
                &ldquo;{t(
                  "他的教誨長存心間，指引著每一個曾受他啟發的人前行。",
                  "他的教诲长存心间，指引着每一个曾受他启发的人前行。",
                  "His guidance stays with us, leading every person he inspired forward."
                )}&rdquo;
              </li>
            </ul>
          </article>
        </div>
      </div>

      {/* Contribute CTA */}
      <div
        className="cta-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
        }}
      >
        <div className="cta-banner-content">
          <h2>{t("參與紀念", "参与纪念", "Contribute a Memory")}</h2>
          <p>
            {t(
              "歡迎投稿回憶、照片或音視頻。全程不收取任何費用。",
              "欢迎投稿回忆、照片或音视频。全程不收取任何费用。",
              "Share memories, photos, or audio/video. No fees of any kind."
            )}
          </p>
          <Link className="cta-outline" href={`/${locale}/participate` as any}>
            {t("提交回憶", "提交回忆", "Submit a Memory")}
          </Link>
        </div>
      </div>
    </div>
  );
}
