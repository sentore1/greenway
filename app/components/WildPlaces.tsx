"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function WildPlaces() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/images/inhouse/Image.webp",
    "/images/inhouse/NH_OO_Drone_Resort_4894_MASTER.webp",
    "/images/inhouse/oonh-resort-tea-lounge-hallway-3.webp",
    "/images/inhouse/OO_GorillasNest_Exteriors_Villa_Wide_17041_MASTER.webp",
    "/images/inhouse/OO_GorillasNest_Exterior_Pathway_1320_MASTER.webp",
    "/images/inhouse/OO_GorillasNest_F&B_Outdoor_Dining_48_MASTER_HR.webp",
    "/images/inhouse/OO_NyungweHouse_Accommodation_Suite_Balcony_Wide_0261_MASTER.webp",
    "/images/inhouse/OO_NyungweHouse_F&B_Private_Dining_Deck_Wide_0643_MASTER.webp",
    "/images/inhouse/Sabyinyo-rwanda-cottage-exterior.jpg",
    "/images/inhouse/Singita-Kwitonda-Lodge-Bathroom-1024x684.jpg",
    "/images/inhouse/Singita-Kwitonda-Lodge-Bedroom-1024x684.jpg",
    "/images/inhouse/Singita-Kwitonda-Lodge-Exterior-1.jpg",
    "/images/inhouse/SVNP_ROOM_Kwitonda_Lodge_Bedroom_Ross_Couper-3-1024x682.jpg",
    "/images/inhouse/wilderness-sabyinyo-cottage-suite.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const lodges = [
    { number: "01", name: "One & Only Gorillas Nest", location: "Volcanoes National Park" },
    { number: "02", name: "Singita Lodge", location: "Kwagizano, the rainshadow of volcanoes" },
    { number: "03", name: "Wilderness Sabyinyo", location: "the foothills of the Virungas" },
    { number: "04", name: "Bisate", location: "a lodge raised in a reforested crater" },
    { number: "05", name: "Magashi", location: "Akagera's wild eastern wilderness" }
  ];

  return (
    <section id="wild-places" className="bg-[#f0ede6] py-16 md:py-24">
      {/* Full-width split: slider left, content right */}
      <div className="flex flex-col md:flex-row mx-6 md:mx-16">
        {/* Left: Image Slider */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={image} alt="Wild Place" fill className="object-cover" />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots — small, bottom right */}
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


        </div>

        {/* Right: Content panel */}
        <div className="w-full md:w-1/2 px-10 md:px-16 py-24 md:py-32 flex flex-col justify-center bg-[#e8e4db]">
          <div className="text-xs tracking-[0.3em] mb-8 text-amber-700">WILD PLACES</div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-neutral-800" style={{ fontFamily: 'var(--font-cormorant)' }}>
            These are the wild places we call home on the road.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 max-w-xl">
            Great journeys sleep well. Spectacular lodges that are themselves the encounter — chosen for where they sit in the landscape, not just the rooms.
          </p>
        </div>
      </div>

      {/* Lodges Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 px-10 md:px-16 py-16 border-t border-neutral-300">
        {lodges.map((lodge) => (
          <div key={lodge.number} className="space-y-3">
            <div className="text-xs tracking-[0.3em] text-neutral-400">{lodge.number}</div>
            <h3 className="text-xl font-light text-neutral-800">{lodge.name}</h3>
            <p className="text-sm italic leading-relaxed text-neutral-500">{lodge.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
