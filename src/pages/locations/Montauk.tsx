
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const MontaukLanding = () => {
  return (
    <LocationLandingTemplate
      name="Montauk"
      imageUrl="https://images.unsplash.com/photo-1609624532689-14118cef8156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Montauk's medspas embrace the area's more relaxed, beachy vibe, offering wellness-oriented aesthetic treatments that appeal to the younger, surf-centric crowd that flocks to this easternmost point of Long Island. These establishments often focus on sun damage repair, hydration, and natural enhancement, perfectly aligning with the area's outdoor lifestyle."
      shortDescription="Beachside Beauty and Recovery for the Surf Set"
      popularServices={[
        "Sun Damage Repair",
        "Hydrating Treatments",
        "Après-Beach Recovery",
        "Natural Enhancement Procedures",
        "Surf Recovery Treatments",
        "Ocean-Inspired Facials"
      ]}
      medspaCount={8}
    />
  );
};

export default MontaukLanding;
