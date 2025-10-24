/* Injects JSON-LD for Organization and Person */
type Props = {
  siteUrl: string;
};

export default function StructuredData({ siteUrl }: Props) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lü Ganhua Foundation",
    url: siteUrl,
    sameAs: [siteUrl],
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lü Ganhua",
    url: siteUrl,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    </>
  );
}

