
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const WilliamsburgLanding = () => {
  return (
    <LocationLandingTemplate
      name="Williamsburg"
      imageUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Williamsburg has redefined the medspa experience with its creative approach to aesthetic treatments, housed in stylish, industrial-chic spaces that reflect the neighborhood's artistic soul. These boutique medspas often combine clinical excellence with a distinctly Brooklyn ethos, attracting a younger clientele who value subtle enhancements and sustainable beauty practices."
      shortDescription="Brooklyn's Creative Hub for Progressive Aesthetic Treatments"
      popularServices={[
        "Natural-Look Fillers", 
        "PRP Treatments",
        "Bespoke Facials",
        "Eco-Friendly Peels",
        "Microneedling",
        "Preventative Injectables"
      ]}
      medspaCount={29}
    />
  );
};

export default WilliamsburgLanding;
