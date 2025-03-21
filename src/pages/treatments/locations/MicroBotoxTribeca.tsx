
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";

const MicroBotoxTribeca = () => {
  console.log("Rendering MicroBotoxTribeca component");
  
  return (
    <TreatmentLocationTemplate
      serviceSlug="micro-botox"
      location="tribeca"
    />
  );
};

export default MicroBotoxTribeca;
