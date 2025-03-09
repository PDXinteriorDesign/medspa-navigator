
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const ParkSlopeLanding = () => {
  return (
    <LocationLandingTemplate
      name="Park Slope"
      imageUrl="https://images.unsplash.com/photo-1573566791129-e05aa3074c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Park Slope's medspas embody the neighborhood's wellness-focused ethos, offering holistic aesthetic treatments that emphasize natural beauty and long-term skin health. These serene spaces attract a diverse clientele of health-conscious professionals and families seeking effective yet gentle approaches to beauty enhancement and maintenance."
      shortDescription="Holistic Beauty in Brooklyn's Most Family-Friendly Neighborhood"
      popularServices={[
        "Medical Grade Facials",
        "Gentle Laser Treatments",
        "Organic Peels",
        "Natural Fillers",
        "Post-Pregnancy Rejuvenation",
        "Wellness-Focused Aesthetics"
      ]}
      medspaCount={19}
    />
  );
};

export default ParkSlopeLanding;
