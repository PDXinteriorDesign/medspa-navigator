
import React from "react";
import { services } from "@/lib/data";
import { Link } from "react-router-dom";

interface NeighborhoodServicesProps {
  services: string[];
  neighborhoodName: string;
}

const NeighborhoodServices = ({ services: popularServices, neighborhoodName }: NeighborhoodServicesProps) => {
  // Find services from the global services that match the popular services for this neighborhood
  const matchedServices = services.filter(service => 
    popularServices.includes(service.name)
  );
  
  const normalizedNeighborhoodSlug = neighborhoodName.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3">Popular Services in {neighborhoodName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matchedServices.map(service => (
          <Link 
            key={service.id}
            to={`/services/${service.slug}-in-${normalizedNeighborhoodSlug}`}
            className="bg-medspa-cream p-4 rounded-lg hover:bg-medspa-cream/70 transition-colors"
          >
            <h4 className="font-medium text-medspa-teal">{service.name}</h4>
            <p className="text-sm text-gray-600 mt-1">
              Starting from $99
            </p>
          </Link>
        ))}
        
        {popularServices.map(serviceName => {
          // Only add non-matched services (custom services specific to the neighborhood)
          if (!matchedServices.some(s => s.name === serviceName)) {
            return (
              <div 
                key={serviceName}
                className="bg-medspa-cream p-4 rounded-lg"
              >
                <h4 className="font-medium text-medspa-teal">{serviceName}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Custom treatment
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default NeighborhoodServices;
