
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const HamptonsLanding = () => {
  const hamptonsMedSpas = getMedSpasByLocation("the-hamptons");
  
  return (
    <>
      <LocationHeroOnly
        name="The Hamptons"
        imageUrl="https://images.unsplash.com/photo-1543855379-ef501d27b451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        shortDescription="Seasonal Splendor in New York's Most Prestigious Retreat"
        medspaCount={hamptonsMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">The Hamptons MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to The Hamptons</h3>
            <p className="text-gray-700">
              The Hamptons represents the pinnacle of seasonal medspa luxury, with many elite Manhattan practices opening summer locations to serve their clientele who migrate east during the warmer months. From East Hampton's ultra-exclusive clinics to Montauk's more relaxed, wellness-oriented spaces, the area offers diverse aesthetic experiences with an emphasis on discretion and exceptional service.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection features The Hamptons' most exceptional medspas, where skilled practitioners understand the unique seasonal demands of their clientele. Each clinic represents the commitment to premium care, offering transformative treatments that respect both the natural beauty of the coastal setting and the sophisticated expectations of visitors.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={hamptonsMedSpas} locationName="The Hamptons" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              The Hamptons medspa scene combines New York City expertise with coastal luxury, creating unique treatment experiences that cater to the summer social calendar. With many pop-up locations from renowned Manhattan practices, the area offers world-class treatments in more relaxed, sun-drenched settings.
            </p>
            <p className="leading-relaxed mb-4">
              The area's clinics are known for their signature summer-focused services, including "Hamptons Glow" facials, pre-event enhancement treatments, sun damage repair protocols, and body sculpting procedures designed to deliver quick results before beach season. Many clinics offer at-home visits for the utmost privacy and convenience.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with The Hamptons' most exceptional aesthetic providers, each selected for their understanding of seasonal needs, technical excellence, and commitment to luxury service. Whether you're seeking a quick refresh before a gala or comprehensive rejuvenation during your summer stay, The Hamptons' medspas offer the perfect blend of sophistication and seasonal specialization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamptonsLanding;
