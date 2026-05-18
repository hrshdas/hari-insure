import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hariinsure.com",
    title: "Hari Insurance — Smart Insurance Comparison",
    description: "Compare & buy insurance plans tailored for your lifestyle.",
    siteName: "Hari Insurance",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Insurance — Smart Insurance Comparison",
    description: "Compare & buy insurance plans tailored for your lifestyle.",
    images: ["/logo.png"],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`antialiased ${nunito.variable} ${inter.variable}`}>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3262006920637771');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3262006920637771&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
        <PopupLeadForm />
      </body>
    </html>
  );
}
