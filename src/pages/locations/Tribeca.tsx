
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const TribecaLanding = () => {
  return (
    <LocationLandingTemplate
      name="Tribeca"
      imageUrl="https://images.unsplash.com/photo-1565876427315-7086480146d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Tribeca has established itself as a premier destination for ultra-luxury medspa services, with exclusive clinics offering bespoke treatments to a discerning clientele. The neighborhood's aesthetic centers are known for their privacy, personalized approach, and access to cutting-edge technologies often before they're available elsewhere in the city."
      shortDescription="Discreet Luxury and Unparalleled Aesthetic Excellence"
      popularServices={[
        "Custom Treatment Programs",
        "Preventative Aging Protocols",
        "Specialized Injectables",
        "Bespoke Facials",
        "Body Sculpting",
        "Red Carpet Prep"
      ]}
      medspaCount={28}
    />
  );
};

export default TribecaLanding;
