
import React from "react";
import { Helmet } from "react-helmet";
import { LocationLandingTemplate } from "@/components/location/LocationLandingTemplate";

const EastHamptonLanding = () => {
  return (
    <>
      <Helmet>
        <title>East Hampton MedSpas | Luxury Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover exclusive MedSpas in East Hampton. Experience premium aesthetic treatments in this prestigious coastal retreat known for luxury beauty services." 
        />
      </Helmet>
      
      <LocationLandingTemplate 
        locationName="East Hampton"
        parentLocation="The Hamptons"
        bannerImage="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80"
        description="East Hampton's medspas embody the area's refined luxury, offering exclusive aesthetic treatments in serene, opulent environments. These premium establishments provide bespoke beauty services to the area's wealthy residents and seasonal visitors, combining cutting-edge technologies with unparalleled personal attention."
        highlights={[
          "The ultimate luxury retreat for aesthetic connoisseurs",
          "Bespoke treatments tailored to discerning clientele",
          "State-of-the-art technologies in refined surroundings"
        ]}
      />
    </>
  );
};

export default EastHamptonLanding;
