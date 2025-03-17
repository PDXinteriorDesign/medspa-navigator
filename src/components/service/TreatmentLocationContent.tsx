
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import { MedSpa } from "@/lib/types";
import ServiceMedSpaListing from "./ServiceMedSpaListing";
import ServiceIntroSection from "./ServiceIntroSection";

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
  
  // Location-specific introduction content for each treatment/location combination
  const getTreatmentLocationIntro = () => {
    // Base title is the same for all locations
    const baseTitle = `The Best MedSpas in ${locationName} for Expert ${serviceName}`;
    
    // Customize intro paragraphs based on location
    let introContent;
    
    switch(locationName.toLowerCase()) {
      case "manhattan":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} continues to be one of Manhattan's most sought-after aesthetic treatments, with the island's premium clinics offering exceptional results through personalized approaches. Whether you're seeking rejuvenation in Midtown's luxury clinics or downtown's trendy aesthetic studios, Manhattan's diverse neighborhoods provide world-class {serviceName} treatments administered by industry leaders.
            </p>
            <p>
              MedSpasNYC carefully vets top Manhattan {serviceName} providers, connecting you with board-certified specialists renowned for their artistic technique and natural-looking results.
            </p>
          </div>
        );
        break;
        
      case "brooklyn":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} has become increasingly popular throughout Brooklyn's vibrant neighborhoods, with skilled practitioners offering boutique aesthetic experiences. From Williamsburg's contemporary studios to Park Slope's refined clinics, Brooklyn's {serviceName} providers combine medical expertise with the borough's distinctive creative edge.
            </p>
            <p>
              MedSpasNYC features Brooklyn's most exceptional {serviceName} specialists, each selected for their technical precision, personalized approach, and commitment to natural-looking outcomes.
            </p>
          </div>
        );
        break;
        
      case "williamsburg":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} treatments in Williamsburg reflect the neighborhood's artistic sensibility and attention to detail, with local specialists emphasizing subtle enhancement and personalized care. The area's curated aesthetic clinics attract clients seeking skilled practitioners who understand Williamsburg's preference for refined, understated results.
            </p>
            <p>
              MedSpasNYC showcases Williamsburg's finest {serviceName} providers, carefully selected for their specialized expertise, artistic approach, and dedication to client satisfaction.
            </p>
          </div>
        );
        break;
        
      case "soho":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} in SoHo embodies the neighborhood's sophisticated aesthetic, with exclusive clinics offering premium treatments in refined, gallery-like spaces. SoHo's {serviceName} specialists are known for their innovative techniques and discerning eye, attracting fashion-forward clients who appreciate subtle enhancement.
            </p>
            <p>
              MedSpasNYC partners with SoHo's most distinguished {serviceName} providers, each delivering exceptional care and results that complement the neighborhood's reputation for style and exclusivity.
            </p>
          </div>
        );
        break;
        
      case "midtown":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} remains a cornerstone treatment in Midtown's prestigious medical aesthetics scene, with the district's polished clinics catering to professionals seeking efficient, effective rejuvenation. Midtown's {serviceName} providers excel in delivering consistent, reliable results with minimal downtime—perfect for the area's fast-paced clientele.
            </p>
            <p>
              MedSpasNYC highlights Midtown's premier {serviceName} specialists, selected for their technical precision, extensive experience, and commitment to accommodating busy professional schedules.
            </p>
          </div>
        );
        break;
        
      case "upper east side":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} on the Upper East Side represents the height of refined aesthetic medicine, with the neighborhood's elegant clinics offering meticulous treatments in discreet, luxurious settings. The area's {serviceName} specialists are often sought after by clients who expect exceptional, customized care and natural-looking enhancement.
            </p>
            <p>
              MedSpasNYC features the Upper East Side's most respected {serviceName} providers, each known for their sophisticated technique, attention to detail, and long-standing reputation for excellence.
            </p>
          </div>
        );
        break;
        
      case "tribeca":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} in Tribeca reflects the neighborhood's understated luxury approach, with exclusive clinics housed in the area's distinctive loft spaces and historic buildings. Tribeca's {serviceName} providers pride themselves on personalized treatment experiences and maintaining client privacy—making the district a favorite among celebrities and discerning locals alike.
            </p>
            <p>
              MedSpasNYC connects you with Tribeca's elite {serviceName} specialists, each selected for their artistic vision, high-touch service philosophy, and dedication to discrete, premium care.
            </p>
          </div>
        );
        break;
        
      case "the hamptons":
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} in The Hamptons combines luxury and convenience, with seasonal and year-round clinics offering premium aesthetic treatments to the area's sophisticated clientele. Hamptons {serviceName} providers understand the coastal community's preference for refreshed, natural-looking results that enhance without appearing obvious.
            </p>
            <p>
              MedSpasNYC showcases The Hamptons' most exceptional {serviceName} specialists, carefully selected for their technical expertise, aesthetic sensibility, and ability to provide city-quality care in this beloved coastal retreat.
            </p>
          </div>
        );
        break;
        
      // Default case for any location not specifically customized
      default:
        introContent = (
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              {serviceName} remains one of the most popular aesthetic treatments in {locationName}, helping clients achieve their desired results with expert care and attention to detail. Whether you're looking for a first-time treatment or maintenance, these {locationName} medspas offer expertly administered treatments tailored to your aesthetic goals.
            </p>
            <p>
              MedSpasNYC connects you with the best {serviceName} clinics in {locationName}, ensuring you receive top-tier care from board-certified specialists.
            </p>
          </div>
        );
    }
    
    return (
      <>
        <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
          {baseTitle}
        </h2>
        {introContent}
      </>
    );
  };
  
  // Generic FAQs for treatments in locations
  const getLocationTreatmentFAQs = () => {
    return [
      {
        question: `How much does ${serviceName} cost in ${locationName}?`,
        answer: `${serviceName} pricing in ${locationName} typically ranges based on treatment area and provider expertise. Most premium clinics offer complimentary consultations to provide personalized quotes.`
      },
      {
        question: `How long do ${serviceName} results last?`,
        answer: `Results vary by individual and treatment type, but most clients enjoy their ${serviceName} results for several months. Your provider can create a customized maintenance plan.`
      },
      {
        question: `What should I look for in a ${serviceName} provider in ${locationName}?`,
        answer: `When choosing a ${serviceName} provider in ${locationName}, prioritize board-certified specialists with specific training in your desired treatment. Review before-and-after photos and ask about their approach to natural-looking results.`
      },
      {
        question: `Where can I find the best ${serviceName} providers in ${locationName}?`,
        answer: `Explore MedSpasNYC's curated list of top-rated ${locationName} ${serviceName} providers and book your appointment today! We've carefully vetted each clinic for excellence in results and patient care.`
      }
    ];
  };

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
        {getTreatmentLocationIntro()}
      </ServiceIntroSection>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={locationFaqs.length > 0 ? locationFaqs : getLocationTreatmentFAQs()}
      />
    </>
  );
};

export default TreatmentLocationContent;
