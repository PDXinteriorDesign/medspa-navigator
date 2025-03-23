
import React, { useState } from "react";
import { MapPin, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClaimListingDialog from "@/components/clinic/ClaimListingDialog";

const MedSpaListingBanner = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  
  return (
    <>
      <div className="bg-medspa-teal/10 rounded-lg overflow-hidden shadow-sm">
        <div className="px-6 py-6 md:py-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 bg-medspa-teal/20 rounded-full mb-3">
            <Sparkle className="text-medspa-teal" size={20} />
          </div>
          
          <h3 className="text-xl md:text-2xl font-serif font-medium mb-2">
            Own a Luxury MedSpa in NYC?
          </h3>
          
          <p className="text-gray-700 max-w-2xl mb-4 text-sm md:text-base">
            Join Manhattan's most exclusive MedSpa directory. Our curated platform connects discerning clients with premier aesthetic providers across NYC's elite neighborhoods.
          </p>
          
          <Button 
            className="bg-medspa-teal hover:bg-medspa-teal/90 text-white"
            size="default"
            onClick={handleOpenDialog}
          >
            <MapPin className="mr-1" size={16} />
            Add Your MedSpa Listing
          </Button>
        </div>
      </div>
      
      <ClaimListingDialog 
        isOpen={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        clinicName="Your MedSpa" 
      />
    </>
  );
};

export default MedSpaListingBanner;
