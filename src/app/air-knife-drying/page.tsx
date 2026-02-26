import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProductShowcase from "@/components/ProductShowcase";
import IndustryCarousel from "@/components/IndustryCarousel";
import PainPoints from "@/components/PainPoints";
import ComparisonTable from "@/components/ComparisonTable";
import WhyDifferent from "@/components/WhyDifferent";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "NexGen Air Knife Drying Machines | Industrial Air Knife Drying Systems",
  description:
    "Remove Surface Moisture 60% Faster at 1/4th Energy Costs. Industrial Air Knife Drying Systems trusted by beverage, pharmaceutical, food, and engineering industries.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const trustedBrands = [
  { name: "Pernod Ricard", logo: "/brand/ari-kinfe/Frame 158.webp" },
  { name: "KHS", logo: "/brand/ari-kinfe/Frame 159.webp" },
  { name: "Pepsi", logo: "/brand/ari-kinfe/Frame 160.webp" },
  { name: "Coca-Cola", logo: "/brand/ari-kinfe/Frame 161.webp" },
  { name: "ABG", logo: "/brand/ari-kinfe/Frame 162.webp" },
  { name: "Allied Blenders", logo: "/brand/ari-kinfe/Frame 163.webp" },
  { name: "Jindal Steel & Power", logo: "/brand/ari-kinfe/Frame 164.webp" },
  { name: "CEAT", logo: "/brand/ari-kinfe/Frame 165.webp" },
  { name: "Budweiser", logo: "/brand/ari-kinfe/Frame 166.webp" },
  { name: "ABInBev", logo: "/brand/ari-kinfe/Frame 167.webp" },
  { name: "Kajaria", logo: "/brand/ari-kinfe/Frame 168.webp" },
  { name: "V3", logo: "/brand/ari-kinfe/Frame 169.webp" },
];

const productCategories = [
  {
    label: "System Components",
    brochureHref: "#contact",
  },
  {
    label: "Pouch & Packaging Dryers",
    brochureHref: "#contact",
  },
  {
    label: "Dryers for Crate Washers",
    brochureHref: "#contact",
  },
];

const products = [
  {
    name: "Air Knife",
    category: "System Components",
    images: ["/product/airknife/systemcomponents/image%2069.webp"],
  },
  {
    name: "SS Enclosure for Blower",
    category: "System Components",
    images: ["/product/airknife/systemcomponents/image%2070.webp"],
  },
  {
    name: "MS Enclosure for Blower",
    category: "System Components",
    images: ["/product/airknife/systemcomponents/image%2071.webp"],
  },
  {
    name: "Blower with Air Knife",
    category: "System Components",
    images: ["/product/airknife/systemcomponents/image%2072.webp"],
  },
  {
    name: "Pouch Dryer (40\u2013150 pouches/min)",
    category: "Pouch & Packaging Dryers",
    images: [
      "/product/airknife/pouchpackage/image%2046.webp",
      "/product/airknife/pouchpackage/image%2047.webp",
      "/product/airknife/pouchpackage/image%2048.webp",
    ],
  },
  {
    name: "Crate Washer with Integrated Air Knife",
    category: "Dryers for Crate Washers",
    images: [
      "/product/airknife/createwasher/image%204.webp",
      "/product/airknife/createwasher/image%2075.webp",
    ],
  },
];

const industries = [
  {
    name: "Food & Beverage",
    description:
      "High-speed drying for bottles, cans, and containers before labeling, coding, and packaging.",
    image: "/Equipment/1942%201.webp",
  },
  {
    name: "Dairy",
    description:
      "Moisture-free packaging surfaces to prevent mold growth and extend shelf life on dairy products.",
    image: "/Equipment/1942%202.webp",
  },
  {
    name: "Pharmaceuticals",
    description:
      "Ambient temperature drying for vials, ampoules, and trays without heat damage to sensitive products.",
    image: "/Equipment/1942%203.webp",
  },
  {
    name: "Biotechnology",
    description:
      "Contamination-free drying with filtered air streams for biotech lab equipment and packaging.",
    image: "/Equipment/1942%204.webp",
  },
  {
    name: "Cosmetics",
    description:
      "Streak-free drying for cosmetic bottles and containers to ensure label adhesion and print quality.",
    image: "/Equipment/1942%205.webp",
  },
  {
    name: "Electronics",
    description:
      "Precision moisture removal from PCBs, components, and enclosures without static or heat risk.",
    image: "/Equipment/1942%206.webp",
  },
  {
    name: "Clean Manufacturing",
    description:
      "Oil-free, particle-free air knife drying for cleanroom and controlled-environment production.",
    image: "/dairy.webp",
  },
  {
    name: "Export Facilities",
    description:
      "Ensure export packaging compliance with verified moisture-free surfaces and documented drying cycles.",
    image: "/bakery.webp",
  },
];

const comparisonRows = [
  {
    ordinaryIcon: "/icon/red-1.webp",
    ordinaryTitle: "5\u201310 Minute Drying Cycles",
    ordinaryDesc:
      "Slow heat dryers or air drying create production bottlenecks",
    nexgenIcon: "/icon/green-1.webp",
    nexgenTitle: "Complete Drying in 10\u201330 Seconds",
    nexgenDesc:
      "High-velocity air knives remove surface moisture instantly on the line",
  },
  {
    ordinaryIcon: "/icon/red-2.webp",
    ordinaryTitle: "10 kW Heat Dryer Consumption",
    ordinaryDesc: "Heat-based systems consume massive energy per shift",
    nexgenIcon: "/icon/green-2.webp",
    nexgenTitle: "3\u20134 kW with Air Knife Systems",
    nexgenDesc: "60%+ energy savings with efficient blower technology",
  },
  {
    ordinaryIcon: "/icon/red-3.webp",
    ordinaryTitle: "Heat Damage to Products",
    ordinaryDesc:
      "Labels warp, packaging degrades, sensitive products get damaged",
    nexgenIcon: "/icon/green-3.webp",
    nexgenTitle: "Ambient Air \u2014 Zero Heat Damage",
    nexgenDesc:
      "Product integrity maintained with ambient or low-temperature air",
  },
  {
    ordinaryIcon: "/icon/red-4.webp",
    ordinaryTitle: "85\u201390% Moisture Removal",
    ordinaryDesc:
      "Incomplete drying leads to labeling failures and quality defects",
    nexgenIcon: "/icon/green-4.webp",
    nexgenTitle: "99%+ Surface Moisture Elimination",
    nexgenDesc:
      "Precision air curtain achieves near-complete moisture removal",
  },
  {
    ordinaryIcon: "/icon/red-5.webp",
    ordinaryTitle: "Compressed Air Waste",
    ordinaryDesc:
      "Expensive, inconsistent, and energy-inefficient drying method",
    nexgenIcon: "/icon/green-5.webp",
    nexgenTitle: "Controlled High-Velocity Airflow",
    nexgenDesc:
      "Consistent, energy-efficient blower-driven drying across the full width",
  },
  {
    ordinaryIcon: "/icon/red-1.webp",
    ordinaryTitle: "Frequent Breakdowns",
    ordinaryDesc:
      "Complex heat elements and moving parts require constant maintenance",
    nexgenIcon: "/icon/green-6.webp",
    nexgenTitle: "Continuous 24/7 Operation",
    nexgenDesc:
      "No moving parts at the air knife — minimal maintenance, maximum uptime",
  },
];

const whyDifferentFaqs = [
  {
    question: "60% Faster Drying at 50% Lower Energy Cost",
    points: [
      "10 HP blower generating airflow up to 675 CFM",
      "High-velocity air stream up to 200 m/s",
      "System pressure approx. 250 mbar",
      "Designed for 24/7 operation",
      "Lower energy consumption compared to compressed air systems",
    ],
  },
  {
    question: "Zero Heat Damage with Ambient Air Drying",
    points: [
      "No heat elements or burners",
      "Maintains product integrity and appearance",
      "Prevents warping, discoloration, or degradation",
      "Natural heat of compression (8\u201310\u00b0C rise) aids drying without damage",
    ],
  },
  {
    question: "99% Moisture Removal = Zero Downstream Issues",
    points: [
      "High-velocity air curtain removes surface water instantly",
      "Consistent pressure across entire drying width",
      "Eliminates water pooling and streaking",
      "Clean, filtered air prevents particle contamination",
    ],
  },
  {
    question: "Very Low Maintenance System with Flexible Design",
    points: [
      "Corrosion resistant",
      "No moving parts at the air knife, reducing wear and failure points",
      "Compact design with adjustable air knife positioning",
      "Easily retrofitted to existing conveyors",
      "Modular sections support wash + dry configurations",
      "Custom speeds and layouts available for different line requirements",
    ],
  },
];

const featuresData = [
  {
    icon: "/icon/automated.webp",
    title: "High-Velocity Air Curtain",
    description:
      "Precision-engineered air knives generate uniform, high-speed airflow that shears water off surfaces instantly.",
  },
  {
    icon: "/icon/energy.webp",
    title: "Energy-Efficient Blower Technology",
    description:
      "10 HP centrifugal blowers deliver 675 CFM at 250 mbar\u2014eliminating compressed air waste and reducing power consumption.",
  },
  {
    icon: "/icon/custom.webp",
    title: "Food-Grade, Pharma-Safe & Oil-Free Air Stream",
    description:
      "Stainless steel 304 construction with filtered air input prevents particle contamination and meets hygiene standards.",
  },
  {
    icon: "/icon/continous.webp",
    title: "Continuous Operation Capability",
    description:
      "Built for 24/7 multi-shift manufacturing with industrial-grade components rated for harsh production environments.",
  },
  {
    icon: "/icon/maintenance.webp",
    title: "Quick Integration",
    description:
      "Compact enclosure designs mount directly over existing conveyor lines, enabling fast installation with minimal line disruption.",
  },
];

const whyChooseCards = [
  {
    icon: "/icon/icon-expertise.webp",
    title: "20+ Years of Industrial Drying Expertise",
  },
  {
    icon: "/icon/icon-innovation.webp",
    title: "Multi-Industry Experience (Beverage, Pharma, Food, Automotive)",
  },
  {
    icon: "/icon/icon-track-record.webp",
    title: "Proven Energy Savings (50\u201370% vs Heat Drying)",
  },
  {
    icon: "/icon/icon-support.webp",
    title: "Customization Capability for Unique Applications",
  },
  {
    icon: "/icon/icon-track-record-1.webp",
    title: "Nationwide Installation & Service Support",
  },
];

const testimonialsData = [
  {
    category: "Beverage Bottling Plant",
    quote:
      "Our heat tunnel dryer was the slowest point in our bottling line and consumed massive energy. After installing NexGen\u2019s air knife drying system, we increased line speed by 50% while cutting drying energy costs by 60%. The bottles are completely dry with zero heat damage to labels. ROI was achieved in under 14 months.",
    personName: "Production Manager",
    personRole: "Large-Scale Beverage Bottling Facility, Maharashtra",
    personImage: "/icon/operation-head.webp",
  },
  {
    category: "Pharmaceutical Manufacturing Facility",
    quote:
      "We were launching a temperature sensitive product line and our existing drying system would be proven to be damaging for its packaging. NexGen customized their ambient air knife system for us. We are now drying our vials, trays, and packaging without any heat exposure. It has improved drying consistency, and the energy consumption is also low.",
    personName: "Quality Assurance Manager",
    personRole: "Pharmaceutical Packaging Facility, Hyderabad",
    personImage: "/icon/production-manager.webp",
  },
  {
    category: "Food Packaging Manufacturer",
    quote:
      "We were rejecting 12\u201315% of pouches due to surface moisture causing labeling failures and mold during storage. NexGen\u2019s pouch drying system removed 99% of moisture at speeds up to 120 pouches/minute. Our rejection rate dropped to under 2%, and we\u2019re processing more volume faster than ever.",
    personName: "Operations Head",
    personRole: "Ready-to-Eat Food Packaging Company, Gujarat",
    personImage: "/icon/director.webp",
  },
];

const caseStudiesData = [
  {
    title: "Beverage Bottling Line: 60% Energy Savings",
    challenge:
      "Heat tunnel dryers that consumed 12 kW and slowed the line to 200 bottles/minute. Additionally, high energy costs and occasional label damage from heat were ongoing issues.",
    solution:
      "SS Enclosure Air Knife Drying System with 10 HP blower, dual-sided air knives, and integrated conveyor.",
    results: [
      "60% reduction in drying energy costs (12 kW \u2192 4 kW)",
      "Increase in line speed (up to 800 bottles/min)",
      "Zero heat damage to labels or bottles",
      "Annual savings: Lakhs in electricity costs (based on averages)",
    ],
    image: "/dairy.webp",
  },
  {
    title: "Food Packaging Facility: 93% Reduction in Rejections",
    challenge:
      "12\u201315% rejection rates due to surface moisture on pouches causing labeling failures, mold growth, and poor shelf life.",
    solution:
      "High-speed Pouch Dryer system (120 pouches/minute capacity) with 99% moisture removal capability.",
    results: [
      "99% surface moisture removal achieved",
      "Rejection rate: 12% \u2192 under 2% (93% reduction)",
      "Extended shelf life by 3\u20134 days",
      "Processing speed: 120 pouches/minute",
      "\u20b918 lakhs annual savings from reduced waste",
    ],
    image: "/bakery.webp",
  },
  {
    title: "Pharmaceutical Plant: Zero Product Damage",
    challenge:
      "Heat drying was damaging temperature-sensitive pharmaceutical vials, trays, and packaging, even the not-so-sensitive ones also faced 8% rejection rates during inspections.",
    solution:
      "Custom ambient air knife system with filtered air input meeting pharma cleanliness standards.",
    results: [
      "Zero heat-related product damage",
      "Rejection rate: 8% \u2192 under 1%",
      "Pharma-grade filtered air (no contamination)",
      "Consistent drying across all shifts",
      "Quality complaints eliminated",
    ],
    image: "/kitchen.webp",
  },
];

const contactSteps = [
  "Fill out the form below (takes 60 seconds)",
  "Our drying systems expert contacts you within 24 hours",
  "We analyze your product and drying requirements",
  "Schedule a demo at our facility or yours",
  "Get detailed energy savings projections and ROI timeline",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AirKnifeDryingPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Remove Surface Moisture 60% Faster at 1/4th Energy Costs"
        description="Industrial Air Knife Drying Systems trusted by beverage, pharmaceutical, food, and engineering industries to eliminate surface moisture without heat damage or contamination."
        ctaText="Get Your Free ROI Assessment"
        ctaHref="contact"
        backgroundVideo="/video/hero-compressed.mp4"
        backgroundImage="/temp/hero.webp"
      />

      {/* Trusted By */}
      <TrustedBy
        title="Trusted By 500+ Plants Across Beverage, Pharma, Food, And Automotive Industries"
        description="Over two decades of experience providing precision drying solutions to manufacturers where speed, energy efficiency, and product quality matter most."
        brands={trustedBrands}
      />

      {/* Product Showcase */}
      <ProductShowcase
        title="Advanced Air Knife Drying Systems for Every Industrial Application"
        description="Need precise, energy-efficient drying for bottles, pouches, crates, components, or packaging? NexGen offers specialized air knife systems engineered for high-speed manufacturing across multiple industries."
        categories={productCategories}
        products={products}
        ctaText="Download Brochure"
      />

      {/* Industry Carousel */}
      <IndustryCarousel
        title="Need a Custom Air Knife Configuration for Automotive Parts, Electronic Components, or Specialty Manufacturing?"
        industries={industries}
      />

      {/* Pain Points */}
      <PainPoints
        title="Is Slow Drying Creating Production Bottlenecks and Quality Issues?"
        description="In high-speed manufacturing, drying is often the forgotten bottleneck. While your processing line runs at full capacity, products slow to a crawl at the drying stage, waiting for heat dryers, towel systems, or natural air drying to remove surface moisture. The result? Reduced throughput, wasted energy, product damage, and quality defects from inadequate drying."
        listHeading="When Drying Is Inconsistent"
        points={[
          "Water droplets enter the labeling machine, leading to bearing corrosion and failure",
          "Each damaged bearing can cost upwards of \u20b91 lakh, excluding downtime and labor",
          "Labels fail to adhere properly due to residual surface moisture",
          "Inkjet coding smears or becomes unreadable",
          "Moisture causes product slippage on conveyors, triggering misfeeds",
          "Overuse of compressed air increases energy consumption",
          "Manual wiping slows line speed and introduces variability",
        ]}
        image="/util/slow-drying.webp"
      />

      {/* Comparison Table */}
      <ComparisonTable
        title="Here\u2019s What Changes with Air Knife Drying"
        rows={comparisonRows}
      />

      {/* What Makes NexGen Different (accordion) */}
      <WhyDifferent
        title="What Makes NexGen Air Knife Drying Systems Different?"
        image="/Equipment/1942%205.webp"
        faqs={whyDifferentFaqs}
      />

      {/* Features */}
      <Features
        title="Every Feature Engineered to Maximize Drying Speed and Minimize Energy Use"
        description=""
        features={featuresData}
      />

      {/* Why Choose */}
      <WhyChoose
        title="Why 500+ Manufacturing Plants Choose NexGen Air Knife Systems"
        cards={whyChooseCards}
      />

      {/* Testimonials */}
      <Testimonials
        title="Hear It From Production Leaders Across Industries"
        testimonials={testimonialsData}
      />

      {/* Case Studies */}
      <CaseStudies
        heading="Proven Results in Real Manufacturing Environments"
        description="NexGen air knife drying systems operate in high-speed production lines where drying efficiency directly impacts throughput, energy costs, and product quality."
        cases={caseStudiesData}
      />

      {/* Contact Form */}
      <ContactForm
        title="Eliminate Moisture Risk from Your Production Line"
        description="Get a FREE Air Knife System Assessment and see how much drying time, energy, and rejection cost you can eliminate."
        steps={contactSteps}
        formSlug="air-knife"
        roles={[
          "Owner / Director",
          "Plant Head",
          "Production Manager",
          "Engineering Manager",
          "Operations Manager",
          "Other",
        ]}
      />
    </>
  );
}
