
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getLocationBySlug } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationSchema from "@/components/location/LocationSchema";
import LocationHero from "@/components/location/LocationHero";
import LocationSubAreas from "@/components/location/LocationSubAreas";
import LocationCallToAction from "@/components/location/LocationCallToAction";
import LocationPopularServices from "@/components/location/LocationPopularServices";
import LocationInsights from "@/components/location/LocationInsights";
import LocationMainContent from "@/components/location/LocationMainContent";
import { Button } from "@/components/ui/button";

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
  
  // Generate location-specific tagline
  const getLocationTagline = (locationName: string) => {
    const taglines: Record<string, string> = {
      "Manhattan": "The Epicenter of Luxury Aesthetics in New York City",
      "Tribeca": "Discreet Luxury and Unparalleled Aesthetic Excellence",
      "The Hamptons": "Seasonal Splendor in New York's Most Prestigious Retreat"
    };
    
    return taglines[locationName] || "Where Elite Beauty and Wellness Converge";
  };
  
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
      <Helmet>
        <title>{location.name} MedSpas | Luxury Aesthetic Directory | MedSpasNYC</title>
        <meta 
          name="description" 
          content={`Discover the most exclusive MedSpas in ${location.name}. Experience luxury aesthetic treatments in New York's premier destination for beauty and wellness.`} 
        />
      </Helmet>
      
      <LocationSchema name={location.name} description={location.description} />
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: location.name, href: `/locations/${location.slug}`, current: true }
          ]} 
        />
        
        <LocationHero 
          imageUrl={location.imageUrl}
          name={location.name}
          medspaCount={location.medspaCount}
          tagline={getLocationTagline(location.name)}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <LocationMainContent 
              locationName={location.name}
              description={location.description}
            />
            
            <LocationSubAreas 
              locationName={location.name}
              locationSlug={location.slug}
              subAreas={location.subAreas}
            />
          </div>
          
          <div className="mt-0 md:mt-0">
            <LocationCallToAction locationName={location.name} />
            
            <LocationPopularServices locationName={location.name} />
            
            <LocationInsights 
              locationName={location.name}
              insights={locationInsights}
            />
            
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">Aesthetic Concierge</h3>
              <p className="text-sm text-gray-700 mb-4">
                Need personalized guidance to find the perfect {location.name} MedSpa for your specific needs?
              </p>
              <Button className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                Request Personalized Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetail;
