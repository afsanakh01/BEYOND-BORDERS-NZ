"use client";
export default function Contact() {
  return (
    <div id="contact" style={{
      background: "#C8A96E", textAlign: "center",
      padding: "7rem 4rem", position: "relative", overflow: "hidden",
    }}>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.5rem,5vw,4.5rem)",
        fontWeight: 300, color: "#0D1B2A",
        marginBottom: "1rem", lineHeight: 1.1,
      }}>Ready to Cross <em>Borders?</em></h2>
      <p style={{
        fontSize: "1.05rem", color: "rgba(13,27,42,0.7)",
        fontWeight: 300, maxWidth: 500, margin: "0 auto 3rem",
        lineHeight: 1.75,
      }}>Book your free 30-minute consultation today. No obligations, just honest guidance.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="mailto:hello@beyondbordersnz.co.nz" style={{
          display: "inline-block", fontSize: "0.72rem",
          fontWeight: 500, letterSpacing: "0.25em",
          textTransform: "uppercase", color: "#C8A96E",
          background: "#0D1B2A", padding: "1.1rem 2.8rem",
          textDecoration: "none", border: "1px solid #0D1B2A",
          transition: "all 0.3s",
        }}>Book Free Consultation</a>
        <a href="tel:+6491234567" style={{
          display: "inline-block", fontSize: "0.72rem",
          fontWeight: 500, letterSpacing: "0.25em",
          textTransform: "uppercase", color: "#0D1B2A",
          background: "transparent", padding: "1.1rem 2.8rem",
          textDecoration: "none", border: "1px solid #0D1B2A",
          transition: "all 0.3s",
        }}>+64 9 123 4567</a>
      </div>
    </div>
  );
}