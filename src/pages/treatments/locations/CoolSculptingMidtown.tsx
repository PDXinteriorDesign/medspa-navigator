
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { Location } from "@/lib/types";

const CoolSculptingMidtown = () => {
  return (
    <TreatmentLocationTemplate
      serviceSlug="coolsculpting"
      location="midtown" as Location
    />
  );
};

export default CoolSculptingMidtown;
