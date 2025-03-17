
import React from "react";
import { FAQ } from "@/utils/serviceTypes";

interface TreatmentLocationFaqsProps {
  serviceName: string;
  locationName: string;
  locationFaqs: FAQ[];
}

const TreatmentLocationFaqs = ({ 
  serviceName, 
  locationName, 
  locationFaqs 
}: TreatmentLocationFaqsProps) => {
  
  // Generic FAQs for treatments in locations if none are provided
  const getLocationTreatmentFAQs = (): FAQ[] => {
    return [
      {
        question: `How much does ${serviceName} cost in ${locationName}?`,
        answer: `${serviceName} pricing in ${locationName} typically ranges based on treatment area and provider expertise. Most premium clinics offer complimentary consultations to provide personalized quotes.`
      },
      {
        question: `How long do ${serviceName} results last?`,
        answer: `Results vary by individual and treatment type, but most clients enjoy their ${serviceName} results for several months. Your provider can create a customized maintenance plan.`
      },
      {
        question: `What should I look for in a ${serviceName} provider in ${locationName}?`,
        answer: `When choosing a ${serviceName} provider in ${locationName}, prioritize board-certified specialists with specific training in your desired treatment. Review before-and-after photos and ask about their approach to natural-looking results.`
      },
      {
        question: `Where can I find the best ${serviceName} providers in ${locationName}?`,
        answer: `Explore MedSpasNYC's curated list of top-rated ${locationName} ${serviceName} providers and book your appointment today! We've carefully vetted each clinic for excellence in results and patient care.`
      }
    ];
  };

  // Use provided FAQs or fallback to generic ones
  const faqs = locationFaqs.length > 0 ? locationFaqs : getLocationTreatmentFAQs();
  
  return faqs;
};

export default TreatmentLocationFaqs;
