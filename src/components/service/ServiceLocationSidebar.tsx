
import React from "react";
import LocationFilter from "@/components/LocationFilter";
import ServiceCallToAction from "./ServiceCallToAction";
import ServiceLocationInsights from "./ServiceLocationInsights";
import ServiceLocationNeighborhoods from "./ServiceLocationNeighborhoods";
import { Location } from "@/lib/data";
import { LocationContent } from "@/utils/locationContent";

interface ServiceLocationSidebarProps {
  serviceSlug: string;
  serviceName: string;
  location: Location;
  locationName: string;
  locationContent: LocationContent;
}

const ServiceLocationSidebar = ({
  serviceSlug,
  serviceName,
  location,
  locationName,
  locationContent
}: ServiceLocationSidebarProps) => {
  return (
    <div className="md:sticky md:top-24 space-y-6">
      <LocationFilter serviceSlug={serviceSlug} currentLocation={location} />
      
      <ServiceCallToAction serviceName={`${serviceName} in ${locationName}`} />
      
      <ServiceLocationInsights 
        locationName={locationName} 
        serviceName={serviceName}
        insights={locationContent.insights}
      />
      
      <ServiceLocationNeighborhoods 
        locationName={locationName} 
        serviceName={serviceName}
        neighborhoods={locationContent.nearbyNeighborhoods}
        serviceSlug={serviceSlug}
      />
    </div>
  );
};

export default ServiceLocationSidebar;
