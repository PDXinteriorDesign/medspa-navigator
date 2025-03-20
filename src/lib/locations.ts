
import { Location } from "./types";

// Updated locations data with consistent naming
export const locations: { id: Location; name: string }[] = [
  { id: "manhattan", name: "Manhattan" },
  { id: "brooklyn", name: "Brooklyn" },
  { id: "soho", name: "SoHo" },
  { id: "tribeca", name: "Tribeca" },
  { id: "williamsburg", name: "Williamsburg" },
  { id: "midtown", name: "Midtown" },
  { id: "upper-east-side", name: "Upper East Side" },
  { id: "the-hamptons", name: "The Hamptons" },
  { id: "flatiron", name: "Flatiron District" }
];

// Helper function to get location name
export const getLocationName = (locationSlug: Location): string => {
  // Handle special case for Hamptons
  if (locationSlug === "the-hamptons") {
    return "The Hamptons";
  }
  
  const location = locations.find(loc => loc.id === locationSlug);
  return location ? location.name : "";
};

// Helper function to get location IDs
export const getLocationIds = (): Location[] => {
  return locations.map(location => location.id);
};
