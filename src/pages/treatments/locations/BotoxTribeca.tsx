
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { getServiceBySlug } from "@/lib/services";
import { getServicesByLocation } from "@/lib/filters";
import MedSpaList from "@/components/location/MedSpaList";

const BotoxTribeca = () => {
  // Get Botox service and all med spas in Tribeca that offer Botox
  const botoxService = getServiceBySlug("botox");
  const botoxMedSpasInTribeca = getServicesByLocation("botox", "tribeca");
  
  // Tribeca-specific Botox introduction content
  const tribecaBotoxIntro = (
    <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-8 border border-gray-100/80">
      <div className="mb-2">
        <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
          Tribeca's Premium Botox
        </div>
      </div>
      <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
        Tribeca: NYC's Luxury Destination for Premium Botox Treatments
      </h2>
      
      <div className="text-gray-700 space-y-4 mb-6">
        <p>
          Tribeca has established itself as one of Manhattan's most sophisticated neighborhoods for premium aesthetic treatments, with Botox being among the most sought-after services in this upscale district.
        </p>
        <p>
          Known for its converted industrial buildings, cobblestone streets, and celebrity residents, Tribeca's aesthetic clinics mirror the neighborhood's blend of luxury and discretion—making it the perfect location for those seeking high-end Botox treatments in an exclusive setting.
        </p>
        <p>
          Botox providers in Tribeca are recognized for their meticulous attention to detail and their artistic approach to facial rejuvenation. Many clinics in this area are led by board-certified physicians who specialize in creating natural-looking results that preserve facial expressiveness while effectively reducing fine lines and wrinkles.
        </p>
      </div>
    </div>
  );
  
  // Tribeca-specific Botox outro with curated med spa list
  const tribecaBotoxOutro = (
    <div className="mt-8">
      <h2 className="text-2xl font-serif font-medium mb-6 tracking-tight">
        Botox Specialists in Tribeca, New York
      </h2>
      
      <p className="text-gray-700 mb-6">
        We've carefully curated this selection of premium Botox providers in Tribeca based on their credentials, expertise, patient satisfaction, and commitment to exceptional results. Each of these establishments offers a unique approach to Botox treatments while maintaining the highest standards of safety and efficacy.
      </p>
      
      {botoxMedSpasInTribeca.length > 0 ? (
        <MedSpaList medSpas={botoxMedSpasInTribeca} locationName="Tribeca" />
      ) : (
        <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20">
          <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
          <p className="text-gray-700 mb-5">
            Our curators are currently finalizing our selection of premium Botox providers in Tribeca.
          </p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm p-8 mt-8 border border-gray-100/80">
        <h3 className="text-xl font-serif font-medium mb-4">Why Choose Tribeca for Your Botox Treatment?</h3>
        <div className="text-gray-700 space-y-4">
          <p>
            Tribeca's Botox providers are known for their high-touch service experience and luxurious treatment spaces. Many clinics offer comprehensive consultations and customized treatment plans tailored to each client's unique facial anatomy and aesthetic goals.
          </p>
          <p>
            While treatments in Tribeca may command premium prices, the neighborhood's clinics often justify the cost through elevated service, expertly trained staff, and exclusive amenities that enhance the overall experience.
          </p>
          <p>
            For those seeking discretion, many Tribeca MedSpas offer private entrances and extended appointment times to ensure a relaxed, unhurried treatment experience away from prying eyes—an important consideration for the neighborhood's many high-profile residents.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <TreatmentLocationTemplate
      serviceSlug="botox"
      location="tribeca"
      customContent={
        <>
          {tribecaBotoxIntro}
          {tribecaBotoxOutro}
        </>
      }
    />
  );
};

export default BotoxTribeca;
