import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import { Service, Location } from "@/lib/types";
import { locations } from "@/lib/locations";

interface ServiceGridProps {
  services: Service[];
  selectedLocation: Location | "all";
}

const ServiceGrid = ({ services, selectedLocation }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(service => (
        <div key={service.id} className="flex flex-col">
          <ServiceCard service={service} />
          {selectedLocation !== "all" && (
            <Link 
              to={`/services/${service.slug}-in-${selectedLocation}`}
              className="mt-2 text-center bg-medspa-teal/10 text-medspa-teal p-2 rounded-lg text-sm font-medium hover:bg-medspa-teal/20"
            >
              View {service.name} in {locations.find(loc => loc.id === selectedLocation)?.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
