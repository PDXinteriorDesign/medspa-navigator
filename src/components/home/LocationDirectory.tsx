
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import MedSpaCard from "@/components/MedSpaCard";
import { MedSpa } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface LocationDirectoryProps {
  featuredMedSpas: MedSpa[];
}

const LocationDirectory = ({ featuredMedSpas }: LocationDirectoryProps) => {
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
          
          {/* SoHo Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4">Highly Rated Med Spas in SoHo</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">SoHo Beauty Locations</p>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </div>
              </li>
            </ul>
            <Link to="/soho" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              Search Med Spas in SoHo
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        {featuredMedSpas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredMedSpas.map(medSpa => (
              <MedSpaCard key={medSpa.id} medSpa={medSpa} />
            ))}
          </div>
        ) : (
          <div className="bg-medspa-blue/20 p-8 rounded-lg text-center">
            <h3 className="text-xl font-medium mb-3">Premium MedSpa Profiles Coming Soon</h3>
            <p className="text-gray-700 mb-5">
              We're currently adding our curated selection of premium MedSpa providers across NYC.
            </p>
            <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
              <Link to="/locations">Browse Locations</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationDirectory;
