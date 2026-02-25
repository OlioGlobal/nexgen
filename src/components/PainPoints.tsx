"use client";

import Image from "next/image";

export interface PainPointsProps {
  title: string;
  description: string;
  listHeading: string;
  points: string[];
  image: string;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
      <circle cx="12" cy="12" r="12" fill="#2B74B8" />
      <path
        d="M7.5 12.5l3 3 6-6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PainPoints({
  title,
  description,
  listHeading,
  points,
  image,
}: PainPointsProps) {
  return (
    <section className="relative bg-[#F4F4F4] overflow-hidden">
      {/* Blue rotated square - right side */}
      <div className="absolute top-1/2 -right-[18%] -translate-y-1/2 w-[650px] h-[700px] bg-[#337ABA] rotate-45 hidden md:block" />

      <div className="relative z-10 pad max py-16">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-heading text-[#364761]">{title}</h2>
          <p className="text-body text-[#4D4D4D] mt-4">{description}</p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Pain points */}
          <div>
            <h3 className="font-title font-semibold text-[18px] leading-[150%] text-[#2B74B8] mb-6">
              {listHeading}
            </h3>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
