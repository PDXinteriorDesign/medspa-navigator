
import { Link } from "react-router-dom";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { getServicesByLocation } from "@/lib/filters";

const PopularLocationSearches = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-serif font-medium mb-6">Popular NYC Location-Based Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map(service => (
          locations.slice(0, 2).map(location => (
            <Link 
              key={`${service.id}-${location.id}`}
              to={`/services/${service.slug}-in-${location.id}`}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="font-medium">{service.name} in {location.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {getServicesByLocation(service.id, location.id).length} MedSpas
              </p>
            </Link>
          ))
        ))}
      </div>
    </div>
  );
};

export default PopularLocationSearches;
