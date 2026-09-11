import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Brand */}
          <div>
            <div className="mb-3">
              <Image src="/logo.png" alt="Green Way Safaris" width={240} height={120} className="object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-white max-w-md leading-relaxed">
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
            <Link href="/blog" className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
              JOURNAL
            </Link>
            <Link href="#plan" className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity">
              PLAN YOUR TRIP
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:justify-end">
            <div>
              <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">PHONE</div>
              <a href="tel:+250788694331" className="text-base text-white hover:opacity-70 transition-opacity">
                +250 788 694 331
              </a>
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">EMAIL</div>
              <a href="mailto:hello@greenwaysafaris.com" className="text-base text-white hover:opacity-70 transition-opacity">
                hello@greenwaysafaris.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white">
            © 2026 Green Way Safaris. All rights reserved. Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
