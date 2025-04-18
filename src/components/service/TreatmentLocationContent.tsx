
import React from "react";
import { MedSpa } from "@/lib/types";
import ServiceHero from "./ServiceHero";
import ServiceMedSpaListing from "./ServiceMedSpaListing";
import ServiceIntroSection from "./ServiceIntroSection";
import ServiceFaqs from "./ServiceFaqs";
import { Link } from "react-router-dom";
import { getBotoxManhattanFaqs } from "@/utils/serviceContent/locationFaqs/botoxManhattanFaqs";

interface TreatmentLocationContentProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  imageUrl: string;
  medSpasInLocation: MedSpa[];
  locationFaqs: any[];
}

const TreatmentLocationContent = ({
  serviceName,
  serviceSlug,
  locationName,
  imageUrl,
  medSpasInLocation,
  locationFaqs
}: TreatmentLocationContentProps) => {
  
  const isTargetedPage = serviceSlug === "botox" && locationName === "Manhattan";
  const faqs = isTargetedPage ? getBotoxManhattanFaqs() : locationFaqs;
  
  // Debug log for Manhattan pages to trace the issue
  if (locationName === "Manhattan") {
    console.log(`Rendering ${serviceName} in ${locationName} page`);
    console.log(`Found ${medSpasInLocation.length} med spas with this service`);
    if (medSpasInLocation.length > 0) {
      console.log(`First med spa: ${medSpasInLocation[0].name}, location: ${medSpasInLocation[0].location}`);
    }
  }
  
  const renderTargetedBotoxContent = () => (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
        The Best Botox in Manhattan: Premium Providers & Expert Treatments
      </h2>
      
      <div className="text-gray-700 space-y-4 mb-8">
        <p>
          Finding the best Botox in Manhattan requires careful consideration of provider expertise, clinic reputation, and treatment approach. Manhattan's premier Botox specialists are concentrated in prestigious neighborhoods like the <Link to="/treatments/botox/upper-east-side" className="text-medspa-blue hover:underline">Upper East Side</Link>, <Link to="/treatments/botox/midtown" className="text-medspa-blue hover:underline">Midtown</Link>, and <Link to="/treatments/botox/soho" className="text-medspa-blue hover:underline">SoHo</Link>.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">
          Why Choose Manhattan for Your Botox Treatment?
        </h3>
        <p>
          Manhattan's Botox providers are among the most sought-after in New York City, known for their precision, expertise, and natural-looking results. Whether you're seeking treatment in <Link to="/treatments/botox/tribeca" className="text-medspa-blue hover:underline">Tribeca</Link> or the Upper East Side, Manhattan's elite practitioners offer unparalleled expertise in facial aesthetics.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">
          Best Manhattan Neighborhoods for Botox Treatments
        </h3>
        <p>
          Each Manhattan neighborhood offers unique advantages for Botox treatments. The Upper East Side is known for its luxury medical spas and board-certified dermatologists, while SoHo clinics often combine cutting-edge techniques with a modern aesthetic approach.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <ServiceHero 
        imageUrl={imageUrl} 
        name={`${serviceName} in ${locationName}`} 
        medSpasCount={medSpasInLocation.length}
        reducedHeight={true}
      />
      
      <ServiceMedSpaListing
        medSpasInLocation={medSpasInLocation}
        serviceName={serviceName}
        serviceSlug={serviceSlug}
        locationName={locationName}
      />
      
      <ServiceIntroSection>
        {isTargetedPage ? renderTargetedBotoxContent() : null}
      </ServiceIntroSection>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={faqs}
      />
    </>
  );
};

export default TreatmentLocationContent;
