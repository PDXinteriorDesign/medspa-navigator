
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

// New function to determine if a clinic belongs to a broader location
export const isInBroaderLocation = (address: string, broaderLocation: string): boolean => {
  const normalizedAddress = address.toLowerCase();
  const normalizedLocation = broaderLocation.toLowerCase();
  
  // Check if address contains the broader location name
  if (normalizedAddress.includes(normalizedLocation)) {
    return true;
  }
  
  // Special cases for neighborhoods within broader locations
  if (normalizedLocation === "manhattan") {
    return ["upper east side", "soho", "tribeca", "midtown", "chelsea", "upper west side"]
      .some(neighborhood => normalizedAddress.includes(neighborhood));
  }
  
  if (normalizedLocation === "brooklyn") {
    return ["williamsburg"]
      .some(neighborhood => normalizedAddress.includes(neighborhood));
  }
  
  if (normalizedLocation === "the-hamptons" || normalizedLocation === "hamptons") {
    return ["southampton", "east hampton", "bridgehampton", "sag harbor", "montauk"]
      .some(area => normalizedAddress.includes(area));
  }
  
  return false;
};

// Helper to get both specific and broader locations for a clinic
export const getClinicLocations = (address: string, primaryLocation: string): string[] => {
  const locations: string[] = [getLocationSlug(address, primaryLocation)];
  
  // Add broader location if the clinic is in a neighborhood
  if (address.includes("Upper East Side") || 
      address.includes("SoHo") || 
      address.includes("Tribeca") || 
      address.includes("Midtown") ||
      address.includes("Chelsea") ||
      address.includes("Upper West Side")) {
    if (!locations.includes("manhattan")) {
      locations.push("manhattan");
    }
  }
  
  if (address.includes("Williamsburg")) {
    if (!locations.includes("brooklyn")) {
      locations.push("brooklyn");
    }
  }
  
  if (address.includes("Southampton") || 
      address.includes("East Hampton") || 
      address.includes("Bridgehampton") || 
      address.includes("Sag Harbor") ||
      address.includes("Montauk")) {
    if (!locations.includes("the-hamptons")) {
      locations.push("the-hamptons");
    }
  }
  
  return locations;
};
