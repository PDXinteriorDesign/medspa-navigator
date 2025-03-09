
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface LocationPopularServicesProps {
  locationName: string;
  services?: string[];
}

const LocationPopularServices = ({ locationName, services }: LocationPopularServicesProps) => {
  // Use the passed services prop if available, otherwise fallback to default services
  const popularServices = services || [
    "Botox",
    "Dermal Fillers",
    "Laser Resurfacing",
    "Chemical Peels",
    "Microneedling",
    "Facials"
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">Popular Services in {locationName}</h3>
      <ul className="space-y-2">
        {popularServices.map((service, index) => (
          <li key={index}>
            <Link 
              to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
            >
              <ArrowRight size={14} className="mr-2 text-gray-400" />
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPopularServices;
