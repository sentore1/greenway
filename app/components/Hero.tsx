export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-700 to-neutral-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Mist effect */}
      <div className="absolute top-0 left-0 right-0 text-white text-xs tracking-[0.3em] text-center py-4 z-10">
        <div className="opacity-60">VOLCANOES NATIONAL PARK — MORNING MIST</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 max-w-5xl">
        <div className="text-xs tracking-[0.3em] mb-8 opacity-80">RWANDA</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
          We didn&rsquo;t just<br />
          discover Rwanda.
        </h1>
        <p className="text-4xl md:text-5xl lg:text-6xl italic font-light mb-12">
          We grew up here.
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          A Rwanda travel company created by photographers who grew up<br className="hidden md:block" />
          in its forests and hills.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="text-xs tracking-[0.3em] mb-4">SCROLL</div>
          <div className="w-px h-16 bg-white mx-auto opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
