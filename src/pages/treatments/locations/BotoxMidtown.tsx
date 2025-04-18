
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import BotoxMidtownContent from "@/components/service/BotoxMidtownContent";

const BotoxMidtown = () => {
  return (
    <TreatmentLocationTemplate
      serviceSlug="botox"
      location="midtown"
      customContent={<BotoxMidtownContent />}
      seoKeywords={[
        "botox midtown manhattan",
        "botox midtown nyc",
        "best botox midtown",
        "midtown manhattan botox injections",
        "botox treatments midtown",
        "lunch break botox midtown",
        "botox specialists midtown manhattan",
        "professional botox midtown nyc",
        "botox clinic midtown",
        "expert botox injectors midtown",
        "affordable botox midtown manhattan",
        "natural botox results midtown",
        "botox near grand central",
        "botox near penn station",
        "midtown east botox",
        "botox treatment 5th avenue"
      ]}
    />
  );
};

export default BotoxMidtown;
