
import React from "react";
import EnhancedServiceSchema from "@/components/service/EnhancedServiceSchema";
import { Location } from "@/lib/data";

interface ServiceLocationMetadataProps {
  serviceName: string;
  serviceDescription: string;
  locationName: string;
  locationKeywords: string[];
}

const ServiceLocationMetadata = ({ 
  serviceName,
  serviceDescription,
  locationName,
  locationKeywords
}: ServiceLocationMetadataProps) => {
  return (
    <EnhancedServiceSchema 
      serviceName={serviceName} 
      description={serviceDescription}
      keywords={locationKeywords}
      cityName={locationName}
    />
  );
};

export default ServiceLocationMetadata;
