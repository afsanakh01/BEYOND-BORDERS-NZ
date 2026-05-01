"use client";
const steps = [
  { num: "I", title: "Free Consultation", desc: "Meet our counsellors to discuss your goals, qualifications, and preferred institutions." },
  { num: "II", title: "University Matching", desc: "We shortlist best-fit universities based on your profile and career aspirations." },
  { num: "III", title: "Application & Visa", desc: "Full application support, document preparation, and visa lodgement handled for you." },
  { num: "IV", title: "Arrive & Succeed", desc: "Pre-departure briefings, arrival support, and check-ins throughout your studies." },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#111111", padding: "8rem 4rem" }}>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
        letterSpacing: "0.4em", textTransform: "uppercase",
        color: "#C8A96E", marginBottom: "1rem",
      }}>How It Works</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300,
        lineHeight: 1.1, color: "#FAFAF8", marginBottom: "5rem",
      }}>Your Path to<br /><em style={{ color: "#C8A96E" }}>New Zealand</em></h2>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4,1fr)",
        gap: "3rem", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: "1.75rem",
          left: "12%", right: "12%", height: 1,
          background: "rgba(200,169,110,0.2)",
        }} />
        {steps.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{
              width: "3.5rem", height: "3.5rem",
              border: "1px solid rgba(200,169,110,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.5rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.3rem", fontWeight: 400,
              color: "#C8A96E",
              background: "#111111",
              position: "relative", zIndex: 1,
              transition: "all 0.3s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "#C8A96E";
                (e.currentTarget as HTMLDivElement).style.color = "#0c0c0c";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = "#111111";
                (e.currentTarget as HTMLDivElement).style.color = "#C8A96E";
              }}
            >{s.num}</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600, fontSize: "1rem",
              color: "#FAFAF8", marginBottom: "0.6rem",
            }}>{s.title}</div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem", color: "rgba(250,250,248,0.55)",
              fontWeight: 300, lineHeight: 1.7,
            }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}