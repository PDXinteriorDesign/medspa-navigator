
import React from "react";
import { MedSpa } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-mobile";
import LocationMedSpaCard from "./LocationMedSpaCard";
import MedSpaMobileListItem from "./MedSpaMobileListItem";
import MedSpaEmptyState from "./MedSpaEmptyState";

interface MedSpaListProps {
  medSpas: MedSpa[];
  locationName: string;
  treatmentName?: string;
}

const MedSpaList = ({ medSpas, locationName, treatmentName }: MedSpaListProps) => {
  const isMobile = useIsMobile();

  if (!medSpas || medSpas.length === 0) {
    return <MedSpaEmptyState locationName={locationName} treatmentName={treatmentName} />;
  }

  return (
    <div className="space-y-6">
      {medSpas.map((medSpa) => (
        <React.Fragment key={medSpa.id}>
          {isMobile ? (
            <MedSpaMobileListItem 
              medSpa={medSpa} 
              onClaimClick={() => {}} 
              treatmentName={treatmentName} 
            />
          ) : (
            <LocationMedSpaCard medSpa={medSpa} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MedSpaList;
