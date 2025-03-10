
import { useState } from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { services, Location } from "@/lib/data";
import ServiceFilters from "@/components/service/ServiceFilters";
import ServiceGrid from "@/components/service/ServiceGrid";
import ServiceList from "@/components/service/ServiceList";
import ServiceCategories from "@/components/service/ServiceCategories";
import PopularLocationSearches from "@/components/service/PopularLocationSearches";
import ServiceStyles from "@/components/service/ServiceStyles";

const Services = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | "all">("all");
  const [selectedService, setSelectedService] = useState<string | "all">("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Filter services based on selections
  const filteredServices = selectedService === "all" 
    ? services 
    : services.filter(service => service.id === selectedService);
  
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
      
      {/* Filters and View Mode */}
      <ServiceFilters 
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      
      {/* All Services Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-medium mb-6">All NYC Aesthetic Services</h2>
        
        {viewMode === "grid" ? (
          <ServiceGrid 
            services={filteredServices} 
            selectedLocation={selectedLocation} 
          />
        ) : (
          <ServiceList services={filteredServices} />
        )}
      </div>
      
      {/* Categories Section */}
      <ServiceCategories />
      
      {/* Popular Location-Based Searches */}
      <PopularLocationSearches />
      
      {/* Add CSS for treatment links */}
      <ServiceStyles />
    </div>
  );
};

export default Services;
