
import React from "react";

interface ServiceHeroProps {
  imageUrl: string;
  name: string;
  medSpasCount: number;
}

const ServiceHero = ({ imageUrl, name, medSpasCount }: ServiceHeroProps) => {
  return (
    <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover blur-[2px]" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
        <div className="p-6 md:p-10 w-full luxury-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 tracking-tight">{name}</h1>
          <div className="flex items-center">
            <span className="inline-block h-0.5 w-10 bg-medspa-gold mr-3"></span>
            <p className="text-white/90">{medSpasCount} MedSpas offering this premium service in NYC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
