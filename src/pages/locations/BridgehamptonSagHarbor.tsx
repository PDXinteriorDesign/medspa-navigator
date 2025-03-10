
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const BridgehamptonSagHarborLanding = () => {
  return (
    <LocationLandingTemplate
      name="Bridgehampton / Sag Harbor"
      imageUrl="https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="The Bridgehampton and Sag Harbor area offers boutique medspa experiences that blend luxury with a more relaxed approach, attracting clients who appreciate personalized service in intimate settings. These charming locations feature bespoke aesthetic centers that prioritize custom treatments tailored to each client's unique needs and lifestyle."
      shortDescription="Intimate Luxury in a Relaxed Coastal Setting"
      popularServices={[
        "Customized Facial Treatments",
        "Collagen-Boosting Procedures",
        "Subtle Enhancement Services",
        "Wellness-Focused Therapies",
        "Organic Skincare Experiences",
        "Artisan Beauty Treatments"
      ]}
      medspaCount={10}
    />
  );
};

export default BridgehamptonSagHarborLanding;
