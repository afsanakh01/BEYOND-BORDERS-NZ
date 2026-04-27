"use client";
import { useRef, useEffect } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import OverlayText from './OverlayText';

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, progress } = useImagePreloader('/sequence-1/', 300);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, 300]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");

    const render = () => {
      const index = Math.floor(frameIndex.get());
      const img = images[index] || images[1];

      if (ctx && img) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const x = (canvas.width - img.width * ratio) / 2;
        const y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
      }
      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [images, frameIndex]);

  if (progress < 100) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-navy">
        <h2 className="font-cormorant text-gold text-2xl mb-4 tracking-widest">BEYOND BORDERS NZ</h2>
        <div className="w-64 h-1 bg-navyMid overflow-hidden">
          <div className="h-full bg-gold transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80" />
        <OverlayText progress={scrollYProgress} />
      </div>
    </div>
  );
}
