"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/kids.png", label: "THE PHOTO PROJECT" },
  { src: "/images/dult.png", label: "PHOTOGRAPHY EXPERIENCE" },
];

export default function Photography() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="photography" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-center mb-20 bg-slate-700">
          {/* Left: Content */}
          <div className="text-white p-12 md:p-16 min-h-[500px] flex flex-col justify-center">
            <div className="text-xs tracking-[0.3em] mb-8 text-neutral-300">PHOTOGRAPHY EXPERIENCES</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Photography is how we grew up seeing Rwanda. Travel with it.
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              We offer two ways to bring a camera — and both of them change something.
            </p>
          </div>

          {/* Right: Slideshow */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Slide label */}
            <div className="absolute bottom-4 right-4 text-white text-xs tracking-[0.2em] opacity-70 z-10">
              {slides[current].label}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Experiences */}
        <div className="grid md:grid-cols-2 gap-0 border-t border-neutral-300">
          <div className="bg-neutral-50 p-12 md:p-16 border-r border-neutral-300">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-500">EXPERIENCE 01</div>
            <h3 className="text-3xl font-light mb-6">Photograph Your Journey</h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Travel with one of us behind the lens. Quiet, unhurried days — your trip documented as it happens, by someone who knows the light.
            </p>
          </div>

          <div className="bg-black text-white p-12 md:p-16">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-400">EXPERIENCE 02</div>
            <h3 className="text-3xl font-light mb-6">The Photo Project</h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              We carry a portable printer into rural Rwanda, photograph the people we meet, and leave the prints in their hands. A journey where the gift is a photograph.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
