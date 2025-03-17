
import React from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { getServiceBySlug, getServicesByLocation, getLocationName, type MedSpa, type Location } from "@/lib/data";
import ServiceLocationMetadata from "@/components/service/ServiceLocationMetadata";
import ServiceLocationMainContent from "@/components/service/ServiceLocationMainContent";
import ServiceLocationSidebar from "@/components/service/ServiceLocationSidebar";
import { getLocationContent, getLocationFaqs, type LocationContent } from "@/utils/locationContent";
import { generateLocationKeywords } from "@/utils/keywordGenerator";

interface TreatmentLocationTemplateProps {
  serviceSlug: string;
  location: Location;
  customContent?: React.ReactNode;
}

const TreatmentLocationTemplate = ({ 
  serviceSlug, 
  location,
  customContent
}: TreatmentLocationTemplateProps) => {
  // Fetch service, location name, and medspas
  const service = getServiceBySlug(serviceSlug);
  const locationName = getLocationName(location);
  const medSpasInLocation = getServicesByLocation(serviceSlug, location);
  
  if (!service) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Service Not Found</h1>
        <p>The service you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  // Generate location-specific content
  const locationContent = getLocationContent(service.name, locationName);
  const locationFaqs = getLocationFaqs(service.name, locationName);
  
  // Location-specific keywords
  const locationKeywords = generateLocationKeywords(service.name, locationName);
  
  return (
    <>
      <ServiceLocationMetadata 
        serviceName={service.name}
        serviceDescription={service.description}
        locationName={locationName}
        locationKeywords={locationKeywords}
      />
    
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Treatments", href: "/treatments" },
            { label: service.name, href: `/treatments/${service.slug}` },
            { label: locationName, href: `/treatments/${service.slug}-in-${location}`, current: true }
          ]} 
        />
        
        {customContent}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ServiceLocationMainContent
              serviceName={service.name}
              serviceSlug={service.slug}
              locationName={locationName}
              imageUrl={service.imageUrl}
              medSpasInLocation={medSpasInLocation}
              locationContent={locationContent}
              locationFaqs={locationFaqs}
            />
          </div>
          
          <div className="mt-8 md:mt-0">
            <ServiceLocationSidebar
              serviceSlug={service.slug}
              serviceName={service.name}
              location={location}
              locationName={locationName}
              locationContent={locationContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentLocationTemplate;
