
import React from "react";
import { Helmet } from "react-helmet";
import { LocationLandingTemplate } from "@/components/location/LocationLandingTemplate";

const ChelseaLanding = () => {
  return (
    <>
      <Helmet>
        <title>Chelsea MedSpas | Luxury Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover exclusive MedSpas in Chelsea, NYC. Experience premium aesthetic treatments in this artistically vibrant neighborhood known for cutting-edge beauty innovations." 
        />
      </Helmet>
      
      <LocationLandingTemplate 
        locationName="Chelsea"
        parentLocation="Manhattan"
        bannerImage="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        description="Chelsea combines artistic heritage with luxury aesthetics, offering sophisticated treatments in a trendy yet refined setting. Known for its galleries and fashion-forward crowd, Chelsea's medspas cater to creative professionals seeking cutting-edge beauty innovations."
        highlights={[
          "Trendsetting aesthetic treatments for the creative elite",
          "Innovative beauty technologies in an artistic environment",
          "Personalized services for Chelsea's discerning clientele"
        ]}
      />
    </>
  );
};

export default ChelseaLanding;
