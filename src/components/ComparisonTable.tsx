"use client";

import Image from "next/image";

export interface ComparisonRow {
  ordinaryIcon: string;
  ordinaryTitle: string;
  ordinaryDesc: string;
  nexgenIcon: string;
  nexgenTitle: string;
  nexgenDesc: string;
}

export interface ComparisonTableProps {
  title: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({ title, rows }: ComparisonTableProps) {
  return (
    <section className="py-16 bg-white">
      <div className="pad max">
        {/* Heading */}
        <h2 className="text-heading text-[#364761] max-w-xl mb-10">{title}</h2>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-[#D5D5D5]">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-[#D5D5D5]">
            <div className="bg-[#F4F4F4] px-6 py-4 border-r border-[#D5D5D5]">
              <span className="font-title font-semibold text-[18px] leading-[150%] text-[#364761]">
                Ordinary Machines
              </span>
            </div>
            <div className="bg-[#F4F4F4] px-6 py-4">
              <span className="font-title font-semibold text-[18px] leading-[150%] text-[#364761]">
                Nexgen Advanced Machines
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-[#D5D5D5] ${i === rows.length - 1 ? "border-b-0" : ""}`}
            >
              {/* Ordinary */}
              <div className="bg-[#FFF9F9] px-6 py-5 flex items-center gap-4 border-b border-r border-[#D5D5D5]">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFD6D6] flex items-center justify-center">
                  <Image
                    src={row.ordinaryIcon}
                    alt={row.ordinaryTitle}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-title font-semibold text-[18px] leading-[150%] text-[#364761]">
                    {row.ordinaryTitle}
                  </p>
                  <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
                    {row.ordinaryDesc}
                  </p>
                </div>
              </div>

              {/* Nexgen */}
              <div className="bg-[#F7FFF8] px-6 py-5 flex items-center gap-4 border-b border-[#D5D5D5]">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#D6FFDC] flex items-center justify-center">
                  <Image
                    src={row.nexgenIcon}
                    alt={row.nexgenTitle}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-title font-semibold text-[18px] leading-[150%] text-[#364761]">
                    {row.nexgenTitle}
                  </p>
                  <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
                    {row.nexgenDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-[#D5D5D5]"
            >
              {/* Ordinary */}
              <div className="bg-[#FFF9F9] px-4 py-4 flex items-center gap-3 border-b border-[#D5D5D5]">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFD6D6] flex items-center justify-center">
                  <Image
                    src={row.ordinaryIcon}
                    alt={row.ordinaryTitle}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-title font-semibold text-[16px] leading-[150%] text-[#364761]">
                    {row.ordinaryTitle}
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[150%] text-[#4D4D4D]">
                    {row.ordinaryDesc}
                  </p>
                </div>
              </div>

              {/* Nexgen */}
              <div className="bg-[#F7FFF8] px-4 py-4 flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#D6FFDC] flex items-center justify-center">
                  <Image
                    src={row.nexgenIcon}
                    alt={row.nexgenTitle}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-title font-semibold text-[16px] leading-[150%] text-[#364761]">
                    {row.nexgenTitle}
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[150%] text-[#4D4D4D]">
                    {row.nexgenDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
