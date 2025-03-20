
import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ClaimListingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  clinicName: string;
}

const ClaimListingDialog = ({ isOpen, onOpenChange, clinicName }: ClaimListingDialogProps) => {
  // Load HubSpot form script
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">{clinicName ? `Claim ${clinicName}` : 'Claim Listing'}</DialogTitle>
        </DialogHeader>
        <div className="pt-4">
          <div id="hubspot-form-container" className="min-h-[400px] p-4 mx-auto"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClaimListingDialog;
