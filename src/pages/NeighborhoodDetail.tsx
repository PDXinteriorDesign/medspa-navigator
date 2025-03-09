
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getLocationBySlug, getNeighborhoodBySlug } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationHero from "@/components/location/LocationHero";
import LocationCallToAction from "@/components/location/LocationCallToAction";
import LocationPopularServices from "@/components/location/LocationPopularServices";
import LocationWhyVisit from "@/components/location/LocationWhyVisit";
import NeighborhoodSchema from "@/components/location/NeighborhoodSchema";
import NeighborhoodInsights from "@/components/location/NeighborhoodInsights";
import NeighborhoodServices from "@/components/location/NeighborhoodServices";
import { MapPin, Star } from "lucide-react";

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
  
  // Generate a luxury tagline for the hero
  const getNeighborhoodTagline = (neighborhoodName: string, locationName: string) => {
    const taglines: Record<string, string> = {
      "Upper East Side": "Where Timeless Elegance Meets Cutting-Edge Aesthetics",
      "SoHo": "The Epicenter of Trendsetting Beauty Innovations",
      "Upper West Side": "Holistic Wellness in Manhattan's Most Prestigious Setting",
      "Midtown": "Luxury Rejuvenation for Manhattan's Discerning Professionals",
      "Chelsea": "Artful Aesthetics for the Creative Elite",
      "Tribeca Central": "New York's Most Exclusive Aesthetic Destination",
      "East Hampton": "The Ultimate Luxury Retreat for Aesthetic Connoisseurs",
      "Southampton": "Sophisticated Beauty Services for the Hampton's Elite",
      "Montauk": "Beachside Luxury Aesthetics at the Edge of Long Island",
      "Bridgehampton / Sag Harbor": "Intimate Luxury in the Heart of the Hamptons"
    };
    
    return taglines[neighborhoodName] || `${locationName}'s Premier Destination for Luxury Aesthetics`;
  };
  
  const tagline = getNeighborhoodTagline(neighborhood.name, location.name);
  
  return (
    <>
      <Helmet>
        <title>{neighborhood.name} MedSpas | Luxury Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content={`Discover the most exclusive MedSpas in ${neighborhood.name}. Experience luxury aesthetic treatments tailored to ${neighborhood.name}'s discerning clientele.`} 
        />
      </Helmet>
      
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
        
        <LocationHero 
          imageUrl={neighborhood.imageUrl}
          name={neighborhood.name}
          medspaCount={Math.floor(location.medspaCount / location.subAreas.length)}
          tagline={tagline}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-2">
                <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
                  Editor's Selection
                </div>
              </div>
              <h2 className="text-2xl font-serif font-medium mb-5">The Definitive Guide to {neighborhood.name} MedSpas</h2>
              
              <div className="text-gray-700 space-y-4 mb-8">
                <p>{neighborhood.description}</p>
                <p className="text-sm border-l-2 border-medspa-gold/60 pl-4 py-1 italic text-gray-600 my-6">
                  "{neighborhood.name} has emerged as one of New York's most prestigious destinations for aesthetic excellence, where discerning clients seek treatments that combine clinical expertise with an unparalleled luxury experience."
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-medium mb-3">Clientele</h3>
                <div className="flex items-start">
                  <MapPin size={18} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{neighborhood.clientele}</p>
                </div>
              </div>
              
              <NeighborhoodServices 
                services={neighborhood.popularServices} 
                neighborhoodName={neighborhood.name}
              />
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex items-center mb-4">
                  <Star size={20} className="text-medspa-gold mr-2" fill="currentColor" />
                  <h3 className="text-xl font-serif font-medium">Why Our Experts Love This Area</h3>
                </div>
                <div className="bg-medspa-blue/20 p-6 rounded-lg text-gray-700">
                  <p className="mb-3">
                    {neighborhood.name} has established itself as a premier destination for those seeking aesthetic excellence in a setting that epitomizes luxury.
                  </p>
                  <p>
                    The discerning practitioners in this area are known for their meticulous attention to detail, personalized treatment plans, and access to cutting-edge technologies often before they're available elsewhere in the city.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-0 md:mt-0">
            <LocationCallToAction locationName={neighborhood.name} />
            <LocationWhyVisit locationName={neighborhood.name} />
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
