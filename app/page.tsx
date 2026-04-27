import HeroScroll from "./components/Hero/HeroScroll";
import Navbar from "./components/UI/Navbar";
import StatsBar from "./components/Sections/StatsBar";
import ServicesGrid from "./components/Sections/ServicesGrid";
import Process from "./components/Sections/Process";
import FeaturedUni from "./components/Sections/FeaturedUni";
import TestimonialSection from "./components/Sections/TestimonialSection";
import ContactForm from "./components/Sections/ContactForm";
import Footer from "./components/UI/Footer";

export default function Home() {
  return (
    <main className="relative bg-navy overflow-hidden">
      <Navbar />
      <HeroScroll />
      <StatsBar />
      <ServicesGrid />
      <Process />
      <FeaturedUni />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
