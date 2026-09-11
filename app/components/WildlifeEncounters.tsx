"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function WildlifeEncounters() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/images/widlife/18.jpg",
    "/images/widlife/32.jpg",
    "/images/widlife/34.jpg",
    "/images/widlife/36.jpg",
    "/images/widlife/39.jpg",
    "/images/widlife/40.jpg",
    "/images/widlife/41.jpg",
    "/images/widlife/42.jpg",
    "/images/widlife/43.jpg",
    "/images/widlife/animal5.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };
  const encounters = [
    {
      number: "01",
      title: "Mountain Gorillas",
      description: "Encounter Rwanda's mountain gorillas in the mist of Volcanoes National Park."
    },
    {
      number: "02",
      title: "Chimpanzee Treks",
      description: "Follow chimpanzees deep into the ancient forests of Nyungwe."
    },
    {
      number: "03",
      title: "Golden Monkeys",
      description: "Seek the elusive golden monkeys that leap between the bamboo of Volcanoes."
    },
    {
      number: "04",
      title: "Game Drives",
      description: "Discover Rwanda's wild side across the savannahs of Akagera National Park."
    },
    {
      number: "05",
      title: "Birding",
      description: "More than 700 species call Rwanda's forests, lakes and swamps home."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#f0ede6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 mb-20 bg-[#e8e4d9]">
          {/* Left: Image Slider */}
          <div className="relative h-96 md:h-[600px] overflow-hidden">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={image} alt="Wildlife Encounter" fill className="object-cover" />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/30"></div>
            
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

            {/* Slide Indicators — small, bottom right */}
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
              WHERE EVERY ENCOUNTER IS UNREPEATABLE
            </div>
          </div>

          {/* Right: Content with background */}
          <div className="relative h-96 md:h-[600px] flex flex-col justify-center px-8 md:px-12">
            <div className="text-3xl tracking-[0.3em] mb-4 text-neutral-600 uppercase leading-relaxed">Wildlife<br />Encounters</div>
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
              Meet the wild that made this land sacred.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-neutral-700 mb-4">
              Rwanda&rsquo;s wildlife is intimate and ancient. These are not spectacles — they are encounters. Each one quiet, unhurried, and entirely itself.
            </p>
          </div>
        </div>

        {/* Encounters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {encounters.map((encounter, index) => (
            <div key={encounter.number} className="relative space-y-3">
              {/* Vertical line only on the left side of Game Drives (index 3) */}
              {index === 3 && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-300 hidden lg:block" style={{ left: '-1rem' }} />
              )}
              <div className="text-xs tracking-[0.3em] text-neutral-400">{encounter.number}</div>
              <h3 className="text-xl font-light">{encounter.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{encounter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
