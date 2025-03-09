
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const ManhattanLanding = () => {
  return (
    <LocationLandingTemplate
      name="Manhattan"
      imageUrl="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Manhattan is home to some of the world's most prestigious medical spas and aesthetic centers, offering cutting-edge treatments in sleek, luxurious settings. From the Upper East Side's high-end clientele seeking premium anti-aging treatments to SoHo's trend-conscious crowd embracing the latest innovations in skincare technology, Manhattan's medspa landscape is as diverse as its neighborhoods."
      shortDescription="The Epicenter of Luxury Aesthetics in New York City"
      popularServices={[
        "Botox",
        "Dermal Fillers",
        "Laser Resurfacing",
        "Microneedling",
        "Facial Treatments",
        "Body Contouring"
      ]}
      medspaCount={142}
      neighborhoods={[
        {
          name: "Upper East Side",
          slug: "upper-east-side",
          description: "Renowned for ultra-luxury medspas catering to New York's elite"
        },
        {
          name: "SoHo",
          slug: "soho",
          description: "Trendsetting skincare innovations in design-forward spaces"
        },
        {
          name: "Midtown",
          slug: "midtown",
          description: "Efficient, high-impact treatments for busy professionals"
        },
        {
          name: "Tribeca",
          slug: "tribeca",
          description: "Exclusive, discreet luxury experiences for discerning clientele"
        }
      ]}
    />
  );
};

export default ManhattanLanding;
