
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SubArea } from "@/lib/locationData";

interface LocationSubAreasProps {
  locationName: string;
  locationSlug: string;
  subAreas: SubArea[];
}

const LocationSubAreas = ({ locationName, locationSlug, subAreas }: LocationSubAreasProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-medium mb-6">{locationName} Neighborhoods</h2>
      
      <div className="space-y-8">
        {subAreas.map((subArea) => (
          <div id={subArea.id} key={subArea.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={subArea.imageUrl} 
                  alt={subArea.name} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium mb-2">{subArea.name}</h3>
                <p className="text-gray-700 mb-4">{subArea.description}</p>
                
                <div className="mb-4">
                  <p className="font-medium text-sm text-gray-500">TYPICAL CLIENTELE:</p>
                  <p className="text-gray-700">{subArea.clientele}</p>
                </div>
                
                <div>
                  <p className="font-medium text-sm text-gray-500">POPULAR SERVICES:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {subArea.popularServices.map((service, index) => (
                      <span 
                        key={index} 
                        className="bg-medspa-blue/30 text-medspa-dark px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <ArrowRight size={16} className="text-medspa-teal" />
                      <Link to="/medspas" className="text-medspa-teal hover:underline">
                        Find MedSpas in {subArea.name}
                      </Link>
                    </div>
                    <Link 
                      to={`/locations/${locationSlug}/${subArea.id}`}
                      className="text-medspa-teal hover:underline flex items-center ml-auto"
                    >
                      View {subArea.name} Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSubAreas;
