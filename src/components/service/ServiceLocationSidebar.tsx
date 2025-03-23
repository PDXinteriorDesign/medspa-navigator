
import React from "react";
import LocationFilter from "@/components/LocationFilter";
import ServiceLocationMoreTreatments from "./ServiceLocationMoreTreatments";
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
        <h3 className="text-lg font-medium mb-4">Provider Information</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="pb-2 flex items-start">
            <div className="h-2 w-2 rounded-full bg-medspa-teal mt-1.5 mr-2 flex-shrink-0"></div>
            <span>{serviceName} providers in {locationName} frequently offer package deals and membership options for repeat clients.</span>
          </li>
          <li className="pb-2 flex items-start">
            <div className="h-2 w-2 rounded-full bg-medspa-teal mt-1.5 mr-2 flex-shrink-0"></div>
            <span>Many {locationName} aesthetic clinics participate in seasonal promotions, typically in January and September.</span>
          </li>
          <li className="flex items-start">
            <div className="h-2 w-2 rounded-full bg-medspa-teal mt-1.5 mr-2 flex-shrink-0"></div>
            <span>First-time {serviceName} clients in {locationName} can often request a brief consultation before committing to treatment.</span>
          </li>
        </ul>
      </div>

      {/* Replace ServiceLocationNeighborhoods with ServiceLocationMoreTreatments */}
      <ServiceLocationMoreTreatments
        locationName={locationName}
        locationSlug={location}
        currentServiceSlug={serviceSlug}
      />
    </div>
  );
};

export default ServiceLocationSidebar;
