"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services", "Universities", "Contact"];

  return (
    <>
      <style>{`
        .nav-wrap { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; transition: all 0.4s ease; }
        .nav-wrap.scrolled { background: rgba(12,12,12,0.97); backdrop-filter: blur(20px); padding: 0.7rem 2rem; }
        .nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; letter-spacing: 0.1em; color: #FAFAF8; text-transform: uppercase; white-space: nowrap; }
        .nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .nav-links a { font-family: 'Inter', sans-serif; font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(250,250,248,0.75); text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #FAFAF8; }
        .nav-cta { font-family: 'Inter', sans-serif; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: #0c0c0c; background: #FAFAF8; padding: 0.65rem 1.6rem; border-radius: 2rem; text-decoration: none; border: 1px solid #FAFAF8; transition: all 0.3s; white-space: nowrap; }
        .nav-cta:hover { background: transparent; color: #FAFAF8; }
        .nav-burger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; z-index: 101; }
        .nav-burger span { width: 22px; height: 2px; background: #FAFAF8; display: block; transition: all 0.3s; }
        .mobile-menu { display: none; position: fixed; inset: 0; background: #0c0c0c; z-index: 99; flex-direction: column; align-items: center; justify-content: center; gap: 2.5rem; }
        .mobile-menu.open { display: flex; }
        @media (max-width: 768px) {
          .nav-logo-text { font-size: 0.8rem; }
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-burger { display: flex; }
          .nav-wrap { padding: 1rem 1.2rem; }
          .nav-wrap.scrolled { padding: 0.7rem 1.2rem; }
        }
      `}</style>

      <nav className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "2px solid #FAFAF8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, color: "#FAFAF8", flexShrink: 0, fontFamily: "'Cormorant Garamond', serif" }}>B</div>
          <span className="nav-logo-text">Beyond Borders NZ</span>
        </div>
        <ul className="nav-links">
          {links.map(link => (<li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>))}
        </ul>
        <a className="nav-cta" href="#contact">Consult Now</a>
        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {[0,1,2].map(i => (<span key={i} style={{ transform: menuOpen ? i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "scaleX(0)" : "none" }} />))}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 300, color: "#FAFAF8", textDecoration: "none" }}>{link}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#0c0c0c", background: "#C8A96E", padding: "0.9rem 2.5rem", textDecoration: "none" }}>Consult Now</a>
      </div>
    </>
  );
}