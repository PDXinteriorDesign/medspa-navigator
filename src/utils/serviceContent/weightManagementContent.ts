
import { Review, FAQ, PricingItem } from "../serviceTypes";

export const getWeightManagementContent = (): { 
  content: string[], 
  beforeTreatment: string[], 
  afterTreatment: string[], 
  reviews: Review[] 
} => {
  const content = [
    `Weight Management Programs in New York City combine medical expertise with personalized nutrition and lifestyle guidance, offering effective solutions beyond traditional dieting. These medically supervised programs address the complexities of weight loss through comprehensive approaches tailored to each client's unique body composition, metabolism, and health history.`,
    `NYC's premier medical spas and wellness centers offer cutting-edge weight management solutions that integrate advanced diagnostic testing, prescription medications when appropriate, nutritional counseling, and behavior modification techniques. These multifaceted programs are designed to help Manhattan and Brooklyn residents achieve sustainable results while navigating the city's demanding lifestyle.`,
    `At MedSpasNYC, we've identified the most reputable weight management providers across the city who employ board-certified physicians, registered dietitians, and certified health coaches to create truly personalized weight loss journeys. Our featured programs emphasize not just aesthetic improvements but enhanced overall health, energy levels, and quality of life.`
  ];

  const beforeTreatment = [
    "Schedule a comprehensive initial assessment to evaluate your current health status, body composition, and metabolic profile",
    "Complete any requested blood work or diagnostic testing to identify potential metabolic issues or nutritional deficiencies",
    "Prepare a detailed health history and record of previous weight loss attempts to help your provider understand your unique challenges",
    "Consider your personal goals and lifestyle constraints to ensure your treatment plan will be sustainable"
  ];

  const afterTreatment = [
    "Follow your personalized nutrition and exercise plan consistently",
    "Attend all scheduled follow-up appointments for monitoring and plan adjustments",
    "Track your progress through measurements beyond just weight, such as body composition changes and energy levels",
    "Utilize the ongoing support resources offered by your provider, such as nutritional counseling or coaching sessions"
  ];

  const reviews = [
    {
      rating: 5,
      text: `The medical weight management program I joined completely transformed my relationship with food and exercise. Unlike previous diets, this approach addressed the underlying issues affecting my weight and provided practical strategies I could maintain with my busy Manhattan schedule.`,
      author: "Jennifer L.",
      location: "Upper East Side",
      date: "Recent"
    },
    {
      rating: 4,
      text: `After struggling with weight fluctuations for years, the personalized approach at this medical spa has finally helped me achieve stable results. The combination of medical oversight, nutritional guidance, and accountability has been exactly what I needed.`,
      author: "Michael T.",
      location: "Brooklyn",
      date: "Recent"
    }
  ];

  return { content, beforeTreatment, afterTreatment, reviews };
};

export const getWeightManagementFaqs = (): FAQ[] => {
  return [
    {
      question: "How is medical weight management different from standard diets?",
      answer: "Medical weight management programs are supervised by healthcare professionals who use diagnostic testing, personalized nutrition plans, and sometimes prescription medications to address the complexities of weight loss. Unlike standard diets, these programs consider your unique metabolism, hormonal balance, and health history to create truly individualized approaches."
    },
    {
      question: "What happens during the initial consultation for a weight management program?",
      answer: "During your initial consultation, providers typically conduct comprehensive assessments including body composition analysis, detailed health history review, and sometimes blood work to identify underlying factors affecting your weight. This thorough evaluation allows for the creation of a personalized treatment plan addressing your specific needs and goals."
    },
    {
      question: "How much do medical weight management programs cost in NYC?",
      answer: "In New York City, medical weight management programs typically range from $1,500-$5,000 for a comprehensive 3-month program. Costs vary based on included services, the credentials of providers, and whether prescription medications or specialized testing are part of your treatment plan. Many programs offer tiered options to accommodate different budgets."
    },
    {
      question: "How quickly will I see results with a medical weight management program?",
      answer: "Most clients following their personalized plans report noticeable changes within the first 2-4 weeks, with many achieving a sustainable weight loss rate of 1-2 pounds per week. However, results vary based on individual factors including starting weight, metabolism, adherence to the program, and whether there are underlying medical conditions affecting weight."
    },
    {
      question: "Can weight management programs help with medical conditions like diabetes or hypertension?",
      answer: "Yes, medically supervised weight management programs often lead to significant improvements in conditions like diabetes, hypertension, and high cholesterol. Many clients experience reduced medication requirements as their health metrics improve. These programs address the underlying metabolic issues that contribute to both weight gain and related health conditions."
    }
  ];
};

export const getWeightManagementPricing = (): PricingItem[] => {
  return [
    { type: "Initial Consultation & Assessment", averagePrice: 350, minPrice: 250, maxPrice: 450 },
    { type: "Basic 3-Month Program", averagePrice: 1800, minPrice: 1500, maxPrice: 2100 },
    { type: "Premium 3-Month Program", averagePrice: 3000, minPrice: 2500, maxPrice: 3500 },
    { type: "Monthly Maintenance (After Initial Program)", averagePrice: 300, minPrice: 200, maxPrice: 400 },
    { type: "Comprehensive 6-Month Program", averagePrice: 4500, minPrice: 3800, maxPrice: 5200 }
  ];
};
