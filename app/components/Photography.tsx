import Image from "next/image";

export default function Photography() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-center mb-20 bg-slate-700">
          {/* Left: Content */}
          <div className="text-white p-12 md:p-16 min-h-[500px] flex flex-col justify-center">
            <div className="text-xs tracking-[0.3em] mb-8 text-neutral-300">PHOTOGRAPHY EXPERIENCES</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Photography is how we grew up seeing Rwanda. Travel with it.
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              We offer two ways to bring a camera — and both of them change something.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image src="/images/kids.png" alt="Photography Experience" fill className="object-cover" />
            <div className="absolute bottom-4 right-4 text-white text-xs tracking-[0.2em] opacity-70">THE PHOTO PROJECT</div>
          </div>
        </div>

        {/* Experiences */}
        <div className="grid md:grid-cols-2 gap-0 border-t border-neutral-300">
          <div className="bg-neutral-50 p-12 md:p-16 border-r border-neutral-300">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-500">EXPERIENCE 01</div>
            <h3 className="text-3xl font-light mb-6">Photograph Your Journey</h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Travel with one of us behind the lens. Quiet, unhurried days — your trip documented as it happens, by someone who knows the light.
            </p>
          </div>

          <div className="bg-black text-white p-12 md:p-16">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-400">EXPERIENCE 02</div>
            <h3 className="text-3xl font-light mb-6">The Photo Project</h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              We carry a portable printer into rural Rwanda, photograph the people we meet, and leave the prints in their hands. A journey where the gift is a photograph.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
