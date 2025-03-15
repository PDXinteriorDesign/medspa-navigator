
import React from "react";
import MedSpaList from "@/components/location/MedSpaList";
import { getMedSpasByLocation } from "@/lib/data";
import LocationHeroOnly from "@/components/location/LocationHeroOnly";

const MidtownLanding = () => {
  const midtownMedSpas = getMedSpasByLocation("midtown");
  
  return (
    <>
      <LocationHeroOnly
        name="Midtown"
        imageUrl="https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg?auto=compress&cs=tinysrgb&w=1200"
        shortDescription="Luxury Rejuvenation for Manhattan's Discerning Professionals"
        medspaCount={midtownMedSpas.length}
      />
      
      <div className="medspa-container py-8 -mt-12 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">Midtown MedSpas & Aesthetic Clinics</h2>
          
          <div className="bg-medspa-teal/10 border border-medspa-teal/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-medspa-teal mb-2">Welcome to Midtown</h3>
            <p className="text-gray-700">
              Midtown Manhattan represents the epicenter of New York's professional and commercial landscape, where luxury aesthetic clinics cater to the needs of discerning executives and professionals. These premier destinations blend efficiency with excellence, offering treatments that deliver maximum impact with minimal downtime.
            </p>
            <p className="text-gray-700 mt-4">
              Our carefully curated selection features Midtown's most exceptional medspas, where skilled practitioners understand the unique demands of their clientele. Each clinic represents the commitment to premium care, offering transformative treatments that respect both time constraints and aesthetic goals.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-5">
            <MedSpaList medSpas={midtownMedSpas} locationName="Midtown" />
          </div>
        </div>
      </div>
      
      <div className="medspa-container mb-12">
        <div className="bg-gradient-to-r from-medspa-cream to-white rounded-lg shadow-sm p-8 max-w-5xl mx-auto border border-medspa-teal/10">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center text-medspa-dark">Additional Information</h2>
          
          <div className="text-gray-700 bg-medspa-teal/5 p-6 rounded-lg">
            <p className="leading-relaxed mb-4">
              Midtown's medspas cater to the fast-paced professional crowd with efficient, high-impact treatments that deliver results with minimal downtime, making them popular with the business district's busy executives. These aesthetic centers specialize in lunchtime procedures and express rejuvenation services that allow clients to return to work immediately looking refreshed but natural.
            </p>
            <p className="leading-relaxed mb-4">
              The area's clinics are known for their signature services, including "Executive Refresh" facials, rapid-recovery injectables, and streamlined beauty protocols that maximize results while respecting tight schedules. Many clinics offer extended evening hours to accommodate after-work appointments.
            </p>
            <p className="leading-relaxed">
              MedSpasNYC connects you with Midtown's most exceptional aesthetic providers, each selected for their understanding of professional needs, technical excellence, and commitment to efficient luxury. Whether you're seeking a lunchtime treatment or an end-of-day rejuvenation session, Midtown's medspas offer the perfect blend of sophistication and convenience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidtownLanding;
