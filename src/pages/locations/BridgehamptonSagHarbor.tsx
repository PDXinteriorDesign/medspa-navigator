
import React from "react";
import { Helmet } from "react-helmet";
import { LocationLandingTemplate } from "@/components/location/LocationLandingTemplate";

const BridgehamptonSagHarborLanding = () => {
  return (
    <>
      <Helmet>
        <title>Bridgehampton & Sag Harbor MedSpas | Premium Aesthetics | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Explore exclusive MedSpas in Bridgehampton and Sag Harbor. Experience intimate luxury treatments in these charming Hamptons villages known for personalized beauty services." 
        />
      </Helmet>
      
      <LocationLandingTemplate 
        locationName="Bridgehampton / Sag Harbor"
        parentLocation="The Hamptons"
        bannerImage="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        description="Bridgehampton and Sag Harbor offer intimate luxury in the heart of the Hamptons, with boutique medspas that deliver personalized aesthetic services. These charming villages are home to exclusive beauty establishments that combine the area's relaxed coastal atmosphere with premium, attentive treatments for discerning clientele."
        highlights={[
          "Intimate luxury treatments in charming village settings",
          "Bespoke aesthetic services with personal attention",
          "Premium experiences that capture the Hamptons' refined lifestyle"
        ]}
      />
    </>
  );
};

export default BridgehamptonSagHarborLanding;
