"use client";
import { useState, useEffect } from "react";

const slides = ["/images/hall1.jpg", "/images/wedding.jpg", "/images/birthday.jpg"];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="h-64 md:h-96 overflow-hidden relative">
      <img src={slides[idx]} alt={`slide-${idx}`} className="w-full h-full object-cover transition-opacity duration-1000" />
    </div>
  );
}

