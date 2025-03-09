
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { locationDetails } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>NYC MedSpa Locations | Manhattan, Tribeca, The Hamptons | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover top MedSpas in NYC's most exclusive neighborhoods including Manhattan, Tribeca, and The Hamptons. Find luxury treatments in your area." 
        />
      </Helmet>
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations", current: true }
          ]} 
        />
        
        <h1 className="page-heading mb-8">NYC MedSpa Locations</h1>
        
        <p className="text-gray-700 mb-10 max-w-3xl">
          New York City offers world-class medical spa services across its diverse neighborhoods. 
          From Manhattan's luxury clinics to Brooklyn's boutique aesthetic studios, discover the 
          perfect location for your beauty and wellness needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationDetails.map(location => (
            <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
              <Link to={`/locations/${location.slug}`} className="group">
                <div className="relative">
                  <img 
                    src={location.imageUrl} 
                    alt={location.name} 
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-medium p-4">{location.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm mb-3">{location.shortDescription}</p>
                  <div className="flex items-center text-medspa-teal font-medium text-sm">
                    <MapPin size={16} className="mr-1" /> 
                    <span>{location.medspaCount} MedSpas in this area</span>
                  </div>
                </div>
              </Link>
              
              {/* Sub-areas */}
              <div className="mt-auto p-4 pt-0">
                <p className="text-sm text-gray-500 mb-2">Popular neighborhoods:</p>
                <div className="space-y-1.5">
                  {location.subAreas.slice(0, 2).map(subArea => (
                    <Link 
                      key={subArea.id}
                      to={`/locations/${location.slug}#${subArea.id}`}
                      className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
                    >
                      <ArrowRight size={12} className="mr-1.5" />
                      {subArea.name}
                    </Link>
                  ))}
                </div>
                <Link 
                  to={`/locations/${location.slug}`}
                  className="inline-block text-sm font-medium text-medspa-teal hover:underline mt-3"
                >
                  View all neighborhoods
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
