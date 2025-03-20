
import React from "react";
import { MedSpa } from "@/lib/types";
import { MapPin, Star, Phone, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClinicHeaderProps {
  clinic: MedSpa;
}

const ClinicHeader = ({ clinic }: ClinicHeaderProps) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-serif font-bold text-medspa-dark">{clinic.name}</h1>
        {clinic.verified && (
          <span className="flex items-center text-medspa-teal bg-medspa-teal/10 px-3 py-1 rounded-full text-sm">
            <ShieldCheck size={16} className="mr-1" /> Verified Listing
          </span>
        )}
      </div>
      
      <div className="flex items-center mb-4">
        <div className="flex text-medspa-gold mr-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              fill={i < Math.floor(clinic.rating) ? "currentColor" : "none"} 
              className={i < Math.floor(clinic.rating) ? "text-medspa-gold" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-lg font-medium">{clinic.rating}</span>
        <span className="text-gray-500 ml-1">({clinic.reviewCount} reviews)</span>
      </div>
      
      <div className="flex items-start mb-4">
        <MapPin size={20} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
        <p className="text-gray-700">{clinic.address}</p>
      </div>
      
      <div className="flex items-start mb-4">
        <Phone size={20} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
        <p className="text-gray-700">212-555-{Math.floor(1000 + Math.random() * 9000)}</p>
      </div>
      
      <div className="flex items-start mb-6">
        <Clock size={20} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
        <div>
          <p className="text-gray-700">Monday - Friday: 9am - 7pm</p>
          <p className="text-gray-700">Saturday: 10am - 6pm</p>
          <p className="text-gray-700">Sunday: Closed</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
        <Button className="bg-medspa-teal hover:bg-medspa-teal/90">
          <ShieldCheck size={18} className="mr-2" />
          Claim This Listing
        </Button>
        <Button variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
          <ExternalLink size={18} className="mr-2" />
          Visit Website
        </Button>
      </div>
    </div>
  );
};

export default ClinicHeader;
