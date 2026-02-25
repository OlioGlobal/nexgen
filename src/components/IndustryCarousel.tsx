"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface Industry {
  name: string;
  description: string;
  image: string;
}

export interface IndustryCarouselProps {
  title: string;
  industries: Industry[];
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
      <Image
        src={industry.image}
        alt={industry.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
        <h3 className="font-sans font-bold text-[18px] leading-[150%] text-white">
          {industry.name}
        </h3>
        {/* Description: visible on hover (desktop) and always visible on mobile */}
        <p className="text-[14px] leading-[150%] text-white/90 mt-1 max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 max-md:max-h-24 max-md:opacity-100">
          {industry.description}
        </p>
      </div>
    </div>
  );
}

export default function IndustryCarousel({
  title,
  industries,
}: IndustryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="industries" className="py-16 bg-white">
      <div className="pad max">
        <div className="text-center mb-10">
          <h2 className="text-heading text-[#364761]">{title}</h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex-[0_0_75%] min-w-0 pl-3 sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23%]"
              >
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
              i === selectedIndex ? "bg-[#364761]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
