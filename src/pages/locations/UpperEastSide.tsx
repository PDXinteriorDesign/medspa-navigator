
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const UpperEastSideLanding = () => {
  const upperEastSideMedSpas = getMedSpasByLocation("upper-east-side");
  
  return (
    <>
      <LocationHeroOnly
        name="Upper East Side"
        imageUrl="https://images.unsplash.com/photo-1625556841726-ee3959350033?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        shortDescription="Where Timeless Elegance Meets Cutting-Edge Aesthetics"
        medspaCount={upperEastSideMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Upper East Side MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to the Upper East Side</h3>
            <p className="text-gray-700">
              The Upper East Side is synonymous with luxury medical aesthetics, hosting numerous high-end medspas that cater to an affluent clientele seeking premium, results-driven treatments in discreet settings. This prestigious neighborhood is home to world-renowned dermatologists and plastic surgeons whose exclusive practices have cultivated a loyal following among New York's social elite.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection features the Upper East Side's most exceptional medspas, where skilled practitioners understand the sophisticated tastes of their clientele. Each clinic represents the commitment to premium care, offering transformative treatments that balance innovation with timeless elegance.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={upperEastSideMedSpas} locationName="Upper East Side" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              The Upper East Side aesthetic scene represents the pinnacle of New York's beauty culture, where discretion and excellence are paramount. The neighborhood's medspas often feature private entrances, concierge services, and extended appointment times that allow for unhurried, comprehensive care in sumptuous surroundings.
            </p>
            <p className="leading-relaxed mb-4">
              The area's clinics are known for their signature services, including "Madison Avenue Refresh" facials, customized injectables administered with surgical precision, and bespoke skincare regimens using rare ingredients sourced from around the world. Many practitioners have decades of experience serving the most discerning clientele in Manhattan.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with the Upper East Side's most exceptional aesthetic providers, each selected for their impeccable credentials, refined technique, and commitment to understated luxury. Whether you're seeking subtle rejuvenation or comprehensive transformation, the Upper East Side's medspas offer an unmatched level of sophistication and expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperEastSideLanding;
