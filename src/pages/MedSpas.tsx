
import { useState } from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedSpaCard from "@/components/MedSpaCard";
import { services, locations, medSpas, type Location } from "@/lib/data";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const MedSpas = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | "all">("all");
  const [selectedService, setSelectedService] = useState<string | "all">("all");
  
  // Filter medspas based on selected filters
  const filteredMedSpas = medSpas.filter(medSpa => {
    const matchesLocation = selectedLocation === "all" || medSpa.location === selectedLocation;
    const matchesService = selectedService === "all" || medSpa.services.includes(selectedService);
    return matchesLocation && matchesService;
  });
  
  return (
    <div className="medspa-container py-12">
      <BreadcrumbNav 
        items={[
          { label: "MedSpas", href: "/medspas", current: true }
        ]} 
      />
      
      <h1 className="page-heading">MedSpa Directory</h1>
      
      <p className="text-lg text-gray-700 mb-10">
        Discover the top medical spas in New York City offering premium beauty and wellness treatments.
      </p>
      
      {/* Filters */}
      <div className="bg-medspa-blue/30 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-medium mb-4 md:mb-0">Filter Results</h2>
          
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
                <DropdownMenuRadioGroup value={selectedLocation} onValueChange={(value) => setSelectedLocation(value as Location | "all")}>
                  <DropdownMenuRadioItem value="all">
                    All Locations
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
      
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredMedSpas.length > 0 ? (
          filteredMedSpas.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">No MedSpas Found</h3>
            <p className="text-gray-600 mb-4">No MedSpas match your selected filters.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedLocation("all");
                setSelectedService("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedSpas;
