
import { MedSpa } from "../../types";

export const licMedSpa: MedSpa = {
  id: "lic-med-spa",
  name: "LIC Med Spa",
  slug: "lic-med-spa",
  description: "LIC Med Spa offers a range of aesthetic treatments including laser hair removal, skin rejuvenation, body contouring, and customized facials in the heart of Long Island City.",
  imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  address: "10-20 47th Rd, Long Island City, NY 11101",
  location: "queens",
  services: [
    "laser-hair-removal",
    "skin-treatments",
    "body-treatments",
    "facial-treatments",
    "chemical-peels"
  ],
  featured: false,
  rating: 4.6,
  reviewCount: 165,
  coordinates: {
    lat: 40.7452,
    lng: -73.9538
  },
  verified: true,
  phone: "(718) 361-1234"
};
