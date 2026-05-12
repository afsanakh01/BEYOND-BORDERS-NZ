"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Completely stop Lenis while inside the hero — no interference at all
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY < heroBottom) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    // Run immediately on mount to stop Lenis if page loads at top
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <>{children}</>;
}