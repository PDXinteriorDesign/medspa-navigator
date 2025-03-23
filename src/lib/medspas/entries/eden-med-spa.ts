
import { MedSpa } from "../../types";

export const edenMedSpa: MedSpa = {
  id: "eden-med-spa",
  name: "Eden Med Spa",
  slug: "eden-med-spa",
  description: "Eden Med Spa, located in New York City's historic Tribeca neighborhood, is one of the largest day spas in NYC, offering a comprehensive range of services including body contouring with CoolSculpting, injectables like Botox and fillers, PRP regenerative medicine, and various spa treatments to promote relaxation and well-being.",
  imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  address: "388 Broadway, New York, NY 10013",
  location: "tribeca",
  services: [
    "botox",
    "micro-botox",
    "fillers",
    "prp",
    "cool-sculpting",
    "facials",
    "chemical-peels"
  ],
  featured: false,
  rating: 4.5,
  reviewCount: 254,
  coordinates: {
    lat: 40.7188,
    lng: -74.0020
  },
  verified: true
};
