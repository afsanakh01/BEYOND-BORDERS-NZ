import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
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
  description: "Helping international students get into top New Zealand universities. Professional visa assistance and university placement.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}