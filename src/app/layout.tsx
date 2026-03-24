import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import PopupLeadForm from "@/components/PopupLeadForm";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-nunito",
  display: "swap",
});

// Inter is the closest open-source equivalent to SF Pro — identical aesthetic on Windows/Android
const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hari Insurance — Smart Insurance Comparison for Modern India",
  description:
    "Compare health, life, motor, and more insurance plans instantly. Trusted by thousands. 100% digital, zero paperwork. Get your personalized quote from Hari Insurance today.",
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
  authors: [{ name: "Hari Insurance" }],
  creator: "Hari Insurance",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hariinsure.com",
    title: "Hari Insurance — Smart Insurance Comparison",
    description: "Compare & buy insurance plans tailored for your lifestyle.",
    siteName: "Hari Insurance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Insurance — Smart Insurance Comparison",
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
      </head>
      <body className={`antialiased ${nunito.variable} ${inter.variable}`}>
        {children}
        <PopupLeadForm />
      </body>
    </html>
  );
}
