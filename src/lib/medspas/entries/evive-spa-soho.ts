
import { MedSpa } from "../../types";

export const eviveSpaSoho: MedSpa = {
  id: "evive-spa-soho",
  name: "EVIVE Spa SoHo",
  slug: "evive-spa-soho",
  description: "EVIVE Spa SoHo offers a tranquil retreat in the heart of SoHo, providing a range of rejuvenating spa treatments and services designed to enhance clients' wellness and beauty.",
  imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  address: "133 Grand St, New York, NY 10013",
  location: "soho",
  services: [
    "facials",
    "massage",
    "body-treatments",
    "botox", // Added Botox to services
    "fillers"  // Added fillers to services
  ],
  featured: false,
  rating: 4.5,
  reviewCount: 68,
  coordinates: {
    lat: 40.7208,
    lng: -73.9973
  },
  verified: true,
  phone: "(212) 343-7777"
};
