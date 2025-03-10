
import { Review, SeoContent } from "../serviceTypes";

export const getCoolSculptingContent = (): { 
  content: string[], 
  beforeTreatment: string[], 
  afterTreatment: string[], 
  reviews: Review[] 
} => {
  const content = [
    "CoolSculpting is an innovative non-invasive fat reduction procedure that has gained immense popularity in New York City. This FDA-approved treatment uses controlled cooling technology to freeze and eliminate stubborn fat cells without surgery or downtime.",
    "The science behind CoolSculpting, known as cryolipolysis, selectively targets fat cells while leaving surrounding tissues unharmed. Once frozen, these fat cells die and are naturally processed and eliminated by the body over the following weeks and months.",
    "Popular treatment areas among NYC clients include the abdomen, flanks (love handles), thighs, back fat, double chin, and upper arms. Most patients see noticeable results after just one session, though optimal results typically require 2-3 treatments spaced several weeks apart."
  ];

  const beforeTreatment = [
    "Avoid anti-inflammatory medications before treatment",
    "Wear comfortable clothing to your appointment",
    "Maintain a healthy weight; CoolSculpting is not a weight loss solution",
    "Inform your provider about any medical conditions"
  ];

  const afterTreatment = [
    "Temporary redness, swelling, and numbness in the treated area",
    "No downtime; most patients return to normal activities immediately",
    "Initial results visible in 3 weeks",
    "Maximum results typically appear after 2-3 months",
    "Maintain results with healthy diet and exercise"
  ];

  const reviews = [
    {
      rating: 5,
      text: "After three sessions of CoolSculpting at Elite Aesthetic Center, my stubborn love handles are finally gone. Worth every penny!",
      author: "David L.",
      location: "Manhattan",
      date: "April 2023"
    },
    {
      rating: 4,
      text: "Glow MedSpa did an amazing job with my CoolSculpting treatments. The staff was informative and made me feel comfortable throughout.",
      author: "Sarah J.",
      location: "Queens",
      date: "July 2023"
    }
  ];

  return { content, beforeTreatment, afterTreatment, reviews };
};

export const getCoolSculptingFaqs = (): { question: string, answer: string }[] => {
  return [
    {
      question: "How many CoolSculpting sessions will I need?",
      answer: "Most patients need 1-3 CoolSculpting sessions per treatment area to achieve optimal results. Factors affecting this include the size of the area, the amount of fat being targeted, and your individual body's response to the treatment. During your consultation at an NYC MedSpa, your provider will create a personalized treatment plan."
    },
    {
      question: "Is CoolSculpting painful?",
      answer: "CoolSculpting isn't typically described as painful, though you may experience intense cold, pulling, tugging, and mild pinching sensations during the first few minutes of treatment. As the area numbs, these sensations generally subside. Most NYC clients read, work on laptops, or even nap during their sessions."
    },
    {
      question: "How is CoolSculpting different from liposuction?",
      answer: "CoolSculpting is a non-invasive procedure with no downtime, while liposuction is a surgical procedure requiring anesthesia and recovery time. CoolSculpting reduces fat by about 20-25% in the treated area, while liposuction can remove more fat. CoolSculpting is ideal for targeting specific pockets of fat rather than comprehensive body contouring."
    },
    {
      question: "Will I lose weight with CoolSculpting?",
      answer: "CoolSculpting is not a weight loss solution, but rather a body contouring treatment. While you likely won't see significant changes on the scale, you will notice improved body shape and fit of clothing. The procedure is designed for those at or near their ideal weight who have stubborn fat deposits resistant to diet and exercise."
    },
    {
      question: "Are CoolSculpting results permanent?",
      answer: "CoolSculpting permanently eliminates treated fat cells, which do not regenerate. However, remaining fat cells can expand with weight gain. To maintain optimal results, NYC providers recommend maintaining a stable weight through healthy diet and regular exercise."
    }
  ];
};

export const getCoolSculptingPricing = (): { 
  type: string, 
  averagePrice: number, 
  minPrice: number, 
  maxPrice: number 
}[] => {
  return [
    { type: "Abdomen (Lower)", averagePrice: 1500, minPrice: 1200, maxPrice: 1800 },
    { type: "Abdomen (Upper)", averagePrice: 1500, minPrice: 1200, maxPrice: 1800 },
    { type: "Flanks (Love Handles) - Both Sides", averagePrice: 1600, minPrice: 1300, maxPrice: 1900 },
    { type: "Inner Thighs - Both", averagePrice: 1500, minPrice: 1200, maxPrice: 1800 },
    { type: "Outer Thighs - Both", averagePrice: 1600, minPrice: 1300, maxPrice: 1900 },
    { type: "Double Chin", averagePrice: 1000, minPrice: 800, maxPrice: 1200 }
  ];
};
