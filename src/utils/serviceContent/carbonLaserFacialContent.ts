
import { FAQ, PricingItem } from "../serviceTypes";

export const getCarbonLaserFacialFaqs = (): FAQ[] => {
  return [
    {
      question: "What is a Carbon Laser Facial?",
      answer: "A non-invasive treatment that combines liquid carbon and laser technology to cleanse pores, exfoliate skin, and improve texture and appearance. Also known as the 'Hollywood Peel' or 'China Doll Peel'."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most clients see results after one session, but a series of 4-6 treatments spaced 2-4 weeks apart is recommended for optimal results, especially for concerns like acne or hyperpigmentation."
    },
    {
      question: "Is it painful?",
      answer: "Most clients describe the sensation as a mild warming or tingling with slight rubber band-like snaps. The treatment is generally comfortable with no anesthesia required."
    },
    {
      question: "Is there any downtime?",
      answer: "No. One of the most appealing aspects of this treatment is that there's zero downtime, making it perfect for pre-event preparation."
    },
    {
      question: "How long do results last?",
      answer: "The immediate glow typically lasts 1-2 weeks. For lasting improvements in skin texture and tone, monthly maintenance treatments are recommended."
    },
    {
      question: "Is it safe for all skin types?",
      answer: "Yes, it's generally safe for all skin types, including darker skin tones. However, those with certain skin conditions should consult with a provider first."
    }
  ];
};

export const getCarbonLaserFacialPricing = (): PricingItem[] => {
  return [
    {
      type: "Single Session",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 500
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 750,
      minPrice: 550,
      maxPrice: 1200
    },
    {
      type: "Premium Treatment (with LED)",
      averagePrice: 450,
      minPrice: 350,
      maxPrice: 650
    },
    {
      type: "Maintenance Session",
      averagePrice: 250,
      minPrice: 180,
      maxPrice: 400
    }
  ];
};
