
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";
import { Helmet } from "react-helmet";
import { getMedSpasByLocation } from "@/lib/medspas";

const Flushing = () => {
  const medSpasInLocation = getMedSpasByLocation("flushing");
  
  return (
    <>
      <Helmet>
        <title>Best MedSpas in Flushing, Queens | Top-Rated Beauty Treatments</title>
        <meta 
          name="description" 
          content="Discover premier MedSpas in Flushing offering advanced aesthetic treatments. Compare services, read reviews, and book appointments with top providers." 
        />
      </Helmet>
      
      <LocationLandingTemplate
        name="Flushing"
        imageUrl="https://images.unsplash.com/photo-1622133043744-62402fbd2e70?ixlib=rb-4.0.3"
        description="Flushing has become a destination for innovative aesthetic treatments, combining modern medical expertise with traditional wellness approaches. The neighborhood's diverse medical spas offer everything from cutting-edge laser treatments to luxury facial services, catering to a sophisticated clientele seeking both results and relaxation."
        shortDescription="Queens' premier destination for advanced aesthetic treatments"
        popularServices={[
          "Laser Hair Removal",
          "Botox",
          "Dermal Fillers",
          "Facials",
          "Skin Rejuvenation"
        ]}
        medspaCount={medSpasInLocation.length}
      />
    </>
  );
};

export default Flushing;
