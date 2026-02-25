"use client";

import { useState } from "react";
import Image from "next/image";

export interface FaqItem {
  question: string;
  points: string[];
}

export interface WhyDifferentProps {
  title: string;
  image: string;
  faqs: FaqItem[];
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#D5D5D5]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 cursor-pointer"
      >
        <span className="font-title font-semibold text-[18px] leading-[150%] text-[#2B74B8] text-left">
          {faq.question}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2B74B8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-5 h-5 shrink-0 ml-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
      >
        <ul className="space-y-2 pl-1">
          {faq.points.map((point) => (
            <li
              key={point}
              className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D] flex items-start gap-2"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4D4D4D] shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhyDifferent({
  title,
  image,
  faqs,
}: WhyDifferentProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-heading text-[#364761]">{title}</h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Right - Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
