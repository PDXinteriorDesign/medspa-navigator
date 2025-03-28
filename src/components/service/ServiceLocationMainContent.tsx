
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
  } else if (serviceSlug === "hydrofacials") {
    finalImageUrl = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  } else if (serviceSlug === "radio-ultrasound-therapy") {
    finalImageUrl = "https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  } else if (serviceSlug === "laser-hair-removal") {
    finalImageUrl = "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
