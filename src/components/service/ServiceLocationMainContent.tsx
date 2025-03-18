
import React from "react";
import { LocationContent } from "@/utils/locationContent";
import { MedSpa } from "@/lib/types";
import TreatmentLocationContent from "./TreatmentLocationContent";
import StandardLocationContent from "./StandardLocationContent";

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
  
  // For treatment/location combination pages, use our new template
  // When we're in a treatment/location route like /botox/manhattan
  return (
    <TreatmentLocationContent
      serviceName={serviceName}
      serviceSlug={serviceSlug}
      locationName={locationName}
      imageUrl={imageUrl}
      medSpasInLocation={medSpasInLocation}
      locationFaqs={locationFaqs}
    />
  );
};

export default ServiceLocationMainContent;
