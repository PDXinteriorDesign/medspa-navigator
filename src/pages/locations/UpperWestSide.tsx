
import React from "react";
import { Helmet } from "react-helmet";
import { LocationLandingTemplate } from "@/components/location/LocationLandingTemplate";

const UpperWestSideLanding = () => {
  return (
    <>
      <Helmet>
        <title>Upper West Side MedSpas | Premium Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover exclusive MedSpas in the Upper West Side. Experience luxury aesthetic treatments in Manhattan's cultured neighborhood known for sophisticated beauty services." 
        />
      </Helmet>
      
      <LocationLandingTemplate 
        locationName="Upper West Side"
        parentLocation="Manhattan"
        bannerImage="https://images.unsplash.com/photo-1567030538716-89ca9accbf09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        description="The Upper West Side combines cultural sophistication with holistic wellness approaches, offering aesthetic treatments in a refined, intellectual setting. This neighborhood's medspas cater to Manhattan's established professionals and families seeking personalized beauty services with a wellness-oriented approach."
        highlights={[
          "Holistic wellness combined with premium aesthetic treatments",
          "Refined, discreet services for Manhattan's established residents",
          "Personalized treatment plans in a sophisticated environment"
        ]}
      />
    </>
  );
};

export default UpperWestSideLanding;
