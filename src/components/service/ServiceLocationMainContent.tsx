
import React from "react";
import TreatmentLocationContent from "./TreatmentLocationContent";
import { type MedSpa } from "@/lib/types";
import { type LocationContent } from "@/utils/locationContent";

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
