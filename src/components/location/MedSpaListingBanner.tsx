
import React from "react";
import { MapPin, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MedSpaListingBanner = () => {
  return (
    <div className="bg-medspa-teal/10 rounded-lg overflow-hidden shadow-sm">
      <div className="px-6 py-10 md:py-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center p-2 bg-medspa-teal/20 rounded-full mb-4">
          <Sparkle className="text-medspa-teal" size={24} />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3">
          Own a Luxury MedSpa in NYC?
        </h3>
        
        <p className="text-gray-700 max-w-2xl mb-6">
          Join Manhattan's most exclusive MedSpa directory. Our curated platform connects discerning clients with premier aesthetic providers across NYC's elite neighborhoods.
        </p>
        
        <Button 
          className="bg-medspa-teal hover:bg-medspa-teal/90 text-white"
          size="lg"
          asChild
        >
          <Link to="/partner-with-us">
            <MapPin className="mr-1" size={18} />
            Add Your MedSpa Listing
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MedSpaListingBanner;
