
import React from "react";

interface ClinicDescriptionProps {
  clinicName: string;
  description: string;
}

const ClinicDescription = ({ clinicName, description }: ClinicDescriptionProps) => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">About {clinicName}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
    </div>
  );
};

export default ClinicDescription;
