import Image from "next/image";

export default function WildPlaces() {
  const lodges = [
    { number: "01", name: "One & Only Gorillas Nest", location: "Volcanoes National Park" },
    { number: "02", name: "Singita Lodge", location: "Kwagizano, the rainshadow of volcanoes" },
    { number: "03", name: "Wilderness Sabyinyo", location: "the foothills of the Virungas" },
    { number: "04", name: "Bisate", location: "a lodge raised in a reforested crater" },
    { number: "05", name: "Magashi", location: "Akagera's wild eastern wilderness" }
  ];

  return (
    <section className="bg-[#f0ede6] py-16 md:py-24">
      {/* Full-width split: image left, content right */}
      <div className="flex flex-col md:flex-row mx-6 md:mx-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image src="/images/42.jpg" alt="Wild Places" fill className="object-cover" />
          <div className="absolute bottom-4 left-4 text-white text-xs tracking-[0.2em] opacity-70">VIRUNGA FOOTHILLS</div>
        </div>

        {/* Right: Content panel with distinct bg */}
        <div className="w-full md:w-1/2 px-10 md:px-16 py-24 md:py-32 flex flex-col justify-center bg-[#e8e4db]">
          <div className="text-xs tracking-[0.3em] mb-8 text-amber-700">WILD PLACES</div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-neutral-800" style={{ fontFamily: 'var(--font-cormorant)' }}>
            These are the wild places we call home on the road.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 max-w-xl">
            Great journeys sleep well. Spectacular lodges that are themselves the encounter — chosen for where they sit in the landscape, not just the rooms.
          </p>
        </div>
      </div>

      {/* Lodges Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 px-10 md:px-16 py-16 border-t border-neutral-300">
        {lodges.map((lodge) => (
          <div key={lodge.number} className="space-y-3">
            <div className="text-xs tracking-[0.3em] text-neutral-400">{lodge.number}</div>
            <h3 className="text-xl font-light text-neutral-800">{lodge.name}</h3>
            <p className="text-sm italic leading-relaxed text-neutral-500">{lodge.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
