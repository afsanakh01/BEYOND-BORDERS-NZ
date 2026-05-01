"use client";
export default function About() {
  return (
    <section id="about" style={{
      background: "#0c0c0c", padding: "8rem 4rem",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: "8rem", alignItems: "center",
    }}>
      <div style={{
        position: "relative", height: "560px",
        border: "1px solid rgba(200,169,110,0.15)",
        overflow: "hidden",
      }}>
        <img
          src="/otago.jpg"
          alt="University of Otago"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
          letterSpacing: "0.4em", textTransform: "uppercase",
          color: "#C8A96E", marginBottom: "1rem",
        }}>Who We Are</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300,
          lineHeight: 1.1, color: "#FAFAF8", marginBottom: "1.5rem",
        }}>Opening Doors to<br /><em style={{ color: "#C8A96E" }}>World-Class Education</em></h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem", fontWeight: 300, lineHeight: 1.85,
          color: "rgba(250,250,248,0.6)", marginBottom: "1.5rem",
        }}>
          Beyond Borders NZ is New Zealand's leading education consultancy, specialising in helping international students secure placements at top universities. Our certified counsellors have guided hundreds of students through every step.
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem", fontWeight: 300, lineHeight: 1.85,
          color: "rgba(250,250,248,0.6)", marginBottom: "2.5rem",
        }}>
          We believe every student deserves personalised guidance. Beyond Borders. Beyond Limits.
        </p>
        <a href="#contact" style={{
          display: "inline-block", fontSize: "0.72rem",
          fontWeight: 500, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#0c0c0c",
          background: "#C8A96E", padding: "0.8rem 2rem",
          textDecoration: "none",
          fontFamily: "'Inter', sans-serif",
          transition: "all 0.3s",
          border: "1px solid #C8A96E",
        }}>Meet Our Team →</a>
      </div>
    </section>
  );
}