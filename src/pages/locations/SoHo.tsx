
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const SoHoLanding = () => {
  return (
    <LocationLandingTemplate
      name="SoHo"
      imageUrl="https://images.unsplash.com/photo-1595467959776-6eb7a123d2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="SoHo's trendsetting medspa scene offers cutting-edge treatments in design-forward spaces, attracting a younger, fashion-conscious clientele interested in preventative skincare and subtle enhancements. The neighborhood's aesthetic studios blend art and science, embracing innovation while maintaining the area's distinctive creative character."
      shortDescription="The Epicenter of Trendsetting Beauty Innovations"
      popularServices={[
        "Baby Botox",
        "Lip Fillers",
        "LED Light Therapy",
        "Microneedling",
        "Custom Facials",
        "Preventative Anti-Aging"
      ]}
      medspaCount={38}
    />
  );
};

export default SoHoLanding;
