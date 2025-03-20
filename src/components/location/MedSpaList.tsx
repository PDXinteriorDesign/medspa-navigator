
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, MapPin, Sparkles, Info, Phone, CreditCard, ShieldCheck } from "lucide-react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { getClinicLocations } from "@/utils/locationUtils";
import ClinicMap from "@/components/clinic/ClinicMap";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MedSpaListProps {
  medSpas: MedSpa[];
  locationName: string;
  treatmentName?: string;
}

const MedSpaList = ({ medSpas, locationName, treatmentName }: MedSpaListProps) => {
  const isMobile = useIsMobile();
  const [claimDialogOpen, setClaimDialogOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState<MedSpa | null>(null);

  // Load HubSpot form script
  useEffect(() => {
    if (claimDialogOpen && selectedClinic) {
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
  }, [claimDialogOpen, selectedClinic]);

  // Handle claim button click
  const handleClaimClick = (clinic: MedSpa) => {
    setSelectedClinic(clinic);
    setClaimDialogOpen(true);
  };

  if (!medSpas || medSpas.length === 0) {
    return (
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-xl font-medium mb-3">No MedSpas Found</h3>
        <p>We're currently updating our {treatmentName ? `${treatmentName} in ` : ''}{locationName} MedSpa listings.</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-5">
        {medSpas.map((medSpa) => {
          const locations = getClinicLocations(medSpa.address, medSpa.location);
          const clinicLink = `/${locations[0]}/${medSpa.slug || medSpa.id}`;
          
          return (
            <Card key={medSpa.id} className="overflow-hidden">
              {isMobile ? (
                <div className="flex flex-col">
                  <AspectRatio ratio={16/9}>
                    {medSpa.coordinates ? (
                      <ClinicMap clinic={medSpa} />
                    ) : (
                      <img 
                        src={medSpa.imageUrl} 
                        alt={medSpa.name} 
                        className="h-full w-full object-cover"
                        loading="lazy"
                        width="400"
                        height="225"
                      />
                    )}
                  </AspectRatio>
                  <CardHeader className="py-3 px-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-serif">{medSpa.name}</CardTitle>
                      <div className="flex items-center ml-2 flex-shrink-0">
                        <div className="flex text-medspa-gold mr-1">
                          <Star size={14} fill="currentColor" />
                        </div>
                        <span className="text-xs font-medium">{medSpa.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-xs text-gray-600 flex items-start mt-1">
                      <MapPin size={12} className="text-medspa-teal mr-1 mt-0.5 flex-shrink-0" />
                      {medSpa.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-1 px-4">
                    <p className="text-xs text-gray-700 mb-2 line-clamp-2">{medSpa.description}</p>
                    
                    {medSpa.services && medSpa.services.length > 0 && (
                      <div className="flex items-start mb-2">
                        <Sparkles size={12} className="text-medspa-gold mr-1 mt-0.5 flex-shrink-0" />
                        <div className="flex flex-wrap gap-1">
                          {medSpa.services.slice(0, 3).map((serviceId) => (
                            <span 
                              key={serviceId} 
                              className="text-xs bg-gray-100 px-1.5 py-0.5 rounded"
                            >
                              {serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          ))}
                          {medSpa.services.length > 3 && (
                            <span className="text-xs text-gray-500">+{medSpa.services.length - 3}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between py-3 px-4">
                    <Button variant="outline" className="text-medspa-teal border-medspa-teal hover:bg-medspa-teal/10 h-9 text-xs" asChild>
                      <Link to={clinicLink}>
                        <Info size={14} className="mr-1" />
                        View Clinic
                      </Link>
                    </Button>
                    <Button 
                      className="bg-medspa-teal hover:bg-medspa-teal/90 h-9 text-xs" 
                      onClick={() => handleClaimClick(medSpa)}
                    >
                      <ShieldCheck size={14} className="mr-1" />
                      Claim Listing
                    </Button>
                  </CardFooter>
                </div>
              ) : (
                <div className="md:flex">
                  <div className="md:w-1/3 flex flex-col">
                    <AspectRatio ratio={1/1} className="h-full">
                      {medSpa.coordinates ? (
                        <ClinicMap clinic={medSpa} />
                      ) : (
                        <img 
                          src={medSpa.imageUrl} 
                          alt={medSpa.name} 
                          className="h-full w-full object-cover"
                          loading="lazy" 
                          width="400"
                          height="400"
                        />
                      )}
                    </AspectRatio>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader className="py-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-serif">{medSpa.name}</CardTitle>
                        <div className="flex items-center">
                          <div className="flex text-medspa-gold mr-1">
                            <Star size={16} fill="currentColor" />
                          </div>
                          <span className="text-sm font-medium">{medSpa.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({medSpa.reviewCount} reviews)</span>
                        </div>
                      </div>
                      <CardDescription className="text-sm text-gray-600 flex items-start mt-1">
                        <MapPin size={14} className="text-medspa-teal mr-1 mt-0.5 flex-shrink-0" />
                        {medSpa.address}
                      </CardDescription>
                      <CardDescription className="text-sm text-gray-600 flex items-start mt-1">
                        <Phone size={14} className="text-medspa-teal mr-1 mt-0.5 flex-shrink-0" />
                        212-555-{Math.floor(1000 + Math.random() * 9000)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{medSpa.description}</p>
                      
                      {medSpa.services && medSpa.services.length > 0 && (
                        <div className="flex items-start mb-3">
                          <Sparkles size={14} className="text-medspa-gold mr-2 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-gray-600 mb-1">
                              {treatmentName ? `Also offers these treatments:` : `Offers the following services:`}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {medSpa.services.map((serviceId) => (
                                <span 
                                  key={serviceId} 
                                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                                >
                                  {serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-start mb-2">
                        <CreditCard size={14} className="text-medspa-teal mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-600 mb-1">Payments Accepted:</p>
                          <p className="text-xs text-gray-700">Cash or self-payment, Credit cards, Insurance plans, Financing options available</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex py-3 px-6">
                      <div className="flex items-center">
                        <Button variant="outline" className="text-medspa-teal border-medspa-teal hover:bg-medspa-teal/10 mr-4" asChild>
                          <Link to={clinicLink}>
                            <Info size={16} className="mr-2" />
                            View Additional Information
                          </Link>
                        </Button>
                        <Button 
                          className="bg-medspa-teal hover:bg-medspa-teal/90"
                          onClick={() => handleClaimClick(medSpa)}
                        >
                          <ShieldCheck size={16} className="mr-2" />
                          Claim Listing
                        </Button>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
      
      {/* Claim Listing Dialog */}
      <Dialog open={claimDialogOpen} onOpenChange={setClaimDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">
              {selectedClinic ? `Claim ${selectedClinic.name}` : 'Claim Listing'}
            </DialogTitle>
          </DialogHeader>
          <div className="pt-4">
            <div id="hubspot-form-container" className="min-h-[400px]"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MedSpaList;
