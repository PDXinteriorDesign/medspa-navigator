
import { MedSpa, Location } from "../types";
import { isInBroaderLocation } from "@/utils/locationUtils";
import { medSpas } from "./data";

// Re-export the medSpas array
export { medSpas };

// Helper function to get a MedSpa by slug
export const getMedSpaBySlug = (slug: string): MedSpa | undefined => {
  return medSpas.find(medSpa => 
    medSpa.slug?.toLowerCase() === slug.toLowerCase()
  );
};

// Helper function to get a MedSpa by ID
export const getMedSpaById = (idOrSlug: string): MedSpa | undefined => {
  // Log the lookup for debugging
  console.log(`Looking up med spa with ID or slug: ${idOrSlug}`);
  
  // Case insensitive search
  const normalizedIdOrSlug = idOrSlug.toLowerCase();
  
  // Try to find by ID first
  const medSpaById = medSpas.find(spa => 
    spa.id.toLowerCase() === normalizedIdOrSlug
  );
  
  if (medSpaById) {
    console.log(`Found med spa by ID: ${medSpaById.name}`);
    return medSpaById;
  }
  
  // If not found by ID, try to find by slug
  const medSpaBySlug = medSpas.find(spa => 
    spa.slug?.toLowerCase() === normalizedIdOrSlug
  );
  
  if (medSpaBySlug) {
    console.log(`Found med spa by slug: ${medSpaBySlug.name}`);
    return medSpaBySlug;
  }
  
  console.log(`No med spa found with ID or slug: ${idOrSlug}`);
  return undefined;
};

// Helper function to get MedSpas by location, including neighborhoods
export const getMedSpasByLocation = (location: Location): MedSpa[] => {
  return medSpas.filter(medSpa => 
    medSpa.location === location || 
    isInBroaderLocation(medSpa.address, location) ||
    (location === "manhattan" && ["upper-east-side", "upper-west-side", "midtown", "soho", "tribeca", "chelsea"].includes(medSpa.location))
  );
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
