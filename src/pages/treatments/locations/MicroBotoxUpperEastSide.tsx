
import React from "react";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { getServiceBySlug } from "@/lib/services";
import { getServicesByLocation } from "@/lib/filters";
import MedSpaList from "@/components/location/MedSpaList";

const MicroBotoxUpperEastSide = () => {
  // Get MicroBotox service and all med spas in Upper East Side that offer MicroBotox
  const microBotoxService = getServiceBySlug("micro-botox");
  const microBotoxMedSpasInUES = getServicesByLocation("micro-botox", "upper-east-side");
  
  // Upper East Side-specific MicroBotox introduction content
  const uesMicroBotoxIntro = (
    <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-8 border border-gray-100/80">
      <div className="mb-2">
        <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
          Upper East Side Exclusive
        </div>
      </div>
      <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
        Upper East Side: Manhattan's Premier Destination for MicroBotox Treatments
      </h2>
      
      <div className="text-gray-700 space-y-4 mb-6">
        <p>
          The Upper East Side has established itself as Manhattan's most prestigious destination for aesthetic treatments, with MicroBotox becoming increasingly popular among the neighborhood's discerning clientele.
        </p>
        <p>
          Known for its elegant townhouses, world-class museums, and high-end boutiques, the Upper East Side's medical spas reflect the neighborhood's commitment to sophistication and excellence, making it the perfect setting for those seeking subtle, refined MicroBotox treatments.
        </p>
        <p>
          MicroBotox providers in the Upper East Side are distinguished by their meticulous technique and artistic sensibility. Most clinics in this area are led by board-certified dermatologists and plastic surgeons who specialize in delivering natural-looking rejuvenation that maintains facial expressiveness while effectively enhancing skin quality.
        </p>
      </div>
    </div>
  );
  
  // Upper East Side-specific MicroBotox outro with curated med spa list
  const uesMicroBotoxOutro = (
    <div className="mt-8">
      <h2 className="text-2xl font-serif font-medium mb-6 tracking-tight">
        MicroBotox Specialists in the Upper East Side, New York
      </h2>
      
      <p className="text-gray-700 mb-6">
        We've carefully curated this selection of premium MicroBotox providers in the Upper East Side based on their credentials, expertise, patient satisfaction, and commitment to natural-looking results. Each of these establishments offers an unparalleled approach to MicroBotox treatments while maintaining the highest standards of safety and efficacy.
      </p>
      
      {microBotoxMedSpasInUES.length > 0 ? (
        <MedSpaList medSpas={microBotoxMedSpasInUES} locationName="Upper East Side" treatmentName="MicroBotox" />
      ) : (
        <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20">
          <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
          <p className="text-gray-700 mb-5">
            Our curators are currently finalizing our selection of premium MicroBotox providers in the Upper East Side.
          </p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm p-8 mt-8 border border-gray-100/80">
        <h3 className="text-xl font-serif font-medium mb-4">Why Choose the Upper East Side for Your MicroBotox Treatment?</h3>
        <div className="text-gray-700 space-y-4">
          <p>
            Upper East Side MicroBotox providers are renowned for their ultra-refined techniques and commitment to subtlety. Many clinics offer comprehensive skin analysis using advanced diagnostic tools before creating customized treatment protocols tailored to each client's unique skin concerns.
          </p>
          <p>
            While treatments in the Upper East Side often command premium prices, the neighborhood's clinics justify the investment through their exceptional expertise, personalized care, and luxurious treatment settings that ensure privacy and comfort throughout your experience.
          </p>
          <p>
            For those seeking the most advanced MicroBotox techniques, many Upper East Side providers have direct relationships with aesthetic medicine innovators in Europe and Asia, bringing the latest refinements to this technique to Manhattan's most discerning clientele.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <TreatmentLocationTemplate
      serviceSlug="micro-botox"
      location="upper-east-side"
      customContent={
        <>
          {uesMicroBotoxIntro}
          {uesMicroBotoxOutro}
        </>
      }
    />
  );
};

export default MicroBotoxUpperEastSide;
