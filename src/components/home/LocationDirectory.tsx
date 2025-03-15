
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import MedSpaCard from "@/components/MedSpaCard";
import { MedSpa } from "@/lib/data";

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
                  <p className="font-medium">Glow Aesthetics NYC</p>
                  <p className="text-sm text-gray-600">Botox, Fillers & Anti-Aging Experts</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Manhattan Beauty Clinic</p>
                  <p className="text-sm text-gray-600">Laser Skin Resurfacing & Injectable Specialists</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Fifth Avenue MedSpa</p>
                  <p className="text-sm text-gray-600">Luxury Facials & Non-Surgical Lifts</p>
                </div>
              </li>
            </ul>
            <Link to="/locations/manhattan" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              See All Manhattan Med Spas
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
                  <p className="font-medium">Brooklyn MedSpa Lounge</p>
                  <p className="text-sm text-gray-600">Laser Skin Treatments & Hair Removal</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Williamsburg Aesthetics</p>
                  <p className="text-sm text-gray-600">CoolSculpting, Emsculpt & Body Sculpting</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Borough Park Beauty Hub</p>
                  <p className="text-sm text-gray-600">Hydrafacials & PRP Microneedling</p>
                </div>
              </li>
            </ul>
            <Link to="/locations/brooklyn" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              Find Med Spas in Brooklyn
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Upper East Side Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4">Highly Rated Med Spas in the Upper East Side</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Park Avenue Skin Clinic</p>
                  <p className="text-sm text-gray-600">VIP Botox & Skin Tightening</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Luxury Aesthetics UES</p>
                  <p className="text-sm text-gray-600">Microneedling, PRP & Facials</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Skin Perfection NYC</p>
                  <p className="text-sm text-gray-600">Laser Skin Rejuvenation & RF Treatments</p>
                </div>
              </li>
            </ul>
            <Link to="/locations/upper-east-side" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
              Search Med Spas in Upper East Side
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredMedSpas.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationDirectory;
