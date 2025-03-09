
import React from "react";
import { Clock, Calendar } from "lucide-react";

interface LocationTimingInfoProps {
  locationName: string;
}

const LocationTimingInfo = ({ locationName }: LocationTimingInfoProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-serif font-medium mb-4">When to Visit</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex items-start">
          <Clock size={18} className="text-medspa-teal mt-1 mr-3" />
          <div>
            <h4 className="font-medium text-sm mb-1">Optimal Hours</h4>
            <p className="text-sm text-gray-700">
              For the most attentive service, book midweek appointments between 10am-2pm when clinics are less busy.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Calendar size={18} className="text-medspa-teal mt-1 mr-3" />
          <div>
            <h4 className="font-medium text-sm mb-1">Seasonal Considerations</h4>
            <p className="text-sm text-gray-700">
              {locationName === "The Hamptons" ? 
                "Summer brings the highest demand; book 3-4 weeks in advance during peak season." : 
                "Autumn and winter offer more availability and seasonal treatment specials."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTimingInfo;
