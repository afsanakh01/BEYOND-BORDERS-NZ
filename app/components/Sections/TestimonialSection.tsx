"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Beyond Borders NZ changed my life. Within 3 months I had my offer letter from University of Otago and my visa approved. I could not have done this without them.",
    name: "Priya Sharma",
    country: "India 🇮🇳",
    placed: "University of Otago"
  },
  {
    quote: "The team handled everything from my SOP to my visa application. I just had to focus on preparing for my new life in New Zealand. Absolutely world class service.",
    name: "Rahul Mehta",
    country: "Nepal 🇳🇵",
    placed: "University of Auckland"
  },
  {
    quote: "Professional, fast, and genuinely caring. Best decision I ever made was choosing Beyond Borders NZ. My student visa was approved in under 4 weeks.",
    name: "Sara Kim",
    country: "South Korea 🇰🇷",
    placed: "Victoria University of Wellington"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-6xl text-white mb-4 uppercase">Students Who Made It</h2>
          <p className="font-outfit text-gold tracking-widest uppercase text-sm">Real students. Real results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="text-gold text-5xl font-serif mb-6 opacity-40">“</div>
              <p className="font-outfit text-offWhite/80 text-lg leading-relaxed mb-8 flex-grow italic">
                {test.quote}
              </p>
              <div className="border-t border-white/5 pt-6 mt-auto">
                <h4 className="font-cormorant text-xl text-white">{test.name}</h4>
                <div className="flex justify-between items-center text-xs tracking-widest uppercase mt-2">
                  <span className="text-gold">{test.country}</span>
                  <span className="text-offWhite/40">{test.placed}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
