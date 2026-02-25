"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface CaseStudiesProps {
  heading: string;
  description: string;
  cases: CaseStudy[];
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="12" fill="#0E4D85" />
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

export default function CaseStudies({
  heading,
  description,
  cases,
}: CaseStudiesProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // attach listener
  if (emblaApi) {
    emblaApi.on("select", onSelect);
  }

  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-heading text-[#364761]">{heading}</h2>
          <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D] mt-4">
            {description}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev/Next Arrows — desktop only */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#D5D5D5] items-center justify-center hover:bg-[#0E4D85] hover:border-[#0E4D85] hover:text-white transition-colors cursor-pointer group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-[#364761] group-hover:text-white"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0E4D85] border border-[#0E4D85] items-center justify-center hover:bg-[#0b3d6a] transition-colors cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cases.map((cs) => (
                <div key={cs.title} className="flex-[0_0_100%] min-w-0 px-2">
                  {/* Card */}
                  <div className="bg-[#F4F4F4] rounded-2xl overflow-hidden">
                    {/* Desktop: side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
                      {/* Left — Content */}
                      <div className="flex flex-col justify-center">
                        <h3 className="font-title font-semibold text-[24px] leading-[120%] text-[#364761] mb-5">
                          {cs.title}
                        </h3>

                        <div className="mb-4">
                          <span className="font-title font-semibold text-[18px] leading-[150%] text-[#2B74B8]">
                            Challenge
                          </span>
                          <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D] mt-2">
                            {cs.challenge}
                          </p>
                        </div>

                        <div className="mb-4">
                          <span className="font-title font-semibold text-[18px] leading-[150%] text-[#2B74B8]">
                            Nexgen Solution
                          </span>
                          <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D] mt-2">
                            {cs.solution}
                          </p>
                        </div>

                        <div>
                          <span className="font-title font-semibold text-[18px] leading-[150%] text-[#2B74B8]">
                            Results
                          </span>
                          <ul className="mt-2 space-y-1">
                            {cs.results.map((r) => (
                              <li key={r} className="flex items-start gap-2">
                                <CheckCircle />
                                <span className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
                                  {r}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right — Image */}
                      <div className="relative rounded-2xl overflow-hidden min-h-[250px] md:min-h-[350px]">
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                selectedIndex === i ? "bg-[#0E4D85]" : "bg-[#D5D5D5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
