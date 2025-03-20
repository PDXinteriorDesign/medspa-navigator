
import { MedSpa } from "../../types";

export const skinovaMedSpa: MedSpa = {
  id: "skinova-medspa",
  name: "Skinova Med Spa",
  slug: "skinova-medspa",
  description: "Skinova Medspa, located in Midtown Manhattan, offers personalized beauty and wellness treatments using advanced techniques and state-of-the-art technology.",
  imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  address: "43 West 33rd Street, Suite 400, New York, NY 10001",
  location: "midtown",
  services: [
    "botox",
    "fillers",
    "kybella",
    "facial-treatments",
    "chemical-peels",
    "weight-management",
    "laser-hair-removal",
    "massage-therapy",
    "paramedical-tattooing"
  ],
  featured: true,
  rating: 4.8,
  reviewCount: 324,
  coordinates: {
    lat: 40.7484,
    lng: -73.9887
  },
  verified: true
};
