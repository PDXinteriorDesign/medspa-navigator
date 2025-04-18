
import React from "react";
import EnhancedServiceSchema from "@/components/service/EnhancedServiceSchema";
import { Location } from "@/lib/data";

interface ServiceLocationMetadataProps {
  serviceName: string;
  serviceDescription: string;
  locationName: string;
  locationKeywords: string[];
  seoKeywords?: string[];
  isNYC?: boolean;
}

const ServiceLocationMetadata = ({ 
  serviceName,
  serviceDescription,
  locationName,
  locationKeywords,
  seoKeywords = [],
  isNYC = false
}: ServiceLocationMetadataProps) => {
  // Add NYC-specific modifiers to keywords for better local SEO
  const enhancedKeywords = [
    ...locationKeywords,
    ...seoKeywords,
    `${serviceName} ${locationName} specialists`,
    `${serviceName} New York City ${locationName}`,
    `top ${serviceName} providers ${locationName}`,
    `best ${serviceName} clinics ${locationName}`,
    `luxury ${serviceName} treatment ${locationName}`,
    `${serviceName} near me ${locationName}`,
    `${serviceName} cost ${locationName} NYC`,
    `premium ${serviceName} medical spa ${locationName}`
  ];

  return (
    <EnhancedServiceSchema 
      serviceName={`${serviceName} in ${locationName}`}
      description={`Find the best ${serviceName} providers in ${locationName}, NYC. ${serviceDescription}`}
      keywords={enhancedKeywords}
      cityName={isNYC ? "NYC" : locationName}
    />
  );
};

export default ServiceLocationMetadata;
