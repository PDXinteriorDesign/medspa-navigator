
import React from "react";
import { StarIcon } from "lucide-react";
import MedSpaCard from "@/components/MedSpaCard";
import { MedSpa } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceMedSpasProps {
  serviceName: string;
  medSpas: MedSpa[];
}

const ServiceMedSpas = ({ serviceName, medSpas }: ServiceMedSpasProps) => {
  return (
    <div className="my-8">
      <h2 className="section-heading mb-6">Top-Rated MedSpas for {serviceName} in NYC</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medSpas.slice(0, 3).map(medSpa => (
          <div key={medSpa.id} className="relative">
            <MedSpaCard medSpa={medSpa} />
          </div>
        ))}
      </div>
      
      {medSpas.length > 3 && (
        <div className="text-center mt-8">
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white font-medium px-6 py-2 rounded-md">
            <Link to="/locations">View All Locations</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceMedSpas;
