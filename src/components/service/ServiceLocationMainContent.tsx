
import React from "react";
import { LocationContent } from "@/utils/locationContent";
import { MedSpa } from "@/lib/types";
import BotoxManhattanContent from "./BotoxManhattanContent";
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
  
  // Check if this is the Botox Manhattan page
  const isBotoxManhattan = serviceSlug === "botox" && locationName === "Manhattan";

  if (isBotoxManhattan) {
    return (
      <BotoxManhattanContent
        serviceName={serviceName}
        serviceSlug={serviceSlug}
        locationName={locationName}
        imageUrl={imageUrl}
        medSpasInLocation={medSpasInLocation}
        locationFaqs={locationFaqs}
      />
    );
  }

  return (
    <StandardLocationContent
      serviceName={serviceName}
      serviceSlug={serviceSlug}
      locationName={locationName}
      imageUrl={imageUrl}
      medSpasInLocation={medSpasInLocation}
      locationContent={locationContent}
      locationFaqs={locationFaqs}
    />
  );
};

export default ServiceLocationMainContent;
