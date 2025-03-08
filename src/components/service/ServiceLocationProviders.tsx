
import React from "react";
import { MapPin, Star } from "lucide-react";
import { LocationProvider } from "@/utils/locationContent";

interface ServiceLocationProvidersProps {
  locationName: string;
  serviceName: string;
  providers: LocationProvider[];
}

const ServiceLocationProviders = ({ locationName, serviceName, providers }: ServiceLocationProvidersProps) => {
  if (providers.length === 0) return null;
  
  return (
    <div className="mt-8 mb-6">
      <h3 className="text-lg font-medium mb-3">Popular {locationName} {serviceName} Providers</h3>
      <div className="bg-medspa-blue/20 p-5 rounded-lg">
        <ul className="space-y-4">
          {providers.map((provider, index) => (
            <li key={index} className="flex items-start">
              <MapPin size={18} className="text-medspa-teal mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium">{provider.name}</h4>
                <p className="text-sm text-gray-600">{provider.address}</p>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={12} fill={i < provider.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">{provider.reviewCount} reviews</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceLocationProviders;
