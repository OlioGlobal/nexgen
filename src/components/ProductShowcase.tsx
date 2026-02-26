"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Product {
  name: string;
  category: string;
  images: string[];
}

export interface CategoryConfig {
  label: string;
  brochureHref: string;
}

export interface ProductShowcaseProps {
  title: string;
  description: string;
  categories: CategoryConfig[];
  products: Product[];
  ctaText: string;
}

function ProductCard({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (product.images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3]">
        {product.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={product.name}
            fill
            className={`object-contain p-4 transition-opacity duration-700 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-sans font-bold text-[18px] leading-[150%] text-[#364761]">
          {product.name}
        </h3>
      </div>
    </div>
  );
}

export default function ProductShowcase({
  title,
  description,
  categories,
  products,
  ctaText,
}: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filtered = products.filter((p) => p.category === activeCategory.label);

  return (
    <section id="products" className="py-16 bg-[#F4F4F4]">
      <div className="pad max">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-heading max-w-xl mx-auto text-[#364761]">
            {title}
          </h2>
          <p className="text-body max-w-xl mx-auto text-[#4D4D4D] mt-4 max-w-[520px] mx-auto">
            {description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-3 mt-8 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-body-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory.label === cat.label
                  ? "bg-[#F10651] text-white border border-[#F10651]"
                  : "bg-white text-[#4D4D4D] border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href={activeCategory.brochureHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0E4D85] text-white text-body-sm font-semibold rounded-lg border border-[#0E4D85] hover:bg-transparent hover:text-[#0E4D85] transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
