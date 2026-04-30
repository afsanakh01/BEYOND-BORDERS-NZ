"use client";
const services = [
  { icon: "🎓", title: "University Placement", desc: "Personalised matching to NZ universities based on your academic profile, budget, and career goals." },
  { icon: "📋", title: "Visa Consultation", desc: "Expert guidance through New Zealand student visa applications with a 98% success rate." },
  { icon: "📖", title: "English Proficiency Prep", desc: "IELTS and PTE coaching with tailored study plans and mock tests to meet university entry requirements." },
];

export default function ServicesGrid() {
  return (
    <section id="services" style={{ background: "#0D1B2A", padding: "8rem 4rem" }}>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
        letterSpacing: "0.4em", textTransform: "uppercase",
        color: "#C8A96E", marginBottom: "1rem",
      }}>What We Offer</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300,
        lineHeight: 1.1, color: "#FAFAF8", marginBottom: "4rem",
      }}>Everything You Need<br /><em style={{ color: "#C8A96E" }}>to Get There</em></h2>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3,1fr)",
        gap: "1px", background: "rgba(200,169,110,0.15)",
      }}>
        {services.map((s, i) => (
          <div key={i} style={{
            background: "#0D1B2A", padding: "3rem 2.5rem",
            transition: "background 0.4s", cursor: "default",
            borderBottom: "2px solid transparent",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.background = "#162436";
              (e.currentTarget as HTMLDivElement).style.borderBottom = "2px solid #C8A96E";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.background = "#0D1B2A";
              (e.currentTarget as HTMLDivElement).style.borderBottom = "2px solid transparent";
            }}
          >
            <span style={{ fontSize: "1.5rem", marginBottom: "1.2rem", display: "block" }}>{s.icon}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.45rem", fontWeight: 400,
              color: "#FAFAF8", marginBottom: "0.8rem",
            }}>{s.title}</h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem", fontWeight: 300,
              color: "rgba(250,250,248,0.6)", lineHeight: 1.8,
            }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}