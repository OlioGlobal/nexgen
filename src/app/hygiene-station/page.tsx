import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustedBy, { type Brand } from "@/components/TrustedBy";
import ProductShowcase, {
  type Product,
  type CategoryConfig,
} from "@/components/ProductShowcase";
import IndustryCarousel, { type Industry } from "@/components/IndustryCarousel";
import PainPoints from "@/components/PainPoints";
import ComparisonTable, {
  type ComparisonRow,
} from "@/components/ComparisonTable";
import WhyDifferent, { type FaqItem } from "@/components/WhyDifferent";
import Features, { type Feature } from "@/components/Features";
import WhyChoose, { type WhyChooseCard } from "@/components/WhyChoose";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import CaseStudies, { type CaseStudy } from "@/components/CaseStudies";
import VideoShowcase from "@/components/VideoShowcase";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Industrial Hygiene Systems | NexGen Hygiene Systems",
  description:
    "Eliminate 80% contamination risks at entry alone with NexGen automated and manual hygiene stations. Trusted across food, pharma, dairy, and export facilities.",
};

/* ─── Product Categories ─── */
const hygieneCategories: CategoryConfig[] = [
  {
    label: "Automated Hygiene Systems",
    brochureHref: "/assets/brochures/nexgen-hygiene-stations-brochure.pdf",
  },
  {
    label: "Manual Hygiene Systems",
    brochureHref: "/assets/brochures/nexgen-hygiene-stations-brochure.pdf",
  },
  {
    label: "Single-Unit Hygiene Systems",
    brochureHref: "/assets/brochures/nexgen-hygiene-stations-brochure.pdf",
  },
];

const hygieneProducts: Product[] = [
  // Automated Hygiene Systems
  {
    name: "All-in-One Hygiene Station",
    category: "Automated Hygiene Systems",
    images: [
      "/product/hygine/automated%20Hygine%20system/image%2066.webp",
      "/product/hygine/automated%20Hygine%20system/image%2067.webp",
      "/product/hygine/automated%20Hygine%20system/image%2068.webp",
    ],
  },
  {
    name: "Ecoline Hygiene Station",
    category: "Automated Hygiene Systems",
    images: [
      "/product/hygine/automated%20Hygine%20system/image%2049.webp",
    ],
  },
  {
    name: "Sensor-Operated Sole Cleaning with Hand Disinfection",
    category: "Automated Hygiene Systems",
    images: [
      "/product/hygine/automated%20Hygine%20system/image%2051.webp",
      "/product/hygine/automated%20Hygine%20system/image%2052.webp",
    ],
  },
  {
    name: "Cleanroom Air Shower",
    category: "Automated Hygiene Systems",
    images: [
      "/product/hygine/automated%20Hygine%20system/image%2053.webp",
      "/product/hygine/automated%20Hygine%20system/image%2054.webp",
    ],
  },
  {
    name: "Gumboot Cleaning Machine with Hygiene Station",
    category: "Automated Hygiene Systems",
    images: [
      "/product/hygine/automated%20Hygine%20system/image%2055.webp",
    ],
  },
  {
    name: "Exit Turnstile",
    category: "Automated Hygiene Systems",
    images: [
      "/product/hygine/automated%20Hygine%20system/image%2056.webp",
      "/product/hygine/automated%20Hygine%20system/image%2057.webp",
    ],
  },

  // Manual Hygiene Systems
  {
    name: "Foot-Operated Wash Basin",
    category: "Manual Hygiene Systems",
    images: [
      "/product/hygine/manual%20system/image%2058.webp",
      "/product/hygine/manual%20system/image%2059.webp",
    ],
  },
  {
    name: "Knee-Operated Hand Wash Basin",
    category: "Manual Hygiene Systems",
    images: [
      "/product/hygine/manual%20system/image%2060.webp",
      "/product/hygine/manual%20system/image%2061.webp",
    ],
  },
  {
    name: "Stainless Steel Locker Units",
    category: "Manual Hygiene Systems",
    images: [
      "/product/hygine/manual%20system/image%2062.webp",
    ],
  },
  {
    name: "Change-Over Benches",
    category: "Manual Hygiene Systems",
    images: [
      "/product/hygine/manual%20system/image%2063.webp",
    ],
  },

  // Single-Unit Hygiene Systems
  {
    name: "Standalone Sole Cleaning Machine",
    category: "Single-Unit Hygiene Systems",
    images: [
      "/product/hygine/single%20unit/image%2064.webp",
    ],
  },
  {
    name: "Mask Dispensers (with Integrated Hygiene)",
    category: "Single-Unit Hygiene Systems",
    images: [
      "/product/hygine/single%20unit/image%2065.webp",
    ],
  },
];

/* ─── Trusted Brands ─── */
const trustedBrands: Brand[] = [
  { name: "Allana", logo: "/brand/hygiene/Frame 146.webp" },
  { name: "ATC", logo: "/brand/hygiene/Frame 147.webp" },
  { name: "Abbott", logo: "/brand/hygiene/Frame 148.webp" },
  { name: "Reckitt", logo: "/brand/hygiene/Frame 149.webp" },
  { name: "Mars", logo: "/brand/hygiene/Frame 150.webp" },
  { name: "Cipla", logo: "/brand/hygiene/Frame 151.webp" },
  { name: "Suhana", logo: "/brand/hygiene/Frame 152.webp" },
  { name: "Haldirams", logo: "/brand/hygiene/Frame 153.webp" },
  { name: "Dabur", logo: "/brand/hygiene/Frame 154.webp" },
  { name: "Pernod Ricard", logo: "/brand/hygiene/Frame 155.webp" },
  { name: "Nestle", logo: "/brand/hygiene/Frame 156.webp" },
  { name: "Chitale", logo: "/brand/hygiene/Frame 157.webp" },
];

/* ─── Industry Carousel ─── */
const industries: Industry[] = [
  {
    name: "Chemical and Petrochemical",
    description:
      "Enforce entry hygiene across processing zones handling raw materials, packaging, and chemical production.",
    image: "/industry/hygiene/1942 12.png",
  },
  {
    name: "Beverage Production",
    description:
      "Contamination-free entry to pasteurization, filling, and cold storage areas with automated hygiene enforcement.",
    image: "/industry/hygiene/1942 13.png",
  },
  {
    name: "Meat and Poultry Processing",
    description:
      "GMP-compliant hygiene stations for processing zones, cold rooms, and packaging areas.",
    image: "/industry/hygiene/1942 14.png",
  },
  {
    name: "Pharmaceutical",
    description:
      "GMP-compliant hygiene stations for controlled zones, cleanrooms, and API manufacturing areas.",
    image: "/industry/hygiene/1942 15.png",
  },
  {
    name: "Healthcare",
    description:
      "Sterile entry enforcement for labs, operating theatres, and patient care areas with audit-ready logging.",
    image: "/industry/hygiene/1942 16.png",
  },
  {
    name: "Cosmetic and Personal Care",
    description:
      "Prevent cross-contamination in formulation and filling areas with touchless hygiene systems.",
    image: "/industry/hygiene/1942 17.png",
  },
];

/* ─── Comparison Rows ─── */
const comparisonRows: ComparisonRow[] = [
  {
    ordinaryIcon: "/icon/red-1.webp",
    ordinaryTitle: "Relying on Worker Memory",
    ordinaryDesc:
      "Expecting workers to remember 5–6 hygiene steps every time they enter is impractical",
    nexgenIcon: "/icon/green-1.webp",
    nexgenTitle: "Enforced by Design",
    nexgenDesc:
      "Strategically placed hygiene systems enforce it automatically",
  },
  {
    ordinaryIcon: "/icon/red-2.webp",
    ordinaryTitle: "Skipped Hygiene Steps",
    ordinaryDesc:
      "Fragmented hygiene processes lead to steps being routinely skipped",
    nexgenIcon: "/icon/green-2.webp",
    nexgenTitle: "Access-Controlled Entry",
    nexgenDesc:
      "Turnstiles won't open until the complete hygiene cycle is done",
  },
  {
    ordinaryIcon: "/icon/red-3.webp",
    ordinaryTitle: "Failed Audits",
    ordinaryDesc:
      "No documentation or logs means you cannot prove compliance",
    nexgenIcon: "/icon/green-3.webp",
    nexgenTitle: "100% Compliance Proof",
    nexgenDesc:
      "Digital logs prove compliance for every person, every shift",
  },
  {
    ordinaryIcon: "/icon/red-2.webp",
    ordinaryTitle: "Contamination Risks",
    ordinaryDesc:
      "Manual hygiene creates inconsistency and cross-contamination",
    nexgenIcon: "/icon/green-4.webp",
    nexgenTitle: "Touch-Free Operation",
    nexgenDesc:
      "Eliminates manual hygiene inconsistency entirely",
  },
  {
    ordinaryIcon: "/icon/red-4.webp",
    ordinaryTitle: "Scattered Stations",
    ordinaryDesc:
      "Multiple separate stations create congestion and confusion",
    nexgenIcon: "/icon/green-5.webp",
    nexgenTitle: "All-in-One Systems",
    nexgenDesc:
      "Complete hand + sole + disinfection in 90 seconds",
  },
  {
    ordinaryIcon: "/icon/red-5.webp",
    ordinaryTitle: "Export Certification Risks",
    ordinaryDesc:
      "Lack of enforceable hygiene infrastructure threatens certifications",
    nexgenIcon: "/icon/green-6.webp",
    nexgenTitle: "Audit-Ready Infrastructure",
    nexgenDesc:
      "Meets international standards for BRC, FSSC 22000, SQF, and export compliance",
  },
];

/* ─── What Makes NexGen Different (FAQ) ─── */
const whyDifferentFaqs: FaqItem[] = [
  {
    question: "Built for Food & Export Reality",
    points: [
      "Designed for wet, humid, high-traffic environments",
      "Handles aggressive washdowns and sanitation chemicals",
      "Built for multi-shift, continuous operations",
      "Designed around real worker movement patterns",
    ],
  },
  {
    question: "Strategic Hygiene Enforcement",
    points: [
      "Most facilities \"provide\" hygiene stations — very few enforce hygiene",
      "Block entry until hygiene steps are completed",
      "Remove reliance on memory, motivation, or supervision",
      "Convert SOPs into physical control mechanisms",
    ],
  },
  {
    question: "Proven in Audit-Critical Environments",
    points: [
      "BRC / BRCGS certified facilities",
      "FSSC 22000 compliant environments",
      "SQF certified plants",
      "Export compliance (EU, UK, Middle East)",
    ],
  },
  {
    question: "Industrial-Grade Construction",
    points: [
      "Food-grade SS 304 / 316 construction",
      "Crevice-free, hygienic design",
      "Sensor-based or hands-free operation",
      "Built for daily chemical cleaning",
      "Long service life under harsh conditions",
    ],
  },
];

/* ─── Features ─── */
const featuresData: Feature[] = [
  {
    icon: "/icon/automated.webp",
    title: "Touch-Free and/or Sensor-Based Operation",
    description:
      "Eliminates recontamination from shared surfaces and manual controls—critical in regulated environments.",
  },
  {
    icon: "/icon/energy.webp",
    title: "Forced Compliance Access Control",
    description:
      "Turnstiles unlock only after the full hygiene cycle completes. No shortcuts. No bypassing.",
  },
  {
    icon: "/icon/custom.webp",
    title: "Consistent Hygiene Cycles",
    description:
      "Same wash duration, same pressure, same sequence—regardless of user, shift, or workload.",
  },
  {
    icon: "/icon/continous.webp",
    title: "Space-Efficient Designs",
    description:
      "Compact layouts prevent congestion while maintaining throughput during shift changes.",
  },
  {
    icon: "/icon/maintenance.webp",
    title: "Easy Maintenance",
    description:
      "Service-friendly construction enables fast cleaning and minimal operational disruption.",
  },
];

/* ─── Why Choose NexGen ─── */
const whyChooseCards: WhyChooseCard[] = [
  {
    icon: "/casestudy/hygiene/benfits/Group.png",
    title: "20+ Years in Hygiene & Industrial Engineering",
  },
  {
    icon: "/casestudy/hygiene/benfits/Group-1.png",
    title: "Industry-Agnostic Compliance Expertise",
  },
  {
    icon: "/casestudy/hygiene/benfits/fi_841309.png",
    title: "Enforcement-Based Hygiene Design",
  },
  {
    icon: "/casestudy/hygiene/benfits/fi_2108189.png",
    title: "India-Manufactured, Globally Exported",
  },
];

/* ─── Testimonials ─── */
const testimonialsData: Testimonial[] = [
  {
    category: "Pharmaceutical Manufacturing Facility",
    quote:
      "We were facing repeated entry-related observations during internal audits. Training and SOPs weren't the issue, but consistency was. After installing NexGen's turnstile-based hygiene system, entry compliance became automatic. Operators follow the same sequence every time, without supervision. Since deployment, we haven't had a single hygiene deviation linked to entry.",
    personName: "Quality & Compliance Head",
    personRole: "GMP Manufacturing Facility, Hyderabad",
    personImage: "/icon/operation-head.png",
  },
  {
    category: "Export-Oriented Manufacturing Plant",
    quote:
      "Auditors used to focus heavily on personnel hygiene because enforcement depended on people. NexGen helped us redesign our entry points with integrated handwash, sole cleaning, and access control. The system now enforces hygiene before entry, not after inspection. Our last two export audits were smoother, with zero questions on entry hygiene.",
    personName: "Plant Head",
    personRole: "Export Manufacturing Facility, Gujarat",
    personImage: "/icon/production-manager.png",
  },
  {
    category: "High-Volume Multi-Shift Facility",
    quote:
      "Shift change was always our weak point. Supervisors can't watch every entry when 100+ people move at once. With NexGen's hygiene stations in place, the process controls itself. Even during peak hours, hygiene compliance stays consistent. We've reduced supervisory intervention and improved overall discipline on the shop floor.",
    personName: "Operations Manager",
    personRole: "Multi-Shift Manufacturing Plant, Maharashtra",
    personImage: "/icon/director.png",
  },
];

/* ─── Case Studies ─── */
const caseStudiesData: CaseStudy[] = [
  {
    title: "GMP Manufacturing Facility",
    challenge:
      "Inconsistent hygiene practices across shifts entering controlled zones.",
    solution:
      "Turnstile-controlled hygiene system with forced compliance.",
    results: [
      "Zero hygiene deviations during audits",
      "Consistent GMP entry across shifts",
      "Reduced QA intervention",
    ],
    image: "/casestudy/hygiene/gmp-manufacturing-facility.png",
  },
  {
    title: "Multi-Shift Manufacturing Plant",
    challenge:
      "Manual enforcement breaking down at scale during shift transitions.",
    solution:
      "Sensor-based hygiene stations integrated at all entry points.",
    results: [
      "Uniform hygiene compliance",
      "Reduced supervisory load",
      "Smooth entry flow during peak hours",
    ],
    image: "/casestudy/hygiene/multi-shift manufacturing-plant.png",
  },
  {
    title: "Export-Focused Facility",
    challenge:
      "No objective proof of hygiene enforcement during customer audits.",
    solution:
      "Integrated hygiene systems with access control and usage visibility.",
    results: [
      "Strong audit confidence",
      "Repeat export approvals",
      "Faster customer acceptance",
    ],
    image: "/casestudy/hygiene/export-focused-facility.png",
  },
];

export default function HygienePage() {
  return (
    <>
      <Hero
        title="Eliminate 80% Contamination Risks at Entry Alone; without Additional Supervision or SOPs"
        description="Manual and Automated Industrial Hygiene Stations trusted by a variety of industries to enforce hand, footwear, and PPF cleaning and sanitization for 100% hygiene compliance."
        ctaText="Get Your Hygiene Solution"
        ctaHref="/contact"
        backgroundVideo="/video/hygiene-compressed.mp4"
        backgroundImage="/temp/hero.webp"
      />

      <TrustedBy
        title={`Trusted Across Regulated\nManufacturing Environments`}
        description="20+ years designing Hygiene Enforcement Systems for industries where contamination, non-compliance, or human error can shut operations down."
        brands={trustedBrands}
      />

      <ProductShowcase
        title="Hygiene Systems Designed for High Contamination Risk Facilities"
        description="Nexgen offers a range of touchless, manual, and sensor-operated hygiene stations that are designed for industries like pharmaceuticals, food and beverage, FMCG, electronics and many more."
        categories={hygieneCategories}
        products={hygieneProducts}
        ctaText="Download Brochure"
        brochureName="Hygiene Station Brochure"
      />

      <IndustryCarousel
        title="Need a Custom Hygiene System Layout for Multiple Zones or Entry Points?"
        industries={industries}
      />

      <VideoShowcase
        title="Stop Contamination Risks at the Entry Point"
        description="From Inconsistent Manual Hygiene Practices to Automated Industrial Hygiene Systems."
        videoId="nlwdVZ04neI"
        thumbnail="https://img.youtube.com/vi/nlwdVZ04neI/maxresdefault.jpg"
      />

      <PainPoints
        title="Audit Failures or Contamination Issues Can Shut Your Plant Down!"
        description="Whether you manufacture pharmaceuticals, process food, bottle beverages, or produce cosmetics, one truth remains universal: contamination is your single biggest quality risk. Workers walk from outside environments directly into GMP zones, cleanrooms, or food production areas, taking bacteria, particles, and contaminants on their hands and footwear."
        listHeading="The Risks Costing You Business:"
        points={[
          "Workers enter production areas without proper hygiene",
          "Fragmented hygiene processes = skipped steps",
          "No documentation or logs = cannot prove compliance",
          "Footwear contamination spreading bacteria",
          "Expecting workers to remember 5–6 hygiene steps every time they enter is impractical",
        ]}
        image="/casestudy/hygiene/audit-failures.png"
      />

      <ComparisonTable
        title="What Changes When Hygiene Is Enforced by Design"
        rows={comparisonRows}
      />

      <WhyDifferent
        title="What Makes Nexgen Hygiene Systems Different"
        image="/casestudy/hygiene/nexgen-different.png"
        faqs={whyDifferentFaqs}
      />

      <Features
        title="Features That Remove Human Error from Hygiene"
        description="Nexgen hygiene systems are designed for facility managers and compliance heads who need enforceable, measurable hygiene at every entry point."
        features={featuresData}
      />

      <WhyChoose
        title="Why Do Production Facilities Choose NexGen Hygiene Systems?"
        cards={whyChooseCards}
      />

      <Testimonials
        title="Hear It From the Operation Leaders"
        testimonials={testimonialsData}
      />

      <CaseStudies
        heading="Case Studies from Across the Industries"
        description="We aren't focused on hygiene compliance on paper. We engineer Nexgen Hygiene Systems to eliminate contamination causes strategically and efficiently in industrial environments. Designed for food-grade and pharma-grade hygiene accuracy, we have a wide range of cleaning and sanitization stations for all kinds of use cases, proven with these real-world success stories."
        cases={caseStudiesData}
      />

      <ContactForm
        title="Eliminate Hygiene Risk at the Gate and all Critical Zones"
        description="Get a FREE assessment and see how we eliminate can contamination-risks and hygiene-misses for your plant"
        steps={[
          "Fill out the form below (takes 60 seconds)",
          "Our hygiene expert contacts you within 24 hours",
          "We analyze your requirements and provide a customized solution",
          "Schedule a demo at our facility or yours",
          "Get detailed compliance projections based on the footfalls and vulnerabilities of your facility",
        ]}
        formSlug="hygiene"
        roles={[
          "QA / QC Manager",
          "Compliance Officer",
          "Plant Head",
          "Production Manager",
          "Facility Manager",
          "Owner / Director",
          "Other",
        ]}
      />
    </>
  );
}
