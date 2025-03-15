
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { locationDetails } from "@/lib/locationData";
import { Location } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface LocationFilterProps {
  serviceSlug?: string;
  currentLocation?: Location;
}

const LocationFilter = ({ serviceSlug, currentLocation }: LocationFilterProps) => {
  // Get current location name for display
  const getCurrentLocationName = () => {
    if (!currentLocation) return "All NYC";
    const location = locationDetails.find(loc => loc.id === currentLocation);
    return location ? location.name : "All NYC";
  };

  return (
    <div className="bg-medspa-blue/50 rounded-lg p-5 mb-6">
      <h3 className="text-lg font-medium mb-3">Filter by Location</h3>
      
      <div className="space-y-2">
        {/* All NYC option */}
        {serviceSlug && (
          <Link to={`/treatments/${serviceSlug}`} className="w-full block">
            <Button 
              variant="outline" 
              className={`w-full justify-start ${!currentLocation ? "bg-medspa-teal/10 text-medspa-teal border-medspa-teal" : "bg-white"}`}
            >
              <MapPin size={16} className="mr-2 text-medspa-teal" />
              <span>All NYC</span>
            </Button>
          </Link>
        )}
        
        {/* All locations from locationDetails */}
        <div className="max-h-[300px] overflow-y-auto pr-2 space-y-2">
          {locationDetails.map((location) => (
            <Link 
              key={location.id}
              to={serviceSlug ? `/treatments/${serviceSlug}-in-${location.slug}` : `/locations/${location.slug}`}
              className="w-full block"
            >
              <Button 
                variant="outline" 
                className={`w-full justify-start ${currentLocation === location.id ? "bg-medspa-teal/10 text-medspa-teal border-medspa-teal" : "bg-white"}`}
              >
                <MapPin size={16} className="mr-2 text-medspa-teal" />
                <span>{location.name}</span>
              </Button>
            </Link>
          ))}
        </div>
        
        {/* View All Locations option */}
        <Link to="/locations" className="w-full block mt-4">
          <Button variant="outline" className="w-full justify-start font-medium bg-white">
            <MapPin size={16} className="mr-2 text-medspa-teal" />
            <span>View All Locations</span>
          </Button>
        </Link>
      </div>
      
      {/* Display current selection summary */}
      {currentLocation && (
        <div className="mt-3 text-sm text-gray-600">
          <p>Showing {serviceSlug || "treatments"} in {getCurrentLocationName()}</p>
          <p className="text-xs mt-1">
            All spas in this area and nearby neighborhoods will be displayed
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
