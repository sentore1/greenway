export default function OurStory() {
  return (
    <section id="story" className="bg-neutral-900 text-white">
      {/* Hero */}
      <div className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] mb-8 text-neutral-400">OUR STORY</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            We didn&rsquo;t just discover Rwanda.
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl italic font-light">
            We grew up here.
          </p>
        </div>
      </div>

      {/* Story sections */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column */}
          <div className="space-y-16">
            {/* Imbabazi */}
            <div>
              <div className="text-xs tracking-[0.3em] mb-4 text-neutral-400 font-bold">IMBABAZI</div>
              <p className="text-base leading-relaxed text-neutral-300">
                Our story begins at Imbabazi, the orphanage founded by Roz Carr after the 1994 Genocide against the Tutsi. This is where Gadi and Mussa grew up.
              </p>
            </div>

            {/* The Journey */}
            <div>
              <div className="text-xs tracking-[0.3em] mb-4 text-neutral-400 font-bold">THE JOURNEY</div>
              <p className="text-base leading-relaxed text-neutral-300">
                Those cameras became our profession. Today we are photographers, filmmakers and guides — and we created Green Way Safaris to share the Rwanda we know with people from around the world.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-16">
            {/* The Camera */}
            <div>
              <div className="text-xs tracking-[0.3em] mb-4 text-neutral-400 font-bold">THE CAMERA</div>
              <p className="text-base leading-relaxed text-neutral-300 mb-4">
                As children we were given cameras and taught to photograph the world around us.
              </p>
              <p className="text-base leading-relaxed text-neutral-300">
                Photography became more than a way of documenting our lives. It became a way of understanding who we were, where we came from, and how we saw our country.
              </p>
            </div>

            {/* See Rwanda */}
            <div>
              <div className="text-xs tracking-[0.3em] mb-4 text-neutral-400 font-bold">SEE RWANDA THROUGH OUR EYES</div>
              <p className="text-base leading-relaxed text-neutral-300 mb-4">
                We don&rsquo;t simply take you to Rwanda. We take you into the Rwanda we know. The people. The landscapes. The wildlife. The unexpected moments. Because when you travel with people who grew up here, you experience the country differently.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
