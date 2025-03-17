
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import MedSpaCard from "@/components/MedSpaCard";
import { Button } from "@/components/ui/button";
import ServiceLocationProviders from "./ServiceLocationProviders";
import ServiceLocationTiming from "./ServiceLocationTiming";
import { LocationContent } from "@/utils/locationContent";
import { MedSpa } from "@/lib/types";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceLocationMainContentProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  imageUrl: string;
  medSpasInLocation: MedSpa[];
  locationContent: LocationContent;
  locationFaqs: any[];
}

const ServiceLocationMainContent = ({
  serviceName,
  serviceSlug,
  locationName,
  imageUrl,
  medSpasInLocation,
  locationContent,
  locationFaqs
}: ServiceLocationMainContentProps) => {
  
  // Custom introduction for Botox in Manhattan
  const getBotoxIntro = () => {
    if (serviceSlug === "botox" && locationName === "Manhattan") {
      return (
        <>
          <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
            Find the Best Botox Clinics in Manhattan – Expertly Curated by MedSpasNYC
          </h2>
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              Botox remains one of the most popular aesthetic treatments in Manhattan, helping clients achieve smoother skin, a more defined jawline, and subtle, natural-looking rejuvenation. Whether you're looking to soften fine lines, enhance your look with a forehead lift using Botox, or sculpt your jawline with Botox masseter, These Manhattan medspas offer expertly administered treatments tailored to your aesthetic goals.
            </p>
            <p>
              MedSpasNYC connects you with the best Botox clinics in the Manhattan, ensuring you receive top-tier care from board-certified specialists.
            </p>
          </div>
        </>
      );
    }
    
    // Default introduction for other locations/services
    return (
      <>
        <div className="mb-2">
          <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
            Curator's Selection
          </div>
        </div>
        <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
          The Definitive Guide to {serviceName} in {locationName}
        </h2>
        
        <div className="text-gray-700 space-y-4 mb-8">
          {locationContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <blockquote className="text-sm border-l-2 border-medspa-gold pl-5 py-2 italic text-gray-600 my-6">
            "{locationName} has established itself as a premier destination for {serviceName}, with practitioners who combine artistic vision with technical mastery."
          </blockquote>
        </div>
      </>
    );
  };
  
  // Custom FAQs for Botox in Manhattan
  const getManhattanBotoxFAQs = () => {
    if (serviceSlug === "botox" && locationName === "Manhattan") {
      return [
        {
          question: "How long does Botox last?",
          answer: "Most Botox treatments last between three to six months, with results gradually fading as muscle activity returns. Regular maintenance appointments can help extend the longevity of your results."
        },
        {
          question: "What is Botox masseter, and how does it work?",
          answer: "Botox for the masseter muscle is a popular treatment for jawline slimming and TMJ relief. By relaxing the masseter muscles, it can create a more contoured facial shape while reducing teeth grinding and jaw tension."
        },
        {
          question: "Can Botox be used for a forehead lift?",
          answer: "Yes! A forehead lift with Botox can subtly lift the brows and reduce forehead wrinkles, creating a more youthful and refreshed appearance without the need for surgery."
        },
        {
          question: "Where can I find the best Botox providers in Manhattan?",
          answer: "Whether you're looking for a quick touch-up or a full facial rejuvenation, explore MedSpasNYC's curated list of top-rated Manhattan Botox providers and book your appointment today!"
        }
      ];
    }
    
    return locationFaqs;
  };

  return (
    <>
      <ServiceHero 
        imageUrl={imageUrl} 
        name={`${serviceName} in ${locationName}`} 
        medSpasCount={medSpasInLocation.length} 
      />
      
      <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-8 border border-gray-100/80">
        {getBotoxIntro()}
        
        <ServiceLocationProviders 
          locationName={locationName} 
          serviceName={serviceName}
          providers={locationContent.popularProviders}
        />
        
        <ServiceLocationTiming 
          locationName={locationName} 
          serviceName={serviceName}
          timing={locationContent.timing}
        />
        
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex items-center mb-4">
            <Star size={20} className="text-medspa-gold mr-2" fill="currentColor" />
            <h3 className="text-xl font-serif font-medium">Expert Insight</h3>
          </div>
          <div className="bg-medspa-blue/20 p-6 rounded-lg text-gray-700 border border-medspa-blue/10">
            <p>
              When selecting a {serviceName} provider in {locationName}, consider their specialized training, the technology they utilize, and their aesthetic philosophy. The finest practitioners will offer a thorough consultation and create a bespoke treatment plan tailored to your unique features and desired outcomes.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={serviceSlug === "botox" && locationName === "Manhattan" ? getManhattanBotoxFAQs() : locationFaqs}
      />
      
      <h2 className="text-2xl font-serif font-medium mt-10 mb-6 tracking-tight">
        Handpicked {serviceName} Providers in {locationName}
      </h2>
      
      {medSpasInLocation.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {medSpasInLocation.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))}
        </div>
      ) : (
        <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20">
          <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
          <p className="text-gray-700 mb-5">
            Our curators are currently finalizing our selection of premium {serviceName} providers in {locationName}.
          </p>
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <Link to={`/treatments/${serviceSlug}`}>Explore All {serviceName} Specialists</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default ServiceLocationMainContent;
