"use client";
export default function Contact() {
  return (
    <div id="contact" style={{
      background: "#C8A96E", textAlign: "center",
      padding: "7rem 4rem", position: "relative", overflow: "hidden",
    }}>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
        letterSpacing: "0.4em", textTransform: "uppercase",
        color: "rgba(13,27,42,0.65)", marginBottom: "1rem",
      }}>Begin Today</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.5rem,5vw,4.5rem)",
        fontWeight: 300, color: "#0c0c0c",
        marginBottom: "1rem", lineHeight: 1.1,
      }}>Ready to Cross <em>Borders?</em></h2>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "1.05rem", color: "rgba(13,27,42,0.7)",
        fontWeight: 300, maxWidth: 500, margin: "0 auto 3rem",
        lineHeight: 1.75,
      }}>Book your free 30-minute consultation with New Zealand's leading education consultancy. Expert student visa assistance and university placement guidance — no obligations, just honest advice.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="mailto:hello@beyondbordersnz.co.nz" style={{
          display: "inline-block", fontSize: "0.72rem",
          fontWeight: 500, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#C8A96E",
          background: "#0c0c0c", padding: "1rem 2.5rem",
          textDecoration: "none",
          fontFamily: "'Inter', sans-serif",
          border: "1px solid #0c0c0c",
          transition: "all 0.3s",
        }}>Book Free Consultation</a>
        <a href="tel:+91-7210318786" style={{
          display: "inline-block", fontSize: "0.72rem",
          fontWeight: 500, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#0c0c0c",
          background: "transparent", padding: "1rem 2.5rem",
          textDecoration: "none",
          fontFamily: "'Inter', sans-serif",
          border: "1px solid #0c0c0c",
          transition: "all 0.3s",
        }}>+91-7210318786 (India)</a>
      </div>
    </div>
  );
}