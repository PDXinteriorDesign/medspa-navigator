
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
    `best ${serviceName} deals ${locationName}`
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
    `new ${serviceName} techniques NYC`
  ];
};
