
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const HamptonsLanding = () => {
  return (
    <LocationLandingTemplate
      name="The Hamptons"
      imageUrl="https://images.unsplash.com/photo-1543855379-ef501d27b451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="The Hamptons represents the pinnacle of seasonal medspa luxury, with many elite Manhattan practices opening summer locations to serve their clientele who migrate east during the warmer months. From East Hampton's ultra-exclusive clinics to Montauk's more relaxed, wellness-oriented spaces, the area offers diverse aesthetic experiences with an emphasis on discretion and exceptional service."
      shortDescription="Seasonal Splendor in New York's Most Prestigious Retreat"
      popularServices={[
        "Pre-Event Facial Sculpting",
        "Advanced Anti-Aging Treatments",
        "Body Contouring",
        "IV Vitamin Therapy",
        "Sun Damage Repair",
        "Custom Beauty Regimens"
      ]}
      medspaCount={34}
      neighborhoods={[
        {
          name: "East Hampton",
          slug: "east-hampton",
          description: "Ultra-exclusive appointment-only boutique clinics"
        },
        {
          name: "Southampton",
          slug: "southampton",
          description: "Sophisticated treatments in elegant surroundings"
        },
        {
          name: "Montauk",
          slug: "montauk",
          description: "Relaxed, beachy aesthetic experiences"
        }
      ]}
    />
  );
};

export default HamptonsLanding;
