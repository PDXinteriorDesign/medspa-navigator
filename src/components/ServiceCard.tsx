
import { Link } from "react-router-dom";
import { type Service } from "@/lib/data";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="luxury-card h-full flex flex-col subtle-hover overflow-hidden">
      <Link to={`/treatments/${service.slug}`} className="group">
        <div className="relative overflow-hidden">
          <img 
            src={service.imageUrl} 
            alt={service.name} 
            className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <h3 className="text-white text-xl font-serif p-5">{service.name}</h3>
          </div>
        </div>
        <div className="p-5 pb-3">
          <p className="text-gray-700 text-sm line-clamp-2 mb-3">{service.description}</p>
          <div className="flex items-center text-medspa-teal font-medium text-sm">
            <MapPin size={16} className="mr-1.5 flex-shrink-0" /> 
            <span>Available in all NYC locations</span>
          </div>
        </div>
      </Link>
      
      {/* Location links */}
      <div className="mt-auto p-5 pt-0">
        <p className="text-sm text-gray-500 mb-2 font-medium">Popular locations:</p>
        <div className="space-y-2">
          {locations.slice(0, 2).map(location => (
            <Link 
              key={location.id}
              to={`/treatments/${service.slug}-in-${location.id}`}
              className="flex items-center text-sm text-gray-700 hover:text-medspa-teal transition-colors"
            >
              <ArrowRight size={12} className="mr-1.5 text-medspa-gold" />
              {service.name} in {location.name}
            </Link>
          ))}
        </div>
        <Link 
          to={`/treatments/${service.slug}`}
          className="inline-block text-sm font-medium text-medspa-teal hover-underline mt-3"
        >
          View all locations
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
