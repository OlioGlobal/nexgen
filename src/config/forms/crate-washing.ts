import { FormConfig } from "./types";

const crateWashing: FormConfig = {
  slug: "crate-washing",
  pageTitle: "Get Your Custom Crate Washing Solution!",
  pageDescription:
    "Thank you for enquiring. We'll design a crate washing system tailored to your operation.",
  roles: [
    "Owner / Director",
    "Plant Head",
    "Operations Manager",
    "QA Manager",
    "Logistics Manager",
    "Other",
  ],
  sections: [
    {
      title: "Your Washing Requirements",
      fields: [
        {
          name: "containerTypes",
          label: "What types of containers do you wash?",
          type: "checkbox",
          options: [
            "Plastic Crates (standard)",
            "Foldable / Collapsible Crates",
            "Bins / Tubs / Trays",
            "Pallets",
            "Dollies / Trolleys",
            "IBCs (Intermediate Bulk Containers)",
            "Specialty Containers",
            "Mixed container types",
          ],
          hasOther: true,
        },
        {
          name: "washingMethod",
          label: "Current washing method:",
          type: "radio",
          options: [
            "Manual washing (hose / brush)",
            "Pressure washer",
            "Basic spray tunnel",
            "Semi-automatic machine",
            "Looking to upgrade existing machine",
          ],
        },
        {
          name: "industry",
          label: "Your industry:",
          type: "radio",
          options: [
            "Food Processing",
            "Dairy",
            "Meat & Poultry",
            "Seafood",
            "Agriculture & Post-Harvest",
            "Beverages",
            "Distribution & Logistics",
            "Cold Storage",
            "Export Facilities",
          ],
          hasOther: true,
        },
      ],
    },
    {
      title: "Operation Details",
      fields: [
        {
          name: "dailyVolume",
          label: "Daily washing volume:",
          type: "radio",
          options: [
            "Less than 100 crates/day",
            "100–500 crates/day",
            "500–2,000 crates/day",
            "2,000–5,000 crates/day",
            "More than 5,000 crates/day",
          ],
        },
        {
          name: "labor",
          label: "Current labor for washing:",
          type: "radio",
          options: [
            "1–2 workers",
            "3–5 workers",
            "6–10 workers",
            "More than 10 workers",
          ],
        },
        {
          name: "challenge",
          label: "Your biggest washing challenge:",
          type: "radio",
          options: [
            "Inconsistent cleaning quality",
            "High labor costs",
            "Slow throughput / bottleneck",
            "Water wastage",
            "Cross-contamination risks",
            "Compliance / audit failures",
            "High maintenance / downtime",
          ],
        },
      ],
    },
    {
      title: "Solutions & Timeline",
      fields: [
        {
          name: "solutions",
          label: "Features you're looking for:",
          type: "checkbox",
          options: [
            "High-pressure washing",
            "Hot water sanitization",
            "Integrated drying (Air Knife)",
            "Water recycling system",
            "Automatic loading / unloading",
            "Multi-size crate handling",
            "CIP (Clean-in-Place) system",
            "IoT monitoring & reporting",
          ],
        },
        {
          name: "timeline",
          label: "Timeline for implementation",
          type: "radio",
          options: [
            "Immediate (within 1 month)",
            "Short-term (1–3 months)",
            "Planning phase (3–6 months)",
            "Just exploring options",
          ],
        },
        {
          name: "nextStep",
          label: "What would be the ideal next step for you?",
          type: "radio",
          options: [
            "Get a detailed quotation",
            "Schedule a factory visit / demo",
            "Talk to a washing solutions expert",
            "Receive technical specifications",
            "Get water & labor savings projections",
          ],
        },
      ],
    },
  ],
  submitLabel: "Get My Washing Assessment",
};

export default crateWashing;
