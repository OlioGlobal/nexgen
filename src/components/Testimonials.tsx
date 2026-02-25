import Image from "next/image";

export interface Testimonial {
  category: string;
  quote: string;
  personName: string;
  personRole: string;
  personImage: string;
}

export interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function Testimonials({
  title,
  testimonials,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-16 bg-[#F4F4F4]">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-heading text-[#364761]">{title}</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.personName}
              className="bg-white rounded-2xl border border-[#D5D5D5] p-8 flex flex-col justify-between min-h-[460px] transition-shadow duration-300 hover:shadow-lg hover:border-[#2B74B8] cursor-pointer"
            >
              {/* Category */}
              <div>
                <h3 className="font-title font-semibold text-[18px] leading-[150%] text-[#2B74B8] mb-3">
                  {t.category}
                </h3>
                {/* Quote */}
                <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Person */}
              <div className="flex items-center gap-3 mt-6">
                <Image
                  src={t.personImage}
                  alt={t.personName}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-sans font-semibold text-[16px] leading-[150%] text-[#364761]">
                    {t.personName}
                  </p>
                  <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
                    {t.personRole}
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
