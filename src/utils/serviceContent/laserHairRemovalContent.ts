
import { Review, SeoContent, FAQ, PricingItem } from "../serviceTypes";

export const getLaserHairRemovalContent = (): { 
  content: string[], 
  beforeTreatment: string[], 
  afterTreatment: string[], 
  reviews: Review[] 
} => {
  const content = [
    "Laser hair removal is one of the most sought-after aesthetic treatments in New York City, offering a long-term solution to unwanted hair. This advanced procedure uses concentrated beams of light to target and destroy hair follicles, inhibiting future hair growth.",
    "NYC MedSpas typically use state-of-the-art laser technologies suitable for various skin types and hair colors. Most high-end facilities offer the latest in laser technology, including Alexandrite, Nd:YAG, and Diode lasers, each optimized for different skin and hair combinations.",
    "Popular treatment areas include the legs, underarms, bikini area, face, back, and chest. While laser hair removal is effective across all these areas, the number of sessions required varies depending on the treatment area, hair density, and hair color. Most clients require 6-8 sessions spaced 4-6 weeks apart to achieve optimal results."
  ];

  const beforeTreatment = [
    "Avoid sun exposure for at least 2 weeks before treatment",
    "Shave the treatment area 24 hours before your appointment",
    "Do not wax, pluck, or use depilatory creams for 2 weeks prior",
    "Avoid self-tanners and tanning beds"
  ];

  const afterTreatment = [
    "Temporary redness and swelling is normal",
    "Apply cold compresses to reduce discomfort if needed",
    "Avoid sun exposure and use SPF 30+ on treated areas",
    "No hot baths, saunas, or intense exercise for 24-48 hours",
    "Hair shedding occurs within 7-14 days after treatment"
  ];

  const reviews = [
    {
      rating: 5,
      text: "Queens Laser Spa completely changed my life! After years of painful waxing, I finally have smooth, hair-free skin year-round.",
      author: "Olivia R.",
      location: "Queens",
      date: "March 2023"
    },
    {
      rating: 5,
      text: "The laser specialists at Queens Laser Spa are incredibly knowledgeable and professional. I'm amazed by the results!",
      author: "Carlos D.",
      location: "Bronx",
      date: "July 2023"
    }
  ];

  return { content, beforeTreatment, afterTreatment, reviews };
};

export const getLaserHairRemovalFaqs = (): FAQ[] => {
  return [
    {
      question: "How many laser hair removal sessions will I need?",
      answer: "Most people require 6-8 sessions spaced 4-6 weeks apart for optimal results. This is because hair grows in cycles, and the laser only affects follicles in the active growth phase. Factors affecting the number of treatments include hair color, thickness, the area being treated, and your hormonal balance."
    },
    {
      question: "Is laser hair removal permanent?",
      answer: "Laser hair removal is considered a permanent hair reduction method, not complete removal. After a full treatment series, most NYC clients experience 80-90% reduction in hair growth. Occasional maintenance sessions (once or twice a year) may be needed to manage any regrowth, which is typically finer and lighter in color."
    },
    {
      question: "Does laser hair removal hurt?",
      answer: "Most people describe laser hair removal as feeling like a rubber band snap against the skin. Discomfort varies based on the treatment area, with more sensitive areas like the bikini line or upper lip being more uncomfortable. Many NYC MedSpas use cooling systems and topical numbing creams to enhance comfort during treatment."
    },
    {
      question: "Is laser hair removal safe for dark skin?",
      answer: "Yes, but it requires the right laser technology. New York City's top MedSpas offer advanced lasers like Nd:YAG that are specifically designed to safely treat darker skin tones. When performed by a skilled professional using appropriate technology, laser hair removal can be safe and effective for all skin types."
    },
    {
      question: "Can I get laser hair removal while pregnant?",
      answer: "Most medical professionals and NYC MedSpas advise against laser hair removal during pregnancy. While there's no evidence suggesting it's harmful to the baby, hormonal changes during pregnancy can affect results and may increase the risk of skin discoloration. It's recommended to wait until after pregnancy and breastfeeding to pursue treatment."
    }
  ];
};

export const getLaserHairRemovalPricing = (): PricingItem[] => {
  return [
    { type: "Upper Lip", averagePrice: 150, minPrice: 100, maxPrice: 200 },
    { type: "Underarms", averagePrice: 200, minPrice: 150, maxPrice: 250 },
    { type: "Bikini", averagePrice: 250, minPrice: 200, maxPrice: 300 },
    { type: "Brazilian", averagePrice: 350, minPrice: 300, maxPrice: 400 },
    { type: "Full Legs", averagePrice: 600, minPrice: 500, maxPrice: 700 },
    { type: "Chest (Men)", averagePrice: 400, minPrice: 350, maxPrice: 450 }
  ];
};
