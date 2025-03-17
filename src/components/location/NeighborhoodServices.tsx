
import React from "react";
import { services } from "@/lib/services";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

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
    <div className="mt-8">
      <h3 className="text-xl font-serif font-medium mb-4 text-medspa-dark">
        Signature Treatments in {neighborhoodName}
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        Our carefully curated selection of premium aesthetic services popular among {neighborhoodName}'s discerning clientele.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {matchedServices.map(service => (
          <Link 
            key={service.id}
            to={`/treatments/${service.slug}-in-${normalizedNeighborhoodSlug}`}
            className="bg-medspa-cream hover:bg-white border border-medspa-teal/10 rounded-lg p-5 transition-all hover:shadow-md group"
          >
            <div className="flex items-start">
              <div className="flex-grow">
                <h4 className="font-medium text-medspa-teal group-hover:text-medspa-teal/80 transition-colors">{service.name}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Starting from $99
                </p>
                <p className="text-xs text-gray-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  View preferred providers →
                </p>
              </div>
              <div className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <Star size={18} className="text-medspa-gold" fill="currentColor" />
              </div>
            </div>
          </Link>
        ))}
        
        {popularServices.map(serviceName => {
          // Only add non-matched services (custom services specific to the neighborhood)
          if (!matchedServices.some(s => s.name === serviceName)) {
            return (
              <div 
                key={serviceName}
                className="bg-medspa-cream border border-medspa-teal/10 rounded-lg p-5"
              >
                <div className="flex items-start">
                  <div className="flex-grow">
                    <h4 className="font-medium text-medspa-teal">{serviceName}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Signature treatment
                    </p>
                    <p className="text-xs text-gray-500 mt-3">
                      Custom luxury experience
                    </p>
                  </div>
                  <div className="ml-2 opacity-70">
                    <Star size={18} className="text-medspa-gold" fill="currentColor" />
                  </div>
                </div>
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
