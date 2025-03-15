
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
        <LocationDetails 
          name="Manhattan"
          description="Manhattan is home to some of the world's most prestigious medical spas and aesthetic centers, offering cutting-edge treatments in sleek, luxurious settings. From the Upper East Side's high-end clientele seeking premium anti-aging treatments to SoHo's trend-conscious crowd embracing the latest innovations in skincare technology, Manhattan's medspa landscape is as diverse as its neighborhoods."
          popularServices={[
            "Botox",
            "Dermal Fillers",
            "Laser Resurfacing",
            "Microneedling",
            "Facial Treatments",
            "Body Contouring"
          ]}
          neighborhoods={[
            {
              name: "Upper East Side",
              slug: "upper-east-side",
              description: "Renowned for ultra-luxury medspas catering to New York's elite"
            },
            {
              name: "SoHo",
              slug: "soho",
              description: "Trendsetting skincare innovations in design-forward spaces"
            },
            {
              name: "Midtown",
              slug: "midtown",
              description: "Efficient, high-impact treatments for busy professionals"
            },
            {
              name: "Tribeca",
              slug: "tribeca",
              description: "Exclusive, discreet luxury experiences for discerning clientele"
            }
          ]}
        />
      </div>
    </>
  );
};

export default ManhattanLanding;
