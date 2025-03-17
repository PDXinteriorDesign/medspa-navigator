
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, MapPin, Sparkles, CalendarDays, Info, Phone, CreditCard } from "lucide-react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";

interface MedSpaListProps {
  medSpas: MedSpa[];
  locationName: string;
  treatmentName?: string;
}

const MedSpaList = ({ medSpas, locationName, treatmentName }: MedSpaListProps) => {
  if (!medSpas || medSpas.length === 0) {
    return (
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-xl font-medium mb-3">No MedSpas Found</h3>
        <p>We're currently updating our {treatmentName ? `${treatmentName} in ` : ''}{locationName} MedSpa listings.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {medSpas.map((medSpa) => (
        <Card key={medSpa.id} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 flex flex-col">
              <AspectRatio ratio={1/1} className="h-full">
                <img 
                  src={medSpa.imageUrl} 
                  alt={medSpa.name} 
                  className="h-full w-full object-cover" 
                />
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
              <CardFooter className="flex py-3 pr-6">
                <div className="flex items-center">
                  <Button variant="outline" className="text-medspa-teal border-medspa-teal hover:bg-medspa-teal/10 mr-4" asChild>
                    <Link to={`/${locationName.toLowerCase()}/${medSpa.id}`}>
                      <Info size={16} className="mr-2" />
                      View Additional Information
                    </Link>
                  </Button>
                  <Button className="bg-medspa-teal hover:bg-medspa-teal/90">
                    <CalendarDays size={16} className="mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MedSpaList;
