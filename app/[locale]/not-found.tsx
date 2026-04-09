import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function NotFound({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = await getDictionary(locale);
  return (
    <div className="container" style={{ textAlign: "center", padding: "120px 24px" }}>
      <h1 style={{ fontSize: "4rem", color: "var(--brand)", margin: "0 0 16px" }}>404</h1>
      <h2 style={{ margin: "0 0 12px" }}>{dict.notFound?.title || "Page not found"}</h2>
      <p className="text-secondary" style={{ marginBottom: 32 }}>{dict.notFound?.body || "The requested page could not be found."}</p>
      <Link href={`/${locale}`} className="btn btn-primary">{dict.notFound?.back || "Back to home"}</Link>
    </div>
  );
}
