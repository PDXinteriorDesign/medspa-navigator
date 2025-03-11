
import { FAQ, PricingItem } from "../serviceTypes";

export const getVaginalRejuvenationFaqs = (): FAQ[] => {
  return [
    {
      question: "What technologies are used for vaginal rejuvenation?",
      answer: "Common non-surgical technologies include radiofrequency, CO2 fractional laser, Er:YAG laser, and combined-energy approaches."
    },
    {
      question: "Is vaginal rejuvenation painful?",
      answer: "Most patients report minimal discomfort—typically a warming sensation. Topical numbing may be used for comfort."
    },
    {
      question: "How many treatments will I need?",
      answer: "Usually 3-4 sessions spaced 4-6 weeks apart, with annual maintenance recommended."
    },
    {
      question: "Are there any side effects?",
      answer: "Minor temporary effects may include slight swelling, redness, or altered sensation, typically resolving within 48 hours."
    },
    {
      question: "Who is a good candidate?",
      answer: "Women experiencing vaginal laxity, dryness, mild incontinence, or reduced sensation. Not suitable during pregnancy or with certain medical conditions."
    },
    {
      question: "How soon can I resume intimate activities?",
      answer: "Most providers recommend waiting 48-72 hours after treatment."
    }
  ];
};

export const getVaginalRejuvenationPricing = (): PricingItem[] => {
  return [
    {
      type: "Single Session",
      averagePrice: 1200,
      minPrice: 900,
      maxPrice: 2000
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 3000,
      minPrice: 2400,
      maxPrice: 4500
    },
    {
      type: "Package with PRP Enhancement",
      averagePrice: 4000,
      minPrice: 3200,
      maxPrice: 5500
    },
    {
      type: "Annual Maintenance",
      averagePrice: 900,
      minPrice: 700,
      maxPrice: 1600
    }
  ];
};
