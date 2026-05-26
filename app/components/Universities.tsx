"use client";
import Image from "next/image";

const unis = [
  {
    tag: "Nicosia, Cyprus",
    name: "American College Cyprus",
    tagline: "Mediterranean Excellence",
    desc: "A globally recognised American-curriculum college offering Business, IT, Hospitality, Accounting and Tourism programs taught in English.",
    img: "/cyprus.jpg",
    alt: "American College Cyprus - study abroad programs in Nicosia",
  },
  {
    tag: "Dunedin, New Zealand",
    name: "University of Otago",
    tagline: "New Zealand's Finest",
    desc: "New Zealand's first university, established 1869. Ranked top 1% globally across Health Sciences, Commerce, Law, Humanities and Science.",
    img: "/otago.jpg",
    alt: "University of Otago Dunedin - top New Zealand university for international students",
  },
  {
    tag: "Auckland, New Zealand",
    name: "AIS St Helens",
    tagline: "Business and Hospitality Leadership",
    desc: "New Zealand's largest private degree-granting institute. MBA, Business, IT, Tourism and Hospitality programs with 3 intakes per year.",
    img: "/ais.jpg",
    alt: "AIS St Helens Auckland - MBA and business programs New Zealand",
  },
];

export default function Universities() {
  return (
    <section id="universities" style={{ background: "#0c0c0c", padding: "5rem 2rem" }}>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "1rem" }}>
        Featured Universities
      </p>
      <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1.1, color: "#FAFAF8", marginBottom: "3rem" }}>
        Handpicked Institutions<br />
        <em style={{ color: "#C8A96E" }}>For Your Future</em>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px", background: "rgba(200,169,110,0.15)" }}>
        {unis.map((u, i) => (
          <div key={i} style={{ background: "#0c0c0c", overflow: "hidden" }}>
            <div style={{ height: 380, position: "relative", overflow: "hidden" }}>
              <Image
                src={u.img}
                alt={u.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,12,12,0.97) 0%, rgba(12,12,12,0.4) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "0.5rem" }}>
                  {u.tag}
                </p>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 400, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "0.4rem" }}>
                  {u.name}
                </h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", fontStyle: "italic", color: "rgba(200,169,110,0.85)", marginBottom: "1rem" }}>
                  {u.tagline}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "rgba(250,250,248,0.6)", lineHeight: 1.75 }}>
                  {u.desc}
                </p>
              </div>
            </div>
            <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(200,169,110,0.15)", textAlign: "center" }}>
              <a href="#contact" style={{ display: "inline-block", fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A96E", padding: "0.65rem 1.5rem", textDecoration: "none", border: "1px solid rgba(200,169,110,0.4)" }}>
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}