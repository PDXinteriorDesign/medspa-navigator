
import { useParams } from "react-router-dom";
import { getLocationBySlug } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationSchema from "@/components/location/LocationSchema";
import LocationHero from "@/components/location/LocationHero";
import LocationSubAreas from "@/components/location/LocationSubAreas";
import LocationCallToAction from "@/components/location/LocationCallToAction";
import LocationPopularServices from "@/components/location/LocationPopularServices";
import LocationInsights from "@/components/location/LocationInsights";

const LocationDetail = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug ? getLocationBySlug(locationSlug) : undefined;
  
  if (!location) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Location Not Found</h1>
        <p>The location you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  const locationInsights = [
    {
      title: `Average Treatment Costs`,
      description: `${location.name} medspas typically offer services ranging from $150-800 per session, with premium services commanding higher prices.`
    },
    {
      title: `Best Times to Visit`,
      description: `For the best availability at ${location.name} medspas, consider booking mid-week appointments or early morning sessions.`
    },
    {
      title: `Seasonal Promotions`,
      description: `Many ${location.name} aesthetic clinics offer special pricing in January/February and September after peak seasons.`
    },
    {
      title: `Membership Options`,
      description: `Several ${location.name} medspas offer membership programs that provide discounted treatments and priority booking.`
    }
  ];
  
  return (
    <>
      <LocationSchema name={location.name} description={location.description} />
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: location.name, href: `/locations/${location.slug}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <LocationHero 
              imageUrl={location.imageUrl}
              name={location.name}
              medspaCount={location.medspaCount}
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">About {location.name} MedSpas</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">{location.description}</p>
              </div>
            </div>
            
            <LocationSubAreas 
              locationName={location.name}
              subAreas={location.subAreas}
            />
          </div>
          
          <div className="mt-8 md:mt-0">
            <LocationCallToAction locationName={location.name} />
            
            <LocationPopularServices locationName={location.name} />
            
            <LocationInsights 
              locationName={location.name}
              insights={locationInsights}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetail;
