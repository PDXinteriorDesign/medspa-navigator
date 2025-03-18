
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
  
  // Special case for specific treatments - use consistent images for all location pages
  let finalImageUrl = imageUrl;
  
  if (serviceSlug === "microdermabrasion") {
    finalImageUrl = "https://images.pexels.com/photos/5069611/pexels-photo-5069611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  } else if (serviceSlug === "chemical-peels") {
    finalImageUrl = "https://images.pexels.com/photos/5069494/pexels-photo-5069494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  } else if (serviceSlug === "microneedling") {
    finalImageUrl = "https://images.pexels.com/photos/29648626/pexels-photo-29648626/free-photo-of-microneedling-facial-treatment-procedure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  }
  
  // For treatment/location combination pages, use our new template
  // When we're in a treatment/location route like /botox/manhattan
  return (
    <TreatmentLocationContent
      serviceName={serviceName}
      serviceSlug={serviceSlug}
      locationName={locationName}
      imageUrl={finalImageUrl}
      medSpasInLocation={medSpasInLocation}
      locationFaqs={locationFaqs}
    />
  );
};

export default ServiceLocationMainContent;
