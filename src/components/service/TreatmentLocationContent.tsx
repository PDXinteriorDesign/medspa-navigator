
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import { MedSpa } from "@/lib/types";
import ServiceIntroSection from "./ServiceIntroSection";
import TreatmentLocationIntro from "./TreatmentLocationIntro";
import TreatmentLocationFaqs from "./TreatmentLocationFaqs";
import MedSpaList from "@/components/location/MedSpaList";

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
      
      {/* Use the standardized MedSpaList component for consistency */}
      <div className="mt-8 mb-10">
        <h3 className="text-xl font-serif font-medium mb-6">
          {serviceName} Providers in {locationName}
        </h3>
        
        {medSpasInLocation.length > 0 ? (
          <MedSpaList 
            medSpas={medSpasInLocation} 
            locationName={locationName} 
            treatmentName={serviceName} 
          />
        ) : (
          <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20 mb-8">
            <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
            <p className="text-gray-700 mb-5">
              Our curators are currently finalizing our selection of premium {serviceName} providers in {locationName}.
            </p>
          </div>
        )}
      </div>
      
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
