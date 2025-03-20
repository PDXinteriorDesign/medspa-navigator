
import { MedSpa, Location } from "./types";

// Empty array for MedSpa data, ready to be populated with real profiles
export const medSpas: MedSpa[] = [];

// Helper function to get a MedSpa by slug
export const getMedSpaBySlug = (slug: string): MedSpa | undefined => {
  return medSpas.find(medSpa => medSpa.slug === slug);
};

// Helper function to get a MedSpa by ID
export const getMedSpaById = (idOrSlug: string): MedSpa | undefined => {
  // Try to find by ID first
  const medSpaById = medSpas.find(spa => spa.id === idOrSlug);
  if (medSpaById) return medSpaById;
  
  // If not found by ID, try to find by slug
  return medSpas.find(spa => spa.slug === idOrSlug);
};

// Helper function to get MedSpas by location
export const getMedSpasByLocation = (location: Location): MedSpa[] => {
  return medSpas.filter(medSpa => medSpa.location === location);
};

// Helper function to create a URL-friendly slug from a name
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
    .trim();                   // Trim leading/trailing spaces
};
