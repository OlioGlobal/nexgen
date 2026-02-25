"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export default function Hero({
  title,
  description,
  ctaText,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background Image (will be replaced with video later) */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 pad max w-full">
        <div className="max-w-[600px]">
          <h1 className="font-title text-hero font-semibold text-[#F2F2F2]">
            {title}
          </h1>

          <p className="mt-5 text-body font-normal leading-[150%] text-[#F2F2F2] max-w-[500px]">
            {description}
          </p>

          <ScrollLink
            to="contact"
            smooth
            offset={-70}
            duration={600}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-white text-[#1a1a1a] text-body font-semibold leading-[150%] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {ctaText}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
