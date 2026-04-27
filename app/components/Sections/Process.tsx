"use client";
import { motion } from "framer-motion";

const steps = [
  { roman: "I", title: "Free Consultation", desc: "Meet our counsellors to discuss your goals, qualifications, and preferred institutions." },
  { roman: "II", title: "University Matching", desc: "We shortlist the best-fit universities based on your profile and career aspirations." },
  { roman: "III", title: "Application & Visa", desc: "Full application support, document preparation, and visa lodgement handled for you." },
  { roman: "IV", title: "Arrive & Succeed", desc: "Pre-departure briefings, arrival support, and ongoing check-ins throughout your studies." }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-navyMid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-6xl text-white mb-4 uppercase">Your Path to New Zealand</h2>
          <p className="font-outfit text-gold tracking-widest uppercase text-sm">Four simple steps to your dream university</p>
        </div>
        
        <div className="relative">
          {/* Vertical line for mobile, horizontal for desktop (simplified) */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 h-full w-[1px] bg-gold/30" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:block">
                  <div className={`p-8 glass-card border border-gold/20 max-w-sm w-full ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="text-gold font-cormorant text-4xl mb-4 opacity-30">{step.roman}</div>
                    <h3 className="font-cormorant text-2xl text-white mb-4">{step.title}</h3>
                    <p className="font-outfit text-offWhite/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-8 h-8 rounded-full bg-gold border-[6px] border-navyMid flex-shrink-0" />
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
