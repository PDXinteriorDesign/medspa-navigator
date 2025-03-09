
import React from "react";

interface LocationWhyVisitProps {
  locationName: string;
}

const LocationWhyVisit = ({ locationName }: LocationWhyVisitProps) => {
  return (
    <div className="bg-medspa-cream rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">Why Visit {locationName}</h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
            <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
          </div>
          <p className="text-sm text-gray-700">Exclusive access to NYC's most elite aesthetic providers</p>
        </li>
        <li className="flex items-start">
          <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
            <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
          </div>
          <p className="text-sm text-gray-700">Cutting-edge treatments often available before wider release</p>
        </li>
        <li className="flex items-start">
          <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
            <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
          </div>
          <p className="text-sm text-gray-700">Practitioners with impeccable credentials and clientele</p>
        </li>
        <li className="flex items-start">
          <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
            <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
          </div>
          <p className="text-sm text-gray-700">Unparalleled luxury aesthetic experiences</p>
        </li>
      </ul>
    </div>
  );
};

export default LocationWhyVisit;
