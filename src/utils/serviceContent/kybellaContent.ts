
import { FAQ, PricingItem } from "../serviceTypes";

export const getKybellaFaqs = (): FAQ[] => {
  return [
    {
      question: "What is Kybella?",
      answer: "FDA-approved injectable to reduce submental fat (double chin)."
    },
    {
      question: "Sessions needed?",
      answer: "2–4 sessions, spaced 1 month apart."
    },
    {
      question: "Pain level?",
      answer: "Moderate burning sensation during injection."
    },
    {
      question: "Results permanent?",
      answer: "Yes, destroyed fat cells do not return."
    }
  ];
};

export const getKybellaPricing = (): PricingItem[] => {
  return [
    {
      type: "Single Session",
      averagePrice: 1200,
      minPrice: 1000,
      maxPrice: 1600
    },
    {
      type: "Package (2 Sessions)",
      averagePrice: 2000,
      minPrice: 1800,
      maxPrice: 2500
    }
  ];
};
