
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFaqs from "./ServiceFaqs";
import MedSpaCard from "@/components/MedSpaCard";
import { Button } from "@/components/ui/button";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";

interface BotoxManhattanContentProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  imageUrl: string;
  medSpasInLocation: MedSpa[];
  locationFaqs: any[];
}

const BotoxManhattanContent = ({
  serviceName,
  serviceSlug,
  locationName,
  imageUrl,
  medSpasInLocation,
  locationFaqs
}: BotoxManhattanContentProps) => {
  
  // Custom introduction for Botox in Manhattan
  const getBotoxIntro = () => {
    return (
      <>
        <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
          The Best MedSpas in Manhattan for Expert Botox
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
  };
  
  // Custom FAQs for Botox in Manhattan
  const getManhattanBotoxFAQs = () => {
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
  };

  return (
    <>
      <ServiceHero 
        imageUrl={imageUrl} 
        name={`${serviceName} in ${locationName}`} 
        medSpasCount={medSpasInLocation.length}
        reducedHeight={true}
      />
      
      <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-8 border border-gray-100/80">
        {getBotoxIntro()}
      </div>
      
      <h2 className="text-2xl font-serif font-medium mb-6 tracking-tight">
        Handpicked {serviceName} Providers in {locationName}
      </h2>
      
      {medSpasInLocation.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 mb-8">
          {medSpasInLocation.map(medSpa => (
            <MedSpaCard key={medSpa.id} medSpa={medSpa} />
          ))}
        </div>
      ) : (
        <div className="bg-medspa-blue/30 p-8 rounded-lg text-center border border-medspa-blue/20 mb-8">
          <h3 className="text-xl font-medium mb-3">Personalized Recommendations</h3>
          <p className="text-gray-700 mb-5">
            Our curators are currently finalizing our selection of premium {serviceName} providers in {locationName}.
          </p>
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <Link to={`/treatments/${serviceSlug}`}>Explore All {serviceName} Specialists</Link>
          </Button>
        </div>
      )}
      
      <ServiceFaqs 
        serviceName={`${serviceName} in ${locationName}`}
        faqs={getManhattanBotoxFAQs()}
      />
    </>
  );
};

export default BotoxManhattanContent;
