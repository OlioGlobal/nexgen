"use client";

import { useState } from "react";
import Image from "next/image";

export interface VideoShowcaseProps {
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
}

export default function VideoShowcase({
  title,
  description,
  videoId,
  thumbnail,
}: VideoShowcaseProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-heading text-[#364761]">{title}</h2>
          <p className="text-body text-[#4D4D4D] mt-4 max-w-[480px] mx-auto">
            {description}
          </p>
        </div>

        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer group"
            >
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
              />
              {/* YouTube play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 68 48" className="w-[68px] h-[48px] group-hover:opacity-80 transition-opacity">
                  <path
                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                    fill="#FF0000"
                  />
                  <path d="M45 24 27 14v20" fill="#fff" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
