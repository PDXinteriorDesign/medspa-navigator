
export const getLocationSlug = (address: string, location: string): string => {
  if (address.toLowerCase().includes("manhattan")) return "manhattan";
  if (address.toLowerCase().includes("brooklyn")) return "brooklyn";
  if (address.toLowerCase().includes("soho")) return "soho";
  if (address.toLowerCase().includes("upper east side")) return "upper-east-side";
  if (address.toLowerCase().includes("tribeca")) return "tribeca"; 
  if (address.toLowerCase().includes("midtown")) return "midtown";
  if (address.toLowerCase().includes("williamsburg")) return "williamsburg";
  if (address.toLowerCase().includes("hamptons")) return "the-hamptons";
  if (address.toLowerCase().includes("flatiron")) return "flatiron";
  
  // Default fallback
  return location.toLowerCase().replace(/\s+/g, "-");
};

// New function to determine if a clinic belongs to a broader location
export const isInBroaderLocation = (address: string, broaderLocation: string): boolean => {
  const normalizedAddress = address.toLowerCase();
  const normalizedLocation = broaderLocation.toLowerCase();
  
  // Normalize the hamptons slug
  const normalizedBroaderLocation = 
    normalizedLocation === "hamptons" ? "the-hamptons" : normalizedLocation;
  
  // Check if address contains the broader location name
  if (normalizedAddress.includes(normalizedLocation)) {
    return true;
  }
  
  // Special cases for neighborhoods within broader locations
  if (normalizedLocation === "manhattan") {
    return ["upper east side", "soho", "tribeca", "midtown", "chelsea", "upper west side", "flatiron"]
      .some(neighborhood => normalizedAddress.includes(neighborhood));
  }
  
  if (normalizedLocation === "brooklyn") {
    return ["williamsburg"]
      .some(neighborhood => normalizedAddress.includes(neighborhood));
  }
  
  if (normalizedBroaderLocation === "the-hamptons" || normalizedLocation === "hamptons") {
    return ["southampton", "east hampton", "bridgehampton", "sag harbor", "montauk"]
      .some(area => normalizedAddress.includes(area));
  }
  
  return false;
};

// Helper to get both specific and broader locations for a clinic
export const getClinicLocations = (address: string, primaryLocation: string): string[] => {
  const locations: string[] = [];
  const specificLocation = getLocationSlug(address, primaryLocation);
  
  // First add the specific location
  if (!locations.includes(specificLocation)) {
    locations.push(specificLocation);
  }
  
  // Add Manhattan for Upper East Side and other Manhattan neighborhoods
  if (address.toLowerCase().includes("upper east side") || 
      address.toLowerCase().includes("soho") || 
      address.toLowerCase().includes("tribeca") || 
      address.toLowerCase().includes("midtown") ||
      address.toLowerCase().includes("chelsea") ||
      address.toLowerCase().includes("upper west side") ||
      address.toLowerCase().includes("flatiron")) {
    if (!locations.includes("manhattan")) {
      locations.push("manhattan");
    }
  }
  
  // Add Brooklyn for Williamsburg
  if (address.toLowerCase().includes("williamsburg")) {
    if (!locations.includes("brooklyn")) {
      locations.push("brooklyn");
    }
  }
  
  // Add Hamptons for related locations
  if (address.toLowerCase().includes("southampton") || 
      address.toLowerCase().includes("east hampton") || 
      address.toLowerCase().includes("bridgehampton") || 
      address.toLowerCase().includes("sag harbor") ||
      address.toLowerCase().includes("montauk")) {
    if (!locations.includes("the-hamptons")) {
      locations.push("the-hamptons");
    }
  }

  // If the array is empty, use the primary location as fallback
  if (locations.length === 0) {
    const fallbackSlug = primaryLocation.toLowerCase().replace(/\s+/g, "-");
    locations.push(fallbackSlug);
  }
  
  return locations;
};
