import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/herosectoin.jpg" alt="Hero" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Mist effect - vertically aligned on right bottom */}
      <div className="absolute right-6 md:right-8 bottom-0 z-10 pb-8 md:pb-12">
        <div className="flex flex-col items-center">
          {/* Horizontal line above the text */}
          <div className="h-px w-8 bg-white opacity-40 mb-3"></div>
          
          {/* Vertical text */}
          <div className="text-white text-[9px] tracking-[0.4em] opacity-60 writing-mode-vertical transform rotate-180">
            VOLCANOES NATIONAL PARK — MORNING MIST
          </div>
        </div>
      </div>

      {/* Content - Left bottom aligned */}
      <div className="absolute bottom-0 left-0 z-10 text-white px-6 md:px-12 lg:px-16 pb-8 md:pb-12 max-w-3xl">
        {/* RWANDA with extra spacing */}
        <div className="text-[11px] tracking-[0.5em] mb-4 md:mb-5 opacity-80 font-light">
          RWANDA
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.15] mb-3 md:mb-4">
          We didn&rsquo;t just<br />
          discover Rwanda.
        </h1>
        
        {/* Italic subheading */}
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light mb-6 md:mb-8 leading-[1.2]">
          We grew up here.
        </p>
        
        {/* Description */}
        <p className="text-xs md:text-sm max-w-md font-light leading-relaxed opacity-90">
          A Rwanda travel company created by photographers who grew up<br className="hidden sm:block" />
          in its forests and hills.
        </p>
      </div>

      {/* Scroll indicator - centered at bottom */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-[9px] tracking-[0.4em] mb-3 text-white text-center">SCROLL</div>
        <div className="w-px h-6 bg-white mx-auto opacity-50"></div>
      </div>
    </section>
  );
}
