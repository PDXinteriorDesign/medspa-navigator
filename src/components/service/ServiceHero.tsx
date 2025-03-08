
import React from "react";

interface ServiceHeroProps {
  imageUrl: string;
  name: string;
  medSpasCount: number;
}

const ServiceHero = ({ imageUrl, name, medSpasCount }: ServiceHeroProps) => {
  return (
    <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{name}</h1>
          <p className="text-white/90">{medSpasCount} MedSpas offering this service in NYC</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
