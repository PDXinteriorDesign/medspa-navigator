
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { Location } from "@/lib/types";

const CoolSculptingHamptons = () => {
  return (
    <TreatmentLocationTemplate
      serviceSlug="coolsculpting"
      location="the-hamptons" as Location
    />
  );
};

export default CoolSculptingHamptons;
