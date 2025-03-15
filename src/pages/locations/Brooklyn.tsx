
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const BrooklynLanding = () => {
  const brooklynMedSpas = getMedSpasByLocation("brooklyn");
  
  return (
    <>
      <LocationHeroOnly
        name="Brooklyn"
        imageUrl="https://images.unsplash.com/photo-1567552261736-4b808a7997f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        shortDescription="Where Innovative Aesthetics Meet Authentic Brooklyn Style"
        medspaCount={brooklynMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Brooklyn MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Brooklyn</h3>
            <p className="text-gray-700">
              Brooklyn has emerged as a vibrant hub for innovative aesthetic treatments, blending medical expertise with a more approachable, personalized experience. From Williamsburg's chic, design-forward medspas to Park Slope's wellness-oriented aesthetic centers, Brooklyn offers a diverse range of options that prioritize natural results and holistic beauty philosophies.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection highlights Brooklyn's most exceptional medspas, where skilled practitioners combine clinical expertise with an artistic approach to beauty. Each clinic represents a commitment to authentic care, offering transformative treatments that respect both individuality and natural beauty.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={brooklynMedSpas} locationName="Brooklyn" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              Brooklyn's aesthetic scene has evolved dramatically in recent years, embracing a more natural, holistic approach to beauty that resonates with the borough's authentic spirit. The area's medspas often feature sustainable practices, clean product lines, and a focus on education that empowers clients to make informed choices about their treatments.
            </p>
            <p className="leading-relaxed mb-4">
              The borough's clinics are known for their signature services, including "Brooklyn Glow" natural facials, custom-blended botanical treatments, ethical injectables with natural results, and progressive skin therapies that combine traditional techniques with cutting-edge technology. Many medspas emphasize transparency in ingredients and methods.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with Brooklyn's most exceptional aesthetic providers, each selected for their commitment to excellence, ethical practices, and personalized care. Whether you're seeking subtle enhancements or transformative treatments, Brooklyn's medspas offer a refreshing approach to beauty that honors individuality while delivering impressive results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrooklynLanding;
