
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getLocationBySlug, getNeighborhoodBySlug } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationHero from "@/components/location/LocationHero";
import LocationCallToAction from "@/components/location/LocationCallToAction";
import LocationPopularServices from "@/components/location/LocationPopularServices";
import NeighborhoodSchema from "@/components/location/NeighborhoodSchema";
import NeighborhoodInsights from "@/components/location/NeighborhoodInsights";
import NeighborhoodServices from "@/components/location/NeighborhoodServices";

const NeighborhoodDetail = () => {
  const { locationSlug, neighborhoodSlug } = useParams<{ locationSlug: string; neighborhoodSlug: string }>();
  
  const location = locationSlug ? getLocationBySlug(locationSlug) : undefined;
  const neighborhood = location && neighborhoodSlug ? 
    getNeighborhoodBySlug(location, neighborhoodSlug) : undefined;
  
  if (!location || !neighborhood) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Neighborhood Not Found</h1>
        <p>The neighborhood you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  return (
    <>
      <NeighborhoodSchema 
        neighborhoodName={neighborhood.name}
        locationName={location.name} 
        description={neighborhood.description} 
      />
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: location.name, href: `/locations/${location.slug}` },
            { label: neighborhood.name, href: `/locations/${location.slug}/${neighborhood.id}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <LocationHero 
              imageUrl={neighborhood.imageUrl}
              name={neighborhood.name}
              medspaCount={Math.floor(location.medspaCount / location.subAreas.length)}
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">MedSpas in {neighborhood.name}</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">{neighborhood.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Typical Clientele</h3>
                <p className="text-gray-700">{neighborhood.clientele}</p>
              </div>
              
              <NeighborhoodServices 
                services={neighborhood.popularServices} 
                neighborhoodName={neighborhood.name}
              />
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <LocationCallToAction locationName={neighborhood.name} />
            
            <LocationPopularServices locationName={neighborhood.name} />
            
            <NeighborhoodInsights 
              neighborhoodName={neighborhood.name}
              locationName={location.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NeighborhoodDetail;
