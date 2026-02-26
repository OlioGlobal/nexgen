import { FormConfig } from "./types";

const homepage: FormConfig = {
  slug: "homepage",
  pageTitle: "Scale Your Sales Flow 10X Faster – Seamlessly!",
  pageDescription:
    "Thank you for enquiring. We're excited to help you take your business to the next level!",
  roles: [
    "Owner / Director",
    "Plant Head",
    "Production Manager",
    "Procurement Head",
    "Operations Manager",
    "Other",
  ],
  sections: [
    {
      title: "Your Processing Details",
      fields: [
        {
          name: "processing",
          label: "What do you currently process?",
          type: "checkbox",
          options: [
            "Vegetables (carrots, potatoes, onions, etc.)",
            "Fruits",
            "Ready-to-Eat Meals",
            "Bakery / Chapati / Dough Products",
            "Dairy Products",
            "Meat / Poultry",
            "Frozen Foods for Export",
            "Spices & Condiments",
          ],
          hasOther: true,
        },
        {
          name: "volume",
          label: "What is your daily processing volume?",
          type: "radio",
          options: [
            "Less than 500 kg/day",
            "500 kg – 1 ton/day",
            "1 – 5 tons/day",
            "5 – 10 tons/day",
            "10 – 50 tons/day",
            "More than 50 tons/day",
          ],
        },
        {
          name: "challenge",
          label: "Your biggest processing challenge right now:",
          type: "radio",
          options: [
            "Inconsistent product quality",
            "Too slow / Can't meet demand",
            "High labor costs",
            "Failed audits / Compliance issues",
            "High energy / water costs",
            "Frequent equipment breakdowns",
          ],
        },
      ],
    },
    {
      title: "Solutions & Timeline",
      fields: [
        {
          name: "solutions",
          label: "Which solutions are you interested in?",
          type: "checkbox",
          options: [
            "Vegetable / Fruit Processing Line",
            "Industrial Washing Systems",
            "Air Knife Drying Systems",
            "Crate / Bin Washing Machines",
            "Hygiene & Boot Wash Stations",
            "Custom Automation Solutions",
            "Complete Turnkey Processing Lines",
            "Not sure – need consultation",
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
            "Talk to a solutions expert",
            "Receive a product catalog",
            "Get ROI projections for my setup",
          ],
        },
      ],
    },
  ],
  submitLabel: "Get My Free ROI Assessment",
};

export default homepage;
