
import { Link } from "react-router-dom";
import { Star, MapPin, Shield, ShieldCheck } from "lucide-react";
import { type MedSpa } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { getClinicLocations } from "@/utils/locationUtils";
import ClinicMap from "@/components/clinic/ClinicMap";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

  // Load HubSpot form script
  useEffect(() => {
    if (isClaimDialogOpen) {
      // Create script element for HubSpot forms
      const script = document.createElement('script');
      script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.onload = () => {
        // Initialize HubSpot form once script is loaded
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "241947693",
            formId: "123e05c8-4088-4535-9803-f14ed494eebc",
            region: "na2",
            target: "#hubspot-form-container"
          });
        }
      };
      document.head.appendChild(script);

      // Cleanup function
      return () => {
        const hubspotContainer = document.getElementById('hubspot-form-container');
        if (hubspotContainer) {
          hubspotContainer.innerHTML = '';
        }
      };
    }
  }, [isClaimDialogOpen]);

  // Handle claim button click
  const handleClaimClick = () => {
    setIsClaimDialogOpen(true);
  };

  if (isMobile) {
    // Mobile layout
    return (
      <>
        <div className="luxury-card group overflow-hidden subtle-hover rounded-lg border bg-white shadow-sm">
          <div className="relative">
            <Link to={clinicLink}>
              <AspectRatio ratio={16/9}>
                {medSpa.coordinates ? (
                  <ClinicMap clinic={medSpa} />
                ) : (
                  <img 
                    src={medSpa.imageUrl} 
                    alt={medSpa.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="225" 
                  />
                )}
              </AspectRatio>
            </Link>
            {medSpa.featured && (
              <Badge className="absolute top-2 right-2 bg-medspa-gold/90 hover:bg-medspa-gold text-white text-xs font-medium">
                Featured
              </Badge>
            )}
            {medSpa.verified && (
              <Badge className="absolute top-2 left-2 bg-medspa-teal/90 hover:bg-medspa-teal text-white text-xs font-medium">
                <Shield size={12} className="mr-1" /> Verified
              </Badge>
            )}
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between mb-1">
              <Link to={clinicLink} className="group">
                <h3 className="text-base font-serif group-hover:text-medspa-teal transition-colors">{medSpa.name}</h3>
              </Link>
              <div className="flex items-center ml-1">
                <div className="flex text-medspa-gold mr-0.5">
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-xs font-medium">{medSpa.rating}</span>
              </div>
            </div>
            
            <div className="flex items-start mb-2">
              <MapPin size={12} className="text-medspa-teal mt-0.5 mr-1 flex-shrink-0" />
              <p className="text-xs text-gray-600 line-clamp-1">{medSpa.address}</p>
            </div>
            
            <p className="text-xs text-gray-700 line-clamp-2 mb-3">{medSpa.description}</p>
            
            <div className="flex items-center justify-between">
              <Link 
                to={clinicLink}
                className="text-medspa-teal hover:text-medspa-teal/80 text-xs font-medium hover-underline inline-flex items-center"
              >
                View Clinic <span className="ml-1">→</span>
              </Link>
              
              <button 
                onClick={handleClaimClick}
                className="bg-medspa-teal/90 hover:bg-medspa-teal text-white text-xs py-1 px-2 rounded-md flex items-center"
              >
                <ShieldCheck size={12} className="mr-1" />
                Claim Listing
              </button>
            </div>
          </div>
        </div>
        
        {/* Claim Listing Dialog */}
        <Dialog open={isClaimDialogOpen} onOpenChange={setIsClaimDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-serif">Claim {medSpa.name}</DialogTitle>
            </DialogHeader>
            <div className="pt-4">
              <div id="hubspot-form-container" className="min-h-[300px]"></div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Desktop layout
  return (
    <>
      <div className="luxury-card group overflow-hidden subtle-hover rounded-lg border bg-white shadow-sm">
        <div className="relative">
          <Link to={clinicLink}>
            <AspectRatio ratio={16/9}>
              {medSpa.coordinates ? (
                <ClinicMap clinic={medSpa} />
              ) : (
                <img 
                  src={medSpa.imageUrl} 
                  alt={medSpa.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="338" 
                />
              )}
            </AspectRatio>
          </Link>
          {medSpa.featured && (
            <Badge className="absolute top-3 right-3 bg-medspa-gold/90 hover:bg-medspa-gold text-white font-medium">
              Featured
            </Badge>
          )}
          {medSpa.verified && (
            <Badge className="absolute top-3 left-3 bg-medspa-teal/90 hover:bg-medspa-teal text-white font-medium">
              <Shield size={14} className="mr-1" /> Verified
            </Badge>
          )}
        </div>
        <div className="p-5">
          <Link to={clinicLink} className="group">
            <h3 className="text-lg font-serif mb-2 group-hover:text-medspa-teal transition-colors">{medSpa.name}</h3>
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
              onClick={handleClaimClick}
              className="bg-medspa-teal hover:bg-medspa-teal/90 text-white px-4 py-2 rounded-md flex items-center"
            >
              <ShieldCheck size={16} className="mr-2" />
              Claim Listing
            </button>
          </div>
        </div>
      </div>
      
      {/* Claim Listing Dialog */}
      <Dialog open={isClaimDialogOpen} onOpenChange={setIsClaimDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Claim {medSpa.name}</DialogTitle>
          </DialogHeader>
          <div className="pt-4">
            <div id="hubspot-form-container" className="min-h-[400px] p-3 mx-auto"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MedSpaCard;
