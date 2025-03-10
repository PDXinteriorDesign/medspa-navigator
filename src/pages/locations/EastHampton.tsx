
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const EastHamptonLanding = () => {
  return (
    <LocationLandingTemplate
      name="East Hampton"
      imageUrl="https://images.unsplash.com/photo-1629846950595-21a546f8db2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="East Hampton hosts the most exclusive medspa destinations in the Hamptons, with appointment-only boutique clinics serving ultra-high-net-worth individuals and celebrities seeking privacy and personalized care. These discreet establishments offer bespoke treatment protocols and often feature private entrances and exclusive hours for their elite clientele."
      shortDescription="Ultra-Exclusive Aesthetic Experiences for the Summer Elite"
      popularServices={[
        "Advanced Anti-Aging Treatments",
        "Pre-Event Facial Sculpting",
        "Body Contouring",
        "Custom Beauty Regimens",
        "Celebrity-Inspired Treatments",
        "Private Label Skincare"
      ]}
      medspaCount={14}
    />
  );
};

export default EastHamptonLanding;
