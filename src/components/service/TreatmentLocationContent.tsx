
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import { MedSpa } from "@/lib/types";
import ServiceMedSpaListing from "./ServiceMedSpaListing";
import ServiceIntroSection from "./ServiceIntroSection";

interface TreatmentLocationContentProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  imageUrl: string;
  medSpasInLocation: MedSpa[];
  locationFaqs: any[];
}

const TreatmentLocationContent = ({
  serviceName,
  serviceSlug,
  locationName,
  imageUrl,
  medSpasInLocation,
  locationFaqs
}: TreatmentLocationContentProps) => {
  
  // Generic introduction for any treatment in any location
  const getTreatmentLocationIntro = () => {
    return (
      <>
        <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
          The Best MedSpas in {locationName} for Expert {serviceName}
        </h2>
        <div className="text-gray-700 space-y-4 mb-8">
          <p>
            {serviceName} remains one of the most popular aesthetic treatments in {locationName}, helping clients achieve their desired results with expert care and attention to detail. Whether you're looking for a first-time treatment or maintenance, these {locationName} medspas offer expertly administered treatments tailored to your aesthetic goals.
          </p>
          <p>
            MedSpasNYC connects you with the best {serviceName} clinics in {locationName}, ensuring you receive top-tier care from board-certified specialists.
          </p>
        </div>
      </>
    );
  };
  
  // Generic FAQs for treatments in locations
  const getLocationTreatmentFAQs = () => {
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

  return (
    <>
      <ServiceHero 
        imageUrl={imageUrl} 
        name={`${serviceName} in ${locationName}`} 
        medSpasCount={medSpasInLocation.length}
        reducedHeight={true}
      />
      
      <ServiceMedSpaListing
        medSpasInLocation={medSpasInLocation}
        serviceName={serviceName}
        serviceSlug={serviceSlug}
        locationName={locationName}
      />
      
      <ServiceIntroSection>
        {getTreatmentLocationIntro()}
      </ServiceIntroSection>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={locationFaqs.length > 0 ? locationFaqs : getLocationTreatmentFAQs()}
      />
    </>
  );
};

export default TreatmentLocationContent;
