
import React from "react";
import { Link } from "react-router-dom";
import { MedSpa } from "@/lib/types";
import MedSpaCard from "@/components/MedSpaCard";
import { Button } from "@/components/ui/button";

interface ServiceMedSpasProps {
  serviceName: string;
  medSpas: MedSpa[];
}

const ServiceMedSpas = ({ serviceName, medSpas }: ServiceMedSpasProps) => {
  // Add debug logging to see the medSpas array and its contents
  console.log(`ServiceMedSpas: Found ${medSpas.length} medSpas offering ${serviceName}`);
  if (medSpas.length > 0) {
    console.log("First medspa in list:", medSpas[0].name, "with services:", medSpas[0].services);
  }

  if (!medSpas || medSpas.length === 0) {
    return (
      <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20 mb-8">
        <h3 className="text-xl font-medium mb-3">Coming Soon</h3>
        <p className="text-gray-700 mb-5">
          We're currently adding our curated selection of premium {serviceName} providers in NYC.
        </p>
        <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
          <Link to="/locations">Browse Locations</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif mb-6">
        Top-Rated {serviceName} Providers in NYC
      </h2>
      <div className="space-y-6">
        {medSpas.map(medSpa => (
          <MedSpaCard key={medSpa.id} medSpa={medSpa} />
        ))}
      </div>
      {medSpas.length > 3 && (
        <div className="text-center mt-8">
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <Link to={`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}>
              View All {serviceName} Providers
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceMedSpas;
