
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { locations, type Location } from "@/lib/data";

interface LocationFilterProps {
  serviceSlug: string;
  currentLocation?: Location;
}

const LocationFilter = ({ serviceSlug, currentLocation }: LocationFilterProps) => {
  return (
    <div className="bg-medspa-blue/50 rounded-lg p-5 mb-6">
      <h3 className="text-lg font-medium mb-3">Filter by Location</h3>
      <ul className="space-y-2">
        {locations.map((location) => (
          <li key={location.id}>
            <Link 
              to={`/services/${serviceSlug}-in-${location.id}`}
              className={`flex items-center text-sm ${
                currentLocation === location.id 
                  ? "text-medspa-teal font-medium" 
                  : "text-gray-700 hover:text-medspa-teal"
              }`}
            >
              <ChevronRight 
                size={16} 
                className={currentLocation === location.id ? "text-medspa-teal" : "text-gray-400"} 
              />
              <span className="ml-1">{location.name}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link 
            to={`/services/${serviceSlug}`}
            className={`flex items-center text-sm ${
              !currentLocation 
                ? "text-medspa-teal font-medium" 
                : "text-gray-700 hover:text-medspa-teal"
            }`}
          >
            <ChevronRight 
              size={16} 
              className={!currentLocation ? "text-medspa-teal" : "text-gray-400"} 
            />
            <span className="ml-1">All NYC</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LocationFilter;
