"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Students Placed", val: "500+" },
  { label: "Visa Success", val: "98%" },
  { label: "Universities", val: "40+" },
  { label: "Countries", val: "12" }
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-gold py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-navy font-cormorant text-4xl md:text-5xl font-bold mb-1">{stat.val}</div>
            <div className="text-navy/70 font-outfit text-xs tracking-widest uppercase font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
