"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 100, suffix: "+", label: "Students Placed" },
  { target: 98, suffix: "%", label: "Visa Success Rate" },
  { target: 40, suffix: "+", label: "Partner Universities" },
  { target: 12, suffix: "+", label: "Countries Served" },
];

export default function StatsBar() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        stats.forEach((s, i) => {
          let v = 0;
          const step = s.target / 50;
          const t = setInterval(() => {
            v += step;
            if (v >= s.target) { v = s.target; clearInterval(t); }
            setCounts(c => { const n = [...c]; n[i] = Math.floor(v); return n; });
          }, 28);
        });
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: "#C8A96E", padding: "2rem 4rem",
      display: "flex", justifyContent: "center",
      gap: "6rem", flexWrap: "wrap",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.8rem", fontWeight: 600,
            color: "#0c0c0c", lineHeight: 1,
          }}>{counts[i]}{s.suffix}</div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.58rem", letterSpacing: "0.25em",
            textTransform: "uppercase", color: "rgba(13,27,42,0.65)",
            marginTop: "0.3rem",
          }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}