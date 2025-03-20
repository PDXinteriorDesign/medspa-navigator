
import React, { useState } from "react";
import { MedSpa } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-mobile";
import MedSpaMobileListItem from "./MedSpaMobileListItem";
import MedSpaDesktopListItem from "./MedSpaDesktopListItem";
import MedSpaEmptyState from "./MedSpaEmptyState";
import ClaimListingDialog from "@/components/clinic/ClaimListingDialog";

interface MedSpaListProps {
  medSpas: MedSpa[];
  locationName: string;
  treatmentName?: string;
}

const MedSpaList = ({ medSpas, locationName, treatmentName }: MedSpaListProps) => {
  const isMobile = useIsMobile();
  const [claimDialogOpen, setClaimDialogOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState<MedSpa | null>(null);

  // Handle claim button click
  const handleClaimClick = (clinic: MedSpa) => {
    setSelectedClinic(clinic);
    setClaimDialogOpen(true);
  };

  if (!medSpas || medSpas.length === 0) {
    return <MedSpaEmptyState locationName={locationName} treatmentName={treatmentName} />;
  }

  return (
    <>
      <div className="space-y-5">
        {medSpas.map((medSpa) => (
          <React.Fragment key={medSpa.id}>
            {isMobile ? (
              <MedSpaMobileListItem 
                medSpa={medSpa} 
                onClaimClick={handleClaimClick} 
                treatmentName={treatmentName} 
              />
            ) : (
              <MedSpaDesktopListItem 
                medSpa={medSpa} 
                onClaimClick={handleClaimClick} 
                treatmentName={treatmentName} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Claim Listing Dialog */}
      <ClaimListingDialog 
        isOpen={claimDialogOpen} 
        onOpenChange={setClaimDialogOpen} 
        clinicName={selectedClinic?.name || ''} 
      />
    </>
  );
};

export default MedSpaList;
