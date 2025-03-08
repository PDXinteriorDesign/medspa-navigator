
import { Link } from "react-router-dom";
import { type Service } from "@/lib/data";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <Link to={`/services/${service.slug}`} className="group">
        <div className="relative">
          <img 
            src={service.imageUrl} 
            alt={service.name} 
            className="w-full h-48 object-cover transition-transform group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h3 className="text-white text-xl font-medium p-4">{service.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700 text-sm line-clamp-2 mb-3">{service.description}</p>
          <div className="flex items-center text-medspa-teal font-medium text-sm">
            <MapPin size={16} className="mr-1" /> 
            <span>Available in all NYC locations</span>
          </div>
        </div>
      </Link>
      
      {/* Location links */}
      <div className="mt-auto p-4 pt-0">
        <p className="text-sm text-gray-500 mb-2">Popular locations:</p>
        <div className="space-y-1.5">
          {locations.slice(0, 2).map(location => (
            <Link 
              key={location.id}
              to={`/services/${service.slug}-in-${location.id}`}
              className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
            >
              <ArrowRight size={12} className="mr-1.5" />
              {service.name} in {location.name}
            </Link>
          ))}
        </div>
        <Link 
          to={`/services/${service.slug}`}
          className="inline-block text-sm font-medium text-medspa-teal hover:underline mt-3"
        >
          View all locations
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
