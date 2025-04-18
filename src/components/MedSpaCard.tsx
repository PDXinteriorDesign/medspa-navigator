
import { useState } from "react";
import { type MedSpa } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-mobile";
import { getClinicLocations } from "@/utils/locationUtils";
import MedSpaCardMedia from "@/components/clinic/MedSpaCardMedia";
import MedSpaCardContent from "@/components/clinic/MedSpaCardContent";
import ClaimListingDialog from "@/components/clinic/ClaimListingDialog";

interface MedSpaCardProps {
  medSpa: MedSpa;
}

const MedSpaCard = ({ medSpa }: MedSpaCardProps) => {
  const isMobile = useIsMobile();
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);
  
  // Get all valid locations for this clinic, use the first one as primary
  const locations = getClinicLocations(medSpa.address, medSpa.location);
  const primaryLocation = locations[0] || "locations";
  const clinicLink = `/${primaryLocation}/${medSpa.slug || medSpa.id}`;
  
  // Log for debugging
  console.log(`Generated link for ${medSpa.name}: ${clinicLink} (location: ${medSpa.location}, primaryLocation: ${primaryLocation})`);

  // Handle claim button click
  const handleClaimClick = () => {
    setIsClaimDialogOpen(true);
  };

  return (
    <>
      <div className="luxury-card group overflow-hidden subtle-hover rounded-lg border bg-white shadow-sm">
        <div className="h-[240px] md:h-[280px]"> {/* Increased fixed height for proper aspect ratio */}
          <MedSpaCardMedia 
            medSpa={medSpa} 
            clinicLink={clinicLink} 
            isMobile={isMobile} 
          />
        </div>
        <MedSpaCardContent 
          medSpa={medSpa} 
          clinicLink={clinicLink}
          isMobile={isMobile}
          onClaimClick={handleClaimClick}
        />
      </div>
      
      <ClaimListingDialog 
        isOpen={isClaimDialogOpen} 
        onOpenChange={setIsClaimDialogOpen} 
        clinicName={medSpa.name} 
      />
    </>
  );
};

export default MedSpaCard;
