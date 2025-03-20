
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/medspas";
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
              Just steps from the Hudson River, Tribeca effortlessly blends urban sophistication with a relaxed, upscale charm. Whether you're taking a leisurely stroll through the lush greenery of Washington Market Park, dining at a Michelin-starred hotspot like Bouley at Home, or exploring the cutting-edge exhibits in the Tribeca Gallery District, this neighborhood radiates elegance at every turn.
            </p>
            <p className="leading-relaxed mb-4">
              It's no surprise that Tribeca is also home to some of New York City's most exclusive medspas, catering to a discerning clientele that expects world-class service and results. From custom facials and expert injectables to non-invasive body contouring and advanced skin rejuvenation, these elite clinics offer transformative treatments that redefine beauty and self-care. Many seamlessly combine state-of-the-art technology with a personalized touch, ensuring that every experience is as indulgent as it is effective.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with the top medspas in Tribeca, making it easy to find the perfect clinic for your aesthetic goals. Whether you're seeking a subtle enhancement or a complete rejuvenation, Tribeca's medspas provide the luxury, innovation, and expertise that define the neighborhood's elevated beauty scene.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TribecaLanding;
