"use client";
const tests = [
  { quote: "Beyond Borders NZ changed my life. Within 3 months I had my offer letter from University of Otago and my visa approved.", name: "Priya Sharma", detail: "India 🇮🇳 → University of Otago" },
  { quote: "The team handled everything from my SOP to my visa application. I just had to focus on preparing for my new life in New Zealand.", name: "Rahul Mehta", detail: "Nepal 🇳🇵 → University of Auckland" },
  { quote: "Professional, fast, and genuinely caring. Best decision I ever made was choosing Beyond Borders NZ.", name: "Sara Kim", detail: "South Korea 🇰🇷 → Victoria University" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#0c0c0c", padding: "8rem 4rem" }}>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
        letterSpacing: "0.4em", textTransform: "uppercase",
        color: "#C8A96E", marginBottom: "1rem",
      }}>Students Who Made It</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300,
        lineHeight: 1.1, color: "#FAFAF8", marginBottom: "4rem",
      }}>Real Students.<br /><em style={{ color: "#C8A96E" }}>Real Results.</em></h2>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3,1fr)",
        gap: "1.5px", background: "rgba(200,169,110,0.15)",
      }}>
        {tests.map((t, i) => (
          <div key={i} style={{ background: "#0c0c0c", padding: "3rem" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "4.5rem", lineHeight: 0.8,
              color: "rgba(200,169,110,0.2)",
              marginBottom: "1rem", display: "block",
            }}>"</span>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem", fontStyle: "italic",
              fontWeight: 300, color: "#FAFAF8",
              lineHeight: 1.75, marginBottom: "2rem",
            }}>{t.quote}</p>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600, fontSize: "0.95rem",
              color: "#FAFAF8", marginBottom: "0.2rem",
            }}>{t.name}</div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem", letterSpacing: "0.1em",
              color: "#C8A96E",
            }}>{t.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}