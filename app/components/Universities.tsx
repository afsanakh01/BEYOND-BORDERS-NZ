"use client";
const unis = [
  {
    tag: "Nicosia, Cyprus 🇨🇾",
    name: "American College Cyprus",
    tagline: "Mediterranean Excellence",
    desc: "A globally recognised American-curriculum college in the heart of Cyprus. Business, IT, Law and Hospitality programs.",
    bg: "linear-gradient(160deg,#1a3520,#0a1a10)",
    icon: "🏛",
  },
  {
    tag: "Dunedin, New Zealand 🇳🇿",
    name: "University of Otago",
    tagline: "New Zealand's Finest",
    desc: "New Zealand's first university, ranked among the world's best. Medicine, Law, Business, and Science programs.",
    bg: "linear-gradient(160deg,#1a2a3a,#0d1520)",
    icon: "🏰",
  },
  {
    tag: "Auckland, New Zealand 🇳🇿",
    name: "AIS St Helens",
    tagline: "Business & Hospitality Leadership",
    desc: "Auckland's leading business and hospitality school. Industry-focused programs preparing graduates for global careers.",
    bg: "linear-gradient(160deg,#1a1a3a,#0d0d20)",
    icon: "🎓",
  },
];

export default function Universities() {
  return (
    <section id="universities" style={{ background: "#0D1B2A", padding: "8rem 4rem" }}>
      <p style={{
        fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
        letterSpacing: "0.4em", textTransform: "uppercase",
        color: "#C8A96E", marginBottom: "1rem",
      }}>Featured Universities</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300,
        lineHeight: 1.1, color: "#FAFAF8", marginBottom: "4rem",
      }}>Handpicked Institutions<br /><em style={{ color: "#C8A96E" }}>For Your Future</em></h2>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3,1fr)",
        gap: "1.5px", background: "rgba(200,169,110,0.1)",
      }}>
        {unis.map((u, i) => (
          <div key={i} style={{
            position: "relative", aspectRatio: "3/4",
            overflow: "hidden", cursor: "pointer",
          }}
            onMouseEnter={e => {
              const bg = e.currentTarget.querySelector(".ubg") as HTMLElement;
              const desc = e.currentTarget.querySelector(".udesc") as HTMLElement;
              const btn = e.currentTarget.querySelector(".ubtn") as HTMLElement;
              if (bg) bg.style.transform = "scale(1.06)";
              if (desc) { desc.style.opacity = "1"; desc.style.transform = "translateY(0)"; }
              if (btn) { btn.style.background = "#C8A96E"; btn.style.color = "#0D1B2A"; }
            }}
            onMouseLeave={e => {
              const bg = e.currentTarget.querySelector(".ubg") as HTMLElement;
              const desc = e.currentTarget.querySelector(".udesc") as HTMLElement;
              const btn = e.currentTarget.querySelector(".ubtn") as HTMLElement;
              if (bg) bg.style.transform = "scale(1)";
              if (desc) { desc.style.opacity = "0"; desc.style.transform = "translateY(12px)"; }
              if (btn) { btn.style.background = "transparent"; btn.style.color = "#C8A96E"; }
            }}
          >
            <div className="ubg" style={{
              position: "absolute", inset: 0,
              background: u.bg, transition: "transform 0.8s ease",
            }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-65%)",
                fontSize: "6rem", opacity: 0.07,
              }}>{u.icon}</div>
            </div>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top,rgba(13,27,42,0.97) 0%,rgba(13,27,42,0.4) 55%,transparent 100%)",
            }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.2rem" }}>
              <p style={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.58rem",
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: "#C8A96E", marginBottom: "0.5rem",
              }}>{u.tag}</p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.7rem", fontWeight: 400,
                color: "#FAFAF8", lineHeight: 1.15, marginBottom: "0.3rem",
              }}>{u.name}</h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem", fontStyle: "italic",
                color: "rgba(200,169,110,0.8)", marginBottom: "0.8rem",
              }}>{u.tagline}</p>
              <p className="udesc" style={{
                fontSize: "0.78rem", fontWeight: 300,
                color: "rgba(250,250,248,0.7)", lineHeight: 1.75,
                marginBottom: "1.2rem", opacity: 0,
                transform: "translateY(12px)", transition: "all 0.4s ease",
              }}>{u.desc}</p>
              <span className="ubtn" style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#C8A96E",
                border: "1px solid rgba(200,169,110,0.4)",
                padding: "0.6rem 1.3rem", display: "inline-block",
                transition: "all 0.3s", background: "transparent",
              }}>Explore Programs →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}