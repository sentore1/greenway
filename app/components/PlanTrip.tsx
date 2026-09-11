"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function PlanTrip() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    when: "",
    dream: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("ok");
        setFormData({ name: "", email: "", when: "", dream: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="plan" className="py-24 md:py-32 px-6 md:px-16 bg-[#f0ede6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <div className="text-xs tracking-[0.3em] mb-8 text-neutral-500">PLAN YOUR TRIP</div>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Tell us what you&rsquo;re<br />dreaming of.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 mb-12 max-w-sm">
              Every Green Way journey is personal. Tell us a little about yourself,
              when you&rsquo;d like to come, and what you&rsquo;d love to experience.
              We&rsquo;ll take it from there.
            </p>
            <div className="space-y-2 text-sm text-neutral-500">
              <p>Or reach us directly — we reply quickly.</p>
              <p>
                <a
                  href="mailto:hello@greenwaysafaris.com"
                  className="underline hover:no-underline"
                >
                  hello@greenwaysafaris.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="tel:+250788694331"
                  className="underline hover:no-underline"
                >
                  +250 788 694 331
                </a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          {status === "ok" ? (
            <div className="flex flex-col justify-center py-16 space-y-4">
              <div className="w-8 h-px bg-neutral-800" />
              <h3 className="text-2xl font-light text-neutral-800">
                Thank you.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                We&rsquo;ve received your enquiry. Gadi or Mussa will be in touch
                personally — usually within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs tracking-[0.2em] text-neutral-500 underline hover:no-underline w-fit"
              >
                SEND ANOTHER ENQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-b border-neutral-300 pb-2">
                <label className="block text-xs tracking-[0.2em] mb-3 text-black">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400"
                  required
                />
              </div>

              <div className="border-b border-neutral-300 pb-2">
                <label className="block text-xs tracking-[0.2em] mb-3 text-black">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400"
                  required
                />
              </div>

              <div className="border-b border-neutral-300 pb-2">
                <label className="block text-xs tracking-[0.2em] mb-3 text-black">
                  WHEN ARE YOU THINKING OF COMING?
                </label>
                <input
                  type="text"
                  name="when"
                  value={formData.when}
                  onChange={handleChange}
                  placeholder="Month, year, or a rough window"
                  className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400"
                />
              </div>

              <div className="border-b border-neutral-300 pb-2">
                <label className="block text-xs tracking-[0.2em] mb-3 text-black">
                  WHAT ARE YOU DREAMING OF?
                </label>
                <textarea
                  name="dream"
                  value={formData.dream}
                  onChange={handleChange}
                  placeholder="Tell us about the experience you have in mind — the more you share, the better we can shape your journey."
                  rows={4}
                  className="w-full bg-transparent focus:outline-none text-sm text-neutral-700 placeholder-neutral-400 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-4 py-3">
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-neutral-800 text-white px-8 py-4 text-[10px] tracking-[0.2em] hover:bg-neutral-700 transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "SENDING…" : "SEND ENQUIRY →"}
                </button>
                <p className="text-xs text-neutral-400 italic">
                  Every enquiry is read and responded to by Gadi or Mussa personally.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
