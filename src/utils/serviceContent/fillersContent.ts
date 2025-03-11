
import { FAQ, PricingItem } from "../serviceTypes";

export const getFillersFaqs = (): FAQ[] => {
  return [
    {
      question: "What do fillers treat?",
      answer: "Volume loss, deep wrinkles, and facial contouring."
    },
    {
      question: "How long do results last?",
      answer: "6–18 months, depending on product."
    },
    {
      question: "Pain level?",
      answer: "Most fillers contain lidocaine for comfort."
    },
    {
      question: "Downtime?",
      answer: "Mild swelling/bruising for 2–3 days."
    }
  ];
};

export const getFillersPricing = (): PricingItem[] => {
  return [
    {
      type: "Lip Augmentation",
      averagePrice: 800,
      minPrice: 600,
      maxPrice: 1200
    },
    {
      type: "Nasolabial Folds",
      averagePrice: 900,
      minPrice: 700,
      maxPrice: 1300
    },
    {
      type: "Cheek Volume",
      averagePrice: 1200,
      minPrice: 1000,
      maxPrice: 1800
    }
  ];
};
