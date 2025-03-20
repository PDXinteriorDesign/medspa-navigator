import { MedSpa, Location } from "./types";
import { isInBroaderLocation } from "@/utils/locationUtils";

// MedSpa data with real profiles
export const medSpas: MedSpa[] = [
  {
    id: "berry-blonde-spa",
    name: "Berry Blonde Spa",
    slug: "berry-blonde-spa",
    description: "Berry Blonde Spa offers a range of face and body treatments, combining luxury with effective results, under the guidance of experienced professionals.",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "767 Lexington Ave, Suite 402, New York, NY 10065",
    location: "upper-east-side",
    services: [
      "micro-botox",
      "facial-treatments",
      "microneedling",
      "radio-frequency",
      "laser-treatments",
      "lymphatic-drainage",
      "body-contouring",
      "prp",
      "waxing",
      "oxygen-therapy"
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 604,
    coordinates: {
      lat: 40.7644,
      lng: -73.9680
    },
    verified: true
  },
  {
    id: "deep-blue-med-spa",
    name: "Deep Blue Med Spa",
    slug: "deep-blue-med-spa",
    description: "Deep Blue Med Spa in Manhattan offers advanced non-surgical aesthetic treatments, including injectables, laser skin rejuvenation, and body contouring, under the supervision of board-certified specialists.",
    imageUrl: "https://images.unsplash.com/photo-1526290734683-aa4e4460c2e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "1040 Park Avenue, Suite 1BC, New York, NY 10028",
    location: "upper-east-side",
    services: [
      "micro-botox",
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
    rating: 4.7,
    reviewCount: 64,
    coordinates: {
      lat: 40.7772,
      lng: -73.9595
    },
    verified: true
  },
  {
    id: "tribeca-medspa",
    name: "Tribeca MedSpa",
    slug: "tribeca-medspa",
    description: "Tribeca MedSpa, established in 2006, is a premier medical spa in New York City offering advanced aesthetic treatments under the guidance of a renowned medical team.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "114 Hudson Street, New York, NY 10013",
    location: "tribeca",
    services: [
      "micro-botox",
      "botox", 
      "fillers", 
      "kybella", 
      "prp", 
      "laser-resurfacing", 
      "cool-sculpting", 
      "laser-hair-removal", 
      "microneedling", 
      "hydrofacial",
      "radio-ultrasound-therapy"
    ],
    featured: true,
    rating: 4.8,
    reviewCount: 245,
    coordinates: {
      lat: 40.7191,
      lng: -74.0065
    },
    verified: true
  },
  {
    id: "casaglow-medspa",
    name: "CasaGlow MedSpa",
    slug: "casaglow-medspa",
    description: "CasaGlow MedSpa, located in New York's Flatiron District, offers scientifically advanced aesthetic and wellness treatments tailored to individual needs.",
    imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "10 East 22nd Street, New York, NY 10010",
    location: "midtown",
    services: [
      "micro-botox",
      "botox",
      "fillers",
      "kybella",
      "laser-hair-removal",
      "facial-treatments",
      "chemical-peels",
      "microneedling",
      "prp",
      "iv-therapy",
      "weight-management",
      "laser-treatments"
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 103,
    coordinates: {
      lat: 40.7402,
      lng: -73.9883
    },
    verified: true
  },
  {
    id: "skinney-medspa-flagship-flatiron",
    name: "SKINNEY Medspa",
    slug: "skinney-medspa-flagship-flatiron",
    description: "SKINNEY Medspa's Flagship Flatiron location offers advanced non-invasive aesthetic treatments, combining cutting-edge technology with personalized care.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "125 Fifth Avenue, 2nd Floor, New York, NY 10003",
    location: "midtown",
    services: [
      "cool-sculpting",
      "body-contouring",
      "laser-hair-removal",
      "chemical-peels",
      "laser-resurfacing",
      "microneedling",
      "photofacials",
      "skin-tightening",
      "botox",
      "fillers",
      "lip-fillers",
      "weight-management",
      "hydrofacial",
      "facial-treatments"
    ],
    featured: true,
    rating: 4.7,
    reviewCount: 320,
    coordinates: {
      lat: 40.7382,
      lng: -73.9924
    },
    verified: true
  }
];

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
