
import React from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ClinicServicesProps {
  clinic: MedSpa;
  locationSlug: string;
}

const ClinicServices = ({ clinic, locationSlug }: ClinicServicesProps) => {
  return (
    <>
      {clinic.services && clinic.services.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Services Offered</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {clinic.services.map((serviceId) => {
              const formattedService = serviceId.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              
              return (
                <Link 
                  key={serviceId}
                  to={`/treatments/${serviceId}-in-${locationSlug}`}
                  className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 hover:border-medspa-teal/30"
                >
                  <ChevronRight size={16} className="text-medspa-teal mr-2" />
                  <span>{formattedService}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ClinicServices;
