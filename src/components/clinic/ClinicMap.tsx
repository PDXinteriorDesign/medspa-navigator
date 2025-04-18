
import React from "react";
import { MedSpa } from "@/lib/types";
import { MapPin } from "lucide-react";

interface ClinicMapProps {
  clinic: MedSpa;
  interactive?: boolean;
}

const ClinicMap = ({ clinic, interactive = true }: ClinicMapProps) => {
  // Google Maps API Key
  const GOOGLE_MAPS_API_KEY = "AIzaSyBpndrGylpLtRZSu42B8fCJVOs_K3HxeS8";
  
  // Generate Google Maps Embed URL based on coordinates or address
  const getMapEmbedUrl = () => {
    if (clinic.coordinates) {
      return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${clinic.coordinates.lat},${clinic.coordinates.lng}&zoom=15`;
    } else {
      // Fallback to address-based map
      return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(clinic.address)}&zoom=15`;
    }
  };
  
  // For clinics without coordinates, show a fallback map pin icon or the image
  if (!clinic.coordinates && !interactive) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <MapPin size={32} className="text-medspa-teal" />
      </div>
    );
  }
  
  // For a clinic with coordinates but displayed in a non-interactive context (like a card)
  // or when we have coordinates and need an interactive map
  return (
    <iframe
      title={`Map of ${clinic.name}`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      src={getMapEmbedUrl()}
      allowFullScreen={interactive}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default ClinicMap;
