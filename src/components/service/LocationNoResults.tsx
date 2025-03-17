
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LocationNoResultsProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
}

const LocationNoResults = ({ serviceName, serviceSlug, locationName }: LocationNoResultsProps) => {
  return (
    <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20 mb-8">
      <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
      <p className="text-gray-700 mb-5">
        Our curators are currently finalizing our selection of premium {serviceName} providers in {locationName}.
      </p>
      <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
        <Link to={`/treatments/${serviceSlug}`}>Explore All {serviceName} Specialists</Link>
      </Button>
    </div>
  );
};

export default LocationNoResults;
