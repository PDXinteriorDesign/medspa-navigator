
import { MedSpa, Location } from "./types";

// MedSpa data with real profiles
export const medSpas: MedSpa[] = [
  {
    id: "deep-blue-med-spa-manhattan",
    name: "Deep Blue Med Spa",
    slug: "deep-blue-med-spa-manhattan",
    description: "Deep Blue Med Spa in Manhattan offers advanced non-surgical aesthetic treatments, including injectables, laser skin rejuvenation, and body contouring, under the supervision of board-certified specialists.",
    imageUrl: "https://images.unsplash.com/photo-1526290734683-aa4e4460c2e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "1040 Park Avenue, Suite 1BC, New York, NY 10028",
    location: "upper-east-side",
    services: [
      "botox", 
      "fillers", 
      "kybella", 
      "laser-resurfacing", 
      "cool-sculpting", 
      "laser-hair-removal", 
      "tattoo-removal", 
      "microdermabrasion", 
      "microneedling", 
      "hydrofacial"
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 127,
    coordinates: {
      lat: 40.7772,
      lng: -73.9595
    },
    verified: true
  }
];

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
