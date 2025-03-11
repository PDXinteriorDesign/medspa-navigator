
import { FAQ, PricingItem } from "../serviceTypes";

export const getPhotofacialsFaqs = (): FAQ[] => {
  return [
    {
      question: "What do photofacials treat?",
      answer: "Sunspots, rosacea, and uneven texture."
    },
    {
      question: "Pain level?",
      answer: "Feels like a rubber band snap."
    },
    {
      question: "How many sessions are needed?",
      answer: "Most clients require 3-5 sessions for optimal results, spaced 4 weeks apart."
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. You may experience some redness for a few hours after treatment."
    }
  ];
};

export const getPhotofacialsPricing = (): PricingItem[] => {
  return [
    {
      type: "Full Face",
      averagePrice: 400,
      minPrice: 300,
      maxPrice: 600
    },
    {
      type: "Neck/Decolletage",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 500
    }
  ];
};
