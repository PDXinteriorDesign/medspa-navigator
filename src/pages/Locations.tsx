
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { locationDetails } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Elite MedSpa Locations | Manhattan, Tribeca, The Hamptons | MedSpasNYC</title>
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
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">NYC MedSpa Destinations</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The definitive guide to New York's most exclusive aesthetic clinics and wellness sanctuaries.
          </p>
          <div className="w-20 h-1 bg-medspa-gold/70 mx-auto mt-8"></div>
        </div>
        
        {/* Featured Locations */}
        <div className="mb-24">
          {locationDetails.map((location, index) => (
            <div 
              key={location.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                gap-8 mb-20 items-center`}
            >
              <div className="md:w-1/2 relative group overflow-hidden rounded-lg">
                <Link to={`/locations/${location.slug}`}>
                  <img 
                    src={location.imageUrl} 
                    alt={location.name} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8">
                      {location.featured && (
                        <div className="flex items-center mb-3">
                          <Star size={16} className="text-medspa-gold mr-2" fill="currentColor" />
                          <span className="text-white text-sm font-medium uppercase tracking-wider">Editor's Selection</span>
                        </div>
                      )}
                      <h2 className="text-3xl font-serif font-bold text-white mb-2">{location.name}</h2>
                      <p className="text-white/90">{location.medspaCount} Curated MedSpas</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="md:w-1/2">
                <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
                  Luxury Destination
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">The Essence of {location.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{location.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-gray-500 uppercase">Signature Experiences</p>
                  <div className="flex flex-wrap gap-2">
                    {location.subAreas.slice(0, 2).map(area => (
                      <span key={area.id} className="bg-medspa-blue/20 text-medspa-dark px-3 py-1 rounded-full text-sm">
                        {area.name}
                      </span>
                    ))}
                    <span className="bg-medspa-blue/20 text-medspa-dark px-3 py-1 rounded-full text-sm">
                      Premium Treatments
                    </span>
                  </div>
                </div>
                
                <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
                  <Link to={`/locations/${location.slug}`}>
                    Explore {location.name} MedSpas
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-medspa-blue/30 to-medspa-teal/30 rounded-lg p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-medium mb-3">
              Stay Informed About NYC's Elite Beauty Scene
            </h3>
            <p className="text-gray-700 mb-6">
              Join our exclusive list to receive invitations to private events, seasonal treatment recommendations, and insights from NYC's top aesthetic experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
              />
              <Button className="bg-medspa-teal hover:bg-medspa-teal/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
