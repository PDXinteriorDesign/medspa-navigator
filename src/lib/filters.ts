
import { MedSpa, Location } from "./types";
import { medSpas } from "./medspas";
import { isInBroaderLocation } from "@/utils/locationUtils";

// Helper function to get services by location
export const getServicesByLocation = (serviceSlug: string, location: Location): MedSpa[] => {
  console.log(`Filtering medspas for service: ${serviceSlug} in location: ${location}`);
  
  // For Manhattan specifically, include neighborhoods explicitly
  if (location === "manhattan") {
    return medSpas.filter(medSpa => {
      const isInManhattanArea = 
        medSpa.location === location || 
        ["upper-east-side", "upper-west-side", "midtown", "soho", "tribeca", "chelsea", "flatiron"].includes(medSpa.location) ||
        isInBroaderLocation(medSpa.address, location);
      
      const hasService = medSpa.services.includes(serviceSlug);
      
      console.log(`${medSpa.name}: location=${medSpa.location}, isInManhattanArea=${isInManhattanArea}, hasService=${hasService}`);
      return isInManhattanArea && hasService;
    });
  }
  
  // For other locations, use the existing logic
  return medSpas.filter(
    medSpa => (medSpa.location === location || isInBroaderLocation(medSpa.address, location)) && 
    medSpa.services.includes(serviceSlug)
  );
};

// Helper function to get MedSpas by service
export const getMedSpasByService = (serviceSlug: string): MedSpa[] => {
  return medSpas.filter(medSpa => medSpa.services.includes(serviceSlug));
};

// Count MedSpas by service and location
export const countMedSpasByServiceAndLocation = (serviceId: string, locationId: Location): number => {
  return getServicesByLocation(serviceId, locationId).length;
};

// Filter MedSpas by service and location
export const filterMedSpas = (serviceId: string | null, locationId: Location | null): MedSpa[] => {
  return medSpas.filter(medSpa => {
    const matchesService = !serviceId || medSpa.services.includes(serviceId);
    let matchesLocation = !locationId;
    
    if (locationId) {
      // Special handling for Manhattan to include all its neighborhoods
      if (locationId === "manhattan") {
        matchesLocation = 
          medSpa.location === locationId || 
          ["upper-east-side", "upper-west-side", "midtown", "soho", "tribeca", "chelsea", "flatiron"].includes(medSpa.location) ||
          isInBroaderLocation(medSpa.address, locationId);
      } else {
        matchesLocation = medSpa.location === locationId || isInBroaderLocation(medSpa.address, locationId);
      }
    }
    
    return matchesService && matchesLocation;
  });
};
