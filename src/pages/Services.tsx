
import { useState } from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ServiceCard from "@/components/ServiceCard";
import { services, locations, getServicesByLocation, type Location } from "@/lib/data";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Services = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<Location | "all">("all");
  const [selectedService, setSelectedService] = useState<string | "all">("all");
  
  // All services are displayed by default
  const displayedServices = services;

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
    <div className="medspa-container py-12">
      <BreadcrumbNav 
        items={[
          { label: "Services", href: "/services", current: true }
        ]} 
      />
      
      <h1 className="page-heading">Aesthetic Services & Treatments</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Browse our curated selection of popular aesthetic treatments available at top-rated medical spas throughout New York City.
      </p>
      
      {/* Location Filter */}
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
      
      {/* Featured Treatments Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-medium mb-6">Featured NYC Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedServices.map(service => (
            <div key={service.id} className="flex flex-col">
              <ServiceCard service={service} />
              {/* Add location-specific links if a location is selected */}
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
      </div>
      
      {/* All Treatments by Category */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-medium mb-6">Browse All NYC Treatments</h2>
        
        {/* Injectables Category */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Injectables</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/services/botox" className="treatment-link">Botox</Link>
            <Link to="/services/micro-botox" className="treatment-link">MicroBotox</Link>
            <Link to="/services/fillers" className="treatment-link">Fillers</Link>
            <Link to="/services/kybella" className="treatment-link">Kybella</Link>
            <Link to="/services/prp" className="treatment-link">Platelet Rich Plasma</Link>
          </div>
        </div>
        
        {/* Laser Treatments Category */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Laser Treatments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/services/laser-hair-removal" className="treatment-link">Laser Hair Removal</Link>
            <Link to="/services/photofacials" className="treatment-link">Photofacials</Link>
            <Link to="/services/tattoo-removal" className="treatment-link">Tattoo Removal</Link>
            <Link to="/services/skin-resurfacing" className="treatment-link">Skin Resurfacing</Link>
            <Link to="/services/carbon-laser-facial" className="treatment-link">Carbon Laser Facial</Link>
            <Link to="/services/vaginal-rejuvenation" className="treatment-link">Vaginal Rejuvenation</Link>
          </div>
        </div>
        
        {/* Skin Lift/Contouring Category */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Body Contouring</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/services/coolsculpting" className="treatment-link">CoolSculpting</Link>
            <Link to="/services/weight-management" className="treatment-link">Weight Management Programs</Link>
            <Link to="/services/radio-ultrasound-therapy" className="treatment-link">Radio & Ultrasound Therapy</Link>
          </div>
        </div>
        
        {/* Facial Treatments Category */}
        <div>
          <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Facial Treatments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/services/chemical-peels" className="treatment-link">Chemical Peels</Link>
            <Link to="/services/microdermabrasion" className="treatment-link">Microdermabrasion</Link>
            <Link to="/services/microneedling" className="treatment-link">Microneedling</Link>
            <Link to="/services/hydrofacials" className="treatment-link">Hydrofacials</Link>
            <Link to="/services/oxygen-facials" className="treatment-link">Oxygen Facials</Link>
            <Link to="/services/placenta-facials" className="treatment-link">Placenta Facials</Link>
            <Link to="/services/cryogenic-skin-tag-removal" className="treatment-link">Cryogenic Skin Tag Removal</Link>
          </div>
        </div>
      </div>
      
      {/* Popular Location-Based Searches */}
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
      
      {/* Add CSS for treatment links using a regular style tag */}
      <style>{`
        .treatment-link {
          display: block;
          padding: 0.75rem 1rem;
          background-color: white;
          border: 1px solid #edf2f7;
          border-radius: 0.5rem;
          transition: all 0.2s;
          font-size: 0.95rem;
        }
        
        .treatment-link:hover {
          background-color: #f0f9ff;
          border-color: #bae6fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </div>
  );
};

export default Services;
