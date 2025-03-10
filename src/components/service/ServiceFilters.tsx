
import { useState } from "react";
import { ChevronDown, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Location, locations, services } from "@/lib/data";
import { useNavigate } from "react-router-dom";

interface ServiceFiltersProps {
  selectedLocation: Location | "all";
  setSelectedLocation: (value: Location | "all") => void;
  selectedService: string | "all";
  setSelectedService: (value: string | "all") => void;
  viewMode: "grid" | "list";
  setViewMode: (viewMode: "grid" | "list") => void;
}

const ServiceFilters = ({
  selectedLocation,
  setSelectedLocation,
  selectedService,
  setSelectedService,
  viewMode,
  setViewMode
}: ServiceFiltersProps) => {
  const navigate = useNavigate();
  
  // Handle location change
  const handleLocationChange = (value: string) => {
    if (value === "view-all") {
      // Navigate to locations page
      navigate("/locations");
    } else {
      setSelectedLocation(value as Location | "all");
    }
  };
  
  return (
    <div className="bg-medspa-blue/30 p-6 rounded-lg mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-medium mb-4 md:mb-0">Find Services By Location</h2>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto justify-between">
                {selectedLocation === "all" 
                  ? "All Locations" 
                  : locations.find(loc => loc.id === selectedLocation)?.name || "All Locations"}
                <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={selectedLocation} onValueChange={handleLocationChange}>
                <DropdownMenuRadioItem value="all">
                  All Locations
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="view-all">
                  View All NYC Locations
                </DropdownMenuRadioItem>
                {locations.map(location => (
                  <DropdownMenuRadioItem key={location.id} value={location.id}>
                    {location.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto justify-between">
                {selectedService === "all" 
                  ? "All Services" 
                  : services.find(svc => svc.id === selectedService)?.name || "All Services"}
                <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={selectedService} onValueChange={setSelectedService}>
                <DropdownMenuRadioItem value="all">
                  All Services
                </DropdownMenuRadioItem>
                {services.map(service => (
                  <DropdownMenuRadioItem key={service.id} value={service.id}>
                    {service.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="flex items-center gap-2 ml-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-medspa-teal/10 text-medspa-teal" : ""}
            >
              <Grid3X3 size={16} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-medspa-teal/10 text-medspa-teal" : ""}
            >
              <List size={16} />
            </Button>
          </div>
          
          {(selectedLocation !== "all" || selectedService !== "all") && (
            <Button 
              variant="ghost" 
              className="w-full sm:w-auto"
              onClick={() => {
                setSelectedLocation("all");
                setSelectedService("all");
              }}
            >
              Reset Filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceFilters;
