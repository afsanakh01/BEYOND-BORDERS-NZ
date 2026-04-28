"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: scrolled ? "1.2rem 4rem" : "2rem 4rem",
      background: scrolled ? "rgba(13,27,42,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
      transition: "all 0.6s ease",
    }}>
      <a href="#" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.3rem", fontWeight: 300,
        letterSpacing: "0.15em", color: "#FAFAF8",
        textDecoration: "none",
      }}>
        Beyond <span style={{ color: "#C8A96E", fontStyle: "italic" }}>Borders</span> NZ
      </a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {["About", "Services", "Universities", "Process", "Contact"].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              fontSize: "0.72rem", fontWeight: 400,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(250,250,248,0.6)", textDecoration: "none",
              transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FAFAF8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,250,248,0.6)")}
            >{link}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        fontSize: "0.72rem", fontWeight: 500,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#0D1B2A", background: "#C8A96E",
        padding: "0.75rem 1.8rem", textDecoration: "none",
        border: "1px solid #C8A96E", transition: "all 0.3s",
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#C8A96E";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#C8A96E";
          e.currentTarget.style.color = "#0D1B2A";
        }}
      >Free Consultation</a>
    </nav>
  );
}