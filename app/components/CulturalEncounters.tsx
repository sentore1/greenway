"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CulturalEncounters() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/images/culture/a01e05166009d63863bd4fbf280359d9.jpg",
    "/images/culture/Image.webp",
    "/images/culture/oonh-resort-tea-lounge-hallway-3.webp",
    "/images/culture/phildsc4041.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <section id="cultural" className="bg-neutral-900 text-white">
      {/* Full-width split: content left, slider right */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 px-10 md:px-16 py-24 md:py-32 flex flex-col justify-center">
          <div className="text-2xl tracking-[0.3em] mb-8 text-amber-600 uppercase leading-relaxed">Cultural<br />Encounters</div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Meet the people and stories that make Rwanda what it is.
          </h2>
          <p className="leading-relaxed text-neutral-300 max-w-sm" style={{ fontSize: "19px" }}>
            Culture is not a performance. These visits are an invitation into real places, real conversations and the quiet depth of Rwandan creative life.
          </p>
        </div>

        {/* Right: Image Slider */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={image} alt="Cultural Encounter" fill className="object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators — small, bottom right */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-4" : "bg-white/50 w-1.5"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-4 left-4 text-white text-xs tracking-[0.2em] opacity-80">
            WHERE CULTURE LIVES
          </div>
        </div>
      </div>

      {/* Cultural offerings */}
      <div className="grid md:grid-cols-3 border-t border-neutral-200 bg-[#f0ede6] text-neutral-800">
        {[
          { title: "Museums", desc: "Walk the streets that carry Rwanda\u2019s history and memory." },
          { title: "Galleries", desc: "Step inside the studios and galleries where Rwanda\u2019s artists work today." },
          { title: "Home Visits", desc: "Share tea and conversation in a Kigali or village home. No performance \u2014 just real welcome." },
        ].map((item) => (
          <div key={item.title} className="px-10 md:px-12 py-12 border-b md:border-b-0 md:border-r border-neutral-200 last:border-0 space-y-4">
            <div className="w-8 h-px bg-amber-600" />
            <h3 className="text-xl font-light">{item.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
