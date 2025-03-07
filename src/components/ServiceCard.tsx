
import { Link } from "react-router-dom";
import { type Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link to={`/services/${service.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all group-hover:shadow-lg">
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
      </div>
    </Link>
  );
};

export default ServiceCard;
