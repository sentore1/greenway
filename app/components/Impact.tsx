import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// Local fallback images — used when no cover_image is stored in Supabase
const fallbackImages: Record<string, string> = {
  "umubyeyi-mwiza": "/images/blog/Umubyeyi Mwiza.jpeg",
  "green-steps-rwanda": "/images/blog/Green Steps Rwanda.jpeg",
  "inararibonye-girls-education-trust":
    "/images/blog/Inararibonye Girls' Education Trust — keeping girls in secondary school across three provinces..jpeg",
};

const defaultFallback = "/images/herosectoin.jpg"; // last-resort image

function parseBody(body: string) {
  const sections: Record<string, string> = {};
  let current = "";
  for (const line of body.split("\n")) {
    if (line.startsWith("## ")) {
      current = line.replace("## ", "").trim().toLowerCase();
    } else if (current && line.trim()) {
      sections[current] = (sections[current] ? sections[current] + " " : "") + line.trim();
    }
  }
  return {
    organisation: sections["the organisation"] ?? "",
    role: sections["our role"] ?? "",
    impact: sections["the impact"] ?? "",
  };
}

export const revalidate = 0;

export default async function Impact() {
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, body, cover_image, created_at")
    .eq("category", "Impact")
    .eq("published", true)
    .order("created_at", { ascending: true });

  if (error) console.error("Impact fetch error:", error.message);

  const items =
    posts && posts.length > 0
      ? posts.map((p) => {
          const { organisation, role, impact } = parseBody(p.body ?? "");
          // Use uploaded image → named fallback → default fallback
          const imgSrc =
            p.cover_image ||
            fallbackImages[p.slug] ||
            defaultFallback;
          return { slug: p.slug, title: p.title, organisation, role, impact, imgSrc };
        })
      : [
          {
            slug: "umubyeyi-mwiza",
            title: "Umubyeyi Mwiza",
            organisation: "Umubyeyi Mwiza — a community health programme serving rural families in southern Rwanda.",
            role: "Professional photography provided at no cost.",
            impact: "Images used in a fundraising campaign that secured two years of operating funding.",
            imgSrc: fallbackImages["umubyeyi-mwiza"],
          },
          {
            slug: "green-steps-rwanda",
            title: "Green Steps Rwanda",
            organisation: "Green Steps Rwanda — a reforestation programme replanting the slopes of the Virungas.",
            role: "Professional photography provided at no cost.",
            impact: "A visual story published internationally, bringing new volunteer applications and donor partnerships.",
            imgSrc: fallbackImages["green-steps-rwanda"],
          },
          {
            slug: "inararibonye-girls-education-trust",
            title: "Inararibonye Girls' Education Trust",
            organisation: "Inararibonye Girls' Education Trust — keeping girls in secondary school across three provinces.",
            role: "Professional photography provided at no cost.",
            impact: "Photography placed in four international publications and a successful grant submission.",
            imgSrc: fallbackImages["inararibonye-girls-education-trust"],
          },
        ];

  return (
    <section id="impact" className="bg-white">
      {/* Header */}
      <div className="py-6 md:py-8 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-neutral-500 mx-auto mb-4" />
          <div className="text-base tracking-[0.3em] mb-4 opacity-60 italic">
            See Rwanda Through Our Eyes
          </div>
          <div className="w-16 h-px bg-neutral-500 mx-auto mb-6" />
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-light leading-tight mb-8">
                Photography can change<br />a story.
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-neutral-700">
                We learned the power of photography as children. Today, when we are not
                guiding guests across Rwanda, we use our cameras to help organisations
                doing important work.
              </p>
              <div>
                <div className="text-xs tracking-[0.3em] mb-4 text-neutral-500">
                  PHOTOGRAPHY FOR GOOD
                </div>
                <p className="text-base leading-relaxed text-neutral-700">
                  Many charities and community organisations cannot afford professional
                  photography. We photograph their work at no cost — creating images they
                  can use for fundraising, communications and telling their stories to the
                  world.
                </p>
              </div>
            </div>
          </div>

          {/* Cards — image always shown */}
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.slug} className="flex flex-col">
                {/* Image — uploaded or fallback */}
                <div className="relative h-64 w-full bg-neutral-200 overflow-hidden mb-6">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized={item.imgSrc.startsWith("https://")}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 space-y-4">
                  <h4 className="text-lg font-light text-neutral-800">{item.title}</h4>

                  <div>
                    <div className="text-xs tracking-[0.3em] mb-2 text-neutral-500">THE ORGANISATION</div>
                    <p className="text-sm leading-relaxed text-neutral-700">{item.organisation}</p>
                  </div>

                  <div>
                    <div className="text-xs tracking-[0.3em] mb-2 text-neutral-500">OUR ROLE</div>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.role}</p>
                  </div>

                  <div>
                    <div className="text-xs tracking-[0.3em] mb-2 text-neutral-500">THE IMPACT</div>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.impact}</p>
                  </div>

                  <Link
                    href={`/blog/${item.slug}`}
                    className="mt-auto pt-4 text-xs tracking-[0.15em] text-neutral-800 hover:opacity-60 transition-opacity"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center mt-16 py-8 border-t border-neutral-200">
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto mb-6">
              &ldquo;We were given cameras when we were children.<br />
              Today, we use our cameras to give something back.&rdquo;
            </blockquote>
            <p className="text-sm text-neutral-600">
              And a journey with Green Way helps keep that work going.
            </p>
          </div>

          {/* Blog link */}
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="text-xs tracking-[0.2em] border border-neutral-800 px-8 py-3 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              VIEW ALL JOURNAL POSTS →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
