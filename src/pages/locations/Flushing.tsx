
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const FlushingLanding = () => {
  const flushingMedSpas = getMedSpasByLocation("flushing");
  
  return (
    <>
      <LocationHeroOnly
        name="Flushing"
        imageUrl="/lovable-uploads/e87541f6-3548-4e4c-a9ec-9ce9b67f436e.png"
        shortDescription="Queens' premier destination for advanced aesthetic treatments"
        medspaCount={flushingMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Flushing MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Flushing</h3>
            <p className="text-gray-700">
              Flushing has emerged as a vibrant hub for aesthetic medicine, combining traditional Eastern wellness philosophies with cutting-edge Western treatments. The neighborhood's diverse medical spas offer sophisticated treatments in modern facilities, attracting clients seeking both innovation and value.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection features Flushing's most exceptional medspas, where skilled practitioners deliver transformative results using state-of-the-art technology. Each clinic represents the perfect blend of expertise and innovation, offering personalized care in a welcoming environment.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={flushingMedSpas} locationName="Flushing" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              Flushing's aesthetic scene represents a unique fusion of Eastern and Western beauty philosophies, offering clients access to innovative treatments and time-tested techniques. The neighborhood has become a destination for those seeking quality aesthetic services at competitive prices.
            </p>
            <p className="leading-relaxed mb-4">
              The area's medspas specialize in advanced laser treatments, facial rejuvenation, and cutting-edge body contouring procedures. Many practitioners bring international expertise, offering treatments that combine the latest technology with traditional wellness approaches.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with Flushing's premier aesthetic providers, each selected for their technical excellence, modern facilities, and commitment to patient care. Whether you're looking for advanced laser treatments or personalized skincare solutions, Flushing's medspas offer professional care in a welcoming environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlushingLanding;
