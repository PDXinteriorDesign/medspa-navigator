
import React from "react";
import LocationSignatureTreatments from "./LocationSignatureTreatments";
import LocationTimingInfo from "./LocationTimingInfo";
import LocationEditorNote from "./LocationEditorNote";

interface LocationMainContentProps {
  locationName: string;
  description: string;
}

const LocationMainContent = ({ locationName, description }: LocationMainContentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <div className="mb-6">
        <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
          Curator's Selection
        </div>
        <h2 className="text-2xl font-serif font-medium mb-5">The Definitive Guide to {locationName} MedSpas</h2>
        
        <div className="text-gray-700 space-y-4">
          <p className="leading-relaxed">{description}</p>
          <p className="text-sm border-l-2 border-medspa-gold/60 pl-4 py-1 italic text-gray-600 my-6">
            "{locationName} represents the pinnacle of aesthetic excellence, where discerning clients expect nothing less than transformative results in settings of uncompromising luxury."
          </p>
        </div>
      </div>
      
      <LocationSignatureTreatments locationName={locationName} />
      
      <LocationTimingInfo locationName={locationName} />
      
      <LocationEditorNote locationName={locationName} />
    </div>
  );
};

export default LocationMainContent;
