import type { Metadata } from "next";
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

  return (
    <div className="section">
      <h1>{dict.antiFraud.title}</h1>
      <p className="muted">{dict.antiFraud.body}</p>
      <div className="card" style={{ marginTop: 16 }}>
        <p>{dict.antiFraud.contact}</p>
        <ul>
          <li>• Never send money to anyone claiming to represent us.</li>
          <li>• We do not offer funding, grants, or reimbursements.</li>
          <li>• Verify domain: lyuganhua.org</li>
        </ul>
      </div>
    </div>
  );
}
