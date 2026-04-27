"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600", "700"], 
  variable: "--font-cormorant" 
});
const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ 
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <title>Beyond Borders NZ | New Zealand's Premier Education Consultancy</title>
        <meta name="description" content="Helping international students get into top New Zealand universities. Professional visa assistance and university placement." />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
