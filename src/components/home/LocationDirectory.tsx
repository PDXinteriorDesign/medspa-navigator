
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { medSpas } from "@/lib/medspas";
import { MedSpa } from "@/lib/types";

interface LocationDirectoryProps {
  featuredMedSpas: MedSpa[];
}

const LocationDirectory = ({ featuredMedSpas = [] }: LocationDirectoryProps) => {
  // Calculate total MedSpas in the directory
  const totalMedSpas = medSpas.length;

  return (
    <section className="py-16">
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-10">
          Find a Med Spa by Location in NYC
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Manhattan Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4">Best Med Spas in Manhattan</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Manhattan Beauty Locations</p>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </div>
              </li>
            </ul>
            <Link to="/manhattan" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              See Manhattan Locations
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Brooklyn Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4">Top Med Spas in Brooklyn</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Brooklyn Beauty Locations</p>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </div>
              </li>
            </ul>
            <Link to="/brooklyn" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              Find Med Spas in Brooklyn
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* The Hamptons Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4">Highly Rated Med Spas in The Hamptons</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">The Hamptons Beauty Locations</p>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </div>
              </li>
            </ul>
            <Link to="/the-hamptons" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              Search Med Spas in The Hamptons
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDirectory;
