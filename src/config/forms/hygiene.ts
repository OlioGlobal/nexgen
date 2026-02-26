import { FormConfig } from "./types";

const hygiene: FormConfig = {
  slug: "hygiene",
  pageTitle: "Get Your Custom Hygiene Solution – Designed for Your Facility!",
  pageDescription:
    "Thank you for enquiring. We'll design a hygiene system tailored to your facility requirements.",
  roles: [
    "QA / QC Manager",
    "Compliance Officer",
    "Plant Head",
    "Production Manager",
    "Facility Manager",
    "Owner / Director",
    "Other",
  ],
  sections: [
    {
      title: "Industry & Facility Details",
      fields: [
        {
          name: "industryType",
          label: "What type of industry are you in?",
          type: "radio",
          options: [
            "Food Processing",
            "Dairy",
            "Meat & Poultry",
            "Seafood",
            "Bakery & Confectionery",
            "Beverages",
            "Pharmaceuticals",
            "Cosmetics",
            "Agriculture & Post-Harvest",
            "Cold Storage & Warehousing",
            "Quick Service Restaurants (QSR)",
            "Catering / Cloud Kitchen",
            "Healthcare / Hospitals",
          ],
          hasOther: true,
        },
        {
          name: "infrastructure",
          label: "Current hygiene infrastructure level:",
          type: "radio",
          options: [
            "No formal system in place",
            "Basic manual cleaning only",
            "Some hygiene stations installed",
            "Partial automated system",
            "Looking to upgrade existing system",
          ],
        },
        {
          name: "complianceChallenge",
          label: "What is your primary compliance challenge?",
          type: "radio",
          options: [
            "FSSAI audit failures",
            "Cross-contamination risks",
            "Inconsistent staff hygiene practices",
            "Lack of proper entry-point controls",
            "Documentation & traceability gaps",
            "Customer / buyer audit requirements",
            "Export compliance (FDA / EU / BRC)",
          ],
        },
      ],
    },
    {
      title: "Facility Requirements",
      fields: [
        {
          name: "entryPoints",
          label: "How many entry points does your facility have?",
          type: "radio",
          options: [
            "1–2 entry points",
            "3–5 entry points",
            "6–10 entry points",
            "More than 10 entry points",
          ],
        },
        {
          name: "dailyStaff",
          label: "Daily staff footfall through hygiene zones:",
          type: "radio",
          options: [
            "Less than 50 people",
            "50–100 people",
            "100–300 people",
            "300–500 people",
            "More than 500 people",
          ],
        },
        {
          name: "regulations",
          label: "Which regulations / standards do you need to comply with?",
          type: "checkbox",
          options: [
            "FSSAI",
            "HACCP",
            "ISO 22000",
            "BRC",
            "SQF",
            "IFS",
            "FSSC 22000",
            "GMP",
            "FDA (US)",
            "EU Regulations",
            "Halal Certification",
            "Organic Certification",
            "Customer-specific standards",
            "APEDA",
            "EIA",
          ],
        },
      ],
    },
    {
      title: "Timeline & Next Steps",
      fields: [
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
            "Schedule a facility audit",
            "Talk to a hygiene solutions expert",
            "Receive a product catalog",
            "Get a compliance gap analysis",
          ],
        },
      ],
    },
  ],
  submitLabel: "Get My Hygiene Assessment",
};

export default hygiene;
