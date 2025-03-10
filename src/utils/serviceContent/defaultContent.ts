
import { Review, SeoContent } from "../serviceTypes";

export const getDefaultServiceContent = (serviceName: string): { 
  content: string[], 
  beforeTreatment: string[], 
  afterTreatment: string[], 
  reviews: Review[] 
} => {
  const content = [
    `${serviceName} is a popular cosmetic treatment available at many premium MedSpas throughout New York City. This procedure helps clients achieve their aesthetic goals with minimal downtime and noticeable results.`,
    `When choosing a MedSpa for your ${serviceName} treatment in NYC, it's important to consider factors such as the provider's experience, the technology they use, and reviews from previous clients. Our directory helps you find the most reputable providers in your neighborhood.`,
    `${serviceName} treatments in NYC typically range in price depending on the specific provider, their location, and the extent of treatment needed. Many MedSpas offer package deals for multiple sessions, which can provide better value for ongoing treatments.`
  ];

  const beforeTreatment = [
    "Consult with your provider about preparation steps",
    "Follow all pre-treatment instructions carefully",
    "Disclose all medications and supplements you're taking",
    "Ask questions about what to expect during and after treatment"
  ];

  const afterTreatment = [
    "Follow all post-treatment care instructions",
    "Attend all recommended follow-up appointments",
    "Report any unusual side effects to your provider",
    "Maintain results with recommended at-home care regimen"
  ];

  const reviews = [
    {
      rating: 5,
      text: `The ${serviceName} treatment I received was excellent. The staff was professional and the results exceeded my expectations.`,
      author: "Patient",
      location: "NYC",
      date: "Recent"
    },
    {
      rating: 4,
      text: `I'm very satisfied with my ${serviceName} results. The MedSpa was clean, modern, and the practitioner was highly skilled.`,
      author: "Client",
      location: "New York",
      date: "Recent"
    }
  ];

  return { content, beforeTreatment, afterTreatment, reviews };
};

export const getDefaultServiceFaqs = (serviceName: string): { question: string, answer: string }[] => {
  return [
    {
      question: `What is ${serviceName} and how does it work?`,
      answer: `${serviceName} is a popular aesthetic treatment that works by [treatment mechanism]. The procedure is designed to [treatment goal] without extensive downtime or recovery.`
    },
    {
      question: `How many ${serviceName} sessions will I need?`,
      answer: `The number of ${serviceName} sessions varies by individual, but most clients require [number range] treatments spaced [timeframe] apart for optimal results. Your provider will create a personalized treatment plan during your consultation.`
    },
    {
      question: `Is ${serviceName} painful?`,
      answer: `Most clients report minimal to moderate discomfort during ${serviceName} treatments. Many NYC MedSpas use techniques to minimize discomfort, such as topical numbing creams or advanced technology designed to enhance comfort.`
    },
    {
      question: `How long do ${serviceName} results last?`,
      answer: `Results from ${serviceName} typically last [timeframe], though this varies based on individual factors and the specific area treated. Many clients schedule maintenance treatments to preserve their results.`
    },
    {
      question: `Is there any downtime after ${serviceName}?`,
      answer: `${serviceName} typically involves [downtime description]. Many NYC clients are able to return to their normal activities [timeframe] after treatment, making it convenient for busy lifestyles.`
    }
  ];
};

export const getDefaultServicePricing = (serviceName: string): { 
  type: string, 
  averagePrice: number, 
  minPrice: number, 
  maxPrice: number 
}[] => {
  return [
    { type: "Basic Treatment", averagePrice: 300, minPrice: 200, maxPrice: 400 },
    { type: "Standard Treatment", averagePrice: 500, minPrice: 400, maxPrice: 600 },
    { type: "Premium Treatment", averagePrice: 700, minPrice: 600, maxPrice: 800 },
    { type: "Package (3 Sessions)", averagePrice: 1200, minPrice: 1000, maxPrice: 1400 },
    { type: "Package (6 Sessions)", averagePrice: 2000, minPrice: 1800, maxPrice: 2200 }
  ];
};
