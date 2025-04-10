
import React from "react";
import MedSpaCard from "@/components/MedSpaCard";
import { MedSpa } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  return (
    <>
      {showCount && medSpasInLocation.length > 0 && (
        <div className={`mb-${isMobile ? '4' : '6'}`}>
          <span className={`text-${isMobile ? 'xs' : 'sm'} font-medium text-medspa-teal`}>
            Showing {medSpasInLocation.length} {serviceName} Clinics & Med Spas in {locationName}
          </span>
        </div>
      )}
      
      {medSpasInLocation.length > 0 ? (
        <div className={`grid grid-cols-1 gap-${isMobile ? '4' : '6'} mb-8`}>
          {medSpasInLocation.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))}
        </div>
      ) : (
        <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20 mb-8">
          <h3 className="text-xl font-medium mb-3">Coming Soon</h3>
          <p className="text-gray-700 mb-5">
            We're currently adding our curated selection of premium {serviceName} providers in {locationName}.
          </p>
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <Link to="/locations">Browse Locations</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default ServiceMedSpaListing;
