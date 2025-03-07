
import { Link } from "react-router-dom";
import { type Service } from "@/lib/data";
import { MapPin } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link to={`/services/${service.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all group-hover:shadow-lg h-full">
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
      </div>
    </Link>
  );
};

export default ServiceCard;
