
import { useState } from "react";
import { Search, MapPin, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { services } from "@/lib/services";
import LocationSelect from "./LocationSelect";
import ServiceSelect from "./ServiceSelect";

interface SearchBarProps {
  allLocations: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

const SearchBar = ({ allLocations }: SearchBarProps) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearch = () => {
    if (selectedService && selectedLocation) {
      const service = services.find(s => s.id === selectedService);
      const location = allLocations.find(l => l.id === selectedLocation);
      if (service && location) {
        navigate(`/${service.slug}/${location.slug}`);
      }
    } else if (selectedService) {
      const service = services.find(s => s.id === selectedService);
      if (service) {
        navigate(`/treatments/${service.slug}`);
      }
    } else if (selectedLocation) {
      const location = allLocations.find(l => l.id === selectedLocation);
      if (location) {
        navigate(`/${location.slug}`);
      }
    } else {
      navigate("/locations");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8 mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <ServiceSelect 
            selectedService={selectedService} 
            setSelectedService={setSelectedService}
          />
        </div>
        
        <div className="flex-1">
          <LocationSelect 
            allLocations={allLocations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
        
        <Button 
          onClick={handleSearch}
          className="bg-medspa-teal hover:bg-medspa-teal/90 text-white"
        >
          <Search size={18} />
          <span className="ml-1">Search</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
