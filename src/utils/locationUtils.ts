
export const getLocationSlug = (address: string, location: string): string => {
  if (address.includes("Manhattan")) return "manhattan";
  if (address.includes("Brooklyn")) return "brooklyn";
  if (address.includes("SoHo")) return "soho";
  if (address.includes("Upper East Side")) return "upper-east-side";
  if (address.includes("Tribeca")) return "tribeca"; 
  if (address.includes("Midtown")) return "midtown";
  if (address.includes("Williamsburg")) return "williamsburg";
  if (address.includes("Hamptons")) return "the-hamptons";
  
  // Default fallback
  return location.toLowerCase().replace(/\s+/g, "-");
};
