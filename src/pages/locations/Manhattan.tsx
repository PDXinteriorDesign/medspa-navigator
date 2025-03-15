
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";
import LocationDetails from "@/components/location/LocationDetails";

const ManhattanLanding = () => {
  const manhattanMedSpas = getMedSpasByLocation("manhattan");
  
  return (
    <>
      <LocationHeroOnly
        name="Manhattan"
        imageUrl="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        shortDescription="The Epicenter of Luxury Aesthetics in New York City"
        medspaCount={manhattanMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Manhattan MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Manhattan</h3>
            <p className="text-gray-700">
              Welcome to Manhattan, the beating heart of New York City's luxury aesthetics scene. In this iconic borough, our curated directory showcases the top medspas in Manhattan—from exclusive clinics renowned for their luxury anti-aging treatments to trendsetting centers offering innovative skincare therapies. Each clinic is handpicked for its cutting-edge technology, impeccable credentials, and personalized approach, ensuring you receive transformative treatments that reflect Manhattan's unique blend of timeless sophistication and modern innovation.
            </p>
            <p className="text-gray-700 mt-4">
              Explore our guide to discover bespoke wellness experiences, state-of-the-art injectables, rejuvenating facials, and a wide range of aesthetic services tailored to your needs. With detailed profiles highlighting clinic specialties, client testimonials, and local insights, MedSpasNYC directory is your definitive resource for finding the best in luxury and results-driven care in NYC.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={manhattanMedSpas} locationName="Manhattan" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              Despite the high-energy pace and challenges of urban life, Manhattan's medspa scene is pioneering a new era of beauty and wellness. Although the fast-paced city environment can sometimes leave little time for self-care, our curated medspas are redefining how New Yorkers rejuvenate, offering cutting-edge treatments that bring balance and a renewed glow.
            </p>
            <p className="leading-relaxed">
              Manhattan's medspa services consistently rank among the nation's best in quality, innovation, and personalized care—truly setting the standard in luxury aesthetics and MedSpasNYC connects you with those high quality clinics, making it easy to find the perfect clinic for your aesthetic goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManhattanLanding;
