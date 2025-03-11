
import React from "react";
import { MapPin } from "lucide-react";
import { Neighborhood } from "@/utils/locationContent";

interface ServiceLocationNeighborhoodsProps {
  locationName: string;
  serviceName: string;
  neighborhoods: Neighborhood[];
  serviceSlug: string;
}

const ServiceLocationNeighborhoods = ({ 
  locationName, 
  serviceName, 
  neighborhoods,
  serviceSlug
}: ServiceLocationNeighborhoodsProps) => {
  if (neighborhoods.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">Nearby Neighborhoods</h3>
      <ul className="space-y-2">
        {neighborhoods.map((neighborhood, index) => (
          <li key={index}>
            <a
              href={`/services/${serviceSlug}-in-${neighborhood.slug}`}
              className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
            >
              <span className="location-icon-button mr-2">
                <MapPin size={14} />
              </span>
              {serviceName} in {neighborhood.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceLocationNeighborhoods;
