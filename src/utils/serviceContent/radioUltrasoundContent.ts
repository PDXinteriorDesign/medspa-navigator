
import { FAQ, PricingItem } from "../serviceTypes";

export const getRadioUltrasoundFaqs = (): FAQ[] => {
  return [
    {
      question: "What is the difference between radiofrequency and ultrasound therapy?",
      answer: "Radiofrequency (RF) therapy uses energy waves to heat the deeper layers of skin, stimulating collagen production and tightening tissues. Ultrasound therapy penetrates deeper than RF and can target both skin and fat cells. While RF is excellent for skin tightening and texture improvement, ultrasound can also address fat deposits in addition to skin laxity. Many NYC medspas offer combined or separate treatments based on your specific needs."
    },
    {
      question: "How many Radio & Ultrasound Therapy sessions will I need?",
      answer: "Most patients require a series of 3-6 treatments spaced 2-4 weeks apart for optimal results. The exact number depends on the treatment area, the technology being used, and your individual concerns. Maintenance treatments are typically recommended every 6-12 months to sustain results. Your provider will create a personalized treatment plan during your consultation."
    },
    {
      question: "Is Radio & Ultrasound Therapy painful?",
      answer: "Most patients describe Radio & Ultrasound Therapy as comfortable with sensations of warmth and occasional mild tingling. The level of sensation varies depending on the specific technology, treatment area, and energy settings used. Providers often adjust settings for comfort while maintaining effectiveness. Some NYC medspas offer additional comfort measures such as cooling devices or numbing creams for sensitive areas."
    },
    {
      question: "How long do results from Radio & Ultrasound Therapy last?",
      answer: "Results typically last from 6-12 months or longer, depending on the treatment area, number of sessions, and individual factors like age and lifestyle. The treatments stimulate your body's natural collagen production, which continues for several months after your session. Maintenance treatments every 6-12 months can help extend and enhance results."
    },
    {
      question: "Is there any downtime after Radio & Ultrasound Therapy?",
      answer: "One of the major advantages of these treatments is minimal to no downtime. Most patients can immediately return to normal activities. You might experience mild redness or slight swelling that typically subsides within a few hours. This makes these treatments particularly popular among busy NYC professionals who can't afford recovery time associated with more invasive procedures."
    },
    {
      question: "Which areas can be treated with Radio & Ultrasound Therapy?",
      answer: "These versatile technologies can treat multiple areas of the body, including face, neck, jawline, décolletage, arms, abdomen, flanks, thighs, and buttocks. Different devices may be better suited for specific areas, and your provider will recommend the appropriate technology for your concerns. NYC medspas often offer specialized treatments for popular concerns like jawline definition, under-eye rejuvenation, and abdominal tightening."
    }
  ];
};

export const getRadioUltrasoundPricing = (): PricingItem[] => {
  return [
    { 
      type: "Single Session - Face/Neck", 
      averagePrice: 650, 
      minPrice: 450, 
      maxPrice: 850 
    },
    { 
      type: "Single Session - Body (Small Area)", 
      averagePrice: 800, 
      minPrice: 600, 
      maxPrice: 1000 
    },
    { 
      type: "Single Session - Body (Large Area)", 
      averagePrice: 1200, 
      minPrice: 900, 
      maxPrice: 1500 
    },
    { 
      type: "Package - Face/Neck (3 Sessions)", 
      averagePrice: 1500, 
      minPrice: 1200, 
      maxPrice: 1800 
    },
    { 
      type: "Package - Body (3 Sessions)", 
      averagePrice: 2100, 
      minPrice: 1800, 
      maxPrice: 2400 
    },
    { 
      type: "Premium Combined RF & Ultrasound Treatment", 
      averagePrice: 1500, 
      minPrice: 1200, 
      maxPrice: 1800 
    }
  ];
};
