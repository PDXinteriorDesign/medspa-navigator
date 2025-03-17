
import React from "react";
import MedSpaCard from "@/components/MedSpaCard";
import { MedSpa } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceMedSpaListingProps {
  medSpasInLocation: MedSpa[];
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  showCount?: boolean;
}

const ServiceMedSpaListing = ({ 
  medSpasInLocation, 
  serviceName, 
  serviceSlug, 
  locationName,
  showCount = true
}: ServiceMedSpaListingProps) => {
  return (
    <>
      {showCount && (
        <div className="mb-6">
          <span className="text-sm font-medium text-medspa-teal">
            Showing {medSpasInLocation.length} {serviceName} Clinics & Med Spas in {locationName}
          </span>
        </div>
      )}
      
      {medSpasInLocation.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 mb-8">
          {medSpasInLocation.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))}
        </div>
      ) : (
        <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20 mb-8">
          <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
          <p className="text-gray-700 mb-5">
            Our curators are currently finalizing our selection of premium {serviceName} providers in {locationName}.
          </p>
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <Link to={`/treatments/${serviceSlug}`}>Explore All {serviceName} Specialists</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default ServiceMedSpaListing;
