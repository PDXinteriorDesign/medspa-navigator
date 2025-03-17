
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import { MedSpa } from "@/lib/types";
import ServiceMedSpaListing from "./ServiceMedSpaListing";
import ServiceIntroSection from "./ServiceIntroSection";
import TreatmentLocationIntro from "./TreatmentLocationIntro";
import TreatmentLocationFaqs from "./TreatmentLocationFaqs";

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
  // Get location-specific FAQs, either from props or generated from the utility component
  const faqs = locationFaqs && locationFaqs.length > 0 
    ? locationFaqs 
    : TreatmentLocationFaqs({ serviceName, locationName, locationFaqs });

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
        <TreatmentLocationIntro
          serviceName={serviceName}
          locationName={locationName}
        />
      </ServiceIntroSection>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={faqs}
      />
    </>
  );
};

export default TreatmentLocationContent;
