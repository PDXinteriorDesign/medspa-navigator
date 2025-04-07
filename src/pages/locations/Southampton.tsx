
import React from "react";
import { Helmet } from "react-helmet";
import { LocationLandingTemplate } from "@/components/location/LocationLandingTemplate";

const SouthamptonLanding = () => {
  return (
    <>
      <Helmet>
        <title>Southampton MedSpas | Exclusive Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Experience premier MedSpas in Southampton. Discover luxury aesthetic services in this prestigious Hampton destination known for sophisticated beauty treatments." 
        />
      </Helmet>
      
      <LocationLandingTemplate 
        locationName="Southampton"
        parentLocation="The Hamptons"
        bannerImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
        description="Southampton represents the epitome of Hamptons luxury, with medspas that blend old-world elegance and cutting-edge aesthetic technologies. These prestigious establishments cater to the area's affluent summer residents and visitors, offering discreet, high-end treatments in sophisticated settings."
        highlights={[
          "Sophisticated beauty services for the Hampton's elite",
          "Discreet, premium treatments in elegant surroundings",
          "Personalized aesthetic experiences for discerning clientele"
        ]}
      />
    </>
  );
};

export default SouthamptonLanding;
