
import React from "react";
import { Award } from "lucide-react";

interface LocationSignatureTreatmentsProps {
  locationName: string;
}

const LocationSignatureTreatments = ({ locationName }: LocationSignatureTreatmentsProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-serif font-medium mb-4">Signature Treatments</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-medspa-blue/10 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Award size={18} className="text-medspa-teal mr-2" />
            <h4 className="font-medium">Premium Facials</h4>
          </div>
          <p className="text-sm text-gray-700">
            {locationName} is renowned for its luxury facials using cutting-edge technology and rare ingredients for unparalleled results.
          </p>
        </div>
        <div className="bg-medspa-blue/10 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Award size={18} className="text-medspa-teal mr-2" />
            <h4 className="font-medium">Advanced Injectables</h4>
          </div>
          <p className="text-sm text-gray-700">
            Expert practitioners deliver subtle, refined results using the latest injectable techniques for a natural enhancement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSignatureTreatments;
