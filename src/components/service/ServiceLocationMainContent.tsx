
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import MedSpaCard from "@/components/MedSpaCard";
import { Button } from "@/components/ui/button";
import ServiceLocationProviders from "./ServiceLocationProviders";
import ServiceLocationTiming from "./ServiceLocationTiming";
import { LocationContent } from "@/utils/locationContent";
import { MedSpa, Location } from "@/lib/data";

interface ServiceLocationMainContentProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  imageUrl: string;
  medSpasInLocation: MedSpa[];
  locationContent: LocationContent;
  locationFaqs: any[];
}

const ServiceLocationMainContent = ({
  serviceName,
  serviceSlug,
  locationName,
  imageUrl,
  medSpasInLocation,
  locationContent,
  locationFaqs
}: ServiceLocationMainContentProps) => {
  return (
    <>
      <ServiceHero 
        imageUrl={imageUrl} 
        name={`${serviceName} in ${locationName}`} 
        medSpasCount={medSpasInLocation.length} 
      />
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">About {serviceName} in {locationName}</h2>
        
        <div className="text-gray-700 mb-6 space-y-4">
          {locationContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
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
      </div>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={locationFaqs}
      />
      
      <h2 className="section-heading mt-8">MedSpas Offering {serviceName} in {locationName}</h2>
      
      {medSpasInLocation.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {medSpasInLocation.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))}
        </div>
      ) : (
        <div className="bg-medspa-blue/30 p-6 rounded-lg text-center">
          <p className="text-gray-700 mb-4">No MedSpas currently listed for {serviceName} in {locationName}.</p>
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <a href={`/services/${serviceSlug}`}>View All {serviceName} Providers</a>
          </Button>
        </div>
      )}
    </>
  );
};

export default ServiceLocationMainContent;
