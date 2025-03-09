
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const BrooklynLanding = () => {
  return (
    <LocationLandingTemplate
      name="Brooklyn"
      imageUrl="https://images.unsplash.com/photo-1567552261736-4b808a7997f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Brooklyn has emerged as a vibrant hub for innovative aesthetic treatments, blending medical expertise with a more approachable, personalized experience. From Williamsburg's chic, design-forward medspas to Park Slope's wellness-oriented aesthetic centers, Brooklyn offers a diverse range of options that prioritize natural results and holistic beauty philosophies."
      shortDescription="Where Innovative Aesthetics Meet Authentic Brooklyn Style"
      popularServices={[
        "Natural Injectables",
        "Holistic Facials",
        "Microblading",
        "Non-Invasive Lifts",
        "Chemical Peels",
        "Sustainable Beauty Treatments"
      ]}
      medspaCount={78}
      neighborhoods={[
        {
          name: "Williamsburg",
          slug: "williamsburg",
          description: "Trendy, design-forward medspas for the style-conscious"
        },
        {
          name: "Park Slope",
          slug: "park-slope",
          description: "Wellness-oriented aesthetic centers with holistic approaches"
        }
      ]}
    />
  );
};

export default BrooklynLanding;
