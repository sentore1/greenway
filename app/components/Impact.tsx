import Image from "next/image";

export default function Impact() {
  const organizations = [
    {
      name: "Umubyeyi Mwiza",
      description: "a community health programme serving rural families in southern Rwanda.",
      role: "Professional photography provided at no cost.",
      impact: "Images used in a fundraising campaign that secured two years of operating funding."
    },
    {
      name: "Green Steps Rwanda",
      description: "a reforestation programme replanting the slopes of the Virungas.",
      role: "Professional photography provided at no cost.",
      impact: "A visual story published internationally, bringing new volunteer applications and donor partnerships."
    },
    {
      name: "Inararibonye Girls' Education Trust",
      description: "keeping girls in secondary school across three provinces.",
      role: "Professional photography provided at no cost.",
      impact: "Photography placed in four international publications and a successful grant submission."
    }
  ];

  const images = ["/images/34.jpg", "/images/35.jpg", "/images/40.jpg"];

  return (
    <section id="impact" className="bg-white">
      {/* Header */}
      <div className="py-6 md:py-8 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-neutral-500 mx-auto mb-4" />
          <div className="text-base tracking-[0.3em] mb-4 opacity-60 italic">See Rwanda Through Our Eyes</div>
          <div className="w-16 h-px bg-neutral-500 mx-auto mb-6" />
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-light leading-tight mb-8">
                Photography can change<br />a story.
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-neutral-700">
                We learned the power of photography as children. Today, when we are not guiding guests across Rwanda, we use our cameras to help organisations doing important work.
              </p>
              <div>
                <div className="text-xs tracking-[0.3em] mb-4 text-neutral-500">PHOTOGRAPHY FOR GOOD</div>
                <p className="text-base leading-relaxed text-neutral-700">
                  Many charities and community organisations cannot afford professional photography. We photograph their work at no cost — creating images they can use for fundraising, communications and telling their stories to the world.
                </p>
              </div>
            </div>
          </div>

          {/* Organizations */}
          <div className="grid md:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="space-y-6">
                {/* Image */}
                <div className="relative h-64">
                  <Image src={images[index]} alt={org.name} fill className="object-cover" />
                </div>
                
                <div>
                  <div className="text-xs tracking-[0.3em] mb-3 text-neutral-500">THE ORGANISATION</div>
                  <p className="text-base leading-relaxed text-neutral-700 mb-6">
                    <span className="font-medium">{org.name}</span> — {org.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-xs tracking-[0.3em] mb-2 text-neutral-500">OUR ROLE</div>
                    <p className="text-sm text-neutral-600">{org.role}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs tracking-[0.3em] mb-2 text-neutral-500">THE IMPACT</div>
                    <p className="text-sm text-neutral-600">{org.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center mt-6 py-4 border-t border-neutral-200">
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto mb-6">
              &ldquo;We were given cameras when we were children.<br />
              Today, we use our cameras to give something back.&rdquo;
            </blockquote>
            <p className="text-sm text-neutral-600">
              And a journey with Green Way helps keep that work going.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
