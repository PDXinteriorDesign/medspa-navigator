import { Helmet } from "react-helmet";
import { useState } from "react";
import { locationDetails } from "@/lib/locationData";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationSearch from "@/components/location/LocationSearch";
import LocationDirectory from "@/components/location/LocationDirectory";
import FeaturedLocations from "@/components/location/FeaturedLocations";

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
          
          <LocationSearch 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>
        
        <LocationDirectory 
          groupedLocations={groupedLocations}
          alphabet={alphabet}
          searchTerm={searchTerm}
          filteredLocations={filteredLocations}
        />
        
        <FeaturedLocations locations={featuredLocations} />
      </div>
    </>
  );
};

export default Locations;
