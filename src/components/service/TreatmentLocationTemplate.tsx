
import React, { useEffect } from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { getServiceBySlug } from "@/lib/services";
import { getServicesByLocation } from "@/lib/filters";
import { getLocationName } from "@/lib/locations";
import { type MedSpa, type Location } from "@/lib/types";
import ServiceLocationMetadata from "@/components/service/ServiceLocationMetadata";
import ServiceLocationMainContent from "@/components/service/ServiceLocationMainContent";
import ServiceLocationSidebar from "@/components/service/ServiceLocationSidebar";
import { getLocationContent, getLocationFaqs, type LocationContent } from "@/utils/locationContent";
import { generateLocationKeywords } from "@/utils/keywordGenerator";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  // Debug info
  useEffect(() => {
    console.log(`TreatmentLocationTemplate mounted: serviceSlug=${serviceSlug}, location=${location}`);
  }, [serviceSlug, location]);
  
  // Fetch treatment, location name, and medspas
  const treatment = getServiceBySlug(serviceSlug);
  const locationName = getLocationName(location);
  const medSpasInLocation = getServicesByLocation(serviceSlug, location);
  
  if (!treatment) {
    console.error(`Treatment not found: ${serviceSlug}`);
    // After a short delay, redirect to NotFound page
    setTimeout(() => {
      navigate("/not-found", { replace: true });
    }, 100);
    
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Treatment Not Found</h1>
        <p>The treatment "{serviceSlug}" you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  if (!locationName) {
    console.error(`Location not found: ${location}`);
    setTimeout(() => {
      navigate("/not-found", { replace: true });
    }, 100);
    
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Location Not Found</h1>
        <p>The location "{location}" you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  // Generate location-specific content
  const locationContent = getLocationContent(treatment.name, locationName);
  const locationFaqs = getLocationFaqs(treatment.name, locationName);
  
  // Location-specific keywords
  const locationKeywords = generateLocationKeywords(treatment.name, locationName);
  
  return (
    <>
      <ServiceLocationMetadata 
        serviceName={treatment.name}
        serviceDescription={treatment.description}
        locationName={locationName}
        locationKeywords={locationKeywords}
      />
    
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Treatments", href: "/treatments" },
            { label: treatment.name, href: `/treatments/${treatment.slug}` },
            { label: locationName, href: `/treatments/${treatment.slug}/${location}`, current: true }
          ]} 
        />
        
        {customContent ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {customContent}
            </div>
            
            <div className="mt-8 md:mt-0">
              <ServiceLocationSidebar
                serviceSlug={treatment.slug}
                serviceName={treatment.name}
                location={location}
                locationName={locationName}
                locationContent={locationContent}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ServiceLocationMainContent
                serviceName={treatment.name}
                serviceSlug={treatment.slug}
                locationName={locationName}
                imageUrl={treatment.imageUrl}
                medSpasInLocation={medSpasInLocation}
                locationContent={locationContent}
                locationFaqs={locationFaqs}
              />
            </div>
            
            <div className="mt-8 md:mt-0">
              <ServiceLocationSidebar
                serviceSlug={treatment.slug}
                serviceName={treatment.name}
                location={location}
                locationName={locationName}
                locationContent={locationContent}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TreatmentLocationTemplate;
