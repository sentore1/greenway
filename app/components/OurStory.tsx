export default function OurStory() {
  return (
    <section id="story" className="bg-neutral-900 text-white">
      {/* Hero */}
      <div className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-[0.3em] mb-8 text-neutral-400">OUR STORY</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            We didn&rsquo;t just discover Rwanda.<br />
            <span className="italic">We grew up here.</span>
          </h2>
        </div>
      </div>

      {/* Story sections */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column */}
          <div className="space-y-16">
            {/* Imbabazi */}
            <div>
              <div className="text-base tracking-[0.3em] mb-4 text-white font-bold">IMBABAZI</div>
              <p className="text-xl leading-relaxed text-neutral-300">
                Our story begins at Imbabazi, the orphanage founded by Roz Carr after the 1994 Genocide against the Tutsi. This is where Gadi and Mussa grew up.{' '}
                <a href="https://www.camerakids.photos/imbabazi" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white underline">
                  Learn more about Imbabazi
                </a>
                {' '}and{' '}
                <a href="http://camerakids.photos/about-the-project" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white underline">
                  about the project
                </a>.
              </p>
            </div>

            {/* The Journey */}
            <div>
              <div className="text-base tracking-[0.3em] mb-4 text-white font-bold">THE JOURNEY</div>
              <p className="text-xl leading-relaxed text-neutral-300">
                Those cameras became our profession. Today we are photographers, filmmakers and guides — and we created Green Way Safaris to share the Rwanda we know with people from around the world.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-16">
            {/* The Camera */}
            <div>
              <div className="text-base tracking-[0.3em] mb-4 text-white font-bold">THE CAMERA</div>
              <p className="text-xl leading-relaxed text-neutral-300 mb-4">
                As children we were given cameras and taught to photograph the world around us.
              </p>
              <p className="text-xl leading-relaxed text-neutral-300">
                Photography became more than a way of documenting our lives. It became a way of understanding who we were, where we came from, and how we saw our country.
              </p>
            </div>

            {/* See Rwanda */}
            <div>
              <div className="text-base tracking-[0.3em] mb-4 text-white font-bold">SEE RWANDA THROUGH OUR EYES</div>
              <p className="text-xl leading-relaxed text-neutral-300 mb-4">
                We don&rsquo;t simply take you to Rwanda. We take you into the Rwanda we know. The people. The landscapes. The wildlife. The unexpected moments. Because when you travel with people who grew up here, you experience the country differently.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
