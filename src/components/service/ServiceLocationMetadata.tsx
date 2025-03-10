
import React from "react";
import EnhancedServiceSchema from "@/components/service/EnhancedServiceSchema";
import { Location } from "@/lib/data";

interface ServiceLocationMetadataProps {
  serviceName: string;
  serviceDescription: string;
  locationName: string;
  locationKeywords: string[];
  isNYC?: boolean;
}

const ServiceLocationMetadata = ({ 
  serviceName,
  serviceDescription,
  locationName,
  locationKeywords,
  isNYC = false
}: ServiceLocationMetadataProps) => {
  // Add NYC-specific modifiers to keywords for better local SEO
  const enhancedKeywords = isNYC ? [
    ...locationKeywords,
    `${serviceName} NYC specialists`,
    `${serviceName} New York City`,
    `top ${serviceName} providers Manhattan`,
    `best ${serviceName} clinics New York`,
    `luxury ${serviceName} treatment New York City`,
    `${serviceName} near me NYC`,
    `${serviceName} cost New York`,
    `${serviceName} Upper East Side`,
    `${serviceName} SoHo`,
    `${serviceName} Tribeca`,
    `${serviceName} Midtown`,
    `${serviceName} Brooklyn`,
    `premium ${serviceName} medical spa NYC`
  ] : locationKeywords;

  return (
    <EnhancedServiceSchema 
      serviceName={serviceName} 
      description={serviceDescription}
      keywords={enhancedKeywords}
      cityName={isNYC ? "NYC" : locationName}
    />
  );
};

export default ServiceLocationMetadata;
