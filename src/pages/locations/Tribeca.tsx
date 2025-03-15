
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const TribecaLanding = () => {
  const tribecaMedSpas = getMedSpasByLocation("tribeca");
  
  return (
    <>
      <LocationHeroOnly
        name="Tribeca"
        imageUrl="https://images.pexels.com/photos/971326/pexels-photo-971326.jpeg?auto=compress&cs=tinysrgb&w=1200"
        shortDescription="Discreet Luxury and Unparalleled Aesthetic Excellence"
        medspaCount={tribecaMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Tribeca MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Tribeca</h3>
            <p className="text-gray-700">
              Tribeca is a neighborhood immersed in beauty—a place where art, luxury, and relentless creativity converge to form a vibrant culture. Nestled in the heart of Lower Manhattan, this iconic district enchants with its charming cobblestone streets, historic lofts, and a lively culinary and art scene that feels both timeless and innovative.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated list of medspas features exclusive clinics that capture the very soul of Tribeca. Each clinic seamlessly blends personalized wellness with unparalleled quality, offering premium, transformative treatments in settings that truly reflect the district's sophisticated, creative spirit.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={tribecaMedSpas} locationName="Tribeca" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              Despite the high-energy pace and challenges of urban life, Tribeca's medspa scene is pioneering a new era of beauty and wellness. Although the fast-paced city environment can sometimes leave little time for self-care, our curated medspas are redefining how New Yorkers rejuvenate, offering cutting-edge treatments that bring balance and a renewed glow.
            </p>
            <p className="leading-relaxed mb-4">
              Recent insights reveal that Tribeca's medspa services consistently rank among the nation's best in quality, innovation, and personalized care—truly setting the standard in luxury aesthetics.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TribecaLanding;
