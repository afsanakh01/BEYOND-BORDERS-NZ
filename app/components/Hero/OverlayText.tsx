"use client";
import { motion, MotionValue, useTransform } from 'framer-motion';

export default function OverlayText({ progress }: { progress: MotionValue<number> }) {
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [0, 1, 0]);
  const opacity2 = useTransform(progress, [0.3, 0.45, 0.55], [0, 1, 0]);
  const opacity3 = useTransform(progress, [0.6, 0.75, 0.85], [0, 1, 0]);
  const opacity4 = useTransform(progress, [0.9, 0.95, 1], [0, 1, 1]);

  const textBlocks = [
    { opacity: opacity1, h1: "The World Is Waiting For You", p: "New Zealand's Premier Education Consultancy" },
    { opacity: opacity2, h1: "New Zealand's Finest Universities", p: "University of Otago · Auckland · Victoria · Canterbury" },
    { opacity: opacity3, h1: "You Deserve World-Class Education", p: "What are you waiting for?" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {textBlocks.map((block, i) => (
        <motion.div key={i} style={{ opacity: block.opacity }} className="absolute text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-7xl text-white mb-4 tracking-[0.25em] uppercase">{block.h1}</h1>
          <p className="font-outfit text-gold tracking-[0.3em] uppercase text-sm md:text-lg">{block.p}</p>
        </motion.div>
      ))}

      <motion.div style={{ opacity: opacity4 }} className="absolute text-center px-4 flex flex-col items-center pointer-events-auto">
        <h1 className="font-cormorant text-5xl md:text-7xl text-white mb-4 tracking-[0.25em] uppercase">Your Future Starts Here</h1>
        <p className="font-outfit text-white/80 mb-8 tracking-widest">500+ students placed. 98% visa success rate.</p>
        <button className="bg-gold text-navy font-outfit font-bold py-4 px-10 tracking-[0.2em] hover:bg-white transition-colors">
          START YOUR JOURNEY →
        </button>
      </motion.div>
    </div>
  );
}
