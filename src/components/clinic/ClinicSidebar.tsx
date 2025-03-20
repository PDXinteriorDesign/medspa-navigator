
import React, { useState, useEffect } from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ClinicSidebarProps {
  clinic: MedSpa;
  locationSlug: string;
}

const ClinicSidebar = ({ clinic, locationSlug }: ClinicSidebarProps) => {
  const [claimDialogOpen, setClaimDialogOpen] = useState(false);

  // Load HubSpot form script
  useEffect(() => {
    if (claimDialogOpen) {
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
  }, [claimDialogOpen]);

  return (
    <>
      <div className="md:sticky md:top-24 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Claim This Listing</h3>
          <p className="text-gray-700 mb-4">Do you own or manage {clinic.name}? Claim this listing to update your business information and access premium features.</p>
          <Button 
            className="w-full bg-medspa-teal hover:bg-medspa-teal/90"
            onClick={() => setClaimDialogOpen(true)}
          >
            <ShieldCheck size={18} className="mr-2" />
            Claim Now
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Treatments at {clinic.name}</h3>
          <div className="space-y-2">
            {clinic.services?.slice(0, 5).map((serviceId) => {
              const formattedService = serviceId.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              
              return (
                <Link 
                  key={serviceId}
                  to={`/treatments/${serviceId}`}
                  className="flex items-center p-2 text-gray-700 hover:text-medspa-teal"
                >
                  <ChevronRight size={16} className="text-medspa-teal mr-2" />
                  <span>{formattedService}</span>
                </Link>
              );
            })}
          </div>
          <Link 
            to={`/${locationSlug}`}
            className="inline-block mt-4 text-medspa-teal hover-underline font-medium"
          >
            View all treatments in {clinic.location}
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Other MedSpas in {clinic.location}</h3>
          <Link 
            to={`/${locationSlug}`}
            className="text-medspa-teal hover-underline font-medium"
          >
            Browse all {clinic.location} MedSpas
          </Link>
        </div>
      </div>
      
      {/* Claim Listing Dialog */}
      <Dialog open={claimDialogOpen} onOpenChange={setClaimDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Claim {clinic.name}</DialogTitle>
          </DialogHeader>
          <div className="pt-4">
            <div id="hubspot-form-container" className="min-h-[400px]"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClinicSidebar;
