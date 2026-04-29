"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL = 300;

const overlays = [
  {
    eyebrow: "NEW ZEALAND'S PREMIER EDUCATION CONSULTANCY",
    headline: "BEYOND\nBORDERS",
    sub: "",
    btn: false,
    position: "center",
    size: "massive",
  },
  {
    eyebrow: "",
    headline: "We have\nscholarship\nplans.",
    sub: "",
    btn: false,
    position: "left",
    size: "large",
  },
  {
    eyebrow: "",
    headline: "YOU\nDESERVE\nIT",
    sub: "",
    btn: false,
    position: "center",
    size: "massive",
  },
  {
    eyebrow: "500+ STUDENTS PLACED · 98% VISA SUCCESS",
    headline: "Your Future\nStarts Here",
    sub: "Expert counselling. Proven results.",
    btn: true,
    position: "bottom-left",
    size: "large",
  },
];


export default function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgsRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 1; i <= TOTAL; i++) {
      const img = new window.Image();
      img.src = `/sequence-1/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      img.onload = img.onerror = () => {
        count++;
        setLoaded(count);
      };
      imgsRef.current[i] = img;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = (img: HTMLImageElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx || !img.naturalWidth) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const r = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const cx = (canvas.width - img.naturalWidth * r) / 2;
      const cy = (canvas.height - img.naturalHeight * r) / 2;
      ctx.filter = "contrast(1.06) saturate(1.12) brightness(0.88)";
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, cx, cy, img.naturalWidth * r, img.naturalHeight * r);
      ctx.filter = "none";
    };

    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const progress = Math.min(Math.max(window.scrollY / (hero.offsetHeight - window.innerHeight), 0), 1);
      const frame = Math.min(Math.max(Math.ceil(progress * TOTAL), 1), TOTAL);
      const img = imgsRef.current[frame];
      if (img?.complete && img.naturalWidth) draw(img);
      setActive(frame <= 75 ? 0 : frame <= 150 ? 1 : frame <= 225 ? 2 : 3);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pct = Math.round((loaded / TOTAL) * 100);

  return (
    <>
      {loaded < TOTAL && (
        <div style={{
          position: "fixed", inset: 0, background: "#0D1B2A",
          zIndex: 1000, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          opacity: loaded >= TOTAL ? 0 : 1,
          transition: "opacity 0.8s",
          pointerEvents: loaded >= TOTAL ? "none" : "all",
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "2rem", fontWeight: 300,
            letterSpacing: "0.2em", color: "#FAFAF8", marginBottom: "2rem",
          }}>
            Beyond <span style={{ color: "#C8A96E", fontStyle: "italic" }}>Borders</span> NZ
          </div>
          <div style={{ width: 220, height: 1, background: "rgba(200,169,110,0.2)" }}>
            <div style={{ height: 1, background: "#C8A96E", width: `${pct}%`, transition: "width 0.1s" }} />
          </div>
          <div style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.7rem", color: "#C8A96E",
            marginTop: "0.8rem", letterSpacing: "0.2em",
          }}>{pct}%</div>
        </div>
      )}

      <div id="hero" style={{ position: "relative", height: "1200vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg,#0a1520 0%,#1A3A5C 45%,#0a1a10 100%)",
          }} />
          <canvas ref={canvasRef} style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom,rgba(13,27,42,0.2) 0%,transparent 35%,rgba(13,27,42,0.8) 100%)",
            pointerEvents: "none",
          }} />

          {overlays.map((o, i) => (
  <div key={i} style={{
    position: "absolute", inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: o.position === "center" ? "center" : o.position === "left" || o.position === "bottom-left" ? "flex-start" : "center",
    justifyContent: o.position === "bottom-left" ? "flex-end" : "center",
    textAlign: o.position === "center" ? "center" : "left",
    padding: o.position === "bottom-left" || o.position === "left" ? "4rem 5rem" : "2rem",
    paddingBottom: o.position === "bottom-left" ? "6rem" : undefined,
    opacity: active === i ? 1 : 0,
    transition: "opacity 0.9s ease",
    pointerEvents: active === i ? "all" : "none",
  }}>
    {o.eyebrow && (
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.65rem", letterSpacing: "0.35em",
        textTransform: "uppercase", color: "rgba(250,250,248,0.7)",
        marginBottom: "1.5rem",
      }}>{o.eyebrow}</p>
    )}

    <h1 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: o.size === "massive" ? "clamp(5rem,12vw,13rem)" : "clamp(3rem,7vw,8rem)",
      fontWeight: 900,
      lineHeight: 0.95,
      color: "#FAFAF8",
      whiteSpace: "pre-line",
      letterSpacing: o.size === "massive" ? "-0.02em" : "0",
    }}>{o.headline}</h1>

    {o.sub && (
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem", fontWeight: 300,
        color: "rgba(250,250,248,0.7)",
        marginTop: "1.5rem", maxWidth: 400,
        lineHeight: 1.7,
      }}>{o.sub}</p>
    )}

    {overlays.map((o, i) => (
  <div key={i} style={{
    position: "absolute", inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: o.position === "center" ? "center" : o.position === "left" || o.position === "bottom-left" ? "flex-start" : "center",
    justifyContent: o.position === "bottom-left" ? "flex-end" : "center",
    textAlign: o.position === "center" ? "center" : "left",
    padding: o.position === "bottom-left" || o.position === "left" ? "4rem 5rem" : "2rem",
    paddingBottom: o.position === "bottom-left" ? "6rem" : undefined,
    opacity: active === i ? 1 : 0,
    transition: "opacity 0.9s ease",
    pointerEvents: active === i ? "all" : "none",
  }}>
    {o.eyebrow && (
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.65rem", letterSpacing: "0.35em",
        textTransform: "uppercase", color: "rgba(250,250,248,0.7)",
        marginBottom: "1.5rem",
      }}>{o.eyebrow}</p>
    )}

    <h1 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: o.size === "massive" ? "clamp(5rem,12vw,13rem)" : "clamp(3rem,7vw,8rem)",
      fontWeight: 900,
      lineHeight: 0.95,
      color: "#FAFAF8",
      whiteSpace: "pre-line",
      letterSpacing: o.size === "massive" ? "-0.02em" : "0",
    }}>{o.headline}</h1>

    {o.sub && (
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem", fontWeight: 300,
        color: "rgba(250,250,248,0.7)",
        marginTop: "1.5rem", maxWidth: 400,
        lineHeight: 1.7,
      }}>{o.sub}</p>
    )}

    {o.btn && (
      <a href="#contact" style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.72rem", letterSpacing: "0.2em",
        textTransform: "uppercase", color: "#0c0c0c",
        background: "#FAFAF8",
        padding: "1rem 2.5rem",
        borderRadius: "2rem",
        textDecoration: "none",
        marginTop: "2rem",
        display: "inline-block",
      }}>Contact Us</a>
    )}
  </div>
))}
  </div>
))}
            }}>
              <p style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.62rem", letterSpacing: "0.4em",
                textTransform: "uppercase", color: "#C8A96E",
                marginBottom: "1.5rem",
              }}>{o.eyebrow}</p>

              <h1 style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(3rem,6.5vw,6.5rem)",
                fontWeight: 300, lineHeight: 1.05, color: "#FAFAF8",
              }}>
                {o.headline}<br />
                <em style={{ color: "#C8A96E" }}>{o.italic}</em>
              </h1>

              <p style={{
                fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
                fontWeight: 300, color: "rgba(250,250,248,0.65)",
                maxWidth: 480, margin: "1.5rem auto 2.5rem", lineHeight: 1.75,
              }}>{o.sub}</p>

              {o.btn && (
                <a href="#contact" style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "0.72rem", letterSpacing: "0.25em",
                  textTransform: "uppercase", color: "#0D1B2A",
                  background: "#C8A96E", padding: "1rem 2.8rem",
                  textDecoration: "none", border: "1px solid #C8A96E",
                  display: "inline-block",
                }}>Start Your Journey →</a>
              )}
            </div>
          ))}

          <div style={{
            position: "absolute", bottom: "2.5rem", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "0.5rem", zIndex: 10,
          }}>
            <span style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.58rem", letterSpacing: "0.3em",
              textTransform: "uppercase", color: "rgba(250,250,248,0.5)",
            }}>Scroll</span>
            <div style={{
              width: 1, height: 45,
              background: "linear-gradient(to bottom,#C8A96E,transparent)",
              animation: "scrollAnim 2s ease-in-out infinite",
            }} />
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