"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-white tracking-[0.3em] text-sm font-light">
          GREEN WAY
          <div className="text-xs tracking-[0.4em]">Safaris</div>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link href="#encounters" className="text-white text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
            ENCOUNTERS
          </Link>
          <Link href="#story" className="text-white text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
            OUR STORY
          </Link>
          <Link href="#impact" className="text-white text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
            IMPACT
          </Link>
          <Link 
            href="#plan" 
            className="text-white text-sm tracking-[0.2em] border border-white px-6 py-2 hover:bg-white hover:text-neutral-900 transition-all"
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
          <Link href="#encounters" className="block text-sm tracking-[0.2em]" onClick={() => setIsOpen(false)}>
            ENCOUNTERS
          </Link>
          <Link href="#story" className="block text-sm tracking-[0.2em]" onClick={() => setIsOpen(false)}>
            OUR STORY
          </Link>
          <Link href="#impact" className="block text-sm tracking-[0.2em]" onClick={() => setIsOpen(false)}>
            IMPACT
          </Link>
          <Link href="#plan" className="block text-sm tracking-[0.2em]" onClick={() => setIsOpen(false)}>
            PLAN YOUR TRIP →
          </Link>
        </div>
      )}
    </header>
  );
}
