
import React from "react";
import LocationFilter from "@/components/LocationFilter";
import ServiceLocationNeighborhoods from "./ServiceLocationNeighborhoods";
import { LocationContent } from "@/utils/locationContent";
import { type Location } from "@/lib/types";
import { Calendar, Clock, DollarSign, Star, AlertTriangle } from "lucide-react";
import { getBotoxEnhancedContent } from "@/data/treatments/botoxContent";

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
  // Extra content for special pages like Botox
  const getExtraContent = () => {
    if (serviceSlug === "botox") {
      return (
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <h3 className="text-lg font-medium mb-3">Botox Quick Facts</h3>
          <ul className="space-y-3">
            <li className="flex">
              <Clock size={18} className="text-medspa-teal mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Treatment Time</p>
                <p className="text-sm text-gray-600">15-30 minutes</p>
              </div>
            </li>
            <li className="flex">
              <Calendar size={18} className="text-medspa-teal mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Results Last</p>
                <p className="text-sm text-gray-600">3-4 months</p>
              </div>
            </li>
            <li className="flex">
              <DollarSign size={18} className="text-medspa-teal mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Price in {locationName}</p>
                <p className="text-sm text-gray-600">$12-25 per unit</p>
              </div>
            </li>
            <li className="flex">
              <Star size={18} className="text-medspa-teal mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Client Satisfaction</p>
                <p className="text-sm text-gray-600">Very High (94%)</p>
              </div>
            </li>
            <li className="flex">
              <AlertTriangle size={18} className="text-medspa-teal mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Downtime</p>
                <p className="text-sm text-gray-600">None to minimal</p>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <LocationFilter 
        serviceSlug={serviceSlug} 
        currentLocation={location}
      />
      
      {getExtraContent()}
      
      <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
        <h3 className="text-lg font-medium mb-4">Best Time to Book</h3>
        <p className="text-sm text-gray-700 mb-3">{locationContent.timing.bestTimes}</p>
        <div className="bg-medspa-blue/10 p-3 rounded text-sm text-gray-600 border border-medspa-blue/10">
          <span className="font-medium block mb-1">Pro Tip:</span>
          {locationContent.timing.tip}
        </div>
      </div>

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
