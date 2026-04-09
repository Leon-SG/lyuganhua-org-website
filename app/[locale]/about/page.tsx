import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return { title: dict.about.title };
}

export default async function About({ params }: { params: { locale: string } }) {
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
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')",
        }}
      >
        <div className="page-hero-content">
          <h1>{dict.about.title}</h1>
          <p>{dict.about.body}</p>
        </div>
      </div>

      {/* Mission */}
      <div className="section-lg">
        <h2 style={{ marginTop: 0 }}>
          {t("基金會宗旨", "基金会宗旨", "Foundation Purpose")}
        </h2>
        <div className="grid-2" style={{ marginTop: 16 }}>
          <div>
            <p>
              {t(
                "呂干華基金會成立的初衷，是以獨立、非商業的方式保存和弘揚呂干華醫生在醫學領域的貢獻與精神遺產。基金會不收取任何費用，不接受、也不發放任何款項。",
                "吕干华基金会成立的初衷，是以独立、非商业的方式保存和弘扬吕干华医生在医学领域的贡献与精神遗产。基金会不收取任何费用，不接受、也不发放任何款项。",
                "The Lü Ganhua Foundation was established to independently and non-commercially preserve and promote Dr. Lü Ganhua's contributions and spiritual legacy in medicine. The Foundation charges no fees and neither accepts nor distributes any funds."
              )}
            </p>
            <p>
              {t(
                "我們致力於打造一個可靠的知識檔案庫，收錄其學術成果、臨床經驗與教學心得。同時，基金會亦重視收集同事、學生及患者的回憶與見證，以多元角度完整呈現呂醫生的醫者風範。",
                "我们致力于打造一个可靠的知识档案库，收录其学术成果、临床经验与教学心得。同时，基金会亦重视收集同事、学生及患者的回忆与见证，以多元角度完整呈现吕医生的医者风范。",
                "We are committed to building a trusted knowledge archive housing academic achievements, clinical experience, and teaching insights. We also collect memories and testimonials from colleagues, students, and patients, presenting Dr. Lü's legacy from multiple perspectives."
              )}
            </p>
          </div>
          <div>
            <p>
              {t(
                "基金會遵循美國非營利基金會的運作慣例，確保治理透明、資訊公開。董事會與管理團隊信息均予以披露，相關註冊備案資料亦將在取得後及時公布。",
                "基金会遵循美国非营利基金会的运作惯例，确保治理透明、信息公开。董事会与管理团队信息均予以披露，相关注册备案资料亦将在取得后及时公布。",
                "The Foundation follows U.S. nonprofit governance best practices, ensuring transparent governance and public disclosure. Board and management information is fully disclosed, and registration details will be published as they become available."
              )}
            </p>
            <p>
              {t(
                "我們歡迎各方參與：無論是提交口述歷史、分享珍貴照片，或是為我們的資料庫提供學術資料。所有參與均為自願且完全免費。",
                "我们欢迎各方参与：无论是提交口述历史、分享珍贵照片，或是为我们的资料库提供学术资料。所有参与均为自愿且完全免费。",
                "We welcome participation from all: whether submitting oral histories, sharing treasured photographs, or contributing academic materials. All participation is voluntary and completely free of charge."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="section-alt-bg">
        <div className="section-alt-inner">
          <h2 style={{ textAlign: "center", marginTop: 0, marginBottom: 32 }}>
            {t("核心價值", "核心价值", "Core Values")}
          </h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>{t("獨立透明", "独立透明", "Independence & Transparency")}</h3>
              <p>
                {t(
                  "不隸屬於任何商業機構，治理結構和運營信息向公眾開放。",
                  "不隶属于任何商业机构，治理结构和运营信息向公众开放。",
                  "Independent of any commercial entity, with governance and operations open to public scrutiny."
                )}
              </p>
            </div>
            <div className="value-item">
              <h3>{t("專業嚴謹", "专业严谨", "Professional Rigor")}</h3>
              <p>
                {t(
                  "所有資料均經審核，確保學術準確性與引用規範。",
                  "所有资料均经审核，确保学术准确性与引用规范。",
                  "All materials are reviewed to ensure academic accuracy and proper citation standards."
                )}
              </p>
            </div>
            <div className="value-item">
              <h3>{t("仁心仁術", "仁心仁术", "Compassion in Practice")}</h3>
              <p>
                {t(
                  "秉承呂醫生以患者為中心、以仁心待人的行醫理念。",
                  "秉承吕医生以患者为中心、以仁心待人的行医理念。",
                  "Embodying Dr. Lü's patient-centered philosophy and compassionate approach to medicine."
                )}
              </p>
            </div>
            <div className="value-item">
              <h3>{t("知識共享", "知识共享", "Knowledge Sharing")}</h3>
              <p>
                {t(
                  "建設開放的數位檔案，讓醫學知識與經驗惠及更廣泛的受眾。",
                  "建设开放的数字档案，让医学知识与经验惠及更广泛的受众。",
                  "Building open digital archives to make medical knowledge and experience accessible to a broader audience."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="section-lg">
        <h2 style={{ marginTop: 0 }}>
          {t("常見問題", "常见问题", "Frequently Asked Questions")}
        </h2>
        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <h3>{t("基金會收費嗎？", "基金会收费吗？", "Does the Foundation charge any fees?")}</h3>
            <p className="muted">{dict.banner.noFees}</p>
          </div>
          <div className="card">
            <h3>{t("官方網站是什麼？", "官方网站是什么？", "What is the official website?")}</h3>
            <p className="muted">{dict.banner.domain}</p>
          </div>
          <div className="card">
            <h3>{t("如何參與？", "如何参与？", "How can I participate?")}</h3>
            <p className="muted">
              {t(
                "\u60A8\u53EF\u4EE5\u6295\u7A3F\u56DE\u61B6\u3001\u53C3\u8207\u53E3\u8FF0\u6B77\u53F2\u8A08\u756B\uFF0C\u6216\u5411\u8CC7\u6599\u5EAB\u63D0\u4F9B\u5B78\u8853\u8CC7\u6599\u3002\u8A73\u898B\u300C\u53C3\u8207\u300D\u9801\u9762\u3002",
                "\u60A8\u53EF\u4EE5\u6295\u7A3F\u56DE\u5FC6\u3001\u53C2\u4E0E\u53E3\u8FF0\u5386\u53F2\u8BA1\u5212\uFF0C\u6216\u5411\u8D44\u6599\u5E93\u63D0\u4F9B\u5B66\u672F\u8D44\u6599\u3002\u8BE6\u89C1\u201C\u53C2\u4E0E\u201D\u9875\u9762\u3002",
                "You can submit memories, join the oral history project, or contribute academic materials. See the Participate page for details."
              )}
            </p>
          </div>
          <div className="card">
            <h3>{t("基金會是否提供資助？", "基金会是否提供资助？", "Does the Foundation provide funding?")}</h3>
            <p className="muted">
              {t(
                "基金會目前不提供任何形式的資助或補助。如遇以本基金會名義索取款項者，請提高警覺。",
                "基金会目前不提供任何形式的资助或补助。如遇以本基金会名义索取款项者，请提高警觉。",
                "The Foundation currently does not provide funding or grants of any kind. Be vigilant against anyone claiming otherwise on our behalf."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
