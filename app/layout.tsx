import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { ThemeProvider } from "@/components/theme-context";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Yoga Day SHF | Scotland's International Yoga Day 2026",
  description:
    "Join Scotland's celebration of International Yoga Day on June 20 — community, workplace wellness, and national events from Glasgow to the Highlands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
      data-theme="traditional"
      suppressHydrationWarning
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden">
        <ThemeProvider>
          <AnalyticsProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
