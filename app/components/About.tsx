"use client";
export default function About() {
  return (
    <section id="about" style={{
      background: "#0D1B2A", padding: "8rem 4rem",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: "8rem", alignItems: "center",
    }}>
      <div style={{
        position: "relative", aspectRatio: "3/4",
        border: "1px solid rgba(200,169,110,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg,#1A3A5C,#0D1B2A)",
        overflow: "hidden",
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.9rem", letterSpacing: "0.1em",
          color: "rgba(200,169,110,0.4)", fontStyle: "italic",
          textAlign: "center",
        }}>University of Otago<br />Dunedin · New Zealand</p>
      </div>
      <div>
        <p style={{
          fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
          letterSpacing: "0.4em", textTransform: "uppercase",
          color: "#C8A96E", marginBottom: "1rem",
        }}>Who We Are</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300,
          lineHeight: 1.1, color: "#FAFAF8", marginBottom: "1.5rem",
        }}>Opening Doors to<br /><em style={{ color: "#C8A96E" }}>World-Class Education</em></h2>
        <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(250,250,248,0.6)", marginBottom: "1.5rem" }}>
          Beyond Borders NZ is New Zealand's leading education consultancy, specialising in helping international students secure placements at top universities. Our certified counsellors have guided hundreds of students through every step.
        </p>
        <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(250,250,248,0.6)", marginBottom: "2.5rem" }}>
          We believe every student deserves personalised guidance. Beyond Borders. Beyond Limits.
        </p>
        <a href="#contact" style={{
          display: "inline-block", fontSize: "0.72rem",
          fontWeight: 500, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#0D1B2A",
          background: "#C8A96E", padding: "0.75rem 1.8rem",
          textDecoration: "none", border: "1px solid #C8A96E",
          transition: "all 0.3s",
        }}>Meet Our Team →</a>
      </div>
    </section>
  );
}