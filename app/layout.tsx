import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ADSENSE_ID = "ca-pub-8254204287118850";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://printablecalendars.io"),
  title: {
    default: "Free Printable Calendar — Download PDF by Country",
    template: "%s | PrintableCalendars",
  },
  description:
    "Download free printable monthly calendars with public holidays for USA, Japan, South Korea and more. A4 PDF, clean minimal design.",
  keywords: [
    "printable calendar",
    "PDF calendar download",
    "monthly calendar",
    "public holidays",
    "free printable calendar 2026",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PrintableCalendars",
    title: "Free Printable Calendar — Download PDF by Country",
    description:
      "Download free printable monthly calendars with public holidays.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PrintableCalendars" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Calendar — Download PDF by Country",
    description: "Download free printable monthly calendars with public holidays.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }} className="antialiased">
        <ThemeProvider>
          <Header />
          <main style={{ minHeight: "calc(100vh - 120px)" }}>{children}</main>
          <Footer />
        </ThemeProvider>
        {/* Google AdSense — auto-ads */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
