
import React from "react";
import { MedSpa } from "@/lib/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ClinicMapProps {
  clinic: MedSpa;
}

const ClinicMap = ({ clinic }: ClinicMapProps) => {
  // Generate Google Maps Embed URL based on coordinates or address
  const getMapEmbedUrl = () => {
    if (clinic.coordinates) {
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${clinic.coordinates.lat},${clinic.coordinates.lng}`;
    } else {
      // Fallback to address-based map
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(clinic.address)}`;
    }
  };
  
  return (
    <AspectRatio ratio={16/9} className="max-h-[400px]">
      {clinic.coordinates ? (
        <iframe
          title={`Map of ${clinic.name}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={getMapEmbedUrl()}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <img 
          src={clinic.imageUrl} 
          alt={clinic.name} 
          className="w-full h-full object-cover" 
        />
      )}
    </AspectRatio>
  );
};

export default ClinicMap;
