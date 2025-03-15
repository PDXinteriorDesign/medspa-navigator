
import React from "react";
import { Helmet } from "react-helmet";
import BreadcrumbNav from "@/components/BreadcrumbNav";

interface LocationHeroOnlyProps {
  name: string;
  imageUrl: string;
  shortDescription: string;
  medspaCount: number;
}

const LocationHeroOnly = ({
  name,
  imageUrl,
  shortDescription,
  medspaCount
}: LocationHeroOnlyProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <>
      <Helmet>
        <title>{name} MedSpas | Luxury Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content={`Discover the most exclusive MedSpas in ${name}. Experience luxury aesthetic treatments in New York's premier destination for beauty and wellness.`} 
        />
      </Helmet>
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: name, href: `/locations/${slug}`, current: true }
          ]} 
        />
        
        <div className="relative rounded-xl overflow-hidden mt-6">
          <div className="absolute inset-0">
            <img 
              src={imageUrl} 
              alt={`${name} MedSpas`} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">
              {name} MedSpas
            </h1>
            <p className="text-lg md:text-xl mb-3 max-w-2xl">{shortDescription}</p>
            <div className="flex items-center">
              <span className="text-sm md:text-base font-medium bg-white/20 py-1 px-3 rounded-full">
                {medspaCount} Premium MedSpas
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationHeroOnly;
