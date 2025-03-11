
import { FAQ, PricingItem } from "../serviceTypes";

export const getHydrofacialsFaqs = (): FAQ[] => {
  return [
    {
      question: "What is a hydrofacial?",
      answer: "Hydrating treatment for immediate glow that combines cleansing, exfoliation, extraction, and hydration."
    },
    {
      question: "What skin concerns does a Hydrofacial address?",
      answer: "Hydrofacials help with fine lines, wrinkles, congested pores, oiliness, and dullness."
    },
    {
      question: "How often should I get a Hydrofacial?",
      answer: "Monthly treatments are recommended for maintaining optimal skin health and appearance."
    },
    {
      question: "Is there any downtime?",
      answer: "No downtime - you can return to normal activities immediately with a refreshed appearance."
    }
  ];
};

export const getHydrofacialsPricing = (): PricingItem[] => {
  return [
    {
      type: "Basic Hydrofacial",
      averagePrice: 200,
      minPrice: 150,
      maxPrice: 300
    },
    {
      type: "Premium (with Boosters)",
      averagePrice: 350,
      minPrice: 275,
      maxPrice: 450
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 500,
      minPrice: 400,
      maxPrice: 700
    }
  ];
};
