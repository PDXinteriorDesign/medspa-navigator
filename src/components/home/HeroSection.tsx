
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search, MapPin, Grid3X3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locations } from "@/lib/data";
import { locationDetails } from "@/lib/locationData";
import { services } from "@/lib/data";

const HeroSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Combine locations from both sources
  const allLocations = locationDetails.map(location => ({
    id: location.id,
    name: location.name,
    slug: location.slug
  }));
  
  // Add locations from the locations array that aren't already included
  locations.forEach(location => {
    if (!allLocations.some(loc => loc.id === location.id)) {
      allLocations.push({
        id: location.id,
        name: location.name,
        slug: location.id
      });
    }
  });

  const handleSearch = () => {
    if (selectedService && selectedLocation) {
      // Navigate to specific service in specific location
      const service = services.find(s => s.id === selectedService);
      const location = allLocations.find(l => l.id === selectedLocation);
      if (service && location) {
        navigate(`/treatments/${service.slug}-in-${location.slug}`);
      }
    } else if (selectedService) {
      // Navigate to service page
      const service = services.find(s => s.id === selectedService);
      if (service) {
        navigate(`/treatments/${service.slug}`);
      }
    } else if (selectedLocation) {
      // Navigate to location page
      const location = allLocations.find(l => l.id === selectedLocation);
      if (location) {
        navigate(`/locations/${location.slug}`);
      }
    } else {
      // Navigate to general directory
      navigate("/locations");
    }
  };

  return (
    <section className="relative bg-medspa-blue py-20">
      <div className="medspa-container">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-medspa-dark mb-6">
            Find the Best MedSpas in NYC
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover top-rated medical spas in New York City offering premium beauty and wellness treatments.
          </p>
          
          {/* Search Filter */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <Grid3X3 size={16} className="mr-2 text-medspa-teal" />
                      <SelectValue placeholder="By Service" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-medspa-teal" />
                      <SelectValue placeholder="By Location" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
                    {allLocations.map((location) => (
                      <SelectItem key={location.id} value={location.id}>
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
              <Link to="/locations">
                Browse Directory
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-full" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581182815808-b6eb627a8798?q=80&w=3205&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
        }}
      >
        <div className="absolute inset-0 bg-medspa-blue/30 mix-blend-multiply"></div>
      </div>
    </section>
  );
};

export default HeroSection;
