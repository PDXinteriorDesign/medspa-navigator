
import { MedSpa, Location } from "./types";

// Empty array for MedSpa data, ready to be populated with real profiles
export const medSpas: MedSpa[] = [];

// Helper function to get a MedSpa by slug
export const getMedSpaBySlug = (slug: string): MedSpa | undefined => {
  return medSpas.find(medSpa => medSpa.slug === slug);
};

// Helper function to get a MedSpa by ID
export const getMedSpaById = (id: string): MedSpa | undefined => {
  return medSpas.find(spa => spa.id === id);
};

// Helper function to get MedSpas by location
export const getMedSpasByLocation = (location: Location): MedSpa[] => {
  return medSpas.filter(medSpa => medSpa.location === location);
};
