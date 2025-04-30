
import { MedSpa } from "../../types";

export const usEvergreenMedspa: MedSpa = {
  id: "us-evergreen-medspa",
  name: "US Evergreen Medspa",
  slug: "us-evergreen-medspa",
  description: "US Evergreen Medspa offers a range of aesthetic services including Botox, dermal fillers, laser skin treatments, acne and scar treatments, and skin tightening procedures in a modern, comfortable environment.",
  imageUrl: "https://images.unsplash.com/photo-1642089918821-0f8a9a686536?q=80&w=2070&auto=format&fit=crop",
  address: "131-07 40th Rd, Level 5, Suite E.07B, Flushing, NY 11354",
  location: "flushing",
  services: [
    "botox",
    "fillers",
    "laser-skin-treatments",
    "acne-treatments",
    "scar-treatments",
    "skin-tightening"
  ],
  featured: false,
  rating: 4.6,
  reviewCount: 58,
  coordinates: {
    lat: 40.7595,
    lng: -73.8328
  },
  verified: true,
  phone: "(718) 808-5758"
};
