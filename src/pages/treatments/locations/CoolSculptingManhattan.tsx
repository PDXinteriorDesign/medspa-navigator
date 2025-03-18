
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { Location } from "@/lib/types";

const CoolSculptingManhattan = () => {
  return (
    <TreatmentLocationTemplate
      serviceSlug="coolsculpting"
      location="manhattan" as Location
    />
  );
};

export default CoolSculptingManhattan;
