
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import ServiceLocationProviders from "./ServiceLocationProviders";
import ServiceLocationTiming from "./ServiceLocationTiming";
import { LocationContent } from "@/utils/locationContent";
import { MedSpa } from "@/lib/types";
import { Star } from "lucide-react";
import ServiceMedSpaListing from "./ServiceMedSpaListing";
import ServiceIntroSection from "./ServiceIntroSection";

interface StandardLocationContentProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  imageUrl: string;
  medSpasInLocation: MedSpa[];
  locationContent: LocationContent;
  locationFaqs: any[];
}

const StandardLocationContent = ({
  serviceName,
  serviceSlug,
  locationName,
  imageUrl,
  medSpasInLocation,
  locationContent,
  locationFaqs
}: StandardLocationContentProps) => {
  
  return (
    <>
      <ServiceHero 
        imageUrl={imageUrl} 
        name={`${serviceName} in ${locationName}`} 
        medSpasCount={medSpasInLocation.length}
      />
      
      <ServiceIntroSection>
        <div className="mb-2">
          <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
            Curator's Selection
          </div>
        </div>
        <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
          The Definitive Guide to {serviceName} in {locationName}
        </h2>
        
        <div className="text-gray-700 space-y-4 mb-8">
          {locationContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <blockquote className="text-sm border-l-2 border-medspa-gold pl-5 py-2 italic text-gray-600 my-6">
            "{locationName} has established itself as a premier destination for {serviceName}, with practitioners who combine artistic vision with technical mastery."
          </blockquote>
        </div>
        
        <ServiceLocationProviders 
          locationName={locationName} 
          serviceName={serviceName}
          providers={locationContent.popularProviders}
        />
        
        <ServiceLocationTiming 
          locationName={locationName} 
          serviceName={serviceName}
          timing={locationContent.timing}
        />
        
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex items-center mb-4">
            <Star size={20} className="text-medspa-gold mr-2" fill="currentColor" />
            <h3 className="text-xl font-serif font-medium">Expert Insight</h3>
          </div>
          <div className="bg-medspa-blue/20 p-6 rounded-lg text-gray-700 border border-medspa-blue/10">
            <p>
              When selecting a {serviceName} provider in {locationName}, consider their specialized training, the technology they utilize, and their aesthetic philosophy. The finest practitioners will offer a thorough consultation and create a bespoke treatment plan tailored to your unique features and desired outcomes.
            </p>
          </div>
        </div>
      </ServiceIntroSection>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={locationFaqs}
      />
      
      <h2 className="text-2xl font-serif font-medium mt-10 mb-6 tracking-tight">
        Handpicked {serviceName} Providers in {locationName}
      </h2>
      
      <ServiceMedSpaListing
        medSpasInLocation={medSpasInLocation}
        serviceName={serviceName}
        serviceSlug={serviceSlug}
        locationName={locationName}
        showCount={false}
      />
    </>
  );
};

export default StandardLocationContent;
