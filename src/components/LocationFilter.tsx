
import { Link } from "react-router-dom";
import { MapPin, ChevronDown } from "lucide-react";
import { locationDetails } from "@/lib/locationData";
import { locations } from "@/lib/locations";
import { Location } from "@/lib/types";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LocationFilterProps {
  serviceSlug?: string;
  currentLocation?: Location;
}

const LocationFilter = ({ serviceSlug, currentLocation }: LocationFilterProps) => {
  // Get current location name for display
  const getCurrentLocationName = () => {
    if (!currentLocation) return "";
    
    // Check in locationDetails first
    const locationDetail = locationDetails.find(loc => loc.id === currentLocation || loc.slug === currentLocation);
    if (locationDetail) return locationDetail.name;
    
    // If not found, check in locations array
    const location = locations.find(loc => loc.id === currentLocation);
    return location ? location.name : "";
  };

  // Create a unique list of locations, prioritizing locationDetails
  const uniqueLocations = [];
  const locationIdSet = new Set();
  
  // First add all locationDetails entries
  locationDetails.forEach(location => {
    // Map "hamptons" id to "the-hamptons" for consistency
    const locationId = location.id === "hamptons" ? "the-hamptons" : location.id;
    
    if (!locationIdSet.has(locationId)) {
      locationIdSet.add(locationId);
      uniqueLocations.push({
        id: locationId,
        name: location.name,
        slug: location.slug
      });
    }
  });
  
  // Then add locations that aren't already in the set
  locations.forEach(location => {
    if (!locationIdSet.has(location.id)) {
      locationIdSet.add(location.id);
      uniqueLocations.push({
        id: location.id,
        name: location.name,
        slug: location.id
      });
    }
  });

  return (
    <div className="bg-medspa-blue/50 rounded-lg p-5 mb-6">
      <h3 className="text-lg font-medium mb-3">Filter by Location</h3>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between bg-white border border-gray-200">
            <span className="flex items-center">
              <MapPin size={16} className="mr-2 text-medspa-teal" />
              <span>{currentLocation ? getCurrentLocationName() : "Select a location"}</span>
            </span>
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px] max-h-[300px] overflow-y-auto bg-white">
          {/* Display unique locations */}
          {uniqueLocations.map((location) => (
            <DropdownMenuItem 
              key={location.id} 
              asChild 
              className={currentLocation === location.id ? "text-medspa-teal font-medium" : ""}
            >
              <Link 
                to={serviceSlug ? `/treatments/${serviceSlug}/${location.slug || location.id}` : `/${location.slug || location.id}`}
                className="w-full"
              >
                <span className="flex items-center">
                  <MapPin size={14} className="mr-2" />
                  <span>{location.name}</span>
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
          
          {/* View All Locations option */}
          <DropdownMenuItem asChild>
            <Link to="/locations" className="w-full font-medium">
              <span className="flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>View All Locations</span>
              </span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
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
