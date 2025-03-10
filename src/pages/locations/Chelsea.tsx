
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const ChelseaLanding = () => {
  return (
    <LocationLandingTemplate
      name="Chelsea"
      imageUrl="https://images.unsplash.com/photo-1589395937783-0ea0aceb7ad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Chelsea's medspas blend creativity with science, offering innovative treatments that appeal to the neighborhood's artistic community while emphasizing overall wellness and natural-looking results. The area is known for its cutting-edge therapies that combine aesthetic medicine with holistic wellness philosophies, creating a unique approach to beauty enhancement."
      shortDescription="Creative Innovation in Aesthetic Wellness"
      popularServices={[
        "Customized Facials",
        "Wellness Therapies",
        "Natural Collagen Stimulation",
        "CBD Treatments",
        "Advanced LED Therapy",
        "Artistic Cosmetic Treatments"
      ]}
      medspaCount={26}
    />
  );
};

export default ChelseaLanding;
