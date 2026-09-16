import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Photography Experiences — Green Way Safaris",
  description: "Two ways to travel with a camera through Rwanda. Photography is how we grew up seeing this land.",
};

export default function PhotographyPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/kids.png"
          alt="Photography Experiences"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 text-white px-6 md:px-16 pb-12 max-w-3xl">
          <div className="text-[11px] tracking-[0.5em] mb-4 opacity-70 font-light">
            PHOTOGRAPHY EXPERIENCES
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            Photography is how<br />we grew up seeing Rwanda.
          </h1>
          <p className="text-lg font-light opacity-80 italic" style={{ fontFamily: "var(--font-cormorant)" }}>
            Travel with it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#f0ede6] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-700" style={{ fontFamily: "var(--font-cormorant)" }}>
            We offer two ways to bring a camera — and both of them change something.
          </p>
        </div>
      </section>

      {/* Experience 01 */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-[500px] md:h-auto min-h-[500px]">
            <Image
              src="/images/dult.png"
              alt="Photograph Your Journey"
              fill
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-neutral-50">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-500">EXPERIENCE 01</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant)" }}>
              Photograph Your Journey
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 max-w-md">
              Travel with one of us behind the lens. Quiet, unhurried days — your trip documented as it happens, by someone who knows the light.
            </p>
          </div>
        </div>
      </section>

      {/* Experience 02 */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
          {/* Content */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-16 order-2 md:order-1">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-400">EXPERIENCE 02</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant)" }}>
              The Photo Project
            </h2>
            <p className="text-lg leading-relaxed text-neutral-300 max-w-md" style={{ fontFamily: "var(--font-cormorant)" }}>
              We carry a portable printer into rural Rwanda, photograph the people we meet, and leave the prints in their hands. A journey where the gift is a photograph.
            </p>
          </div>
          {/* Image */}
          <div className="relative h-[500px] md:h-auto min-h-[500px] order-1 md:order-2">
            <Image
              src="/images/kids.png"
              alt="The Photo Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0ede6] py-20 md:py-28 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-light mb-6 text-neutral-800" style={{ fontFamily: "var(--font-cormorant)" }}>
            Ready to travel with a camera?
          </h3>
          <p className="text-base text-neutral-600 mb-10 leading-relaxed">
            Tell us which experience speaks to you and we'll build a journey around it.
          </p>
          <Link
            href="/#plan"
            className="inline-block text-[11px] tracking-[0.25em] border border-neutral-800 text-neutral-800 px-8 py-3 hover:bg-neutral-800 hover:text-white transition-all"
          >
            PLAN YOUR TRIP →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
