
import { useMemo } from "react";
import { locations } from "@/lib/locations";
import { locationDetails } from "@/lib/locationData";
import { useIsMobile } from "@/hooks/use-mobile";
import SearchBar from "./search/SearchBar";
import HeroActions from "./HeroActions";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const allLocations = useMemo(() => {
    const combinedLocations = [...locationDetails.map(location => ({
      id: location.id,
      name: location.name,
      slug: location.slug
    }))];
    
    locations.forEach(location => {
      if (!combinedLocations.some(loc => loc.id === location.id || loc.slug === location.id)) {
        combinedLocations.push({
          id: location.id,
          name: location.name,
          slug: location.id
        });
      }
    });
    
    return combinedLocations;
  }, []);

  return (
    <section className="relative bg-[#0A3D62] py-20">
      <div className="medspa-container mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Find the Best MedSpas in NYC
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Discover top-rated medical spas in New York City offering premium beauty and wellness treatments.
          </p>
          
          <SearchBar allLocations={allLocations} />
          
          <HeroActions />
        </div>
      </div>
      {!isMobile && (
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full hidden md:block" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1581182815808-b6eb627a8798?q=80&w=800&auto=format&fit=crop')",
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#0A3D62]/40 mix-blend-multiply"></div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
