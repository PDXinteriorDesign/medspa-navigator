
export type Location = "manhattan" | "brooklyn" | "queens" | "bronx" | "staten-island";

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

// Mock locations data
export const locations: { id: Location; name: string }[] = [
  { id: "manhattan", name: "Manhattan" },
  { id: "brooklyn", name: "Brooklyn" },
  { id: "queens", name: "Queens" },
  { id: "bronx", name: "Bronx" },
  { id: "staten-island", name: "Staten Island" }
];

// Mock MedSpas data
export const medSpas: MedSpa[] = [
  {
    id: "glow-medspa-midtown",
    name: "Glow MedSpa",
    slug: "glow-medspa-midtown",
    description: "Luxury medical spa offering premium cosmetic treatments in the heart of Midtown.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "123 5th Avenue, New York, NY 10010",
    location: "manhattan",
    services: ["botox", "coolsculpting", "laser-hair-removal", "tattoo-removal", "micro-botox"],
    featured: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: "elite-aesthetic-center",
    name: "Elite Aesthetic Center",
    slug: "elite-aesthetic-center",
    description: "Premium aesthetic treatments delivered by board-certified professionals.",
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "456 Madison Avenue, New York, NY 10022",
    location: "manhattan",
    services: ["botox", "coolsculpting", "tattoo-removal", "fillers", "kybella"],
    featured: true,
    rating: 4.7,
    reviewCount: 98
  },
  {
    id: "brooklyn-beauty-clinic",
    name: "Brooklyn Beauty Clinic",
    slug: "brooklyn-beauty-clinic",
    description: "Boutique medical spa offering personalized beauty treatments in Williamsburg.",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "789 Bedford Ave, Brooklyn, NY 11211",
    location: "brooklyn",
    services: ["botox", "laser-hair-removal", "prp", "photofacials", "chemical-peels"],
    featured: false,
    rating: 4.5,
    reviewCount: 75
  },
  {
    id: "queens-laser-spa",
    name: "Queens Laser Spa",
    slug: "queens-laser-spa",
    description: "Specialized in laser treatments and non-invasive procedures for all skin types.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    address: "101 Queens Blvd, Queens, NY 11375",
    location: "queens",
    services: ["laser-hair-removal", "tattoo-removal", "hydrofacials"],
    featured: false,
    rating: 4.3,
    reviewCount: 62
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
