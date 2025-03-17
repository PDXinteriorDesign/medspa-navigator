
import { FAQ, PricingItem } from "../serviceTypes";

export const getPrpFaqs = (): FAQ[] => {
  return [
    {
      question: "How does PRP work?",
      answer: "PRP works by isolating the growth factors and platelets from your own blood and injecting them back into targeted areas to stimulate tissue regeneration and healing."
    },
    {
      question: "How many PRP sessions will I need?",
      answer: "Most patients require 3-4 sessions spaced 4-6 weeks apart for optimal results, followed by maintenance treatments 1-2 times per year."
    },
    {
      question: "Is PRP painful?",
      answer: "Discomfort is minimal as topical numbing cream is applied before treatment. Some patients describe a mild stinging sensation during the injections."
    },
    {
      question: "How long is the downtime after PRP?",
      answer: "Downtime is minimal, typically 24-48 hours of mild redness and possible minor swelling. Most patients return to normal activities immediately."
    },
    {
      question: "What areas can be treated with PRP?",
      answer: "PRP can be used for facial rejuvenation, hair restoration, scar improvement, and as a complement to other aesthetic treatments."
    }
  ];
};

export const getPrpPricing = (): PricingItem[] => {
  return [
    {
      type: "Facial PRP Treatment",
      averagePrice: 700,
      minPrice: 550,
      maxPrice: 950
    },
    {
      type: "PRP Hair Restoration",
      averagePrice: 900,
      minPrice: 700,
      maxPrice: 1200
    },
    {
      type: "PRP with Microneedling",
      averagePrice: 850,
      minPrice: 650,
      maxPrice: 1100
    },
    {
      type: "Series of 3 Treatments",
      averagePrice: 1950,
      minPrice: 1500,
      maxPrice: 2500
    }
  ];
};
