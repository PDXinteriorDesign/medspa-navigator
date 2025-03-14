
import React from "react";
import { StarIcon } from "lucide-react";
import MedSpaCard from "@/components/MedSpaCard";
import { MedSpa } from "@/lib/data";

interface ServiceMedSpasProps {
  serviceName: string;
  medSpas: MedSpa[];
}

const ServiceMedSpas = ({ serviceName, medSpas }: ServiceMedSpasProps) => {
  return (
    <>
      <h2 className="section-heading mt-8">Top-Rated MedSpas for {serviceName} in NYC</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {medSpas.slice(0, 3).map(medSpa => (
          <div key={medSpa.id} className="relative">
            {medSpa.featured && (
              <div className="absolute top-4 right-4 bg-medspa-gold text-white text-xs font-medium px-2 py-1 rounded-full z-10 flex items-center">
                <StarIcon size={12} className="mr-1" />
                Featured
              </div>
            )}
            <MedSpaCard medSpa={medSpa} />
          </div>
        ))}
        
        {medSpas.length > 3 && (
          <div className="text-center">
            <a href="/locations" className="inline-block bg-medspa-teal hover:bg-medspa-teal/90 text-white font-medium px-4 py-2 rounded-md">
              View All Locations
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceMedSpas;
