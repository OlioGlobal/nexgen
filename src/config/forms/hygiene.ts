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
            "Catering / Cloud Kitchen",
            "Healthcare / Hospitals",
          ],
          hasOther: true,
        },
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
  submitLabel: "Get My Hygiene Assessment",
};

export default hygiene;
