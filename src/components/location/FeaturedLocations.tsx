
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { type LocationDetail } from "@/lib/locationData";

interface FeaturedLocationsProps {
  locations: LocationDetail[];
}

const FeaturedLocations = ({ locations }: FeaturedLocationsProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map(location => (
          <Link 
            key={location.id}
            to={`/locations/${location.slug}`}
            className="group block"
          >
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <img 
                src={location.imageUrl} 
                alt={location.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex items-center mb-1">
                    <Star size={14} className="text-medspa-gold mr-1" fill="currentColor" />
                    <span className="text-white text-xs font-medium uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-medspa-gold transition-colors">{location.name}</h3>
                  <div className="flex items-center text-white/80">
                    <span className="text-sm">{location.medspaCount} MedSpas</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm line-clamp-2">{location.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLocations;
