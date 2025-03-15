
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const WilliamsburgLanding = () => {
  const williamsburgMedSpas = getMedSpasByLocation("williamsburg");
  
  return (
    <>
      <LocationHeroOnly
        name="Williamsburg"
        imageUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        shortDescription="Brooklyn's Creative Hub for Progressive Aesthetic Treatments"
        medspaCount={williamsburgMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Williamsburg MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Williamsburg</h3>
            <p className="text-gray-700">
              Williamsburg has redefined the medspa experience with its creative approach to aesthetic treatments, housed in stylish, industrial-chic spaces that reflect the neighborhood's artistic soul. These boutique medspas often combine clinical excellence with a distinctly Brooklyn ethos, attracting a younger clientele who value subtle enhancements and sustainable beauty practices.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection highlights the most innovative aesthetic clinics in Williamsburg, focusing on providers who offer distinctive treatments with an emphasis on natural results. From organic skincare to advanced non-invasive technologies, Williamsburg's aesthetic scene perfectly balances modern science with holistic wellness philosophies.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={williamsburgMedSpas} locationName="Williamsburg" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              The vibrant streets of Williamsburg are home to some of Brooklyn's most forward-thinking aesthetic clinics, where innovation meets artistry. In this dynamic neighborhood, medspas are not just treatment centers but community spaces that reflect the area's commitment to sustainability, inclusivity, and creative expression.
            </p>
            <p className="leading-relaxed mb-4">
              Popular services in Williamsburg medspas include natural-look fillers, PRP treatments, bespoke facials, eco-friendly peels, microneedling, and preventative injectables—all delivered with an emphasis on transparency, education, and personalized care. Many clinics in the area also prioritize using clean, sustainable product lines and environmentally conscious practices.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with Williamsburg's most exceptional aesthetic providers, curating a selection that represents the neighborhood's unique blend of clinical expertise and creative vision. Whether you're a local resident or visiting from Manhattan, Williamsburg's medspas offer a refreshing approach to beauty and wellness that's worth experiencing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WilliamsburgLanding;
