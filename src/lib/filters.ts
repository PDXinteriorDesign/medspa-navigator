
import { MedSpa, Location } from "./types";
import { medSpas } from "./medspas";
import { isInBroaderLocation } from "@/utils/locationUtils";

// Helper function to get services by location
export const getServicesByLocation = (serviceSlug: string, location: Location): MedSpa[] => {
  // Debug the filtering process with comprehensive logging
  console.log(`Filtering for service: ${serviceSlug} in location: ${location}`);
  
  // Normalize the service slug for comparison (handle both hyphenated and non-hyphenated versions)
  const normalizedSlug = serviceSlug.toLowerCase();
  
  const filteredSpas = medSpas.filter(medSpa => {
    const locationMatch = medSpa.location === location || isInBroaderLocation(medSpa.address, location);
    
    // Check for service match, handling both formats (with and without hyphens)
    const serviceMatch = medSpa.services.some(service => {
      // Normalize both for comparison
      const normalizedService = service.toLowerCase();
      return normalizedService === normalizedSlug || 
             normalizedService === normalizedSlug.replace(/-/g, '') ||
             normalizedService.replace(/-/g, '') === normalizedSlug ||
             normalizedService === `cool-sculpting` && normalizedSlug === `coolsculpting`;
    });
    
    // Log individual checks for debugging
    if (location === "manhattan" || serviceSlug === "coolsculpting") {
      console.log(`Checking: ${medSpa.name}, Location: ${medSpa.location}, Address: ${medSpa.address}`);
      console.log(`Services: ${medSpa.services.join(', ')}`);
      console.log(`Location match: ${locationMatch}, Service match: ${serviceMatch}`);
    }
    
    return locationMatch && serviceMatch;
  });
  
  console.log(`Found ${filteredSpas.length} medspas offering ${serviceSlug} in ${location}`);
  return filteredSpas;
};

// Helper function to get MedSpas by service
export const getMedSpasByService = (serviceSlug: string): MedSpa[] => {
  // Add comprehensive logging
  console.log(`Getting MedSpas for service: ${serviceSlug}`);
  
  // Normalize the service slug for comparison
  const normalizedSlug = serviceSlug.toLowerCase();
  
  const filteredSpas = medSpas.filter(medSpa => {
    // Check for service match, handling both formats
    const serviceMatch = medSpa.services.some(service => {
      // Normalize both for comparison
      const normalizedService = service.toLowerCase();
      return normalizedService === normalizedSlug || 
             normalizedService === normalizedSlug.replace(/-/g, '') ||
             normalizedService.replace(/-/g, '') === normalizedSlug ||
             normalizedService === `cool-sculpting` && normalizedSlug === `coolsculpting`;
    });
    
    return serviceMatch;
  });
  
  console.log(`Found ${filteredSpas.length} medspas offering ${serviceSlug} across all locations`);
  
  // Log the first few results for verification
  if (filteredSpas.length > 0) {
    console.log(`First match: ${filteredSpas[0].name} with services: ${filteredSpas[0].services.join(', ')}`);
  }
  
  return filteredSpas;
};

// Count MedSpas by service and location
export const countMedSpasByServiceAndLocation = (serviceId: string, locationId: Location): number => {
  return getServicesByLocation(serviceId, locationId).length;
};

// Filter MedSpas by service and location
export const filterMedSpas = (serviceId: string | null, locationId: Location | null): MedSpa[] => {
  return medSpas.filter(medSpa => {
    // Handle service matching with normalization
    const matchesService = !serviceId || medSpa.services.some(service => {
      const normalizedService = service.toLowerCase();
      const normalizedServiceId = serviceId.toLowerCase();
      return normalizedService === normalizedServiceId || 
             normalizedService === normalizedServiceId.replace(/-/g, '') ||
             normalizedService.replace(/-/g, '') === normalizedServiceId ||
             normalizedService === `cool-sculpting` && normalizedServiceId === `coolsculpting`;
    });
    
    const matchesLocation = !locationId || 
                           medSpa.location === locationId || 
                           isInBroaderLocation(medSpa.address, locationId);
    return matchesService && matchesLocation;
  });
};
