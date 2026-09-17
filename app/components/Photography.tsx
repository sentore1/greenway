"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const YOUTUBE_ID = "O6aukeNQAM8";

const slides = [
  { type: "video" as const, label: "PHOTOGRAPHY EXPERIENCE" },
  { type: "image" as const, src: "/images/photoproject/kids.png", label: "THE PHOTO PROJECT" },
  { type: "image" as const, src: "/images/photoproject/dult.png", label: "THE PHOTO PROJECT" },
];

export default function Photography() {
  const [current, setCurrent] = useState(0);
  const [videoActive, setVideoActive] = useState(true);

  useEffect(() => {
    if (videoActive) return;
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        if (slides[next].type === "video") setVideoActive(true);
        else setVideoActive(false);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [videoActive]);

  function goTo(index: number) {
    setCurrent(index);
    setVideoActive(slides[index].type === "video");
  }

  return (
    <section id="photography" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_3fr] gap-0 items-center mb-20 bg-slate-700">
          {/* Left: Content */}
          <div className="text-white p-12 md:p-16 min-h-[500px] flex flex-col justify-center">
            <div className="text-xs tracking-[0.3em] mb-8 text-neutral-300">EXPERIENCE 02</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              The Photo Project
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              We carry a portable printer into rural Rwanda, photograph the people we meet, and leave the prints in their hands. A journey where the gift is a photograph.
            </p>
          </div>

          {/* Right: Slideshow + Video */}
          <div className="relative h-96 md:h-[500px] overflow-hidden bg-black">

            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {slide.type === "image" ? (
                  <>
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      className="object-cover"
                    />

                  </>
                ) : (
                  /* YouTube — oversized + centered to mimic object-cover */
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=${i === current ? 1 : 0}&mute=1&rel=0&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&modestbranding=1`}
                        title="Photography Experience"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ width: "177.78vh", height: "100vh", minWidth: "100%", minHeight: "56.25vw" }}
                      />
                    </div>

                  </>
                )}
              </div>
            ))}

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-4 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-white w-4 h-1.5"
                      : "bg-white/50 w-2 h-2 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* WATCH button on image slide */}
            {slides[current]?.type === "image" && (
              <button
                onClick={() => goTo(1)}
                className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-[10px] tracking-[0.15em] px-3 py-1.5 transition-all"
                aria-label="Watch video"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                WATCH
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
