"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <style>{`
        #about { padding: 5rem 2rem; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .about-img { height: 520px; }
        @media (max-width: 768px) {
          #about { padding: 4rem 1.5rem; }
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-img { height: 260px; }
        }
      `}</style>
      <section id="about" style={{ background: "#0c0c0c" }}>
        <div className="about-grid">
          <div className="about-img" style={{ position: "relative", border: "1px solid rgba(200,169,110,0.15)", overflow: "hidden" }}>
            <Image
              src="/otago.jpg"
              alt="University of Otago - New Zealand university placement"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "1rem" }}>Who We Are</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1.1, color: "#FAFAF8", marginBottom: "1.5rem" }}>
              Opening Doors to<br /><em style={{ color: "#C8A96E" }}>World-Class Education</em>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem,2vw,1rem)", fontWeight: 300, lineHeight: 1.85, color: "rgba(250,250,248,0.6)", marginBottom: "1.5rem" }}>
              Beyond Borders NZ is New Zealand's leading education consultancy, specialising in helping international students secure placements at top New Zealand universities. Our certified counsellors provide expert student visa assistance and university application support, guiding hundreds of students through every step of the process.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem,2vw,1rem)", fontWeight: 300, lineHeight: 1.85, color: "rgba(250,250,248,0.6)", marginBottom: "2.5rem" }}>
              We believe every student deserves personalised guidance to study in New Zealand. Beyond Borders. Beyond Limits.
            </p>
            <a href="/team" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0c0c0c", background: "#C8A96E", padding: "0.8rem 2rem", textDecoration: "none", fontFamily: "'Inter', sans-serif", border: "1px solid #C8A96E" }}>Meet Our Team →</a>
          </div>
        </div>
      </section>
    </>
  );
}