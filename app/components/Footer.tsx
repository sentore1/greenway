import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Brand */}
          <div>
            <div className="text-white tracking-[0.3em] text-sm font-light mb-4">
              GREEN WAY
              <div className="text-xs tracking-[0.4em]">Safaris</div>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Rwanda — photographed, filmed and guided by the people who grew up here.
            </p>
          </div>

          {/* Right: Navigation */}
          <div className="flex flex-wrap gap-8 md:justify-end">
            <Link href="#encounters" className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
              ENCOUNTERS
            </Link>
            <Link href="#story" className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
              OUR STORY
            </Link>
            <Link href="#impact" className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
              IMPACT
            </Link>
            <Link href="#plan" className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
              PLAN YOUR TRIP
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © 2026 Green Way Safaris. All rights reserved. Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
