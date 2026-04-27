"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL = 300;

const overlays = [
  { eyebrow: "New Zealand's Premier Education Consultancy", headline: "The World Is", italic: "Waiting For You", sub: "Your journey to world-class universities starts beyond these borders", btn: false },
  { eyebrow: "University of Otago · Auckland · Victoria · Canterbury", headline: "New Zealand's", italic: "Finest Universities", sub: "Step inside world-class campuses built for ambitious minds", btn: false },
  { eyebrow: "What are you waiting for?", headline: "You Deserve", italic: "World-Class Education", sub: "500+ students placed. 98% visa success. Life-changing outcomes.", btn: false },
  { eyebrow: "500+ Students Placed · 98% Visa Success Rate", headline: "Your Future", italic: "Starts Here", sub: "Expert counselling. Proven results. Beyond Borders. Beyond Limits.", btn: true },
];

export default function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgsRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 1; i <= TOTAL; i++) {
      const img = new window.Image();
      img.src = `/sequence-1/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      img.onload = img.onerror = () => {
        count++;
        setLoaded(count);
      };
      imgsRef.current[i] = img;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = (img: HTMLImageElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx || !img.naturalWidth) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const r = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const cx = (canvas.width - img.naturalWidth * r) / 2;
      const cy = (canvas.height - img.naturalHeight * r) / 2;
      ctx.filter = "contrast(1.06) saturate(1.12) brightness(0.88)";
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, cx, cy, img.naturalWidth * r, img.naturalHeight * r);
      ctx.filter = "none";
    };

    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const progress = Math.min(Math.max(window.scrollY / (hero.offsetHeight - window.innerHeight), 0), 1);
      const frame = Math.min(Math.max(Math.ceil(progress * TOTAL), 1), TOTAL);
      const img = imgsRef.current[frame];
      if (img?.complete && img.naturalWidth) draw(img);
      setActive(frame <= 75 ? 0 : frame <= 150 ? 1 : frame <= 225 ? 2 : 3);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pct = Math.round((loaded / TOT