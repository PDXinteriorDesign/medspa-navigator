
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { type MedSpa } from "@/lib/types";
import { Star, MapPin, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import ClaimListingDialog from "@/components/clinic/ClaimListingDialog";
import ClinicMap from "@/components/clinic/ClinicMap";

interface LocationMedSpaCardProps {
  medSpa: MedSpa;
}

const LocationMedSpaCard = ({ medSpa }: LocationMedSpaCardProps) => {
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);
  const locations = medSpa.location ? [medSpa.location] : [];
  const locationSlug = locations[0] || "locations";
  const clinicLink = `/${locationSlug}/${medSpa.slug || medSpa.id}`;

  // Default coordinates for Flushing if not provided
  const enhancedMedSpa = {
    ...medSpa,
    coordinates: medSpa.coordinates || {
      lat: 40.7587,
      lng: -73.8335
    }
  };

  return (
    <>
      <Card className="overflow-hidden subtle-hover">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[240px] relative">
            <ClinicMap clinic={enhancedMedSpa} interactive={false} />
          </div>
          
          <div className="p-5">
            <Link to={clinicLink} className="group">
              <h3 className="text-lg font-serif mb-2 group-hover:text-medspa-teal transition-colors">
                {medSpa.name}
              </h3>
            </Link>
            
            <div className="flex items-center mb-3">
              <div className="flex text-medspa-gold mr-1">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-medium">{medSpa.rating}</span>
              <span className="text-sm text-gray-500 ml-1">({medSpa.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-start mb-3">
              <MapPin size={16} className="text-medspa-teal mt-1 mr-1 flex-shrink-0" />
              <p className="text-gray-600 text-sm">{medSpa.address}</p>
            </div>
            
            <p className="text-sm text-gray-700 line-clamp-2 mb-4">{medSpa.description}</p>
            
            <div className="flex items-center justify-between">
              <Link 
                to={clinicLink}
                className="text-medspa-teal hover:text-medspa-teal/80 text-sm font-medium hover-underline inline-flex items-center"
              >
                View Clinic <span className="ml-1">→</span>
              </Link>
              
              <button 
                onClick={() => setIsClaimDialogOpen(true)}
                className="bg-medspa-teal hover:bg-medspa-teal/90 text-white px-4 py-2 rounded-md flex items-center"
              >
                <ShieldCheck size={16} className="mr-2" />
                Claim Listing
              </button>
            </div>
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

export default LocationMedSpaCard;
