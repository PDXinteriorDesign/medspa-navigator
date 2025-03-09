
import React from "react";
import LocationLandingTemplate from "@/components/location/LocationLandingTemplate";

const MidtownLanding = () => {
  return (
    <LocationLandingTemplate
      name="Midtown"
      imageUrl="https://images.unsplash.com/photo-1605304978115-40267b3a9ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      description="Midtown's medspas cater to the fast-paced professional crowd with efficient, high-impact treatments that deliver results with minimal downtime, making them popular with the business district's busy executives. These aesthetic centers specialize in lunchtime procedures and express rejuvenation services that allow clients to return to work immediately looking refreshed but natural."
      shortDescription="Luxury Rejuvenation for Manhattan's Discerning Professionals"
      popularServices={[
        "Express Facials",
        "Lunchtime Procedures",
        "Botox",
        "Laser Hair Removal",
        "Microdermabrasion",
        "Quick-Recovery Peels"
      ]}
      medspaCount={34}
    />
  );
};

export default MidtownLanding;
