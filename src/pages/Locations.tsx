
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Sparkle } from "lucide-react";
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
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Our Curated MedSpa Destinations
          </h1>
          
          <div className="w-20 h-1 bg-medspa-gold/70 mx-auto mt-8 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {allLocations.map((location) => (
              <Link
                key={location.id}
                to={`/locations/${location.slug}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group subtle-hover"
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
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-4">
              <Sparkle className="text-medspa-gold mr-2" size={20} />
              <h2 className="text-2xl font-serif">The Elite MedSpa Experience</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                The goal of our curated luxury MedSpas is to provide an exceptional environment where cutting-edge aesthetic treatments meet unparalleled comfort and personalized care. These exclusive sanctuaries offer more than just beauty enhancements—they deliver transformative experiences tailored to discerning clients who expect nothing less than excellence.
              </p>
              
              <p>
                Unlike conventional beauty services, our MedSpas combine medical-grade technology with spa-like ambiance, creating spaces where science and luxury coexist. Each location is carefully selected based on its commitment to outstanding results, premium facilities, and exceptional client care. The value of experiencing these treatments in such meticulously designed environments cannot be overstated.
              </p>
              
              <p>
                Many seeking aesthetic improvements struggle to find providers they can truly trust with their appearance and wellbeing. At our featured MedSpas, every treatment is administered by highly qualified professionals with specialized training and expertise in their field. This level of specialized care, coupled with state-of-the-art equipment and techniques, ensures safe, effective, and natural-looking results.
              </p>
              
              <p className="italic border-l-3 border-medspa-gold/60 pl-4 py-1">
                "The distinction between an ordinary aesthetic procedure and a truly exceptional MedSpa experience lies in the artistry of the providers, the quality of the environment, and the personalized attention given to each client's unique needs and desires."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
