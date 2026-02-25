import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import PainPoints from "@/components/PainPoints";
import WhyDifferent, { type FaqItem } from "@/components/WhyDifferent";
import Features, { type Feature } from "@/components/Features";
import WhyChoose, { type WhyChooseCard } from "@/components/WhyChoose";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import CaseStudies, { type CaseStudy } from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import ComparisonTable, {
  type ComparisonRow,
} from "@/components/ComparisonTable";
import TrustedBy, { type Brand } from "@/components/TrustedBy";
import IndustryCarousel, { type Industry } from "@/components/IndustryCarousel";
import ProductShowcase, {
  type Product,
  type CategoryConfig,
} from "@/components/ProductShowcase";

const productCategories: CategoryConfig[] = [
  {
    label: "Vegetable & Fruit Washers",
    brochureHref: "/brochures/vegetable-fruit-washers.pdf",
  },
  {
    label: "Peeling & Shelling Machines",
    brochureHref: "/brochures/peeling-shelling-machines.pdf",
  },
  {
    label: "Chopping, Dicing & Pulping",
    brochureHref: "/brochures/chopping-dicing-pulping.pdf",
  },
  {
    label: "Dryers & Conveyors",
    brochureHref: "/brochures/dryers-conveyors.pdf",
  },
];

const products: Product[] = [
  // Vegetable & Fruit Washers
  {
    name: "Tilting Vegetable Washer",
    category: "Vegetable & Fruit Washers",
    images: [
      "/product/tilting-washer-1.png",
      "/product/tilting-washer-2.png",
      "/product/tilting-washer-3.png",
      "/product/tilting-washer-4.png",
    ],
  },
  {
    name: "Multi-Purpose Vegetable Washer",
    category: "Vegetable & Fruit Washers",
    images: [
      "/temp/brands/multi-washer-1.png",
      "/temp/brands/multi-washer-2.png",
      "/temp/brands/multi-washer-3.png",
    ],
  },
  {
    name: "Crate Washing Machine",
    category: "Vegetable & Fruit Washers",
    images: [
      "/temp/brands/crate-washer-1.png",
      "/temp/brands/crate-washer-2.png",
    ],
  },

  // Peeling & Shelling Machines
  {
    name: "Garlic Peeling Machine",
    category: "Peeling & Shelling Machines",
    images: [
      "/temp/brands/Garlic_Peeling_Machine_1.png",
      "/temp/brands/Garlic_Peeling_Machine_2.png",
      "/temp/brands/Garlic_Peeling_Machine_3.png",
    ],
  },
  {
    name: "Onion Peeling Machine",
    category: "Peeling & Shelling Machines",
    images: [
      "/temp/brands/Onion_Peeling_Machine_1.png",
      "/temp/brands/Onion_Peeling_Machine_2.png",
      "/temp/brands/Onion_Peeling_Machine_3.png",
    ],
  },
  {
    name: "Ginger and Potato Washing and Peeling Machine",
    category: "Peeling & Shelling Machines",
    images: ["/temp/brands/Gingerandpotato_Peeling_Machine_1.png"],
  },

  // Chopping, Dicing & Pulping
  {
    name: "Vegetable Dicing Machine",
    category: "Chopping, Dicing & Pulping",
    images: [
      "/temp/brands/Vegetable_Dicing_Machine_1.png",
      "/temp/brands/Vegetable_Dicing_Machine_2.png",
    ],
  },
  {
    name: "Chopping Machine",
    category: "Chopping, Dicing & Pulping",
    images: [
      "/temp/brands/Chopping_Machine_1.png",
      "/temp/brands/Chopping_Machine_2.png",
      "/temp/brands/Chopping_Machine_3.png",
    ],
  },
  {
    name: "Leafy Vegetable Cutting Machine",
    category: "Chopping, Dicing & Pulping",
    images: [
      "/temp/brands/Leafy_Vegetable_Cutting_Machine_1.png",
      "/temp/brands/Leafy_Vegetable_Cutting_Machine_2.png",
      "/temp/brands/Leafy_Vegetable_Cutting_Machine_3.png",
    ],
  },
  {
    name: "Custard Apple Pulping Machine",
    category: "Chopping, Dicing & Pulping",
    images: [
      "/temp/brands/Custard_Apple_Pulping_Machine_1.png",
      "/temp/brands/Custard_Apple_Pulping_Machine_2.png",
      "/temp/brands/Custard_Apple_Pulping_Machine_3.png",
    ],
  },

  // Dryers & Conveyors
  {
    name: "Centrifugal Dryer",
    category: "Dryers & Conveyors",
    images: [
      "/temp/brands/Centrifugal_Dryer_1.png",
      "/temp/brands/Centrifugal_Dryer_2.png",
    ],
  },
  {
    name: "Tray Dryers",
    category: "Dryers & Conveyors",
    images: [
      "/temp/brands/Tray_Dryers_1.png",
      "/temp/brands/Tray_Dryers_2.png",
    ],
  },
  {
    name: "Pouch Dryers",
    category: "Dryers & Conveyors",
    images: [
      "/temp/brands/Pouch_Dryers_1.png",
      "/temp/brands/Pouch_Dryers_2.png",
      "/temp/brands/Pouch_Dryers_3.png",
    ],
  },
  {
    name: "Different Types of Conveyors",
    category: "Dryers & Conveyors",
    images: ["/temp/brands/converyors_1.png", "/temp/brands/converyors_2.png"],
  },
];

const trustedBrands: Brand[] = [
  { name: "Maiyas", logo: "/brand/homepage/Frame 123.png" },
  { name: "ITC Limited", logo: "/brand/homepage/Frame 122.png" },
  { name: "Chitale", logo: "/brand/homepage/Frame 124.png" },
  { name: "Gits", logo: "/brand/homepage/Frame 125.png" },
  { name: "Mother Dairy", logo: "/brand/homepage/Frame 126.png" },
  { name: "Taj Sats", logo: "/brand/homepage/Frame 127.png" },
  { name: "Suhana", logo: "/brand/homepage/Frame 128.png" },
  { name: "Kagome", logo: "/brand/homepage/Frame 129.png" },
  { name: "Tasty Bite", logo: "/brand/homepage/Frame 130.png" },
  { name: "Mothers Recipe", logo: "/brand/homepage/Frame 131.png" },
  { name: "MTR", logo: "/brand/homepage/Frame 132.png" },
  { name: "Essar", logo: "/brand/homepage/Frame 133.png" },
];

const industries: Industry[] = [
  {
    name: "Dairy",
    description:
      "Efficient milk processing, cheese production, and other dairy products.",
    image: "/Equipment/1942 3.png",
  },
  {
    name: "Bakery",
    description:
      "Automated dough mixing, shaping, and baking solutions for large-scale bakeries.",
    image: "/Equipment/1942 2.png",
  },
  {
    name: "Restaurant",
    description:
      "High-speed vegetable prep, washing, and cutting machines for busy restaurant kitchens.",
    image: "/Equipment/1942 4.png",
  },
  {
    name: "Community Kitchen",
    description:
      "Bulk food processing equipment for mid-day meal programs and large-scale catering.",
    image: "/Equipment/1942 5.png",
  },
  {
    name: "Frozen Food Processing",
    description:
      "Pre-processing, blanching, and IQF-ready preparation for frozen food export units.",
    image: "/Equipment/1942 1.png",
  },
  {
    name: "Food Packaging",
    description:
      "Hygienic washing, drying, and conveying systems integrated with packaging lines.",
    image: "/Equipment/1942 6.png",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    ordinaryIcon: "/icon/red-1.png",
    ordinaryTitle: "150 kg/hour",
    ordinaryDesc: "Limited throughput with the same team size",
    nexgenIcon: "/icon/green-1.png",
    nexgenTitle: "500–1000 kg/hour",
    nexgenDesc: "Same team, dramatically higher output",
  },
  {
    ordinaryIcon: "/icon/red-2.png",
    ordinaryTitle: "15 Workers",
    ordinaryDesc: "High headcount, high labor overhead",
    nexgenIcon: "/icon/green-2.png",
    nexgenTitle: "3–4 Operators",
    nexgenDesc: "Lean team managing automated systems",
  },
  {
    ordinaryIcon: "/icon/red-3.png",
    ordinaryTitle: "Inconsistent Output",
    ordinaryDesc: "Variable size and quality shift to shift",
    nexgenIcon: "/icon/green-3.png",
    nexgenTitle: "Uniform Quality",
    nexgenDesc: "Every shift, every day no exceptions",
  },
  {
    ordinaryIcon: "/icon/red-2.png",
    ordinaryTitle: "Rejecting Orders",
    ordinaryDesc: "Capacity limits cost you contracts",
    nexgenIcon: "/icon/green-4.png",
    nexgenTitle: "Scale on Demand",
    nexgenDesc: "Meet any order, grow revenue confidently",
  },
  {
    ordinaryIcon: "/icon/red-4.png",
    ordinaryTitle: "Rising Labor Costs",
    ordinaryDesc: "Margins eroded by unpredictable wages",
    nexgenIcon: "/icon/green-5.png",
    nexgenTitle: "Locked Processing Costs",
    nexgenDesc: "Predictable margins, protected profits",
  },
  {
    ordinaryIcon: "/icon/red-5.png",
    ordinaryTitle: "Utility Waste",
    ordinaryDesc: "Excess energy and water consumption",
    nexgenIcon: "/icon/green-6.png",
    nexgenTitle: "30–40% Less Consumption",
    nexgenDesc: "Significant energy & water savings",
  },
];

const whyDifferentFaqs: FaqItem[] = [
  {
    question: "Built for Indian Food Processing Realities",
    points: [
      "High-volume processing with limited floor space",
      "Need to handle multiple vegetables/products on same line",
      "Budget-conscious but quality-demanding",
      "Must work reliably in high-temperature, high-humidity environments",
      "Require simple operation (not highly skilled labor)",
    ],
  },
  {
    question: "Proven Results with India's Leading Food Operators",
    points: [
      "Akshayapatra Foundation (India's largest NGO kitchen) - 30% faster processing",
      "Multi-location Food Franchises - 3x output with product accuracy",
      "Ready-to-Eat Meals Kitchen Chains - 40% wash consistency improvement",
      "Leading Food Packaging Companies - 60% productivity growth",
      "Farmers & Co-operative Societies - 27% higher profits by reducing post-harvest losses",
    ],
  },
  {
    question: "Complete Range for Your Entire Processing Line",
    points: [
      "Washing equipment (bubble, tilting, multi-purpose)",
      "Peeling machines (onion, garlic, potato, ginger)",
      "Cutting & dicing (high-speed, multi-vegetable)",
      "Drying systems (air knife, centrifugal, tray dryers)",
      "Specialty equipment (chapati lines, pulpers, conveyors)",
    ],
  },
  {
    question: "Industrial-Grade Construction for 24/7 Operation",
    points: [
      "Heavy-duty stainless steel 304/316 (won't rust or corrode)",
      "Food-grade components throughout",
      "Built for continuous operation (not light commercial use)",
      "Handles high volumes without breakdown",
      "10+ year operational lifespan",
    ],
  },
];

const featuresData: Feature[] = [
  {
    icon: "/icon/automated.png",
    title: "Automated & Precise Processing",
    description:
      "Programmed cutting, washing, and peeling parameters deliver uniform size, texture, and yield.",
  },
  {
    icon: "/icon/energy.png",
    title: "Energy-Efficient Operation",
    description:
      "Optimized motors, VFDs, and air-knife systems reduce power and water usage without slowing production.",
  },
  {
    icon: "/icon/custom.png",
    title: "Custom Configuration",
    description:
      "Machines and lines adapt to vegetables, fruits, dough, chapati, and ready-to-eat products.",
  },
  {
    icon: "/icon/continous.png",
    title: "Built for Continuous Use",
    description:
      "Heavy-duty stainless-steel 304 construction supports multi-shift, high-volume operations.",
  },
  {
    icon: "/icon/maintenance.png",
    title: "Easy Maintenance",
    description:
      "Quick-access panels and simple cleaning routines reduce downtime.",
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    icon: "/icon/icon-expertise.png",
    title: "20+ Years of Food Processing Expertise",
  },
  {
    icon: "/icon/icon-support.png",
    title: "End-to-End Support (Not Just a Vendor)",
  },
  {
    icon: "/icon/icon-track-record-1.png",
    title: "Proven Track Record with Leading Brands",
  },
  {
    icon: "/icon/icon-innovation.png",
    title: "Innovations & Engineering That Focuses on Efficiency",
  },
];

const testimonialsData: Testimonial[] = [
  {
    category: "Vegetable Processing Plant",
    quote:
      "We were struggling to meet demand with our manual dicing process. After installing NexGen's automated dicing line, we increased throughput by 65% while maintaining perfect cube consistency. The machine paid for itself in just 7 months through increased orders and reduced labor costs.",
    personName: "Operations Head",
    personRole: "Mid-Sized Food Packaging Company, Pune",
    personImage: "/icon/operation-head.png",
  },
  {
    category: "Ready-to-Eat / Central Kitchen",
    quote:
      "Quality consistency across our 12 outlets was our biggest challenge. NexGen's washing and cutting automation changed everything. Now every outlet gets the same perfect prep, our customers notice the improved quality, and our kitchen staff can focus on cooking instead of repetitive cutting.",
    personName: "Production Manager",
    personRole: "Multi-Location Ready-to-Eat Chain, Delhi NCR",
    personImage: "/icon/production-manager.png",
  },
  {
    category: "Export-Focused Processor",
    quote:
      "Meeting international food safety standards was non-negotiable for our export business. NexGen didn't just provide machines—they helped us design a complete hygienic processing line that passed the BRCGS audit on the first attempt. Their attention to compliance details gave us confidence to expand into EU markets.",
    personName: "Director",
    personRole: "Export-Oriented Food Processing Facility, Gujarat",
    personImage: "/icon/director.png",
  },
];

const caseStudiesData: CaseStudy[] = [
  {
    title: "Institutional Kitchen: Akshayapatra Foundation",
    challenge:
      "Manual vegetable processing created bottlenecks in central kitchens serving thousands of meals daily. Output speed and consistency varied across shifts, making planning difficult.",
    solution:
      "Automated vegetable washing and cutting systems designed for continuous, high-volume operation.",
    results: [
      "30% faster processing",
      "Consistent output across locations",
      "Reduced dependency on manual labor",
      "Better control over daily production schedules",
    ],
    image: "/dairy.png",
  },
  {
    title: "Multi-Location Food Processor",
    challenge:
      "High labor costs and inconsistent output from manual onion peeling across multiple facilities.",
    solution:
      "Automatic onion peeling machines integrated into existing prep workflows.",
    results: [
      "40% reduction in labor costs",
      "Tripled onion processing capacity",
      "Standardized quality across locations",
      "ROI achieved in approximately 14 months",
    ],
    image: "/bakery.png",
  },
  {
    title: "Ready-to-Eat Meal Manufacturer",
    challenge:
      "Inconsistent washing and cutting caused high rejection rates and customer complaints, limiting access to premium retail channels.",
    solution:
      "Tilting vegetable washing system combined with high-speed dicing equipment.",
    results: [
      "40% improvement in wash consistency",
      "Rejection rates reduced from double digits to under 2%",
      "85% drop in customer complaints",
      "Enabled entry into higher-margin retail distribution",
    ],
    image: "/Restaurant.png",
  },
  {
    title: "High-Volume Food Packaging Facility",
    challenge:
      "Manual processing capped throughput at 150 kg/hour, forcing the plant to reject incoming orders.",
    solution:
      "Automated cutting and handling line optimized for throughput within the same floor space.",
    results: [
      "60% increase in processing capacity",
      "Same workforce and footprint",
      "Ability to fulfill previously rejected orders",
      "Improved daily production planning",
    ],
    image: "/kitchen.png",
  },
  {
    title: "Agricultural & Farmer Cooperatives",
    challenge:
      "Post-harvest losses due to slow, inconsistent manual washing and handling during peak harvest periods.",
    solution:
      "High-capacity vegetable washing systems designed for fast throughput and gentle handling.",
    results: [
      "27% increase in realized profits",
      "Significant reduction in post-harvest losses",
      "Access to premium and modern trade buyers",
      "Improved utilization during peak seasons",
    ],
    image: "/dairy.png",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Process 3X More in Half the Time, with the Same Team and the Same Space"
        description="Automated Food Processing Machines trusted by Akshayapatra, leading ready-to-eat brands (McDonald's, Amul Dairy, Mother's Recipe, Suhana, and Gits), airline caterings (Taj Stats), and export facilities to cut processing time, reduce labor costs, and scale production."
        ctaText="Get Your Free ROI Assessment"
        ctaHref="/contact"
        backgroundImage="/temp/hero.png"
      />
      <TrustedBy
        title={`Trusted By 500+ Food Processors\nAcross India And Global Market`}
        description="30+ years providing Hygiene-First Food Processing Solutions to leading food manufacturers, exporters, and institutions."
        brands={trustedBrands}
      />
      <ProductShowcase
        title="Versatile Food Processing Machines for Every Application"
        description="Processing fresh vegetables, ready-to-cook products, bakery items, dairy-based foods, or frozen food exports? Nexgen offers a comprehensive range of machines to fit every step of your production line."
        categories={productCategories}
        products={products}
        ctaText="Download Brochure"
      />
      <IndustryCarousel
        title="Custom Food Processing Equipment"
        industries={industries}
      />
      <VideoShowcase
        title="Equipment That Cut Food Wastage & Improve Output Quality"
        description="From Messy Manual Work to Clean & Reliable Automated Machines."
        videoId="aZi-9hn20iQ"
        thumbnail="/util/yt_thumbnail_home.png"
      />
      <PainPoints
        title="Stuck at Capacity While Demand Keeps Growing?"
        description="As production volumes rise, manual and semi-automated processes struggle to keep up. What starts as small inefficiencies soon turns into missed orders, rising labor costs, and quality complaints."
        listHeading="The Hidden Costs You're Paying Right Now:"
        points={[
          "Output varies across shifts and operators, leading to rework and rejections",
          "Manual washing, peeling, and cutting slow down production cycles",
          "High labor dependency increases cost and operational risk",
          "Excessive water and power consumption inflates cost per kg",
          "Hygiene gaps create audit pressure and compliance risks",
        ]}
        image="/util/food-processing.png"
      />
      <ComparisonTable
        title="Here's What Changes When You Get Automated Machines"
        rows={comparisonRows}
      />
      <WhyDifferent
        title="What Makes NexGen Food Processing Equipment Different?"
        image="/util/faq-home.png"
        faqs={whyDifferentFaqs}
      />
      <Features
        title="Every Feature Engineered to Maximize Your Output and Minimize Your Costs"
        description="Nexgen food processing machines are designed for plant heads and production managers who need predictable performance under real operating conditions."
        features={featuresData}
      />
      <WhyChoose
        title="Why 500+ Food Businesses & Institutions Choose NexGen Over Everyone Else"
        cards={whyChooseCards}
      />
      <Testimonials
        title="Hear It From the Leaders in Food Industry"
        testimonials={testimonialsData}
      />
      <CaseStudies
        heading="Proven Results in Real Food Processing Environments"
        description="Nexgen machines operate in high-volume, real-world food processing environments where consistency, speed, and reliability matter more than theoretical capacity. The following examples reflect how automation delivers measurable outcomes across different use cases."
        cases={caseStudiesData}
      />
      <ContactForm />
    </>
  );
}
