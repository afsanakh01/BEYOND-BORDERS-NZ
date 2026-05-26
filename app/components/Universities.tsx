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
      <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1.1,