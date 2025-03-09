
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
import { Star } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-2">
                <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
                  Curated Selection
                </div>
              </div>
              <h2 className="text-2xl font-serif font-medium mb-5">The Definitive Guide to {location.name} MedSpas</h2>
              
              <div className="text-gray-700 space-y-4 mb-6">
                <p>{location.description}</p>
                <p className="text-sm border-l-2 border-medspa-gold/60 pl-4 py-1 italic text-gray-600 my-6">
                  "{location.name} represents the pinnacle of aesthetic excellence, where discerning clients expect nothing less than transformative results in settings of uncompromising luxury."
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center mb-4">
                  <Star size={20} className="text-medspa-gold mr-2" fill="currentColor" />
                  <h3 className="text-xl font-serif font-medium">Editor's Note</h3>
                </div>
                <div className="bg-medspa-blue/20 p-6 rounded-lg text-gray-700">
                  <p className="mb-3">
                    Our team has carefully vetted each MedSpa in {location.name} to ensure they meet our exacting standards for excellence.
                  </p>
                  <p>
                    From state-of-the-art technology to practitioners with impeccable credentials, these establishments represent the gold standard in aesthetic medicine.
                  </p>
                </div>
              </div>
            </div>
            
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetail;
