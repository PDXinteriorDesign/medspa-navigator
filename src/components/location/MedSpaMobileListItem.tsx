
import React, { useState } from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ShieldCheck } from "lucide-react";
import ClinicMap from "@/components/clinic/ClinicMap";
import ClaimListingDialog from "@/components/clinic/ClaimListingDialog";

interface MedSpaMobileListItemProps {
  medSpa: MedSpa;
  onClaimClick: (clinic: MedSpa) => void;
  treatmentName?: string;
}

const MedSpaMobileListItem = ({ medSpa, treatmentName }: MedSpaMobileListItemProps) => {
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);
  const locations = medSpa.location ? [medSpa.location] : [];
  const clinicLink = `/${locations[0] || "locations"}/${medSpa.slug || medSpa.id}`;

  // Default coordinates for locations if not provided
  const enhancedMedSpa = {
    ...medSpa,
    coordinates: medSpa.coordinates || {
      lat: 40.7587,
      lng: -73.8335
    }
  };

  return (
    <>
      <Card className="overflow-hidden bg-white">
        <div className="h-[180px]">
          <ClinicMap clinic={enhancedMedSpa} interactive={false} />
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <Link to={clinicLink} className="group">
              <h3 className="text-lg font-serif group-hover:text-medspa-teal transition-colors">
                {medSpa.name}
              </h3>
            </Link>
            <div className="flex items-center">
              <div className="flex text-medspa-gold mr-1">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-medium">{medSpa.rating}</span>
            </div>
          </div>

          <div className="flex items-start mb-3">
            <MapPin size={14} className="text-medspa-teal mt-1 mr-1 flex-shrink-0" />
            <p className="text-sm text-gray-600">{medSpa.address}</p>
          </div>

          <p className="text-sm text-gray-700 line-clamp-2 mb-4">{medSpa.description}</p>

          <div className="flex items-center justify-between gap-2">
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 h-9"
            >
              <Link to={clinicLink}>View Details</Link>
            </Button>
            <Button 
              onClick={() => setIsClaimDialogOpen(true)}
              className="bg-medspa-teal hover:bg-medspa-teal/90 h-9"
            >
              <ShieldCheck size={14} className="mr-1" />
              Claim
            </Button>
          </div>
        </div>
      </Card>

      <ClaimListingDialog 
        isOpen={isClaimDialogOpen} 
        onOpenChange={setIsClaimDialogOpen}
        clinicName={medSpa.name}
      />
    </>
  );
};

export default MedSpaMobileListItem;
