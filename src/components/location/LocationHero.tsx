
import React from "react";

interface LocationHeroProps {
  imageUrl: string;
  name: string;
  medspaCount: number;
  tagline?: string;
}

const LocationHero = ({ imageUrl, name, medspaCount, tagline }: LocationHeroProps) => {
  return (
    <div className="relative h-72 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end">
        <div className="p-6 md:p-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 tracking-tight">{name}</h1>
            <p className="text-white/90 text-lg md:text-xl font-light mb-3">
              {tagline || `Where New York's Elite Experience Aesthetic Excellence`}
            </p>
            <div className="flex items-center">
              <span className="inline-block h-0.5 w-10 bg-medspa-gold mr-3"></span>
              <p className="text-white/80 text-sm">{medspaCount} Curated MedSpas in this exclusive locale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHero;
