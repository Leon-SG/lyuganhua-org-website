import type { Metadata } from "next";
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

  return (
    <div className="section">
      <h1>{dict.contact.title}</h1>
      <p className="muted">{dict.contact.body}</p>
      <div className="card" style={{ marginTop: 16 }}>
        <strong>{dict.contact.email}</strong>
        <p className="muted" style={{ marginTop: 8 }}>{dict.banner.domain}</p>
      </div>
    </div>
  );
}
