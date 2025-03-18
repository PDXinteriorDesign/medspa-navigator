
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { Location } from "@/lib/types";

const CoolSculptingWilliamsburg = () => {
  return (
    <TreatmentLocationTemplate
      serviceSlug="coolsculpting"
      location="williamsburg" as Location
    />
  );
};

export default CoolSculptingWilliamsburg;
