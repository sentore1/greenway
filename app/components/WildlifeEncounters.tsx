import Image from "next/image";

export default function WildlifeEncounters() {
  const encounters = [
    {
      number: "01",
      title: "Mountain Gorillas",
      description: "Encounter Rwanda's mountain gorillas in the mist of Volcanoes National Park."
    },
    {
      number: "02",
      title: "Chimpanzee Treks",
      description: "Follow chimpanzees deep into the ancient forests of Nyungwe."
    },
    {
      number: "03",
      title: "Golden Monkeys",
      description: "Seek the elusive golden monkeys that leap between the bamboo of Volcanoes."
    },
    {
      number: "04",
      title: "Game Drives",
      description: "Discover Rwanda's wild side across the savannahs of Akagera National Park."
    },
    {
      number: "05",
      title: "Birding",
      description: "More than 700 species call Rwanda's forests, lakes and swamps home."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#f0ede6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left: Image */}
          <div className="relative h-96 md:h-[600px]">
            <Image src="/images/9.jpg" alt="Volcanoes National Park" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-[0.2em] opacity-80">
              VOLCANOES NATIONAL PARK
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <div className="text-xs tracking-[0.3em] mb-8 text-neutral-600">WILDLIFE ENCOUNTERS</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Meet the wild that made this land sacred.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-neutral-700 mb-4">
              Rwanda&rsquo;s wildlife is intimate and ancient. These are not spectacles — they are encounters. Each one quiet, unhurried, and entirely itself.
            </p>
          </div>
        </div>

        {/* Encounters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {encounters.map((encounter) => (
            <div key={encounter.number} className="space-y-3">
              <div className="text-xs tracking-[0.3em] text-neutral-400">{encounter.number}</div>
              <h3 className="text-xl font-light">{encounter.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{encounter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
