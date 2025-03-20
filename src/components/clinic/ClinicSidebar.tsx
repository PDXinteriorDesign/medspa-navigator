
import React from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ChevronRight } from "lucide-react";

interface ClinicSidebarProps {
  clinic: MedSpa;
  locationSlug: string;
}

const ClinicSidebar = ({ clinic, locationSlug }: ClinicSidebarProps) => {
  return (
    <div className="md:sticky md:top-24 space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">Claim This Listing</h3>
        <p className="text-gray-700 mb-4">Do you own or manage {clinic.name}? Claim this listing to update your business information and access premium features.</p>
        <Button className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
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
  );
};

export default ClinicSidebar;
