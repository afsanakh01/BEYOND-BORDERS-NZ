"use client";
export default function Footer() {
  const cols = [
    {
      title: "Services",
      items: [
        { label: "University Placement", href: "/#services" },
        { label: "Visa Consultation", href: "/#services" },
        { label: "English Prep", href: "/#services" },
      ],
    },
    {
      title: "Universities",
      items: [
        { label: "University of Otago", href: "/#universities" },
        { label: "AIS St Helens", href: "/#universities" },
        { label: "American College Cyprus", href: "/#universities" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/#about" },
        { label: "Meet Our Team", href: "/team" },
        { label: "Contact Us", href: "/#contact" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Auckland, New Zealand", href: null },
        { label: "info@beyondbordersnz.com", href: "mailto:info@beyondbordersnz.com" },
        { label: "+64-0223884470 (NZ)", href: "tel:+640223884470" },
        { label: "Mon–Fri 9am–6pm NZST", href: null },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 3rem; margin-bottom: 4rem; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; }
        .footer-link:hover { color: #C8A96E !important; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; gap: 0.8rem; text-align: center; }
        }
      `}</style>

      <footer style={{ background: "#060e17", padding: "clamp(3rem,8vw,5rem) clamp(1.5rem,5vw,4rem) 2rem", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem,2.5vw,1.4rem)", fontWeight: 300, letterSpacing: "0.15em", color: "#FAFAF8", textTransform: "uppercase", marginBottom: "0.5rem" }}>Beyond Borders NZ</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(250,250,248,0.5)", fontWeight: 300, lineHeight: 1.7 }}>
            New Zealand's Education Gateway · Est. 2018 · Auckland, NZ
          </p>
        </div>

        <div className="footer-grid">
          {cols.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "1.2rem" }}>{col.title}</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((item) => (
                  <li key={item.label} style={{ marginBottom: "0.6rem" }}>
                    {item.href ? (
                      <a href={item.href} className="footer-link" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(250,250,248,0.55)", textDecoration: "none", transition: "color 0.2s" }}>
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(250,250,248,0.35)" }}>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(250,250,248,0.06)", paddingTop: "2rem", fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(250,250,248,0.25)" }}>
          <span>© 2026 Beyond Borders NZ. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", overflow: "hidden" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "10vw", fontWeight: 700, color: "rgba(250,250,248,0.04)", whiteSpace: "nowrap", lineHeight: 1, userSelect: "none", letterSpacing: "0.05em" }}>BEYOND BORDERS NZ</div>
        </div>
      </footer>
    </>
  );
}