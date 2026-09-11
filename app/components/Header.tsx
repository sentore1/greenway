"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [encountersOpen, setEncountersOpen] = useState(false);
  const [mobileEncountersOpen, setMobileEncountersOpen] = useState(false);

  const encounterLinks = [
    { href: "#wildlife", label: "WILDLIFE" },
    { href: "#cultural", label: "CULTURAL" },
    { href: "#wild-places", label: "WILD PLACES" },
    { href: "#photography", label: "PHOTOGRAPHY EXPERIENCES" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-4 mt-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Green Way Safaris" width={240} height={96} className="object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {/* Encounters dropdown — full wrapper captures hover over both button and menu */}
          <div
            className="relative py-4 -my-4"
            onMouseEnter={() => setEncountersOpen(true)}
            onMouseLeave={() => setEncountersOpen(false)}
          >
            <button className="text-white text-[11px] tracking-[0.2em] hover:opacity-70 transition-opacity font-sans flex items-center gap-1">
              ENCOUNTERS
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${encountersOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {encountersOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-lg">
                {encounterLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-5 py-3 text-neutral-800 text-[10px] tracking-[0.15em] hover:bg-neutral-100 transition-colors font-sans border-b border-neutral-200 last:border-b-0 group"
                    onClick={() => setEncountersOpen(false)}
                  >
                    {item.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 text-xs">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#story" className="text-white text-[11px] tracking-[0.2em] hover:opacity-70 transition-opacity font-sans">
            OUR STORY
          </Link>
          <Link href="#impact" className="text-white text-[11px] tracking-[0.2em] hover:opacity-70 transition-opacity font-sans">
            IMPACT
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="#plan"
            className="text-white text-[10px] tracking-[0.2em] border border-white px-6 py-2 hover:bg-white hover:text-neutral-900 transition-all font-sans"
          >
            PLAN YOUR TRIP →
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 text-white p-6 space-y-4">
          {/* Mobile Encounters accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full text-[11px] tracking-[0.2em] font-sans"
              onClick={() => setMobileEncountersOpen(!mobileEncountersOpen)}
            >
              ENCOUNTERS
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${mobileEncountersOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileEncountersOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {encounterLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-[10px] tracking-[0.15em] text-white/80 font-sans"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileEncountersOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#story" className="block text-[11px] tracking-[0.2em] font-sans" onClick={() => setIsOpen(false)}>
            OUR STORY
          </Link>
          <Link href="#impact" className="block text-[11px] tracking-[0.2em] font-sans" onClick={() => setIsOpen(false)}>
            IMPACT
          </Link>
          <Link href="#plan" className="block text-[10px] tracking-[0.2em] font-sans" onClick={() => setIsOpen(false)}>
            PLAN YOUR TRIP →
          </Link>
        </div>
      )}
    </header>
  );
}
