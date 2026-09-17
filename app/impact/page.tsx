import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ImpactPage() {
  const organizations = [
    {
      location: "RUBAVU, RWANDA",
      name: "Ubumwe Community Center",
      description:
        "Creates opportunities and supports inclusion for people with disabilities and other vulnerable members of the community.",
      image: "/images/impact-image/Ubumwe Community Center.JPG",
    },
    {
      location: "RUBAVU, RWANDA",
      name: "Hand in Hand",
      description:
        "Works with families and communities to build livelihoods and support vulnerable people.",
      image: "/images/impact-image/Hand in Hand.JPG",
    },
    {
      location: "RWANDA",
      name: "Uyisenga ni Imanzi",
      description:
        "Supports vulnerable children and young people, working toward safer, more hopeful futures.",
      image: "/images/impact-image/Uyisenga ni Imanzi.JPG",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#f0ede6] min-h-screen" style={{ fontFamily: "var(--font-cormorant)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 pt-40 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.35em] text-neutral-500 mb-6">Impact</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-neutral-800 mb-8">
              Travel that helps<br />tell stories.
            </h1>
            <p className="leading-relaxed text-neutral-600 max-w-sm" style={{ fontSize: "18px" }}>
              Travel can do more than take you somewhere. Done well, it helps you see a place clearly, connect with the people who call it home, and leave something meaningful behind.
            </p>
          </div>
          <div className="relative h-80 md:h-[480px] overflow-hidden">
            <Image
              src="/images/impact-image/Travel that helps to tell stories.JPG"
              alt="Travel that helps tell stories"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ── DIVIDER ──────────────────────────────────────────── */}
        <div className="w-full h-px bg-neutral-300" />

        {/* ── GREEN WAY STORIES ────────────────────────────────── */}
        <section className="bg-[#f0ede6] max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="text-[11px] tracking-[0.35em] text-amber-700 mb-6">Green Way Stories</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-800 mb-8">
              Giving good work a<br />chance to be seen.
            </h2>
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src="/images/impact-image/giving good work a chance to be seen.JPG"
                alt="Giving good work a chance to be seen"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right */}
          <div className="space-y-6 md:pt-16">
            <p className="leading-relaxed text-neutral-700" style={{ fontSize: "17px" }}>
              Across Rwanda, organizations, community leaders, and caregivers do extraordinary work with very limited resources — and often no way to show it. Green Way Stories exists to close that gap.
            </p>
            <p className="leading-relaxed text-neutral-700" style={{ fontSize: "17px" }}>
              Each year, we partner with a small number of charities and community organizations to produce professional photography, video, and short documentary films they can use to share their work, connect with supporters, and raise funds. We spend time listening and understanding before we tell a story — we don't simply show up and take pictures.
            </p>
          </div>
        </section>

        {/* ── THE SEEN & TOLD FUND ─────────────────────────────── */}
        <section className="bg-neutral-900 text-white px-6 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[11px] tracking-[0.35em] text-amber-500 mb-6">The Seen &amp; Told Fund</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 max-w-xl">
              Supporting the stories<br />behind the impact.
            </h2>
            <p className="leading-relaxed text-neutral-300 max-w-xl mb-16" style={{ fontSize: "17px" }}>
              A portion of the proceeds from every journey we run goes directly toward producing photography, video, and documentary projects for organizations that couldn't otherwise afford it.
            </p>

            {/* Three pillars */}
            <div className="grid sm:grid-cols-3 gap-0 border-t border-neutral-700">
              {[
                { label: "Every trip", desc: "contributes a share of its proceeds to the fund" },
                { label: "No cost", desc: "to the organizations we work with" },
                { label: "More travelers", desc: "means more stories we're able to tell" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="pt-8 pr-8 pb-4 border-b sm:border-b-0 sm:border-r border-neutral-700 last:border-r-0 space-y-2"
                >
                  <div className="text-sm tracking-[0.2em] text-amber-500">{item.label}</div>
                  <p className="text-sm leading-relaxed text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ORGANIZATIONS ────────────────────────────────────── */}
        <section className="bg-[#f0ede6] px-6 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[11px] tracking-[0.35em] text-neutral-500 mb-6">Stories we&apos;ve helped tell</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-800 mb-16">
              Organizations creating<br />meaningful change.
            </h2>

            <div className="grid sm:grid-cols-3 gap-10">
              {organizations.map((org) => (
                <div key={org.name} className="flex flex-col space-y-4">
                  <div className="relative h-56 overflow-hidden bg-neutral-200">
                    <Image
                      src={org.image}
                      alt={org.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] text-neutral-500">{org.location}</div>
                  <h3 className="text-xl font-light text-neutral-800">{org.name}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{org.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MORE THAN A PHOTOGRAPH ───────────────────────────── */}
        <section className="bg-white px-6 md:px-16 py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 md:h-[460px] overflow-hidden">
              <Image
                src="/images/impact-image/sometimes as single image can do more than it appears to.JPG"
                alt="More than a photograph"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.35em] text-neutral-500 mb-6">More than a photograph</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-800 mb-8">
                Sometimes a single image<br />can do more than it<br />appears to.
              </h2>
              <div className="space-y-4 leading-relaxed text-neutral-600" style={{ fontSize: "17px" }}>
                <p>
                  It can help a donor understand exactly where their support goes. It can give an organization a way to introduce itself to the world. It can preserve a moment that might otherwise be lost.
                </p>
                <p>
                  Some stories need more room than a photograph can give them. Through Green Way Stories, we also produce short documentary films that let people speak in their own words.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── YOUR JOURNEY MAKES IT POSSIBLE ──────────────────── */}
        <section className="bg-[#f0ede6] px-6 md:px-16 py-24 border-t border-neutral-300">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] tracking-[0.35em] text-neutral-500 mb-6">Your journey makes it possible</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-800 mb-4">
                Book a safari.
              </h2>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-800 mb-8">
                Help fund a story.
              </h2>
              <p className="leading-relaxed text-neutral-600 mb-10 max-w-md" style={{ fontSize: "17px" }}>
                When you travel with Green Way, you&apos;re doing more than planning a trip — you&apos;re helping document work that might otherwise go unseen. Travel with us. See Rwanda. Help us tell the stories that deserve to be told.
              </p>
              <Link
                href="/#plan"
                className="inline-block border border-neutral-800 text-neutral-800 text-[11px] tracking-[0.2em] px-8 py-3 hover:bg-neutral-800 hover:text-white transition-all"
              >
                PLAN YOUR JOURNEY →
              </Link>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-neutral-700">
                Travel well.<br />Leave something behind.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
