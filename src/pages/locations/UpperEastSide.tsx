
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const UpperEastSideLanding = () => {
  return (
    <LocationLandingTemplate
      name="Upper East Side"
      imageUrl="https://images.unsplash.com/photo-1595625516077-3228563ccec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="The Upper East Side is synonymous with luxury medical aesthetics, hosting numerous high-end medspas that cater to an affluent clientele seeking premium, results-driven treatments in discreet settings. This prestigious neighborhood is home to world-renowned dermatologists and plastic surgeons whose exclusive practices have cultivated a loyal following among New York's social elite."
      shortDescription="Where Timeless Elegance Meets Cutting-Edge Aesthetics"
      popularServices={[
        "Botox",
        "Dermal Fillers",
        "Laser Resurfacing",
        "Luxury Facials",
        "Thread Lifts",
        "Custom Treatment Programs"
      ]}
      medspaCount={45}
    />
  );
};

export default UpperEastSideLanding;
