"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#05090f", padding: "5rem 4rem 2rem", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
        gap: "4rem", marginBottom: "4rem",
      }}>
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.4rem", fontWeight: 300,
            letterSpacing: "0.15em", color: "#FAFAF8", marginBottom: "0.5rem",
          }}>Beyond <span style={{ color: "#C8A96E", fontStyle: "italic" }}>Borders</span> NZ</div>
          <p style={{ fontSize: "0.78rem", color: "rgba(250,250,248,0.6)", fontWeight: 300, lineHeight: 1.7 }}>
            New Zealand's Education Gateway<br />Est. 2018 · Auckland, NZ
          </p>
        </div>
        {[
          { title: "Services", items: ["University Placement", "Visa Consultation", "SOP Writing", "English Prep", "Pre-Departure Support"] },
          { title: "Universities", items: ["University of Otago", "University of Auckland", "Victoria University", "AIS St Helens", "American College Cyprus"] },
          { title: "Contact", items: ["Auckland, New Zealand", "hello@beyondbordersnz.co.nz", "+64 9 123 4567", "Mon–Fri 9am–6pm NZST"] },
        ].map((col, i) => (
          <div key={i}>
            <h5 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem", letterSpacing: "0.3em",
              textTransform: "uppercase", color: "#C8A96E", marginBottom: "1.2rem",
            }}>{col.title}</h5>
            <ul style={{ listStyle: "none" }}>
              {col.items.map((item, j) => (
                <li key={j} style={{
                  fontSize: "0.8rem", color: "rgba(250,250,248,0.6)",
                  marginBottom: "0.6rem", cursor: "pointer", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FAFAF8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,250,248,0.6)")}
                >{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: "1px solid rgba(250,250,248,0.06)",
        paddingTop: "2rem", fontSize: "0.72rem",
        color: "rgba(250,250,248,0.25)",
      }}>
        <span>© 2026 Beyond Borders NZ. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
      <div style={{ textAlign: "center", marginTop: "3rem", overflow: "hidden" }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "12vw", fontWeight: 700,
          color: "rgba(250,250,248,0.03)",
          whiteSpace: "nowrap", lineHeight: 1,
          userSelect: "none",
        }}>BEYOND BORDERS</div>
      </div>
    </footer>
  );
}