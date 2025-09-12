"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: number;
  src: string;
  alt: string;
};

export function Hero() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);

  // Fetch hero images dynamically
  useEffect(() => {
    async function fetchSlides() {
      const res = await fetch("/api/hero");
      const data = await res.json();
      setSlides(data);
    }
    fetchSlides();
  }, []);

  if (slides.length === 0) {
    return <p className="text-center py-10">Loading hero...</p>;
  }

  const total = slides.length;

  // Circular navigation (simplified)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="relative w-full h-full">
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          fill
          priority
          className="object-cover transition-all duration-500"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-md"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-md"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => {
          const isActive = current === index;
          return (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                isActive ? "bg-black" : "bg-gray-400"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
