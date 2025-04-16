
import React from "react";

interface FillersLocationSeoContentProps {
  locationName: string;
}

const FillersLocationSeoContent = ({ locationName }: FillersLocationSeoContentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-serif font-medium mb-4">Dermal Fillers in {locationName}</h2>
      
      <div className="prose prose-slate max-w-none text-gray-700">
        <p>
          Looking for premium <strong>dermal fillers in {locationName}</strong>? Our curated selection of medical spas 
          offers the highest quality injectable treatments administered by board-certified professionals. 
          Each {locationName} provider specializes in natural-looking results that enhance your 
          features without appearing overdone.
        </p>
        
        <h3 className="text-xl font-serif font-medium mt-6 mb-3">Why Choose {locationName} for Dermal Fillers</h3>
        
        <p>
          {locationName} is home to some of New York's most skilled aesthetic professionals with extensive 
          experience in facial anatomy and advanced injection techniques. Browse our list of 
          <strong> dermal filler specialists in {locationName}</strong> below and book your consultation today.
        </p>
      </div>
    </div>
  );
};

export default FillersLocationSeoContent;
