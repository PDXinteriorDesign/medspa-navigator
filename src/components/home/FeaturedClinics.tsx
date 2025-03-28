
import React from "react";
import { Link } from "react-router-dom";
import { Star, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type MedSpa } from "@/lib/types";

interface FeaturedClinicsProps {
  medSpas: MedSpa[];
}

const FeaturedClinics: React.FC<FeaturedClinicsProps> = ({ medSpas }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (!medSpas.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="medspa-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark">
            Featured Premium MedSpas
          </h2>
          <div className="hidden md:flex">
            <Button 
              variant="outline" 
              size="icon" 
              className="mr-2" 
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide snap-x"
        >
          {medSpas.map((spa) => (
            <Card 
              key={spa.id} 
              className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-start"
            >
              <div className="relative h-44 overflow-hidden rounded-t-lg">
                <img 
                  src={spa.imageUrl} 
                  alt={spa.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-3 w-full">
                    <h3 className="text-white font-medium truncate">{spa.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-medspa-gold mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill="currentColor" 
                            className={i < Math.floor(spa.rating) ? "text-medspa-gold" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-white text-xs">
                        {spa.rating} ({spa.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start mb-3">
                  <MapPin size={16} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700 line-clamp-2">{spa.address}</p>
                </div>
                <Link 
                  to={`/clinics/${spa.slug}`} 
                  className="text-sm font-medium text-medspa-teal hover:underline flex items-center"
                >
                  View Profile
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
            <Link to="/locations">View All MedSpas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClinics;
