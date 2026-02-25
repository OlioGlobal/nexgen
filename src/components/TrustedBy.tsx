"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export interface Brand {
  name: string;
  logo: string;
}

export interface TrustedByProps {
  title: string;
  description: string;
  brands: Brand[];
}

export default function TrustedBy({
  title,
  description,
  brands,
}: TrustedByProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-16 bg-white">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-heading text-[#364761] whitespace-pre-line">
            {title}
          </h2>
          <p className="text-body text-[#4D4D4D] mt-4 max-w-[480px] mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-[0_0_auto] min-w-0 px-2 flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={144}
                height={94}
                className="object-contain h-[100px] w-[164px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
