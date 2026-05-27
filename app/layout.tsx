import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Beyond Borders NZ | New Zealand's Premier Education Consultancy",
  description: "Beyond Borders NZ is New Zealand's premier education consultancy helping international students gain admission to top NZ universities with 98% visa success rate. Expert counselling, university placement, and student visa assistance.",
  metadataBase: new URL("https://www.beyondbordersnz.com"),
  openGraph: {
    title: "Beyond Borders NZ | New Zealand's Premier Education Consultancy",
    description: "Helping international students get into top New Zealand universities.",
    url: "https://www.beyondbordersnz.com",
    siteName: "Beyond Borders NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beyond Borders NZ" }],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/og-image.png",
  },
  keywords: ["New Zealand education consultancy", "NZ university placement", "student visa New Zealand", "study in New Zealand", "international students NZ"],
  alternates: {
    canonical: "https://www.beyondbordersnz.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-01CKGNBWYN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-01CKGNBWYN');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}