
import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";
import { locationDetails } from "@/lib/locationData";
import { Location } from "@/lib/data";

interface LocationFilterProps {
  serviceSlug?: string;
  currentLocation?: Location;
}

const LocationFilter = ({ serviceSlug, currentLocation }: LocationFilterProps) => {
  return (
    <div className="bg-medspa-blue/50 rounded-lg p-5 mb-6">
      <h3 className="text-lg font-medium mb-3">Filter by Location</h3>
      <ul className="space-y-2">
        {locationDetails.map((location) => (
          <li key={location.id}>
            <Link 
              to={serviceSlug ? `/services/${serviceSlug}-in-${location.slug}` : `/locations/${location.slug}`}
              className={`flex items-center text-sm ${
                currentLocation === location.id 
                  ? "text-medspa-teal font-medium" 
                  : "text-gray-700 hover:text-medspa-teal"
              }`}
            >
              <span className="location-icon-button mr-2">
                <MapPin size={14} />
              </span>
              <span className="ml-1">{location.name}</span>
            </Link>
          </li>
        ))}
        {serviceSlug && (
          <li>
            <Link 
              to={`/services/${serviceSlug}`}
              className={`flex items-center text-sm ${
                !currentLocation 
                  ? "text-medspa-teal font-medium" 
                  : "text-gray-700 hover:text-medspa-teal"
              }`}
            >
              <span className="location-icon-button mr-2">
                <MapPin size={14} />
              </span>
              <span className="ml-1">All NYC</span>
            </Link>
          </li>
        )}
        <li>
          <Link 
            to="/locations"
            className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
          >
            <span className="location-icon-button mr-2">
              <MapPin size={14} />
            </span>
            <span className="ml-1 font-medium">View All Locations</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LocationFilter;
