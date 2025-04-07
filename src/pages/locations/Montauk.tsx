
import React from "react";
import { Helmet } from "react-helmet";
import { LocationLandingTemplate } from "@/components/location/LocationLandingTemplate";

const MontaukLanding = () => {
  return (
    <>
      <Helmet>
        <title>Montauk MedSpas | Luxury Beachside Aesthetics | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Explore premier MedSpas in Montauk. Experience exclusive aesthetic treatments in this luxurious coastal retreat at the easternmost tip of Long Island." 
        />
      </Helmet>
      
      <LocationLandingTemplate 
        locationName="Montauk"
        parentLocation="The Hamptons"
        bannerImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        description="At the easternmost tip of Long Island, Montauk offers a luxurious coastal retreat experience with exclusive aesthetic services. The area's premium medspas provide rejuvenating treatments with breathtaking ocean views, catering to affluent visitors and residents seeking discreet, high-end beauty enhancements."
        highlights={[
          "Beachside luxury aesthetics in a serene environment",
          "Rejuvenating treatments with ocean views",
          "Exclusive services for Montauk's discerning summer crowd"
        ]}
      />
    </>
  );
};

export default MontaukLanding;
