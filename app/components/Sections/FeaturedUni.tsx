"use client";
import { motion } from 'framer-motion';

const universities = [
  {
    name: "American College Cyprus",
    loc: "NICOSIA, CYPRUS 🇨🇾",
    tag: "Mediterranean Excellence",
    desc: "A globally recognised American-curriculum college set in the heart of Cyprus. Business, IT, and Hospitality programs.",
    img: "https://images.unsplash.com/photo-1527239441953-caffd968d952?auto=format&fit=crop&q=80"
  },
  {
    name: "University of Otago",
    loc: "DUNEDIN, NEW ZEALAND 🇳🇿",
    tag: "New Zealand's Finest",
    desc: "New Zealand's first university, ranked among the world's best. Medicine, Law, Business, and Science programs.",
    img: "https://images.unsplash.com/photo-1590481075329-37380956221c?auto=format&fit=crop&q=80"
  },
  {
    name: "AIS St Helens",
    loc: "AUCKLAND, NEW ZEALAND 🇳🇿",
    tag: "Business and Hospitality Leadership",
    desc: "Auckland's leading business and hospitality school. Practical industry-focused programs in the heart of Auckland city.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
  }
];

export default function FeaturedUni() {
  return (
    <section id="universities" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-cormorant text-4xl md:text-6xl text-white mb-4">Featured Universities</h2>
          <p className="font-outfit text-gold tracking-widest uppercase text-sm">Handpicked institutions for your future</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {universities.map((uni, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group h-[600px] overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-700">
                <img src={uni.img} alt={uni.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-8">
                <p className="text-gold font-outfit text-xs tracking-widest mb-2 uppercase">{uni.loc}</p>
                <h3 className="font-cormorant text-3xl text-white mb-2">{uni.name}</h3>
                <p className="italic text-white/60 font-cormorant mb-4">{uni.tag}</p>
                <p className="text-offWhite/80 font-outfit text-sm leading-relaxed mb-6 line-clamp-3">{uni.desc}</p>
                <button className="border border-gold text-gold font-outfit text-xs tracking-widest px-6 py-3 hover:bg-gold hover:text-navy transition-all uppercase">
                  Explore Programs →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
