"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "University Placement",
    desc: "Personalised matching to NZ universities based on your academic profile, budget, and career goals."
  },
  {
    title: "Visa Consultation",
    desc: "Expert guidance through New Zealand student visa applications with a 98% success rate."
  },
  {
    title: "SOP & Application Writing",
    desc: "Compelling statements of purpose crafted by former university admissions advisors."
  },
  {
    title: "English Proficiency Prep",
    desc: "IELTS and PTE coaching with tailored study plans and mock tests to meet entry requirements."
  },
  {
    title: "Pre-Departure Support",
    desc: "From accommodation to bank accounts — arrive in New Zealand fully prepared and confident."
  },
  {
    title: "Post-Arrival Support",
    desc: "Orientation assistance, part-time work guidance, and ongoing welfare check-ins throughout your studies."
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-6xl text-white mb-4 uppercase">Everything You Need to Get There</h2>
          <p className="font-outfit text-gold tracking-widest uppercase text-sm">Expert guidance at every step of your journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 group border border-white/10 hover:border-gold/50 transition-all duration-500"
            >
              <div className="mb-6 text-gold text-2xl">
                {/* Placeholder for icons, can use lucide-react if needed */}
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
              </div>
              <h3 className="font-cormorant text-2xl text-white mb-4">{service.title}</h3>
              <p className="font-outfit text-offWhite/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
