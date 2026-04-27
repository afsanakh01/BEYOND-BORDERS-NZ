"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-navy/80 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-cormorant text-2xl tracking-widest text-white">
          BEYOND <span className="text-gold italic">BORDERS</span> NZ
        </div>
        <div className="hidden md:flex gap-8 items-center font-outfit text-xs tracking-[0.25em] text-offWhite/80">
          <a href="#about" className="hover:text-gold transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-gold transition-colors">SERVICES</a>
          <a href="#universities" className="hover:text-gold transition-colors">UNIVERSITIES</a>
          <button className="bg-gold text-navy px-6 py-2 font-bold hover:bg-white transition-colors tracking-widest">
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </nav>
  );
}
