
export const generateLocationKeywords = (serviceName: string, locationName: string): string[] => {
  return [
    `${serviceName} ${locationName}`,
    `best ${serviceName} in ${locationName}`,
    `${serviceName} clinic ${locationName}`,
    `top rated ${serviceName} ${locationName}`,
    `${locationName} ${serviceName} specialist`,
    `luxury ${serviceName} ${locationName}`,
    `affordable ${serviceName} ${locationName}`,
    `${serviceName} treatment near ${locationName}`,
    `${locationName} medical spa ${serviceName}`,
    `${serviceName} before after ${locationName}`,
    `${serviceName} prices ${locationName}`,
    `${locationName} cosmetic ${serviceName.toLowerCase()}`,
    `${serviceName} experts ${locationName}`,
    `where to get ${serviceName} in ${locationName}`,
    `best ${serviceName} deals ${locationName}`,
    `${serviceName} consultation ${locationName}`,
    `${locationName} ${serviceName} reviews`,
    `${serviceName} results ${locationName}`,
    `experienced ${serviceName} providers ${locationName}`,
    `${serviceName} cost ${locationName}`,
    `${locationName} premium ${serviceName}`,
    `${serviceName} doctor ${locationName}`,
    `${locationName} ${serviceName} near me`
  ];
};

export const generateNYCServiceKeywords = (serviceName: string): string[] => {
  return [
    `${serviceName} NYC`,
    `best ${serviceName} providers NYC`,
    `${serviceName} Manhattan`,
    `${serviceName} Brooklyn`,
    `affordable ${serviceName} New York City`,
    `luxury ${serviceName} NYC`,
    `${serviceName} Upper East Side`,
    `${serviceName} SoHo`,
    `${serviceName} Tribeca`,
    `${serviceName} Midtown`,
    `${serviceName} Williamsburg`,
    `${serviceName} treatments Manhattan`,
    `best ${serviceName} clinics NYC`,
    `${serviceName} medical spa Manhattan`,
    `${serviceName} specialist New York`,
    `${serviceName} cost NYC`,
    `${serviceName} near me Manhattan`,
    `professional ${serviceName} New York`,
    `${serviceName} reviews NYC`,
    `${serviceName} before and after NYC`,
    `best ${serviceName} deals New York`,
    `top-rated ${serviceName} New York City`,
    `premium ${serviceName} Manhattan`,
    `${serviceName} experts NYC`,
    `new ${serviceName} techniques NYC`,
    `${serviceName} certified providers NYC`,
    `${serviceName} procedures New York`,
    `best place for ${serviceName} NYC`,
    `${serviceName} results NYC`,
    `${serviceName} consultation Manhattan`,
    `${serviceName} aftercare NYC`,
    `${serviceName} prices New York`,
    `trusted ${serviceName} clinics NYC`,
    `${serviceName} doctors Manhattan`,
    `${serviceName} Upper West Side`,
    `top ${serviceName} specialists NY`
  ];
};

// Generate treatment-specific keywords (like Botox, fillers, etc)
export const generateTreatmentKeywords = (treatmentName: string): string[] => {
  const baseKeywords = generateNYCServiceKeywords(treatmentName);
  
  // Add treatment-specific keywords
  const treatmentSpecific = [
    `${treatmentName} treatment NYC`,
    `${treatmentName} procedure New York`,
    `how much is ${treatmentName} in NYC`,
    `${treatmentName} provider Manhattan`,
    `${treatmentName} certified doctor NYC`,
    `${treatmentName} safety NYC`,
    `${treatmentName} risks and benefits NYC`,
    `${treatmentName} for beginners NYC`,
    `first time ${treatmentName} NYC`,
    `${treatmentName} maintenance NYC`,
    `${treatmentName} follow up NYC`,
    `${treatmentName} recommended clinics NYC`,
    `medical ${treatmentName} NYC`,
    `${treatmentName} expert consultation NYC`,
    `${treatmentName} frequently asked questions NYC`
  ];
  
  return [...baseKeywords, ...treatmentSpecific];
};
