
import { MedSpa, Location } from "./types";
import { medSpas } from "./medspas";
import { isInBroaderLocation } from "@/utils/locationUtils";

// Helper function to get services by location
export const getServicesByLocation = (serviceSlug: string, location: Location): MedSpa[] => {
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
  return medSpas.filter(
    medSpa => (medSpa.location === locationId || isInBroaderLocation(medSpa.address, locationId)) && 
    medSpa.services.includes(serviceId)
  ).length;
};

// Filter MedSpas by service and location
export const filterMedSpas = (serviceId: string | null, locationId: Location | null): MedSpa[] => {
  return medSpas.filter(medSpa => {
    const matchesService = !serviceId || medSpa.services.includes(serviceId);
    const matchesLocation = !locationId || 
                           medSpa.location === locationId || 
                           isInBroaderLocation(medSpa.address, locationId);
    return matchesService && matchesLocation;
  });
};
