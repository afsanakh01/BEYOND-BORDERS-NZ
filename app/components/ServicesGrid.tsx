"use client";
const services = [
  { icon: "🎓", title: "University Placement", desc: "Personalised matching to top New Zealand universities based on your academic profile, budget, and career goals. We help international students find the right NZ university." },
  { icon: "📋", title: "Student Visa Consultation", desc: "Expert guidance through New Zealand student visa applications with a 98% visa success rate. We handle the paperwork so you can focus on your future." },
  { icon: "📖", title: "English Proficiency Prep", desc: "IELTS and PTE coaching with tailored study plans and mock tests to meet New Zealand university entry requirements for international students." },
];
export default function ServicesGrid() {
  return (
    <>
      <style>{`
        #services { padding: 5rem 2rem; }
        .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: rgba(200,169,110,0.15); }
        .service-card { background: #0c0c0c; padding: 3rem 2rem; border-bottom: 2px solid transparent; transition: all 0.3s; }
        .service-card:hover { background: #161616; border-bottom: 2px solid #C8A96E; }
        @media (max-width: 768px) {
          #services { padding: 4rem 1.5rem; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 2.5rem 1.5rem; }
        }
      `}</style>
      <section id="services" style={{ background: "#0c0c0c" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "1rem" }}>What We Offer</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1.1, color: "#FAFAF8", marginBottom: "3rem" }}>
          Everything You Need<br /><em style={{ color: "#C8A96E" }}>to Get There</em>
        </h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span style={{ fontSize: "1.5rem", marginBottom: "1.2rem", display: "block" }}>{s.icon}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem,2.5vw,1.45rem)", fontWeight: 400, color: "#FAFAF8", marginBottom: "0.8rem" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "rgba(250,250,248,0.6)", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}