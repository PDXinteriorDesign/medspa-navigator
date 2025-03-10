
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const Locations = () => {
  // Only include the specifically requested locations
  const allLocations = [
    { id: "manhattan", slug: "manhattan", name: "Manhattan", medspaCount: 142 },
    { id: "soho", slug: "manhattan/soho", name: "SoHo", medspaCount: 38 },
    { id: "upper-east-side", slug: "manhattan/upper-east-side", name: "Upper East Side", medspaCount: 45 },
    { id: "tribeca", slug: "tribeca", name: "Tribeca", medspaCount: 28 },
    { id: "midtown", slug: "manhattan/midtown", name: "Midtown", medspaCount: 34 },
    { id: "brooklyn", slug: "brooklyn", name: "Brooklyn", medspaCount: 78 },
    { id: "williamsburg", slug: "williamsburg", name: "Williamsburg", medspaCount: 29 },
    { id: "park-slope", slug: "park-slope", name: "Park Slope", medspaCount: 19 },
    { id: "the-hamptons", slug: "the-hamptons", name: "The Hamptons", medspaCount: 34 }
  ];
  
  return (
    <>
      <Helmet>
        <title>Elite MedSpa Locations | Manhattan, Brooklyn, The Hamptons | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover top MedSpas in NYC's most exclusive neighborhoods including Manhattan, SoHo, Upper East Side, and more. Find luxury treatments in your area." 
        />
      </Helmet>
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations", current: true }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Our Curated MedSpa Destinations
          </h1>
          
          <div className="w-20 h-1 bg-medspa-gold/70 mx-auto mt-8 mb-12"></div>
          
          <div className="space-y-4">
            {allLocations.map((location) => (
              <Link
                key={location.id}
                to={`/locations/${location.slug}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-medspa-teal" size={20} />
                    <h2 className="text-xl font-serif group-hover:text-medspa-teal transition-colors">
                      {location.name}
                    </h2>
                  </div>
                  <span className="text-gray-600">
                    {location.medspaCount} MedSpas
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
