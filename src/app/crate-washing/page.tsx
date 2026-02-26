import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import PainPoints from "@/components/PainPoints";
import ComparisonTable from "@/components/ComparisonTable";
import WhyDifferent from "@/components/WhyDifferent";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import IndustryCarousel from "@/components/IndustryCarousel";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NexGen Crate Washing Machines | Industrial Crate Washers",
  description:
    "Clean 1200-1800 Crates/Hour While Cutting Water Usage by 40%. Crate Washing Systems trusted by beverage, dairy, food processing, and logistics operations.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const trustedBrands = [
  { name: "Brand 1", logo: "/brand/homepage/Frame 122.webp" },
  { name: "Brand 2", logo: "/brand/homepage/Frame 123.webp" },
  { name: "Brand 3", logo: "/brand/homepage/Frame 124.webp" },
  { name: "Brand 4", logo: "/brand/homepage/Frame 125.webp" },
  { name: "Brand 5", logo: "/brand/homepage/Frame 126.webp" },
  { name: "Brand 6", logo: "/brand/homepage/Frame 127.webp" },
  { name: "Brand 7", logo: "/brand/homepage/Frame 128.webp" },
  { name: "Brand 8", logo: "/brand/homepage/Frame 129.webp" },
  { name: "Brand 9", logo: "/brand/homepage/Frame 130.webp" },
  { name: "Brand 10", logo: "/brand/homepage/Frame 131.webp" },
  { name: "Brand 11", logo: "/brand/homepage/Frame 132.webp" },
  { name: "Brand 12", logo: "/brand/homepage/Frame 133.webp" },
];

const machineSpecs = [
  "Suitable for washing and drying crates of all types and dimensions",
  "Custom-built configurations available based on customer requirements",
  "Throughput capacity ranging from 300 to 600 crates per hour",
  "Strategically positioned spray nozzles ensure thorough top and bottom cleaning",
  "Post-wash, crates move through a High Velocity Air Knife drying curtain",
  "Designed to remove maximum surface moisture from crates",
  "Optional hot water integration available",
  "Modular construction allowing division into stages (Pre-Rinse / Main Wash / Hot Wash / Drying)",
];

const industries = [
  {
    name: "Food Processing",
    description:
      "Sanitize crates used across production lines to meet FSSAI and export hygiene standards.",
    image: "/Equipment/1942%201.webp",
  },
  {
    name: "Agriculture",
    description:
      "Clean harvest crates and field bins to prevent soil and pesticide residue carry-over.",
    image: "/Equipment/1942%202.webp",
  },
  {
    name: "Meat & Poultry",
    description:
      "Eliminate bacterial contamination from protein-handling crates with hot water sanitization.",
    image: "/Equipment/1942%203.webp",
  },
  {
    name: "Dairy",
    description:
      "Achieve HACCP-grade sanitization for dairy crates with controlled-temperature washing cycles.",
    image: "/Equipment/1942%204.webp",
  },
  {
    name: "Distribution Centers",
    description:
      "High-speed crate washing for logistics hubs handling thousands of crates across multiple product categories daily.",
    image: "/Equipment/1942%205.webp",
  },
  {
    name: "Cold Storage",
    description:
      "Remove condensation and microbial buildup from cold-chain crates before restacking and dispatch.",
    image: "/Equipment/1942%206.webp",
  },
  {
    name: "Export Facilities",
    description:
      "Meet international hygiene certifications with documented, repeatable crate sanitization processes.",
    image: "/dairy.webp",
  },
];

const comparisonRows = [
  {
    ordinaryIcon: "/icon/red-1.webp",
    ordinaryTitle: "10\u201315 Crates/Hour Manually",
    ordinaryDesc:
      "Manual washing severely limits throughput and creates production bottlenecks",
    nexgenIcon: "/icon/green-1.webp",
    nexgenTitle: "300\u2013600 Crates/Hour Automated",
    nexgenDesc:
      "Automated conveyor-based washing delivers consistent high-volume throughput",
  },
  {
    ordinaryIcon: "/icon/red-2.webp",
    ordinaryTitle: "4\u20136 Workers Required",
    ordinaryDesc:
      "Multiple workers needed for manual scrubbing, rinsing, and drying",
    nexgenIcon: "/icon/green-2.webp",
    nexgenTitle: "1 Operator Managing the System",
    nexgenDesc: "Single operator manages the entire automated washing process",
  },
  {
    ordinaryIcon: "/icon/red-3.webp",
    ordinaryTitle: "Inconsistent Cleaning",
    ordinaryDesc:
      "Manual washing quality varies by worker, shift, and fatigue levels",
    nexgenIcon: "/icon/green-3.webp",
    nexgenTitle: "Uniform Sanitization Every Cycle",
    nexgenDesc:
      "Every crate receives identical cleaning treatment regardless of volume",
  },
  {
    ordinaryIcon: "/icon/red-4.webp",
    ordinaryTitle: "200L Water Per Crate",
    ordinaryDesc:
      "Excessive water consumption without recycling or flow control",
    nexgenIcon: "/icon/green-4.webp",
    nexgenTitle: "40\u201350L with Water Recycling",
    nexgenDesc:
      "60% water reduction through recycling systems and sensor-controlled flow",
  },
  {
    ordinaryIcon: "/icon/red-5.webp",
    ordinaryTitle: "Hours of Drying Time",
    ordinaryDesc:
      "Crates left to air-dry, causing delays and microbial growth risk",
    nexgenIcon: "/icon/green-5.webp",
    nexgenTitle: "Dry in 3\u20135 Minutes",
    nexgenDesc:
      "Integrated air knife systems remove 99% surface moisture instantly",
  },
  {
    ordinaryIcon: "/icon/red-1.webp",
    ordinaryTitle: "Contamination Risks",
    ordinaryDesc: "Residual bacteria, cross-contamination, and audit failures",
    nexgenIcon: "/icon/green-6.webp",
    nexgenTitle: "99%+ Bacterial Removal",
    nexgenDesc:
      "Hot water + detergent + high-pressure washing eliminates contaminants",
  },
];

const washingFaqs = [
  {
    question: "300\u2013600 Crates/Hour \u2014 Fast Turnaround",
    points: [
      "Capacity: 300\u2013400 crates/hour (standard systems)",
      "Capacity: 500\u2013600 crates/hour (high-capacity systems)",
      "Adjustable conveyor speed for different crate sizes",
      "Continuous operation for multi-shift facilities",
      "One-person operation with automated loading/unloading",
    ],
  },
  {
    question: "60\u201375% Water Savings with Recycling Systems",
    points: [
      "Water recycling: Rinse water recirculated to pre-wash zone",
      "Sensor-controlled rinse: Water flows only when crates are present",
      "Filtration systems remove particles for water reuse",
      "Typical consumption: 40\u201350L per crate vs 200L+ manual",
      "Closed-loop systems for maximum efficiency",
    ],
  },
  {
    question: "Hot Water Sanitization Kills 99.9% Bacteria",
    points: [
      "Pre-wash: 30\u201340\u00b0C (removes organic matter without protein coagulation)",
      "Main wash: 50\u201365\u00b0C (kills bacteria, dissolves fats)",
      "Optional hot rinse: Aids faster drying",
      "Adjustable temperature for different contamination levels",
      "Tank heaters maintain consistent temperature",
    ],
  },
  {
    question: "Food-Grade Stainless Steel Construction",
    points: [
      "100% stainless steel 304/316 construction",
      "Rounded corners, smooth surfaces (no bacterial traps)",
      "Adjustable spray nozzles for complete coverage",
      "Synthetic chain conveyor (non-corrosive, easy-clean)",
      "Safety interlocks (machine stops when doors open)",
    ],
  },
  {
    question: "Designed for Easy Maintenance",
    points: [
      "Easy-access panels for pump and spray nozzle service",
      "Self-cleaning filtration systems",
      "No complex electronics or controls",
      "Durable synthetic conveyor chains (no rust, no breakage)",
      "Routine maintenance: 15\u201320 minutes weekly",
    ],
  },
  {
    question: "Flexible Configuration Options",
    points: [
      "Adjustable spray nozzles for different crate dimensions",
      "Multiple zone configurations (2-zone to 5-zone systems)",
      "Variable conveyor speeds",
      "Hot water / cold water / ambient options",
      "Integrated drying or standalone washing",
      "Detergent dosing systems (optional)",
    ],
  },
];

const featuresData = [
  {
    icon: "/icon/automated.webp",
    title: "High-Pressure Spray Nozzles",
    description:
      "Adjustable click nozzles deliver water at optimal pressure and angle to ensure complete coverage of all crate surfaces including corners and undersides.",
  },
  {
    icon: "/icon/continous.webp",
    title: "Multi-Zone Washing",
    description:
      "Separate pre-wash, main wash, and rinse zones optimize cleaning efficacy while minimizing water and detergent consumption.",
  },
  {
    icon: "/icon/custom.webp",
    title: "Food-Grade Sanitization",
    description:
      "Hot water (up to 65\u00b0C) + food-safe detergents + high-pressure spray achieve 99.9% bacterial removal, meeting FSSAI and HACCP requirements.",
  },
  {
    icon: "/icon/energy.webp",
    title: "Integrated Drying (Optional)",
    description:
      "High-velocity air knives blow off 99% surface moisture in 2\u20133 minutes, making crates ready for immediate reuse without towel drying or long air-dry periods.",
  },
  {
    icon: "/icon/maintenance.webp",
    title: "One-Person Operation",
    description:
      "Automated conveyor transport, sensor-controlled water flow, and simple controls mean one operator can manage 300\u2013600 crates/hour.",
  },
];

const whyChooseCards = [
  {
    icon: "/icon/icon-expertise.webp",
    title: "20+ Years in Food Processing Hygiene Solutions",
  },
  {
    icon: "/icon/icon-innovation.webp",
    title:
      "Multi-Industry Experience (Beverage, Dairy, Meat, Produce, Logistics)",
  },
  {
    icon: "/icon/icon-track-record.webp",
    title: "Proven Water & Labor Savings (60\u201375% Reduction)",
  },
  {
    icon: "/icon/icon-support.webp",
    title: "Food-Grade Construction & Compliance Support",
  },
  {
    icon: "/icon/icon-track-record-1.webp",
    title: "Nationwide Installation & Service",
  },
];

const testimonialsData = [
  {
    category: "Beverage Distribution Center",
    quote:
      "We were washing 2,000 crates daily with 6 workers using hoses and brushes. It took all day, used massive amounts of water, and cleaning quality was inconsistent. NexGen\u2019s automated crate washer processes 400 crates/hour with one operator. We cut labor costs by 70%, reduced water consumption by 65%, and our crates are cleaner than ever. FSSAI audits are now smooth, no hygiene observations.",
    personName: "Operations Manager",
    personRole: "Large Beverage Distribution Facility, Maharashtra",
    personImage: "/icon/operation-head.webp",
  },
  {
    category: "Dairy Processing Plant",
    quote:
      "Cross-contamination from poorly washed crates was our biggest audit risk. Manual washing couldn\u2019t achieve the bacterial removal we needed for dairy products. After installing NexGen\u2019s hot water crate washer (65\u00b0C), our swab tests show under 10 CFU consistently. We passed HACCP certification on the first attempt, and we\u2019ve reduced our crate inventory by 60% because turnaround is so fast.",
    personName: "QA Manager",
    personRole: "Dairy Processing Facility, Gujarat",
    personImage: "/icon/production-manager.webp",
  },
  {
    category: "Food Packaging & Logistics",
    quote:
      "We handle crates for multiple product types, like vegetables, bakery, dairy, meat. Cross-contamination and allergen control were constant concerns. NexGen designed a multi-zone washing system with hot sanitization that eliminates bacterial transfer between product categories. Our customers specifically reference our crate hygiene in quality agreements now.",
    personName: "Facility Manager",
    personRole: "Multi-Product Food Logistics Company, Pune",
    personImage: "/icon/director.webp",
  },
];

const caseStudiesData = [
  {
    title: "Beverage Bottling Plant: 70% Labor Cost Reduction",
    challenge:
      "A large beverage bottler was washing 1,500 crates daily using 6 workers with pressure washers. The process took 8\u201310 hours, consumed excessive water, and cleaning quality varied by worker and shift.",
    solution:
      "Automated crate washer (400 crates/hour capacity) with pre-wash, main wash (hot water), rinse zones, and integrated air knife drying.",
    results: [
      "400 crates/hour capacity (vs 15\u201320/hour manual)",
      "70% labor cost reduction (6 workers \u2192 1 operator)",
      "65% water savings with recycling system",
      "Complete wash-dry cycle: 8\u201310 minutes per crate",
      "Annual savings: \u20b932 lakhs (labor + water costs)",
      "ROI achieved in 16 months",
    ],
    image: "/dairy.webp",
  },
  {
    title: "Dairy Processing: HACCP Certification Achieved",
    challenge:
      "A dairy facility couldn\u2019t achieve HACCP certification due to inadequate crate sanitization. Bacterial swab tests consistently showed 10,000+ CFU. Manual washing with cold water and detergent was insufficient for dairy hygiene standards.",
    solution:
      "Hot water crate washer (65\u00b0C main wash) with multi-stage cleaning, filtration, and documented sanitization cycles for audit compliance.",
    results: [
      "Bacterial counts reduced to under 10 CFU (99.9% removal)",
      "HACCP certification achieved on first audit",
      "60% crate inventory reduction from faster turnaround",
      "Zero contamination incidents in 24 months",
      "\u20b925 lakhs capital freed from lower crate inventory",
    ],
    image: "/bakery.webp",
  },
  {
    title: "Food Logistics: Zero Cross-Contamination",
    challenge:
      "A multi-product logistics facility handled crates for dairy, vegetables, bakery, and meat products. Cross-contamination risks between product categories created food safety vulnerabilities and customer complaints.",
    solution:
      "High-capacity crate washer (500 crates/hour) with 65\u00b0C hot sanitization, allergen-removal protocols, and verified cleaning documentation.",
    results: [
      "Desirable hygiene and cleanliness achieved",
      "Zero allergen cross-contact incidents",
      "500 crates/hour processing speed",
      "Customer quality approvals improved across all categories",
      "Eliminated customer complaints related to crate hygiene",
    ],
    image: "/kitchen.webp",
  },
];

const contactSteps = [
  "Fill out the form below (takes 60 seconds)",
  "Our washing systems expert contacts you within 24 hours",
  "We analyze your crate types, volumes, and contamination requirements",
  "Schedule a demo at our facility or yours",
  "Get detailed cost savings projections and ROI timeline",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CrateWashingPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Clean 1200-1800 Crates/Hour While Cutting Water Usage by 40%"
        description="Crate Washing Systems trusted by beverage, dairy, food processing, and logistics operations to sanitize reusable crates, bins, and trays with precision and speed."
        ctaText="Get Your Free ROI Assessment"
        ctaHref="contact"
        backgroundVideo="/video/hero-compressed.mp4"
        backgroundImage="/temp/hero.webp"
      />

      {/* Trusted By */}
      <TrustedBy
        title="Trusted Across Food & Distribution Environments"
        description="20+ years providing automated crate hygiene solutions to operations where contamination control and fast turnaround matter most."
        brands={trustedBrands}
      />

      {/* Machine Specifications */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="pad max">
          <div className="text-center mb-10">
            <h2 className="text-heading max-w-xl mx-auto text-[#364761]">
              Industrial Crate Washing Systems for High-Volume Operations
            </h2>
            <p className="text-body max-w-xl mx-auto text-[#4D4D4D] mt-4 max-w-3xl mx-auto">
              Designed for continuous washing, sanitizing, and drying of
              reusable crates integrated directly into production and dispatch
              lines.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left — Specs */}
              <div>
                <h3 className="font-title font-bold text-[20px] md:text-[24px] text-[#364761] mb-6">
                  Machine Specifications
                </h3>
                <ul className="space-y-4">
                  {machineSpecs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="w-5 h-5 shrink-0 mt-0.5"
                      >
                        <circle cx="10" cy="10" r="10" fill="#0E4D85" />
                        <path
                          d="M6 10.5l3 3 5-5"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-sans text-[14px] leading-[150%] text-[#4D4D4D]">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Product Image */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    src="/product/airknife/createwasher/image%204.webp"
                    alt="Crate Washing Machine"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-sans font-semibold text-[16px] text-[#364761] mt-4">
                  Crate Washing Machine
                </p>
              </div>
            </div>
          </div>

          {/* Download Brochure */}
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block bg-[#0E4D85] text-white font-sans font-semibold text-[16px] px-8 py-3 rounded-full hover:bg-[#0b3d6a] transition-colors"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Industry Carousel */}
      <IndustryCarousel
        title="Need Custom Configuration for Unique Crate Sizes, Specialized Cleaning, or Multi-Product Operations?"
        industries={industries}
      />

      {/* Pain Points */}
      <PainPoints
        title="Still Washing Crates Manually or With Outdated Equipment?"
        listHeading="Without Structured Washing:"
        description="Reusable crates move across farms, processing zones, cold storage, and dispatch areas. Every cycle introduces contamination risks from residual product, dirt, bacteria, and cross-contamination between batches. Manual washing can&rsquo;t keep pace with production speeds, and inconsistent cleaning creates food safety vulnerabilities that auditors flag immediately."
        points={[
          "Surface contamination transfers between batches",
          "Residual moisture encourages microbial growth",
          "Manual washing slows operations",
          "Inconsistent cleaning increases audit observations",
          "Wet crates reduce stacking stability",
        ]}
        image="/Equipment/1942%201.webp"
      />

      {/* Comparison Table */}
      <ComparisonTable
        title="What Changes When Crate Washing Is Engineered Properly"
        rows={comparisonRows}
      />

      {/* Multi-Stage Washing Details (WhyDifferent accordion) */}
      <WhyDifferent
        title="Complete Multi-Stage Washing for Food-Grade Sanitization"
        image="/Equipment/1942%202.webp"
        faqs={washingFaqs}
      />

      {/* Features */}
      <Features
        title="Every Feature Engineered to Maximize Cleaning Quality and Minimize Labor"
        description=""
        features={featuresData}
      />

      {/* Why Choose */}
      <WhyChoose
        title="Why Food & Beverage Facilities Choose NexGen Crate Washers"
        cards={whyChooseCards}
      />

      {/* Testimonials */}
      <Testimonials
        title="Hear It From Operations Leaders in Food & Beverage"
        testimonials={testimonialsData}
      />

      {/* Case Studies */}
      <CaseStudies
        heading="Proven Results in Real Food & Beverage Operations"
        description="NexGen crate washing machines operate in high-volume facilities where hygiene, speed, and cost efficiency directly impact food safety compliance and profitability."
        cases={caseStudiesData}
      />

      {/* Contact Form */}
      <ContactForm
        title="Get Efficient Crate Cleaning: Hygiene & Fast"
        description="Request a personalized hygiene assessment and see exactly how much you could save in labor, water, and crate inventory costs."
        steps={contactSteps}
        formSlug="crate-washing"
        roles={[
          "Owner / Director",
          "Plant Head",
          "Operations Manager",
          "QA Manager",
          "Logistics Manager",
          "Other",
        ]}
      />
    </>
  );
}
