
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";
import { Service } from "@/lib/types";

interface ServiceLocationMoreTreatmentsProps {
  locationName: string;
  locationSlug: string;
  currentServiceSlug: string;
}

const ServiceLocationMoreTreatments = ({ 
  locationName, 
  locationSlug, 
  currentServiceSlug
}: ServiceLocationMoreTreatmentsProps) => {
  // Filter out the current service and get 5 random services
  const otherServices = services
    .filter(service => service.slug !== currentServiceSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  
  if (otherServices.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">More Treatments in {locationName}</h3>
      <ul className="space-y-2">
        {otherServices.map((service: Service) => (
          <li key={service.id}>
            <Link
              to={`/treatments/${service.slug}/${locationSlug}`}
              className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
            >
              <ArrowRight size={14} className="mr-2 text-gray-400" />
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceLocationMoreTreatments;
