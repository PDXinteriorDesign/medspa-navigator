
import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceLocationNoResultsProps {
  serviceName: string;
  locationName: string;
  serviceSlug: string;
}

const ServiceLocationNoResults = ({ 
  serviceName, 
  locationName,
  serviceSlug
}: ServiceLocationNoResultsProps) => {
  return (
    <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20">
      <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
      <p className="text-gray-700 mb-5">
        Our curators are currently finalizing our selection of premium {serviceName} providers in {locationName}.
      </p>
      <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
        <a href={`/services/${serviceSlug}`}>Explore All {serviceName} Specialists</a>
      </Button>
    </div>
  );
};

export default ServiceLocationNoResults;
