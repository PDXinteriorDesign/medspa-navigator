
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
    `${serviceName} experts ${locationName} NYC`,
    `where to get ${serviceName} in ${locationName}`,
    `best ${serviceName} deals ${locationName}`
  ];
};
