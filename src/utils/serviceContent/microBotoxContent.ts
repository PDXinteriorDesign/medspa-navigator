
import { FAQ, PricingItem } from "../serviceTypes";

export const getMicroBotoxFaqs = (): FAQ[] => {
  return [
    {
      question: "What is MicroBotox?",
      answer: "A refined technique that delivers tiny amounts of Botox for subtle, natural-looking results."
    },
    {
      question: "How many sessions will I need?",
      answer: "1–3 sessions, depending on desired subtlety."
    },
    {
      question: "Is it painful?",
      answer: "Minimal discomfort (smaller needles used)."
    },
    {
      question: "Downtime?",
      answer: "None."
    }
  ];
};

export const getMicroBotoxPricing = (): PricingItem[] => {
  return [
    {
      type: "Basic Treatment",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 400
    },
    {
      type: "Standard Treatment",
      averagePrice: 500,
      minPrice: 400,
      maxPrice: 600
    },
    {
      type: "Premium Treatment",
      averagePrice: 700,
      minPrice: 600,
      maxPrice: 800
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 1200,
      minPrice: 1000,
      maxPrice: 1400
    }
  ];
};
