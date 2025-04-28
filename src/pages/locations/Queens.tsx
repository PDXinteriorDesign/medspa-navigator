
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const QueensLanding = () => {
  const queensMedSpas = getMedSpasByLocation("queens");
  
  return (
    <>
      <LocationHeroOnly
        name="Queens"
        imageUrl="/lovable-uploads/d1dc3bd2-1851-43b0-96b8-a263de546b2b.png"
        shortDescription="Discover Queens' diverse aesthetic scene with personalized treatments and exceptional value"
        medspaCount={queensMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Queens MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Queens</h3>
            <p className="text-gray-700">
              Queens offers a diverse and vibrant aesthetic scene that combines technical expertise with cultural diversity. From Astoria's trendy aesthetics clinics to Bayside's wellness-oriented medical spas, Queens provides a range of options that blend innovative treatments with personalized care at competitive prices.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection highlights Queens' most exceptional medspas, where skilled practitioners deliver customized treatments in welcoming environments. With neighborhoods like Forest Hills, Astoria, Bayside, and Long Island City each offering their unique approach to beauty and wellness, Queens has become a destination for those seeking quality aesthetic care without Manhattan prices.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={queensMedSpas} locationName="Queens" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              Queens' aesthetic landscape reflects the borough's remarkable diversity, with practitioners bringing techniques and philosophies from around the world. Many clinics offer multilingual services and culturally-informed approaches to beauty, creating a uniquely personalized experience for clients.
            </p>
            <p className="leading-relaxed mb-4">
              The borough is known for its value-oriented approach, with many medspas offering premium services at more accessible price points than Manhattan. Queens' aesthetic providers frequently combine Eastern and Western techniques, particularly in neighborhoods like Flushing, creating innovative hybrid treatments not found elsewhere.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with Queens' finest aesthetic providers, each selected for their technical excellence, personalized approach, and commitment to results. Whether you're looking for cutting-edge laser treatments, expert injectables, or holistic skincare solutions, Queens' medspas offer exceptional care in comfortable, unpretentious environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueensLanding;
