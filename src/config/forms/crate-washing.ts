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
      ],
    },
  ],
  submitLabel: "Get My Washing Assessment",
};

export default crateWashing;
