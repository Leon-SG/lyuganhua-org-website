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

  return (
    <div className="section">
      <h1>{dict.about.title}</h1>
      <p className="muted">{dict.about.body}</p>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>FAQ</h3>
        <ul>
          <li>• {dict.banner.noFees}</li>
          <li>• {dict.banner.domain}</li>
        </ul>
      </div>
    </div>
  );
}
