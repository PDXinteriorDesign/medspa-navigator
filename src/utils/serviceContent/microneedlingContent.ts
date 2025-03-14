
import { FAQ, PricingItem } from "../serviceTypes";

export const getMicroneedlingFaqs = (): FAQ[] => {
  return [
    {
      question: "What is microneedling and how does it work?",
      answer: "Microneedling is a cosmetic procedure that uses a device with fine needles to create tiny punctures in the top layer of skin. These micro-injuries trigger the body's natural wound healing process, stimulating collagen and elastin production. This results in improved skin texture, reduced scarring, and a more youthful appearance."
    },
    {
      question: "Is microneedling painful?",
      answer: "Most providers apply a topical numbing cream before the procedure, which significantly minimizes discomfort. Patients typically describe the sensation as mild pressure with occasional tingling. The level of discomfort varies depending on the treatment area and needle depth."
    },
    {
      question: "How many microneedling sessions will I need?",
      answer: "For optimal results, most providers recommend a series of 3-6 treatments spaced 4-6 weeks apart. The exact number depends on your specific skin concerns. Maintenance treatments are typically recommended every 6-12 months to sustain results."
    },
    {
      question: "What's the difference between traditional microneedling and RF microneedling?",
      answer: "Traditional microneedling creates micro-channels in the skin to stimulate collagen production. RF (radiofrequency) microneedling adds thermal energy that penetrates deeper into the skin, enhancing collagen production and providing additional skin tightening benefits. RF microneedling typically produces more dramatic results, especially for skin laxity concerns."
    },
    {
      question: "What is the downtime after microneedling?",
      answer: "Downtime is minimal, typically 24-48 hours of redness and mild swelling similar to a sunburn. Some patients may experience slight peeling or dryness for a few days. Most people can return to their normal activities the day after treatment, though sun protection is essential."
    },
    {
      question: "What skin concerns can microneedling address?",
      answer: "Microneedling effectively treats a variety of skin concerns including fine lines and wrinkles, acne scars, enlarged pores, uneven skin texture, stretch marks, and mild skin laxity. It can be used on the face, neck, décolletage, and other body areas."
    },
    {
      question: "Can microneedling be combined with other treatments?",
      answer: "Yes, microneedling is often enhanced with other treatments. PRP (platelet-rich plasma) can be applied during the procedure for additional rejuvenation benefits. Specialized serums containing growth factors, hyaluronic acid, or vitamin C are also commonly used to enhance results. Your provider may recommend complementary treatments like chemical peels or laser therapy for comprehensive skin rejuvenation."
    },
    {
      question: "Is microneedling safe for all skin types?",
      answer: "Microneedling is generally safe for all skin types and tones, including darker skin that may be more susceptible to hyperpigmentation with certain laser treatments. However, it's not recommended for people with active acne, rosacea flares, eczema, psoriasis, or open wounds. A consultation with a qualified provider will determine if you're a good candidate."
    },
    {
      question: "How should I prepare for my microneedling treatment?",
      answer: "To prepare for microneedling, avoid sun exposure, retinoids, exfoliants, and blood-thinning medications (with doctor approval) for at least a week before treatment. Arrive with clean skin free of makeup. Your provider will give you specific pre-treatment instructions during your consultation."
    },
    {
      question: "When will I see results from microneedling?",
      answer: "Many patients notice an immediate 'glow' after treatment, but significant results develop over time as collagen production increases. You'll typically begin seeing improvements in skin texture and tone within 2-4 weeks after each session, with continued improvement for up to 6 months as the skin rejuvenation process continues."
    }
  ];
};

export const getMicroneedlingPricing = (): PricingItem[] => {
  return [
    {
      type: "Traditional Microneedling (Face)",
      averagePrice: 350,
      minPrice: 250,
      maxPrice: 450
    },
    {
      type: "Traditional Microneedling (Face & Neck)",
      averagePrice: 450,
      minPrice: 300,
      maxPrice: 600
    },
    {
      type: "Microneedling with PRP (Face)",
      averagePrice: 650,
      minPrice: 500,
      maxPrice: 800
    },
    {
      type: "RF Microneedling (Face)",
      averagePrice: 750,
      minPrice: 600,
      maxPrice: 900
    },
    {
      type: "RF Microneedling (Face & Neck)",
      averagePrice: 950,
      minPrice: 800,
      maxPrice: 1200
    },
    {
      type: "Package of 3 Microneedling Sessions (Face)",
      averagePrice: 900,
      minPrice: 700,
      maxPrice: 1200
    },
    {
      type: "Package of 3 RF Microneedling Sessions (Face)",
      averagePrice: 1900,
      minPrice: 1500,
      maxPrice: 2400
    }
  ];
};
