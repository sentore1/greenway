import Image from "next/image";

export default function OurStory() {
  return (
    <section id="story" className="bg-[#f0ede6]">

      {/* Section label + headline */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="text-[11px] tracking-[0.4em] mb-5 text-neutral-500">OUR STORY</div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-neutral-800" style={{ fontFamily: "var(--font-cormorant)" }}>
          We didn&rsquo;t just discover Rwanda.<br />
          <span className="italic">We grew up here.</span>
        </h2>
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-200">

        {/* Row 1 — Image left, Imbabazi right */}
        <div className="relative h-[420px] md:h-[580px] overflow-hidden">
          <Image
            src="/images/kids.png"
            alt="Imbabazi orphanage"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-10 md:px-14 py-16 bg-[#f0ede6] border-l border-neutral-200">
          <div className="text-[10px] tracking-[0.35em] mb-4 text-amber-700">IMBABAZI</div>
          <h3 className="text-3xl md:text-4xl font-light mb-5 text-neutral-800 leading-snug" style={{ fontFamily: "var(--font-cormorant)" }}>
            Where our story begins.
          </h3>
          <p className="text-base leading-relaxed text-neutral-600 mb-6">
            Our story begins at Imbabazi, the orphanage founded by Roz Carr after the 1994 Genocide against the Tutsi. This is where Gadi and Mussa grew up.
          </p>
          <div className="flex gap-4 text-[11px] tracking-[0.2em]">
            <a
              href="https://www.camerakids.photos/imbabazi"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 text-neutral-800 px-5 py-2 hover:bg-neutral-800 hover:text-white transition-all"
            >
              LEARN MORE →
            </a>
          </div>
        </div>

        {/* Row 2 — The Camera left, Image right */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-16 bg-[#e8e4d9] border-t border-neutral-200">
          <div className="text-[10px] tracking-[0.35em] mb-4 text-amber-700">THE CAMERA</div>
          <h3 className="text-3xl md:text-4xl font-light mb-5 text-neutral-800 leading-snug" style={{ fontFamily: "var(--font-cormorant)" }}>
            A way of seeing, not just documenting.
          </h3>
          <p className="text-base leading-relaxed text-neutral-600">
            As children we were given cameras and taught to photograph the world around us. Photography became more than a way of documenting our lives — it became a way of understanding who we were, where we came from, and how we saw our country.
          </p>
        </div>
        <div className="relative h-[420px] md:h-[580px] overflow-hidden border-t border-l border-neutral-200">
          <Image
            src="/images/photoproject/IMG_9522.JPG.jpeg"
            alt="The Camera — children with cameras"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 3 — Image left, The Journey right */}
        <div className="relative h-[650px] md:h-[900px] overflow-hidden border-t border-neutral-200">
          <Image
            src="/images/photoproject/IMG_9703.JPG.jpeg"
            alt="The Journey"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-10 md:px-14 py-24 bg-[#f0ede6] border-t border-l border-neutral-200">
          <div className="text-[10px] tracking-[0.35em] mb-4 text-amber-700">THE JOURNEY</div>
          <h3 className="text-3xl md:text-4xl font-light mb-5 text-neutral-800 leading-snug" style={{ fontFamily: "var(--font-cormorant)" }}>
            Those cameras became our profession.
          </h3>
          <p className="text-base leading-relaxed text-neutral-600 mb-6">
            Today we are photographers, filmmakers and guides — and we created Green Way Safaris to share the Rwanda we know with people from around the world.
          </p>
          <a
            href="http://camerakids.photos/about-the-project"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start border border-neutral-800 text-neutral-800 text-[11px] tracking-[0.2em] px-5 py-2 hover:bg-neutral-800 hover:text-white transition-all"
          >
            ABOUT THE PROJECT →
          </a>
        </div>

      </div>
    </section>
  );
}
