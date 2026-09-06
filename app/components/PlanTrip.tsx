"use client";

import { useState } from "react";

export default function PlanTrip() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    when: "",
    dream: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="plan" className="py-24 md:py-32 px-6 md:px-16 bg-[#f0ede6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <div className="text-xs tracking-[0.3em] mb-8 text-neutral-500">PLAN YOUR TRIP</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Tell us what you&rsquo;re<br />dreaming of.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 mb-12 max-w-sm">
              Every Green Way journey is personal. Tell us a little about yourself, when you&rsquo;d like to come, and what you&rsquo;d love to experience. We&rsquo;ll take it from there.
            </p>
            <div className="space-y-2 text-sm text-neutral-500">
              <p>Or reach us directly — we reply quickly.</p>
              <p><a href="mailto:hello@greenwaysafaris.com" className="underline hover:no-underline">hello@greenwaysafaris.com</a></p>
              <p>WhatsApp: <a href="tel:+250788000000" className="underline hover:no-underline">+250 788 694 331</a></p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="border-b border-neutral-300 pb-2">
              <label className="block text-xs tracking-[0.2em] mb-3 text-black">FULL NAME</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400" required />
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <label className="block text-xs tracking-[0.2em] mb-3 text-black">EMAIL</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400" required />
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <label className="block text-xs tracking-[0.2em] mb-3 text-black">WHEN ARE YOU THINKING OF COMING?</label>
              <input type="text" name="when" value={formData.when} onChange={handleChange} placeholder="Month, year, or a rough window" className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400" />
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <label className="block text-xs tracking-[0.2em] mb-3 text-black">WHAT ARE YOU DREAMING OF?</label>
              <textarea name="dream" value={formData.dream} onChange={handleChange} placeholder="Tell us about the experience you have in mind — the more you share, the better we can shape your journey." rows={4} className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400 resize-none" />
            </div>

            <div className="space-y-4">
              <button type="submit" className="bg-neutral-800 text-white px-8 py-4 text-[10px] tracking-[0.2em] hover:bg-neutral-700 transition-colors">
                SEND ENQUIRY →
              </button>
              <p className="text-xs text-neutral-400 italic">Every enquiry is read and responded to by Gadi or Mussa personally.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
