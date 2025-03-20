
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { type LocationDetail } from "@/lib/locationData";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeaturedLocationsProps {
  locations: LocationDetail[];
}

const FeaturedLocations = ({ locations }: FeaturedLocationsProps) => {
  const isMobile = useIsMobile();
  // Check if we have locations
  const hasLocations = locations && locations.length > 0;

  if (!hasLocations) {
    return (
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-center">Our MedSpa Locations</h2>
        <p className="text-gray-600 mb-8">We're currently adding our premium MedSpa locations. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">Our MedSpa Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {locations.map(location => (
          <Link 
            key={location.id}
            to={`/${location.slug}`}
            className="group block"
          >
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-3 md:mb-4">
              <img 
                src={location.imageUrl} 
                alt={location.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={isMobile ? "320" : "400"}
                height={isMobile ? "192" : "256"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-1">
                    <MapPin size={isMobile ? 12 : 14} className="text-white mr-1" />
                    <span className="text-white text-xs font-medium uppercase tracking-wider">NYC Location</span>
                  </div>
                  <h3 className={`text-${isMobile ? 'lg' : 'xl'} font-serif font-bold text-white group-hover:text-medspa-gold transition-colors`}>{location.name}</h3>
                  <div className="flex items-center text-white/80">
                    <span className={`text-${isMobile ? 'xs' : 'sm'}`}>{location.medspaCount} MedSpas</span>
                  </div>
                </div>
              </div>
            </div>
            <p className={`text-gray-700 text-${isMobile ? 'xs' : 'sm'} line-clamp-2`}>{location.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLocations;
