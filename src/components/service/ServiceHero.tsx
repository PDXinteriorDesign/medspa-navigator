
import React from "react";

interface ServiceHeroProps {
  imageUrl: string;
  name: string;
  medSpasCount: number;
  reducedHeight?: boolean; // Optional prop to reduce the hero height
}

const ServiceHero = ({ imageUrl, name, medSpasCount, reducedHeight = false }: ServiceHeroProps) => {
  return (
    <div className={`relative ${reducedHeight ? 'h-32 md:h-48' : 'h-64 md:h-96'} mb-8 rounded-lg overflow-hidden shadow-lg`}>
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover blur-[1.5px]"
        loading="lazy"
        width="1200" 
        height={reducedHeight ? "200" : "400"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
        <div className="p-6 md:p-10 w-full luxury-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 tracking-tight">{name}</h1>
          <div className="flex items-center">
            <span className="inline-block h-0.5 w-10 bg-medspa-gold mr-3"></span>
            <p className="text-white/90">{medSpasCount} MedSpas offering {name.split(" in ")[0]} treatment in {name.split(" in ")[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
