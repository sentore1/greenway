export default function EncountersIntro() {
  return (
    <section id="encounters" className="py-24 md:py-36 px-6 md:px-16 bg-[#f0ede6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] tracking-[0.3em] mb-10 text-neutral-500">ENCOUNTERS</div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.25] text-neutral-800" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300 }}>
            The Rwanda we know is not a list of activities. It is a country you enter slowly and leave changed.
          </h2>

          <div className="md:pt-16 space-y-6">
            <p className="text-sm leading-relaxed text-neutral-600">
              We have built Green Way around the encounters that shaped us — the silences of ancient forests, the warmth of Rwandan welcome, the quality of light at dawn over the Virungas. Every journey we design begins here.
            </p>
            <p className="text-sm italic text-neutral-600">
              Choose how you want to meet it.
            </p>
          </div>
        </div>

        <div className="mt-24 flex items-center gap-4">
          <div className="flex-1 h-px bg-neutral-300" />
          <div className="text-[10px] tracking-[0.3em] text-neutral-400">SAFARIS</div>
          <div className="flex-1 h-px bg-neutral-300" />
        </div>
      </div>
    </section>
  );
}
