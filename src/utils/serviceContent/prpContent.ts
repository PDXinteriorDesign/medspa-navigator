
import { FAQ, PricingItem } from "../serviceTypes";

export const getPrpFaqs = (): FAQ[] => {
  return [
    {
      question: "How does PRP work?",
      answer: "Your blood is spun to isolate growth factors for collagen stimulation."
    },
    {
      question: "Sessions needed?",
      answer: "3–6 sessions, spaced 4–6 weeks apart."
    },
    {
      question: "Downtime?",
      answer: "24–48 hours of redness."
    }
  ];
};

export const getPrpPricing = (): PricingItem[] => {
  return [
    {
      type: "Facial Rejuvenation",
      averagePrice: 600,
      minPrice: 500,
      maxPrice: 900
    },
    {
      type: "PRP + Microneedling",
      averagePrice: 800,
      minPrice: 650,
      maxPrice: 1100
    }
  ];
};
