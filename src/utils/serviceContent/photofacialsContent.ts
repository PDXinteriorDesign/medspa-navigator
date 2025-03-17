
import { FAQ, PricingItem } from "../serviceTypes";

export const getPhotofacialsFaqs = (): FAQ[] => {
  return [
    {
      question: "What do photofacials treat?",
      answer: "Photofacials (IPL treatments) effectively treat sun damage, age spots, freckles, rosacea, broken capillaries, and other pigmentation issues. They also help improve overall skin texture and reduce fine lines."
    },
    {
      question: "How many sessions are needed?",
      answer: "Most patients require 3-5 sessions spaced about 4 weeks apart for optimal results. Maintenance treatments are typically recommended every 6-12 months."
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. You may experience some redness for a few hours after treatment, and pigmented spots may darken temporarily before flaking off. Most people return to normal activities immediately."
    },
    {
      question: "Are photofacials painful?",
      answer: "Most patients describe the sensation as a rubber band snap against the skin. Modern IPL devices used in premium NYC clinics often feature built-in cooling systems to maximize comfort."
    },
    {
      question: "Are photofacials safe for all skin types?",
      answer: "IPL works best on light to medium skin tones (Fitzpatrick types I-IV). It may not be suitable for very dark skin tones (types V-VI) due to increased risk of pigmentation changes. A consultation with a provider will determine if you're a good candidate."
    },
    {
      question: "How long do results last?",
      answer: "Results can last 6-12 months or longer with proper sun protection and skincare. New sun damage can create new pigmentation issues, so ongoing maintenance and sun protection are essential."
    }
  ];
};

export const getPhotofacialsPricing = (): PricingItem[] => {
  return [
    {
      type: "Face - Single Session",
      averagePrice: 400,
      minPrice: 300,
      maxPrice: 500
    },
    {
      type: "Face - Package of 3",
      averagePrice: 1050,
      minPrice: 850,
      maxPrice: 1350
    },
    {
      type: "Face & Neck - Single Session",
      averagePrice: 550,
      minPrice: 450,
      maxPrice: 650
    },
    {
      type: "Face & Neck - Package of 3",
      averagePrice: 1400,
      minPrice: 1200,
      maxPrice: 1700
    },
    {
      type: "Chest/Décolletage - Single Session",
      averagePrice: 450,
      minPrice: 350,
      maxPrice: 550
    },
    {
      type: "Hands - Single Session",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 400
    }
  ];
};
