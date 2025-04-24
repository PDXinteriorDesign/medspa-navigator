export type Location = 
  | "manhattan"
  | "brooklyn"
  | "soho"
  | "tribeca"
  | "williamsburg"
  | "midtown"
  | "upper-east-side"
  | "the-hamptons"
  | "flushing";

export type Service = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
};

export interface MedSpa {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  address: string;
  location: Location;
  services: string[];
  featured: boolean;
  rating: number;
  reviewCount: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
  verified: boolean;
  phone?: string;
}
