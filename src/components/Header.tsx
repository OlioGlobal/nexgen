"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { label: "PRODUCTS", to: "products" },
  { label: "INDUSTRIES", to: "industries" },
  { label: "BENEFITS", to: "benefits" },
  { label: "CASE STUDIES", to: "case-studies" },
  { label: "TESTIMONIALS", to: "testimonials" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="pad max flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Nexgen.png"
            alt="Nexgen Hygiene Systems"
            width={160}
            height={40}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-70}
              duration={600}
              className="text-nav font-semibold text-[#1a1a1a] hover:text-[#003B71] transition-colors cursor-pointer"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA Button */}
        <ScrollLink
          to="contact"
          spy
          smooth
          offset={-70}
          duration={600}
          className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#0E4D85] text-white text-body-sm font-semibold rounded-lg hover:bg-[#0a3d6b] transition-colors cursor-pointer"
        >
          Request a Quote
        </ScrollLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-[2px] w-6 bg-[#1a1a1a] transition-all duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block h-[2px] w-6 bg-[#1a1a1a] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute block h-[2px] w-6 bg-[#1a1a1a] transition-all duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="pad max flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-70}
                duration={600}
                onClick={() => setMobileOpen(false)}
                className="text-nav font-semibold text-[#1a1a1a] hover:text-[#003B71] transition-colors cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              spy
              smooth
              offset={-70}
              duration={600}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#0E4D85] text-white text-body-sm font-semibold rounded-lg hover:bg-[#0a3d6b] transition-colors w-fit cursor-pointer"
            >
              Request a Quote
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
}
