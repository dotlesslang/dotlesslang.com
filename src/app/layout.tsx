import type { Metadata, Viewport } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/amiri/arabic-400.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Dotless — Arabic, reimagined.", template: "%s | Dotless" },
  description: site.description,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: { title: "Dotless — Arabic, reimagined.", description: site.description, type: "website", locale: "en_US", siteName: "Dotless", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dotless — Fewer keys. More expression." }] },
  twitter: { card: "summary_large_image", title: "Dotless — Arabic, reimagined.", description: site.description, images: ["/opengraph-image"] },
};

export const viewport: Viewport = { themeColor: "#141513", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /></body></html>;
}
