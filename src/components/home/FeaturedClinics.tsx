
import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type MedSpa } from "@/lib/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ClinicMap from "@/components/clinic/ClinicMap";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/services";

interface FeaturedClinicsProps {
  medSpas: MedSpa[];
}

const FeaturedClinics: React.FC<FeaturedClinicsProps> = ({ medSpas }) => {
  if (!medSpas?.length) {
    return null;
  }

  // Helper function to get service names from ids
  const getServiceNames = (serviceIds: string[]) => {
    return serviceIds
      .map(id => {
        const service = services.find(s => s.id === id || s.slug === id);
        return service ? service.name : null;
      })
      .filter(Boolean)
      .slice(0, 3); // Only show up to 3 services
  };

  return (
    <section className="py-8">
      <div className="medspa-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark">
            Featured Premium MedSpas
          </h2>
          <p className="text-gray-600 hidden md:block">
            Discover our handpicked selection of NYC's top medical spas
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          {medSpas.slice(0, 3).map((spa) => (
            <Card key={spa.id} className="overflow-hidden border shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                {/* Map Section */}
                <div className="relative h-48 md:h-full">
                  <AspectRatio ratio={4/3} className="md:h-full">
                    <ClinicMap clinic={spa} interactive={false} />
                  </AspectRatio>
                </div>
                
                {/* Content Section */}
                <div className="col-span-2 flex flex-col p-5">
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h3 className="text-xl font-serif font-bold text-medspa-dark mb-2 md:mb-0">{spa.name}</h3>
                    <div className="flex items-center">
                      <div className="flex text-medspa-gold mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < Math.floor(spa.rating) ? "currentColor" : "none"} 
                            className={i < Math.floor(spa.rating) ? "text-medspa-gold" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {spa.rating} ({spa.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <MapPin size={16} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{spa.address}</p>
                  </div>
                  
                  {/* Popular Services */}
                  {spa.services && spa.services.length > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <Award size={16} className="text-medspa-gold mr-2" />
                        <p className="text-sm font-medium">Popular Services:</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {getServiceNames(spa.services).map((serviceName, index) => (
                          <Badge key={index} variant="outline" className="bg-medspa-blue/10 text-medspa-teal border-medspa-teal/20">
                            {serviceName}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {spa.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                      <Link to={`/clinics/${spa.slug || spa.id}`}>
                        View Profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
            <Link to="/locations">View All MedSpas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClinics;
