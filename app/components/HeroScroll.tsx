"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL = 300;

const overlays = [
  { eyebrow: "NEW ZEALAND'S PREMIER EDUCATION CONSULTANCY", headline: "Your Future\nBeyond\nBorders", sub: "", btn: false },
  { eyebrow: "", headline: "100+ Students\nPlaced\nWorldwide.", sub: "", btn: false },
  { eyebrow: "", headline: "You Deserve\nWorld-Class\nEducation", sub: "", btn: false },
  { eyebrow: "100+ STUDENTS PLACED · 98% VISA SUCCESS", headline: "Your Future\nStarts Here", sub: "Expert counselling. Proven results.", btn: true },
];

export default function HeroScroll() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imgsRef      = useRef<HTMLImageElement[]>([]);
  const loadedRef    = useRef(0);
  const [pct, setPct]       = useState(0);
  const [ready, setReady]   = useState(false);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Canvas size + native scroll handler
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size canvas once — never inside draw
    const setSize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const draw = (img: HTMLImageElement) => {
      if (!img?.complete || !img.naturalWidth) return;
      const cw = canvas.width, ch = canvas.height;
      const r  = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const cx = (cw - img.naturalWidth  * r) / 2;
      const cy = (ch - img.naturalHeight * r) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, cx, cy, img.naturalWidth * r, img.naturalHeight * r);
    };

    // RAF throttle — max once per screen refresh
    let rafId = 0;
    let nextFrame = 1;

    const flush = () => {
      rafId = 0;
      draw(imgsRef.current[nextFrame]);
    };

    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const scrollable = hero.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress  = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      nextFrame = Math.min(Math.max(Math.round(progress * (TOTAL - 1)) + 1, 1), TOTAL);
      setActive(nextFrame <= 75 ? 0 : nextFrame <= 150 ? 1 : nextFrame <= 225 ? 2 : 3);
      if (!rafId) rafId = requestAnimationFrame(flush);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setSize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Image loading — frame 1 first for instant first paint
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas?.getContext("2d");

    const onLoad = (i: number) => {
      loadedRef.current += 1;
      setPct(Math.round((loadedRef.current / TOTAL) * 100));

      // Paint frame 1 instantly the moment it loads
      if (i === 1 && canvas && ctx) {
        const img = imgsRef.current[1];
        if (img?.complete && img.naturalWidth) {
          const cw = canvas.width, ch = canvas.height;
          const r  = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
          ctx.drawImage(img,
            (cw - img.naturalWidth * r) / 2,
            (ch - img.naturalHeight * r) / 2,
            img.naturalWidth * r,
            img.naturalHeight * r
          );
          setReady(true);
        }
      }
    };

    const loadImg = (i: number) => {
      const img = new window.Image();
      img.src = `/sequence-1/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      img.onload = () => onLoad(i);
      img.onerror = () => onLoad(i);
      imgsRef.current[i] = img;
    };

    loadImg(1);
    for (let i = 2; i <= 50; i++) loadImg(i);
    const t = setTimeout(() => {
      for (let i = 51; i <= TOTAL; i++) loadImg(i);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  const heroHeight = isMobile ? "600vh" : "1200vh";
  const overlayPad = isMobile ? "0 1.5rem 3rem" : "0 5rem 5rem";

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {pct < 100 && (
        <div style={{
          position: "fixed", inset: 0, background: "#0c0c0c", zIndex: 1000,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: ready ? 0 : 1,
          transition: ready ? "opacity 0.8s ease" : "none",
          pointerEvents: ready ? "none" : "all",
        }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem,4vw,2rem)", fontWeight: 700, letterSpacing: "0.2em", color: "#FAFAF8", textTransform: "uppercase", marginBottom: "2rem", textAlign: "center", padding: "0 1rem" }}>
            Beyond Borders NZ
          </div>
          <div style={{ width: 220, height: 1, background: "rgba(200,169,110,0.2)" }}>
            <div style={{ height: 1, background: "#C8A96E", width: `${pct}%`, transition: "width 0.1s" }} />
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#C8A96E", marginTop: "0.8rem", letterSpacing: "0.2em" }}>{pct}%</div>
        </div>
      )}

      <div id="hero" style={{ position: "relative", height: heroHeight }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "#0c0c0c" }} />
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(12,12,12,0.15) 0%,transparent 30%,rgba(12,12,12,0.75) 100%)", pointerEvents: "none" }} />

          {overlays.map((o, i) => (
            <div key={i} style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "flex-start", justifyContent: "flex-end",
              padding: overlayPad,
              opacity: active === i ? 1 : 0,
              transition: "opacity 1s ease",
              pointerEvents: active === i ? "all" : "none",
            }}>
              {o.eyebrow && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.45rem,1.5vw,0.62rem)", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(250,250,248,0.65)", marginBottom: "1rem" }}>{o.eyebrow}</p>
              )}
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,7vw,6rem)", fontWeight: 400, lineHeight: 1.05, color: "#FAFAF8", whiteSpace: "pre-line", letterSpacing: "0.01em" }}>{o.headline}</h1>
              {o.sub && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.8rem,2vw,0.95rem)", fontWeight: 300, color: "rgba(250,250,248,0.7)", marginTop: "1.2rem", maxWidth: 380, lineHeight: 1.7 }}>{o.sub}</p>
              )}
              {o.btn && (
                <a href="#contact" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.65rem,1.5vw,0.72rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#0c0c0c", background: "#C8A96E", padding: "0.9rem 2.2rem", textDecoration: "none", marginTop: "1.5rem", display: "inline-block", border: "1px solid #C8A96E" }}>Contact Us</a>
              )}
            </div>
          ))}

          <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 10 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(250,250,248,0.4)" }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom,#C8A96E,transparent)", animation: "scrollAnim 2s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollAnim {
          0%,100%{opacity:1;transform:scaleY(1)}
          50%{opacity:0.3;transform:scaleY(0.5)}
        }
      `}</style>
    </>
  );
}