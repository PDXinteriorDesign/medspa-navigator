
import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceCallToActionProps {
  serviceName: string;
}

const ServiceCallToAction = ({ serviceName }: ServiceCallToActionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">Looking for {serviceName} providers near you?</h3>
      <p className="text-gray-700 text-sm mb-4">
        Find the top-rated medical spas offering {serviceName} in your area of NYC.
      </p>
      <div className="space-y-3">
        <Button asChild className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
          <a href={`tel:+1234567890`}>Call to Book Now</a>
        </Button>
        <Button variant="outline" className="w-full border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
          Get Price Quote
        </Button>
      </div>
    </div>
  );
};

export default ServiceCallToAction;
