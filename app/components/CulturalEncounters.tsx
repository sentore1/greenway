import Image from "next/image";

export default function CulturalEncounters() {
  return (
    <section className="bg-neutral-900 text-white">
      {/* Full-width split: content left, image right, same height */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 px-10 md:px-16 py-24 md:py-32 flex flex-col justify-center">
          <div className="text-xs tracking-[0.3em] mb-8 text-amber-600">CULTURAL ENCOUNTERS</div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Meet the people and stories that make Rwanda what it is.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 max-w-sm">
            Culture is not a performance. These visits are an invitation into real places, real conversations and the quiet depth of Rwandan creative life.
          </p>
        </div>

        {/* Right: Image — same height as content */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image src="/images/IMG_1085.JPG.jpeg" alt="Cultural Encounters" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 right-4 text-white text-xs tracking-[0.2em] opacity-70">KIGALI</div>
        </div>
      </div>

      {/* Cultural offerings */}
      <div className="grid md:grid-cols-3 border-t border-neutral-200 bg-[#f0ede6] text-neutral-800">
        {[
          { title: "Museums", desc: "Walk the streets that carry Rwanda\u2019s history and memory." },
          { title: "Galleries", desc: "Step inside the studios and galleries where Rwanda\u2019s artists work today." },
          { title: "Home Visits", desc: "Share tea and conversation in a Kigali or village home. No performance \u2014 just real welcome." },
        ].map((item) => (
          <div key={item.title} className="px-10 md:px-12 py-12 border-b md:border-b-0 md:border-r border-neutral-200 last:border-0 space-y-4">
            <div className="w-8 h-px bg-amber-600" />
            <h3 className="text-xl font-light">{item.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
