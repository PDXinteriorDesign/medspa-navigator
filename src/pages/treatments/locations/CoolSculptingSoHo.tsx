
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { Location } from "@/lib/types";

const CoolSculptingSoHo = () => {
  return (
    <TreatmentLocationTemplate
      serviceSlug="coolsculpting"
      location="soho" as Location
    />
  );
};

export default CoolSculptingSoHo;
