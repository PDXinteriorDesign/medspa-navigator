
import { MedSpa } from "../../types";

export const upkeepMedSpa: MedSpa = {
  id: "upkeep-med-spa",
  name: "Upkeep Med Spa",
  slug: "upkeep-med-spa",
  description: "Upkeep Med Spa is a women-owned, full-service aesthetic practice with locations in New York City and Dallas, offering a wide range of injectables, laser treatments, body contouring, and aesthetic services to enhance clients' natural beauty.",
  imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  address: "330 East 76th Street, New York, NY 10021",
  location: "upper-east-side",
  services: [
    "botox",
    "micro-botox",
    "fillers",
    "kybella",
    "laser-hair-removal",
    "microneedling",
    "hydrofacial",
    "body-contouring"
  ],
  featured: false,
  rating: 4.7,
  reviewCount: 883,
  coordinates: {
    lat: 40.7705,
    lng: -73.9549
  },
  verified: true
};
