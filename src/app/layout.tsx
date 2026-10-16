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
  "Dersion, dershanede birebir ders yürüten bir istasyon. Öğrencinin soru sorması ya da bir şey göstermesi gerekmez: dersi Dersion yönetir, takıldığı yeri kendisi fark eder ve oradan anlatır.";

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
  colorScheme: "light",
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
      {/* Light only: data-theme pins tokens.css to its light theme whatever the system setting. */}
      <html lang="tr" data-theme="light" className={lexend.variable}>
        <body>{children}</body>
      </html>
    </>
  );
}
