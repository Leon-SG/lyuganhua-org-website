import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyuganhua.org"),
  title: {
    default: "Lü Ganhua Foundation",
    template: "%s · Lü Ganhua Foundation",
  },
  description:
    "An independent memorial and knowledge site honoring Dr. Lü Ganhua. No fees. No payments. No funding.",
  openGraph: {
    type: "website",
    title: "Lü Ganhua Foundation",
    description:
      "An independent memorial and knowledge site honoring Dr. Lü Ganhua.",
    url: "https://lyuganhua.org",
    siteName: "Lü Ganhua Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lü Ganhua Foundation",
    description:
      "An independent memorial and knowledge site honoring Dr. Lü Ganhua.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

