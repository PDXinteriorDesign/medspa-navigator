
import React from "react";
import { Clock } from "lucide-react";
import { LocationTiming } from "@/utils/locationContent";

interface ServiceLocationTimingProps {
  locationName: string;
  serviceName: string;
  timing: LocationTiming;
}

const ServiceLocationTiming = ({ locationName, serviceName, timing }: ServiceLocationTimingProps) => {
  return (
    <div className="mt-8 mb-6">
      <h3 className="text-lg font-medium mb-3">Best Times for {serviceName} in {locationName}</h3>
      <div className="bg-medspa-cream p-5 rounded-lg flex items-start">
        <Clock size={20} className="text-medspa-teal mt-1 mr-3 flex-shrink-0" />
        <div>
          <p className="text-gray-700 mb-2">{timing.bestTimes}</p>
          <p className="text-gray-700 mb-2">{timing.peakHours}</p>
          <p className="text-sm text-gray-500 italic">{timing.tip}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocationTiming;
