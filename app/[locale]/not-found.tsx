import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function NotFound({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return (
    <div className="section">
      <h1>{dict.notFound?.title || "Page not found"}</h1>
      <p className="muted">{dict.notFound?.body || "The requested page could not be found."}</p>
      <p>
        <Link href={`/${locale}`} className="cta">{dict.notFound?.back || "Back to home"}</Link>
      </p>
    </div>
  );
}

