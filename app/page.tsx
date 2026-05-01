"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import ServicesGrid from "./components/ServicesGrid";
import Universities from "./components/Universities";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const HeroScroll = dynamic(
  () => import("./components/HeroScroll"),
  { ssr: false }
);

export default function Home() {
  return (
    <main style={{ background: "#0c0c0c" }}>
      <Navbar />
      <HeroScroll />
      <StatsBar />
      <About />
      <ServicesGrid />
      <Universities />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}