
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const UpperWestSideLanding = () => {
  return (
    <LocationLandingTemplate
      name="Upper West Side"
      imageUrl="https://images.unsplash.com/photo-1622133043744-62402fbd2e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="The Upper West Side medspa scene embraces a holistic approach to beauty and wellness, with practices that often integrate natural skincare solutions alongside traditional aesthetic treatments. The neighborhood's clientele values wellness-focused, sustainable beauty approaches that enhance natural features rather than dramatic transformations."
      shortDescription="Where Holistic Beauty Meets Manhattan Sophistication"
      popularServices={[
        "Medical-Grade Facials",
        "Organic Peels",
        "Non-Invasive Body Contouring",
        "Holistic Skin Treatments",
        "Microcurrent Therapy",
        "Clean Beauty Facials"
      ]}
      medspaCount={31}
    />
  );
};

export default UpperWestSideLanding;
