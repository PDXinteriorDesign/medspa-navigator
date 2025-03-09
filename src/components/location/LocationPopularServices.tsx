
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

interface LocationPopularServicesProps {
  locationName: string;
}

const LocationPopularServices = ({ locationName }: LocationPopularServicesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">Popular Services in {locationName}</h3>
      
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service.id}>
            <Link 
              to={`/services/${service.slug}-in-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
            >
              <ArrowRight size={14} className="mr-2 text-medspa-teal" />
              <span>{service.name} in {locationName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPopularServices;
