
export type Location = "manhattan" | "brooklyn" | "soho" | "tribeca" | "williamsburg" | "midtown" | "upper-east-side" | "the-hamptons";

export type Service = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
};

export type MedSpa = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  address: string;
  location: Location;
  services: string[]; // Array of service IDs
  featured: boolean;
  rating: number;
  reviewCount: number;
};

// Mock services data
export const services: Service[] = [
  {
    id: "botox",
    name: "Botox",
    slug: "botox",
    description: "Botox is a popular cosmetic treatment that temporarily reduces or eliminates facial fine lines and wrinkles.",
    imageUrl: "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "coolsculpting",
    name: "CoolSculpting",
    slug: "coolsculpting",
    description: "CoolSculpting is a non-invasive fat-reduction procedure that freezes and eliminates stubborn fat cells.",
    imageUrl: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    slug: "laser-hair-removal",
    description: "Laser hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair.",
    imageUrl: "https://images.unsplash.com/photo-1598963668990-70ff4eb44252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  }
];

// Updated locations data with only the specified locations
export const locations: { id: Location; name: string }[] = [
  { id: "manhattan", name: "Manhattan" },
  { id: "brooklyn", name: "Brooklyn" },
  { id: "soho", name: "SoHo" },
  { id: "tribeca", name: "Tribeca" },
  { id: "williamsburg", name: "Williamsburg" },
  { id: "midtown", name: "Midtown" },
  { id: "upper-east-side", name: "Upper East Side" },
  { id: "the-hamptons", name: "The Hamptons" }
];

// MedSpas data with updated locations
export const medSpas: MedSpa[] = [
  {
    id: "queens-laser-spa",
    name: "Queens Laser Spa",
    slug: "queens-laser-spa",
    description: "Specialized in laser treatments and non-invasive procedures for all skin types.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "101 Queens Blvd, Queens, NY 11375",
    location: "brooklyn", // Reassigned to Brooklyn for now
    services: ["laser-hair-removal", "hydrofacials"],
    featured: true,
    rating: 4.3,
    reviewCount: 62
  },
  {
    id: "manhattan-laser-studio",
    name: "Manhattan Laser Studio",
    slug: "manhattan-laser-studio",
    description: "Luxury medspa offering cutting-edge treatments and personalized care in Midtown Manhattan.",
    imageUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "123 5th Avenue, Manhattan, NY 10010",
    location: "manhattan",
    services: ["botox", "coolsculpting", "laser-hair-removal"],
    featured: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: "upper-east-aesthetics",
    name: "Upper East Aesthetics",
    slug: "upper-east-aesthetics",
    description: "Exclusive Upper East Side clinic providing premium anti-aging and skin rejuvenation treatments.",
    imageUrl: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "456 Madison Avenue, Manhattan, NY 10022",
    location: "upper-east-side",
    services: ["botox", "fillers", "microneedling"],
    featured: false,
    rating: 4.7,
    reviewCount: 98
  },
  {
    id: "soho-beauty-lounge",
    name: "SoHo Beauty Lounge",
    slug: "soho-beauty-lounge",
    description: "Trendsetting SoHo medspa specializing in natural-looking enhancements and innovative treatments.",
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "200 Spring Street, SoHo, NY 10012",
    location: "soho",
    services: ["laser-hair-removal", "botox", "hydrofacials"],
    featured: false,
    rating: 4.5,
    reviewCount: 87
  },
  {
    id: "tribeca-medical-spa",
    name: "Tribeca Medical Spa",
    slug: "tribeca-medical-spa",
    description: "Discreet, high-end medspa catering to an exclusive clientele with personalized treatment plans.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "77 Worth Street, Tribeca, NY 10013",
    location: "tribeca",
    services: ["coolsculpting", "botox", "chemical-peels"],
    featured: false,
    rating: 4.9,
    reviewCount: 76
  },
  {
    id: "midtown-wellness",
    name: "Midtown Wellness Spa",
    slug: "midtown-wellness",
    description: "Premium medspa in the heart of Midtown, catering to busy professionals with efficient treatments.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "350 Fifth Avenue, Midtown, NY 10118",
    location: "midtown",
    services: ["botox", "laser-hair-removal", "coolsculpting"],
    featured: false,
    rating: 4.6,
    reviewCount: 92
  },
  {
    id: "williamsburg-aesthetic",
    name: "Williamsburg Aesthetic Studio",
    slug: "williamsburg-aesthetic",
    description: "Boutique aesthetic clinic offering cutting-edge treatments in a trendy Williamsburg setting.",
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "120 North 7th Street, Williamsburg, NY 11249",
    location: "williamsburg",
    services: ["botox", "hydrofacials", "microneedling"],
    featured: true,
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: "hamptons-luxury-spa",
    name: "Hamptons Luxury MedSpa",
    slug: "hamptons-luxury-spa",
    description: "Exclusive aesthetic center catering to Hamptons clientele with premium treatments and services.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "42 Main Street, East Hampton, NY 11937",
    location: "the-hamptons",
    services: ["botox", "fillers", "coolsculpting"],
    featured: true,
    rating: 5.0,
    reviewCount: 58
  }
];

// Helper functions
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getMedSpaBySlug = (slug: string): MedSpa | undefined => {
  return medSpas.find(medSpa => medSpa.slug === slug);
};

export const getMedSpaById = (id: string): MedSpa | undefined => {
  return medSpas.find(medSpa => medSpa.id === id);
};

export const getServicesByLocation = (serviceSlug: string, location: Location): MedSpa[] => {
  return medSpas.filter(
    medSpa => medSpa.location === location && medSpa.services.includes(serviceSlug)
  );
};

export const getMedSpasByService = (serviceSlug: string): MedSpa[] => {
  return medSpas.filter(medSpa => medSpa.services.includes(serviceSlug));
};

export const getLocationName = (locationSlug: Location): string => {
  const location = locations.find(loc => loc.id === locationSlug);
  return location ? location.name : "";
};

// New helper functions for filtering

export const getServiceIds = (): string[] => {
  return services.map(service => service.id);
};

export const getLocationIds = (): Location[] => {
  return locations.map(location => location.id);
};

export const countMedSpasByServiceAndLocation = (serviceId: string, locationId: Location): number => {
  return medSpas.filter(
    medSpa => medSpa.location === locationId && medSpa.services.includes(serviceId)
  ).length;
};

export const filterMedSpas = (serviceId: string | null, locationId: Location | null): MedSpa[] => {
  return medSpas.filter(medSpa => {
    const matchesService = !serviceId || medSpa.services.includes(serviceId);
    const matchesLocation = !locationId || medSpa.location === locationId;
    return matchesService && matchesLocation;
  });
};

// New helper function to get MedSpas by location
export const getMedSpasByLocation = (location: Location): MedSpa[] => {
  return medSpas.filter(medSpa => medSpa.location === location);
};
