
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medSpas.slice(0, 3).map(medSpa => (
          <div key={medSpa.id} className="relative">
            <MedSpaCard medSpa={medSpa} />
          </div>
        ))}
        
        {medSpas.length > 3 && (
          <div className="text-center md:col-span-2 lg:col-span-3 mt-4">
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
