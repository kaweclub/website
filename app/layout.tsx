import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { site } from "@/config/site";
import { themeColor } from "@/lib/brand";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const title = `${site.name} · ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    site: site.xHandle,
  },
};

export const viewport: Viewport = {
  themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
        {/* Cookieless page-view stats. Turn on under Project → Analytics in Vercel. */}
        <Analytics />
        {/* Real-visitor loading speed (Core Web Vitals). Turn on under Project → Speed Insights in Vercel. */}
        <SpeedInsights />
      </body>
    </html>
  );
}
