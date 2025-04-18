
export const getLocationSlug = (address: string, location: string): string => {
  if (address.toLowerCase().includes("manhattan")) return "manhattan";
  if (address.toLowerCase().includes("brooklyn")) return "brooklyn";
  if (address.toLowerCase().includes("soho")) return "soho";
  if (address.toLowerCase().includes("upper east side")) return "upper-east-side";
  if (address.toLowerCase().includes("tribeca")) return "tribeca"; 
  if (address.toLowerCase().includes("midtown")) return "midtown";
  if (address.toLowerCase().includes("williamsburg")) return "williamsburg";
  if (address.toLowerCase().includes("hamptons")) return "the-hamptons";
  
  // Default fallback
  return location.toLowerCase().replace(/\s+/g, "-");
};

// Enhanced function to determine if a clinic belongs to a broader location
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
  
  // Enhanced location check for Manhattan addresses
  if (normalizedBroaderLocation === "manhattan") {
    // Check for Manhattan and specific Manhattan areas in address
    if (normalizedAddress.includes("new york, ny") || 
        normalizedAddress.includes("new york, new york") || 
        normalizedAddress.includes("ny, ny") ||
        normalizedAddress.includes("manhattan")) {
      return true;
    }
    
    // Check for specific Manhattan neighborhoods
    return ["upper east side", "soho", "tribeca", "midtown", "chelsea", 
            "upper west side", "downtown", "flatiron", "gramercy", 
            "east village", "west village", "financial district",
            "greenwich village", "murray hill"].some(neighborhood => 
              normalizedAddress.includes(neighborhood)
            );
  }
  
  if (normalizedLocation === "brooklyn") {
    return ["williamsburg", "dumbo", "park slope", "brooklyn heights"]
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
  
  // Add Manhattan for Manhattan neighborhoods
  if (["upper-east-side", "upper-west-side", "midtown", "soho", "tribeca", 
       "chelsea", "flatiron", "gramercy", "east-village", "west-village"].includes(specificLocation) ||
      address.toLowerCase().includes("new york, ny") ||
      address.toLowerCase().includes("manhattan")) {
    if (!locations.includes("manhattan")) {
      locations.push("manhattan");
    }
  }
  
  // Add Brooklyn for Williamsburg and other Brooklyn neighborhoods
  if (specificLocation === "williamsburg" || 
      ["dumbo", "park-slope", "brooklyn-heights"].includes(specificLocation)) {
    if (!locations.includes("brooklyn")) {
      locations.push("brooklyn");
    }
  }
  
  // Add Hamptons for related locations
  if (["southampton", "east-hampton", "bridgehampton", "sag-harbor", "montauk"].includes(specificLocation)) {
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
