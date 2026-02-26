import { FormConfig } from "./types";

const airKnife: FormConfig = {
  slug: "air-knife",
  pageTitle: "Get Your Custom Air Knife Drying Solution!",
  pageDescription:
    "Thank you for enquiring. We'll recommend the perfect drying system for your production line.",
  roles: [
    "Owner / Director",
    "Plant Head",
    "Production Manager",
    "Engineering Manager",
    "Operations Manager",
    "Other",
  ],
  sections: [
    {
      title: "Your Drying Requirements",
      fields: [
        {
          name: "industry",
          label: "Your industry:",
          type: "radio",
          options: [
            "Food Processing",
            "Beverages",
            "Dairy",
            "Meat & Poultry",
            "Pharmaceuticals",
            "FMCG / Packaging",
            "Agriculture & Post-Harvest",
            "Cold Storage & Export",
          ],
          hasOther: true,
        },
        {
          name: "dryingProducts",
          label: "What products do you need to dry?",
          type: "checkbox",
          options: [
            "Pouches / Packets",
            "Bottles / Jars / Cans",
            "Crates / Bins / Containers",
            "Fresh Fruits & Vegetables",
            "Meat / Poultry / Seafood",
            "Dairy Products",
            "Industrial Parts / Components",
          ],
          hasOther: true,
        },
        {
          name: "challenge",
          label: "Your biggest drying challenge:",
          type: "radio",
          options: [
            "Water residue on packaging",
            "Label adhesion / printing issues",
            "Slow drying slowing production",
            "High energy costs from heat drying",
            "Contamination / hygiene concerns",
            "Inconsistent drying results",
            "High labor dependency",
          ],
        },
      ],
    },
    {
      title: "Timeline & Production",
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
          name: "productionSpeed",
          label: "Production line speed / volume:",
          type: "radio",
          options: [
            "Less than 50 units/min",
            "50–150 units/min",
            "150–300 units/min",
            "300–600 units/min",
            "More than 600 units/min",
          ],
        },
      ],
    },
  ],
  submitLabel: "Get My Drying Assessment",
};

export default airKnife;
