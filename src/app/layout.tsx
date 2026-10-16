import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "@/brand/tokens.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Self-hosted at build time by next/font: no requests to Google at runtime.
const lexend = Lexend({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lexend",
  // Not preloaded: the inlined @font-face rules find them early, and the hero dot (LCP) gets the bandwidth first.
  preload: false,
});

function siteUrl() {
  if (process.env.VERCEL_ENV === "production") return "https://dersion.app";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

const title = "Dersion · Takıldığın noktadan başlar.";
const description =
  "Dersion, dershanelerde duran bir çalışma istasyonu: öğrencinin kâğıttaki çözümüne bakar, takıldığı adımı bulur ve sadece o adımı anlatır.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  // Out of search engines until launch.
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/png/dersion-icon-dark-180.png",
  },
  openGraph: {
    title,
    description,
    siteName: "Dersion",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Takıldığın noktadan başlar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <html lang="tr" className={lexend.variable}>
        <body>{children}</body>
      </html>
    </>
  );
}
