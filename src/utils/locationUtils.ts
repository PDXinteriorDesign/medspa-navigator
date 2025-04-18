
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

// New function to determine if a clinic belongs to a broader location
export const isInBroaderLocation = (address: string, broaderLocation: string): boolean => {
  const normalizedAddress = address.toLowerCase();
  const normalizedLocation = broaderLocation.toLowerCase();
  
  // Debug for Manhattan addresses
  if (normalizedLocation === "manhattan") {
    console.log(`Checking if address "${normalizedAddress}" is in Manhattan`);
  }
  
  // Normalize the hamptons slug
  const normalizedBroaderLocation = 
    normalizedLocation === "hamptons" ? "the-hamptons" : normalizedLocation;
  
  // Check if address contains the broader location name (with clearer logic for Manhattan)
  if (normalizedAddress.includes(normalizedLocation)) {
    if (normalizedLocation === "manhattan") {
      console.log(`Direct match: Address contains "manhattan"`);
    }
    return true;
  }
  
  // Special cases for neighborhoods within broader locations
  if (normalizedLocation === "manhattan") {
    // Check for New York, NY addresses (which are typically in Manhattan)
    if (normalizedAddress.includes("new york, ny")) {
      console.log(`New York, NY address matched as Manhattan: ${normalizedAddress}`);
      return true;
    }
    
    // Manhattan zip codes
    const manhattanZips = ["10001", "10002", "10003", "10004", "10005", "10006", "10007", 
                           "10009", "10010", "10011", "10012", "10013", "10014", "10016", 
                           "10017", "10018", "10019", "10020", "10021", "10022", "10023", 
                           "10024", "10025", "10026", "10027", "10028", "10029", "10030", 
                           "10031", "10032", "10033", "10034", "10035", "10036", "10037", 
                           "10038", "10039", "10040", "10044", "10065", "10075", "10128", "10280"];
    
    // Check if address contains a Manhattan zip code
    if (manhattanZips.some(zip => normalizedAddress.includes(zip))) {
      console.log(`Manhattan zip code matched: ${normalizedAddress}`);
      return true;
    }
    
    // Manhattan neighborhoods
    const result = ["upper east side", "soho", "tribeca", "midtown", "chelsea", "upper west side", 
                   "lower east side", "east village", "west village", "flatiron", "financial district", 
                   "gramercy", "hell's kitchen", "murray hill"]
      .some(neighborhood => normalizedAddress.includes(neighborhood));
      
    if (result) {
      console.log(`Manhattan neighborhood matched: ${normalizedAddress} contains a Manhattan neighborhood`);
    }
    return result;
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
      (address.toLowerCase().includes("new york") && address.toLowerCase().includes("ny"))) {
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
