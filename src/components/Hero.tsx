"use client";

import { Link as ScrollLink } from "react-scroll";

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundVideo: string;
  backgroundImage: string;
}

export default function Hero({
  title,
  description,
  ctaText,
  backgroundVideo,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

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
