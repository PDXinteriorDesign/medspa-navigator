
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
  coordinates?: {
    lat: number;
    lng: number;
  };
  verified?: boolean;
};
