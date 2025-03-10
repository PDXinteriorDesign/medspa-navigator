
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const SouthamptonLanding = () => {
  return (
    <LocationLandingTemplate
      name="Southampton"
      imageUrl="https://images.unsplash.com/photo-1622902312434-a156266ce4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Southampton's medspa scene caters to affluent professionals and second-home owners seeking sophisticated treatments in elegant surroundings, with many practices focusing on subtle enhancement and maintenance. The area's aesthetic clinics strike the perfect balance between luxury and discretion, offering refined treatments that provide natural-looking results."
      shortDescription="Refined Elegance in Summer Beauty Enhancement"
      popularServices={[
        "Preventative Botox",
        "Natural-Looking Fillers",
        "Light-Based Therapies",
        "Luxury Skincare Regimens",
        "Hydration Treatments",
        "Seasonal Beauty Preparations"
      ]}
      medspaCount={12}
    />
  );
};

export default SouthamptonLanding;
