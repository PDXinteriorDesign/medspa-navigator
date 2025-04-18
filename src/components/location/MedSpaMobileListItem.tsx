
import React from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import { getClinicLocations } from "@/utils/locationUtils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Sparkles, Info, ShieldCheck } from "lucide-react";
import ClinicMap from "@/components/clinic/ClinicMap";

interface MedSpaMobileListItemProps {
  medSpa: MedSpa;
  onClaimClick: (clinic: MedSpa) => void;
  treatmentName?: string;
}

const MedSpaMobileListItem = ({ medSpa, onClaimClick, treatmentName }: MedSpaMobileListItemProps) => {
  const locations = getClinicLocations(medSpa.address, medSpa.location);
  const clinicLink = `/${locations[0]}/${medSpa.slug || medSpa.id}`;

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col">
        <div className="h-[180px]"> {/* Fixed height for map container on mobile */}
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
        </div>
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
            onClick={() => onClaimClick(medSpa)}
          >
            <ShieldCheck size={14} className="mr-1" />
            Claim Listing
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default MedSpaMobileListItem;
