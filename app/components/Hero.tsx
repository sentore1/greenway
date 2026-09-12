"use client";

import Image from "next/image";
import { useState } from "react";

const YOUTUBE_ID = "za3V2Awnla8";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herosectoin.jpg"
            alt="Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
        </div>

        {/* Vertical label — right bottom */}
        <div className="absolute right-6 md:right-8 bottom-0 z-10 pb-8 md:pb-12">
          <div className="flex flex-col items-center">
            <div className="h-px w-8 bg-white opacity-40 mb-3" />
            <div className="text-white text-[9px] tracking-[0.4em] opacity-60 writing-mode-vertical transform rotate-180">
              VOLCANOES NATIONAL PARK — MORNING MIST
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

          <p className="text-xs md:text-sm max-w-md font-light leading-relaxed opacity-90 mb-8">
            A Rwanda travel company created by photographers who grew up<br className="hidden sm:block" />
            in its forests and hills.
          </p>

          {/* Watch video button */}
          <button
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-3 group"
            aria-label="Watch our story"
          >
            {/* Play circle */}
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/60 group-hover:border-white group-hover:bg-white/10 transition-all">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-xs tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
              WATCH OUR STORY
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="text-[9px] tracking-[0.4em] mb-3 text-white text-center">SCROLL</div>
          <div className="w-px h-6 bg-white mx-auto opacity-50" />
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-xs tracking-[0.2em] flex items-center gap-2 transition-colors"
              aria-label="Close video"
            >
              CLOSE ✕
            </button>

            {/* 16:9 iframe */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Green Way Safaris — Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
