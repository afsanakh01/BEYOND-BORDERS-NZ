"use client";

const unis = [
  {
    tag: "Nicosia, Cyprus",
    name: "American College Cyprus",
    tagline: "Mediterranean Excellence",
    desc: "Founded 1975. Business, IT, Hospitality, Accounting and Tourism programs. Internationally recognised qualifications taught in English.",
    img: "/cyprus.jpg",
    programs: [
      { name: "Business Administration", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Hotel and Hospitality Management", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Computer Science and IT", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Accounting and Finance", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Travel and Tourism Management", url: "https://www.ac.ac.cy/academic-programs/" },
    ],
    applyUrl: "https://www.ac.ac.cy/admissions/",
  },
  {
    tag: "Dunedin, New Zealand",
    name: "University of Otago",
    tagline: "New Zealands Finest",
    desc: "NZ first university, est. 1869. Ranked top 1% globally. 200+ programmes across Health Sciences, Commerce, Law, Humanities and Science.",
    img: "/otago.jpg",
    programs: [
      { name: "Medicine and Health Sciences", url: "https://www.otago.ac.nz/healthsciences" },
      { name: "Commerce and Business", url: "https://www.otago.ac.nz/commerce" },
      { name: "Law", url: "https://www.otago.ac.nz/law" },
      { name: "Science", url: "https://www.otago.ac.nz/sciences" },
      { name: "Humanities", url: "https://www.otago.ac.nz/humanities" },
    ],
    applyUrl: "https://www.otago.ac.nz/international/future-students",
  },
  {
    tag: "Auckland, New Zealand",
    name: "AIS St Helens",
    tagline: "Business and Hospitality Leadership",
    desc: "Est. 1990. NZ largest private degree-granting institute. MBA, Business, IT, Tourism and Hospitality. 3 semesters per year for faster completion.",
    img: "/ais.jpg",
    programs: [
      { name: "MBA", url: "https://www.ais.ac.nz/programmes/postgraduate/master-of-business-administration/" },
      { name: "Business Administration", url: "https://www.ais.ac.nz/programmes/" },
      { name: "Information Technology", url: "https://www.ais.ac.nz/programmes/" },
      { name: "Tourism Management", url: "https://www.ais.ac.nz/programmes/" },
      { name: "Hospitality Management", url: "https://www.ais.ac.nz/programmes/" },
    ],
    applyUrl: "https://www.ais.ac.nz/admissions/",
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

            <div style={{ height: 260, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "url(" + u.img + ")", backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.3) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "0.4rem" }}>
                  {u.tag}
                </p>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 400, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "0.2rem" }}>
                  {u.name}
                </h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem", fontStyle: "italic", color: "rgba(200,169,110,0.8)" }}>
                  {u.tagline}
                </p>
              </div>
            </div>

            <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "rgba(250,250,248,0.55)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                {u.desc}
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "0.7rem" }}>
                Available Programs
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.2rem 0" }}>
                {u.programs.map((p, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem" }}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(250,250,248,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: "#C8A96E", fontSize: "0.65rem" }}>→</span>
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={u.applyUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#0c0c0c", background: "#C8A96E", padding: "0.65rem 1.5rem", textDecoration: "none", border: "1px solid #C8A96E" }}>
                Explore Programs
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}