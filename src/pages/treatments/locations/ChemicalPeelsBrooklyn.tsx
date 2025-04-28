
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import ChemicalPeelsBrooklynContent from "@/components/service/ChemicalPeelsBrooklynContent";

const ChemicalPeelsBrooklyn = () => {
  // SEO keywords specific to Chemical Peels in Brooklyn
  const chemicalPeelsBrooklynKeywords = [
    "best chemical peels Brooklyn",
    "Brooklyn chemical peel treatment",
    "chemical peels Williamsburg Brooklyn",
    "chemical peels Park Slope",
    "chemical peels for acne scars Brooklyn",
    "superficial chemical peels Brooklyn",
    "TCA chemical peel Brooklyn",
    "glycolic acid peel Brooklyn",
    "salicylic acid peel Brooklyn",
    "medical grade chemical peels Brooklyn",
    "chemical peel cost Brooklyn",
    "chemical peel near me Brooklyn",
    "top chemical peel providers Brooklyn",
    "chemical peels for dark spots Brooklyn",
    "chemical peels for anti-aging Brooklyn"
  ];

  return (
    <TreatmentLocationTemplate
      serviceSlug="chemical-peels"
      location="brooklyn"
      customContent={<ChemicalPeelsBrooklynContent />}
      seoKeywords={chemicalPeelsBrooklynKeywords}
    />
  );
};

export default ChemicalPeelsBrooklyn;
