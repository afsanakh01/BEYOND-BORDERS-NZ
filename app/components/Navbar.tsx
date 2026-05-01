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
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: scrolled ? "1rem 3rem" : "1.5rem 3rem",
        background: scrolled ? "rgba(12,12,12,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.5s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "2.2rem", height: "2.2rem",
            borderRadius: "50%",
            border: "2px solid #FAFAF8",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.9rem", fontWeight: 700,
            color: "#FAFAF8",
          }}>B</div>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem", fontWeight: 700,
            letterSpacing: "0.12em", color: "#FAFAF8",
            textTransform: "uppercase",
          }}>Beyond Borders NZ</span>
        </div>

        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {["Home", "About", "Services", "Universities", "Contact"].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{
                fontSize: "0.72rem", fontWeight: 400,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "rgba(250,250,248,0.75)", textDecoration: "none",
                transition: "color 0.3s",
                fontFamily: "'Inter', sans-serif",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FAFAF8")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,250,248,0.75)")}
              >{link}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" style={{
          fontSize: "0.72rem", fontWeight: 500,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#0c0c0c", background: "#FAFAF8",
          padding: "0.7rem 1.8rem",
          borderRadius: "2rem",
          textDecoration: "none",
          fontFamily: "'Inter', sans-serif",
          transition: "all 0.3s",
          border: "1px solid #FAFAF8",
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#FAFAF8";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#FAFAF8";
            e.currentTarget.style.color = "#0c0c0c";
          }}
        >Consult Now</a>
      </nav>
    </>
  );
}