import Image from "next/image";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesProps {
  title: string;
  description: string;
  features: Feature[];
}

export default function Features({
  title,
  description,
  features,
}: FeaturesProps) {
  return (
    <section id="benefits" className="py-16 bg-[#0F4D85]">
      <div className="pad max">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-heading text-white">{title}</h2>
          <p className="font-sans font-normal text-[16px] leading-[150%] text-white/80 mt-4">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title}>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="object-contain mb-4"
              />
              <h3 className="font-title font-semibold text-[18px] leading-[150%] text-white">
                {feature.title}
              </h3>
              <p className="font-sans font-normal text-[16px] leading-[150%] text-white/80 mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
