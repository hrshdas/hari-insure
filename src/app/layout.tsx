import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hari Insure — Smart Insurance Comparison for Modern India",
  description:
    "Compare health, life, motor, and more insurance plans instantly. Trusted by thousands. 100% digital, zero paperwork. Get your personalized quote from Hari Insure today.",
  keywords: [
    "insurance",
    "health insurance",
    "life insurance",
    "car insurance",
    "bike insurance",
    "term plan",
    "insurance comparison",
    "India insurance",
  ],
  authors: [{ name: "Hari Insure" }],
  creator: "Hari Insure",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hariinsure.com",
    title: "Hari Insure — Smart Insurance Comparison",
    description: "Compare & buy insurance plans tailored for your lifestyle.",
    siteName: "Hari Insure",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Insure — Smart Insurance Comparison",
    description: "Compare & buy insurance plans tailored for your lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
