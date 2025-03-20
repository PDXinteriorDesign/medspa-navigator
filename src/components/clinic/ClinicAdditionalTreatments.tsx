
import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";

interface ClinicAdditionalTreatmentsProps {
  clinicName: string;
  additionalTreatments: string[];
}

const ClinicAdditionalTreatments = ({ clinicName, additionalTreatments }: ClinicAdditionalTreatmentsProps) => {
  if (!additionalTreatments || additionalTreatments.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 p-5 bg-medspa-cream/50 rounded-lg border border-medspa-teal/10">
      <div className="flex items-center mb-4">
        <Sparkles size={18} className="text-medspa-gold mr-2" />
        <h2 className="text-xl font-medium text-medspa-dark">Additional Treatments</h2>
      </div>
      <p className="text-gray-700 mb-4">
        {clinicName} also offers these premium aesthetic treatments:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {additionalTreatments.map((treatment, index) => (
          <div
            key={index}
            className="flex items-center p-2 border border-gray-200 bg-white rounded-md"
          >
            <ChevronRight size={16} className="text-medspa-gold mr-2" />
            <span>{treatment}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicAdditionalTreatments;
