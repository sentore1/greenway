export default function EncountersIntro() {
  return (
    <section id="encounters" className="py-24 md:py-32 px-6 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.3em] mb-8 text-neutral-600">ENCOUNTERS</div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              The Rwanda we know is not a list of activities. It is a country you enter slowly and leave changed.
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-neutral-700">
              We have built Green Way around the encounters that shaped us — the silences of ancient forests, the warmth of Rwandan welcome, the quality of light at dawn over the Virungas. Every journey we design begins here.
            </p>
            <p className="text-base md:text-lg italic leading-relaxed text-neutral-700">
              Choose how you want to meet it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
