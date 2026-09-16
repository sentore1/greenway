"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    src: "/images/herosection slider/1.jpeg",
    caption: "WILD RWANDA",
  },
  {
    src: "/images/herosection slider/2.jpeg",
    caption: "FOREST SOULS",
  },
  {
    src: "/images/herosection slider/3.jpeg",
    caption: "GOLDEN HORIZONS",
  },
  {
    src: "/images/herosection slider/4.jpeg",
    caption: "OPEN PLAINS",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  function goTo(index: number) {
    if (index === current || transitioning) return;
    setPrev(current);
    setCurrent(index);
    setTransitioning(true);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 800);
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slide images */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 z-0 transition-opacity duration-[800ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.caption}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black opacity-30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />
        </div>
      ))}

      {/* Vertical caption label — right bottom */}
      <div className="absolute right-6 md:right-8 bottom-0 z-10 pb-20 md:pb-24">
        <div className="flex flex-col items-center">
          <div className="h-px w-8 bg-white opacity-40 mb-3" />
          <div className="text-white text-[9px] tracking-[0.4em] opacity-60 writing-mode-vertical transform rotate-180">
            {SLIDES[current].caption}
          </div>
        </div>
      </div>

      {/* Content — left bottom */}
      <div className="absolute bottom-0 left-0 z-10 text-white px-6 md:px-12 lg:px-16 pb-8 md:pb-12 max-w-3xl">
        <div className="text-[11px] tracking-[0.5em] mb-4 md:mb-5 opacity-80 font-light">
          RWANDA
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.15] mb-3 md:mb-4">
          We didn&rsquo;t just<br />
          discover Rwanda.
        </h1>

        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light mb-6 md:mb-8 leading-[1.2]">
          We grew up here.
        </p>

        <p className="max-w-md font-light leading-relaxed opacity-90 mb-8" style={{ fontSize: "19px" }}>
          A Rwanda travel company created by photographers who grew up in its forests and hills.<br className="hidden sm:block" />
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-10 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="text-[9px] tracking-[0.4em] text-white opacity-60">SCROLL</div>
        <div className="w-px h-6 bg-white opacity-50" />
      </div>
    </section>
  );
}
