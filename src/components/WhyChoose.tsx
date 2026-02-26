"use client";

import Image from "next/image";

export interface WhyChooseCard {
  icon: string;
  title: string;
}

export interface WhyChooseProps {
  title: string;
  cards: WhyChooseCard[];
}

export default function WhyChoose({ title, cards }: WhyChooseProps) {
  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-heading text-[#364761]">{title}</h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[200px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(20%-16px)] bg-white border border-[#D5D5D5] text-[#364761] hover:bg-[#DD064B] hover:text-white hover:border-[#DD064B]"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="object-contain group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D] group-hover:text-white">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
