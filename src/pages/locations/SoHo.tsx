
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const SoHoLanding = () => {
  const sohoMedSpas = getMedSpasByLocation("soho");
  
  return (
    <>
      <LocationHeroOnly
        name="SoHo"
        imageUrl="https://images.unsplash.com/photo-1595467959776-6eb7a123d2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        shortDescription="The Epicenter of Trendsetting Beauty Innovations"
        medspaCount={sohoMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">SoHo MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to SoHo</h3>
            <p className="text-gray-700">
              SoHo stands as a beacon of innovation in New York's beauty landscape, where art and aesthetics converge in perfect harmony. This trendsetting neighborhood has become the epicenter for cutting-edge beauty treatments, housed in design-forward spaces that mirror the district's artistic heritage and forward-thinking ethos.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection highlights SoHo's most exceptional medspas, where skilled practitioners combine clinical expertise with an artistic approach to beauty. Each clinic represents the neighborhood's commitment to innovation, offering transformative treatments that balance scientific advancement with an appreciation for natural beauty.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={sohoMedSpas} locationName="SoHo" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              SoHo's vibrant streets are lined with some of New York's most innovative medspas, where aesthetics professionals push boundaries and redefine beauty standards. In this dynamic neighborhood, beauty and wellness merge with fashion and art, creating spaces that are as visually striking as they are clinically advanced.
            </p>
            <p className="leading-relaxed mb-4">
              The neighborhood's aesthetic clinics are known for their signature treatments, including "SoHo Glow" facials, sculptural facial contouring, collagen-boosting therapies, and bespoke skincare protocols that draw inspiration from global beauty innovations. Many clinics emphasize preventative treatments and subtle enhancements that preserve and highlight natural beauty.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with SoHo's most exceptional aesthetic providers, each selected for their commitment to excellence, innovation, and personalized care. Whether you're seeking the latest in beauty technology or timeless treatments delivered with modern precision, SoHo's medspas offer an unparalleled experience at the intersection of art and science.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoHoLanding;
