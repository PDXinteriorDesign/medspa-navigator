
import React from "react";

interface MedSpaEmptyStateProps {
  locationName: string;
  treatmentName?: string;
}

const MedSpaEmptyState = ({ locationName, treatmentName }: MedSpaEmptyStateProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg text-center">
      <h3 className="text-xl font-medium mb-3">No MedSpas Found</h3>
      <p>We're currently updating our {treatmentName ? `${treatmentName} in ` : ''}{locationName} MedSpa listings.</p>
    </div>
  );
};

export default MedSpaEmptyState;
