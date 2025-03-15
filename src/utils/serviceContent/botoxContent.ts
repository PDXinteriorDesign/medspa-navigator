
import { Review, SeoContent } from "../serviceTypes";

export const getBotoxContent = (): { 
  content: string[], 
  beforeTreatment: string[], 
  afterTreatment: string[], 
  reviews: Review[] 
} => {
  const content = [
    "Botox is one of the most popular cosmetic treatments in NYC, known for its ability to temporarily reduce the appearance of facial wrinkles and fine lines. This non-surgical procedure uses a purified form of botulinum toxin to relax the muscles responsible for wrinkles, giving the skin a smoother, more youthful appearance.",
    "In New York City, Botox is commonly used to treat forehead lines, crow's feet (lines around the eyes), and glabellar lines (frown lines between the eyebrows). The treatment typically takes just 10-15 minutes, making it a convenient 'lunchtime procedure' for busy New Yorkers.",
    "The effects of Botox generally last 3-4 months, though results can vary based on individual factors such as muscle strength, metabolism, and the specific area being treated. Many NYC residents incorporate Botox into their regular beauty regimen, scheduling treatments 3-4 times per year to maintain results."
  ];

  const beforeTreatment = [
    "Avoid blood thinners, aspirin, and anti-inflammatory medications for 1 week",
    "Discontinue vitamin E and fish oil supplements 2 days before",
    "Avoid alcohol consumption 24 hours before treatment",
    "Come to appointment with clean skin free of makeup"
  ];

  const afterTreatment = [
    "Remain upright for 4 hours after injection",
    "Avoid touching or rubbing the treated area for 24 hours",
    "Refrain from strenuous exercise for 24 hours",
    "Results typically appear within 3-7 days",
    "Full effects visible within 2 weeks"
  ];

  const reviews = [
    {
      rating: 4,
      text: "Queens Laser Spa has excellent Botox technicians. Minimal bruising and the results last me a full 4 months.",
      author: "Michael T.",
      location: "Brooklyn",
      date: "June 2023"
    },
    {
      rating: 5,
      text: "The team at Queens Laser Spa takes their time to ensure perfect Botox placement. I've never had a bad experience.",
      author: "Rebecca S.",
      location: "Manhattan",
      date: "August 2023"
    }
  ];

  return { content, beforeTreatment, afterTreatment, reviews };
};

export const getBotoxFaqs = (): { question: string, answer: string }[] => {
  return [
    {
      question: "How long does Botox last?",
      answer: "Botox typically lasts 3-4 months, though this can vary based on factors such as the area treated, dosage used, and individual metabolism. Some patients, especially those who regularly receive Botox treatments, may find their results last longer over time."
    },
    {
      question: "Is Botox painful?",
      answer: "Most patients report minimal discomfort during Botox injections. The procedure involves using very fine needles, and many NYC MedSpas apply a topical numbing cream before treatment to enhance comfort. Some describe the sensation as a slight pinch that lasts only seconds."
    },
    {
      question: "What's the difference between Botox and fillers?",
      answer: "Botox relaxes muscles to reduce dynamic wrinkles (wrinkles caused by movement), while fillers add volume to static wrinkles and areas of lost volume. Botox is ideal for forehead lines, crow's feet, and frown lines, while fillers work best for nasolabial folds, marionette lines, and lip enhancement."
    },
    {
      question: "At what age should I start getting Botox?",
      answer: "There's no specific age to start Botox, as it depends on your individual concerns and goals. Many NYC residents begin preventative Botox in their late 20s or early 30s, while others wait until lines become more noticeable. A consultation with a qualified provider is the best way to determine if Botox is right for you."
    },
    {
      question: "Can I exercise after getting Botox?",
      answer: "It's recommended to avoid strenuous exercise for 24 hours after Botox treatment. Physical activity increases blood flow, which could potentially spread the Botox to unintended areas or reduce its effectiveness at the injection site."
    }
  ];
};

export const getBotoxPricing = (): { 
  type: string, 
  averagePrice: number, 
  minPrice: number, 
  maxPrice: number 
}[] => {
  return [
    { type: "Forehead Lines", averagePrice: 350, minPrice: 250, maxPrice: 450 },
    { type: "Crow's Feet (Both Sides)", averagePrice: 350, minPrice: 250, maxPrice: 450 },
    { type: "Glabellar Lines (11 Lines)", averagePrice: 350, minPrice: 250, maxPrice: 450 },
    { type: "Full Face (All Three Areas)", averagePrice: 850, minPrice: 700, maxPrice: 1000 },
    { type: "Bunny Lines", averagePrice: 250, minPrice: 200, maxPrice: 350 },
    { type: "Masseter (Jaw Reduction)", averagePrice: 650, minPrice: 500, maxPrice: 800 }
  ];
};
