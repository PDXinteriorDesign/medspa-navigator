
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Star, Search } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { locationDetails } from "@/lib/locationData";

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Group locations by first letter for the directory style
  const groupedLocations = locationDetails.reduce((acc, location) => {
    const firstLetter = location.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(location);
    return acc;
  }, {} as Record<string, typeof locationDetails>);
  
  // Get all unique first letters and sort them
  const alphabet = Object.keys(groupedLocations).sort();
  
  // Filter locations based on search term
  const filteredLocations = searchTerm 
    ? locationDetails.filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : locationDetails;
  
  // Get featured locations
  const featuredLocations = locationDetails.filter(location => location.featured);
  
  return (
    <>
      <Helmet>
        <title>Elite MedSpa Locations | Manhattan, Brooklyn, The Hamptons | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover top MedSpas in NYC's most exclusive neighborhoods including Manhattan, SoHo, Upper East Side, and more. Find luxury treatments in your area." 
        />
      </Helmet>
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations", current: true }
          ]} 
        />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">NYC MedSpa Destinations</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The definitive guide to New York's most exclusive aesthetic clinics and wellness sanctuaries.
          </p>
          <div className="w-20 h-1 bg-medspa-gold/70 mx-auto mt-8 mb-10"></div>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search locations..."
                className="pl-10 py-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Location Directory with Alphabet Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-serif font-medium mb-6">All Locations</h2>
          
          {/* Alphabet Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 pb-4">
            {alphabet.map(letter => (
              <a 
                key={letter} 
                href={`#section-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-medspa-teal hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
          
          {/* Directory Listing */}
          {searchTerm ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map(location => (
                <Link 
                  key={location.id}
                  to={`/locations/${location.slug}`}
                  className="flex items-center p-3 rounded-md hover:bg-gray-50"
                >
                  <MapPin size={16} className="text-medspa-teal mr-2" />
                  <span>{location.name}</span>
                  <span className="ml-auto text-sm text-gray-500">{location.medspaCount} MedSpas</span>
                </Link>
              ))}
            </div>
          ) : (
            alphabet.map(letter => (
              <div key={letter} id={`section-${letter}`} className="mb-8">
                <h3 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">{letter}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedLocations[letter].map(location => (
                    <Link 
                      key={location.id}
                      to={`/locations/${location.slug}`}
                      className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <MapPin size={16} className="text-medspa-teal mr-2" />
                      <span className="font-medium">{location.name}</span>
                      <span className="ml-auto text-sm text-gray-500">{location.medspaCount} MedSpas</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Featured Locations */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map(location => (
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
