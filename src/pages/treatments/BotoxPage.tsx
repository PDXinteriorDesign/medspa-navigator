
import React from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import { getServiceBySlug, getMedSpasByService } from "@/lib/data";
import { getServiceSeoContent, getServiceFaqs, getServicePricing } from "@/utils/serviceContent";
import { generateTreatmentKeywords } from "@/utils/keywordGenerator";

// Import components
import EnhancedServiceSchema from "@/components/service/EnhancedServiceSchema";
import ServiceHero from "@/components/service/ServiceHero";
import EnhancedServiceContent from "@/components/service/EnhancedServiceContent";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceFaqs from "@/components/service/ServiceFaqs";
import ServiceMedSpas from "@/components/service/ServiceMedSpas";
import ServiceCallToAction from "@/components/service/ServiceCallToAction";
import ServiceComparison from "@/components/service/ServiceComparison";

const BotoxPage = () => {
  const treatmentName = "Botox";
  const serviceSlug = "botox";
  
  const service = getServiceBySlug(serviceSlug);
  const medSpasWithService = getMedSpasByService(serviceSlug);
  
  if (!service) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Service Not Found</h1>
        <p>The service you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const seoContent = getServiceSeoContent(treatmentName);
  const faqs = getServiceFaqs(treatmentName);
  const pricingInfo = getServicePricing(treatmentName);
  
  // Botox vs Dysport comparison data
  const botoxVsDysportItems = [
    {
      category: "Best For",
      option1Value: "Precision (small areas)",
      option2Value: "Broad forehead/glabella"
    },
    {
      category: "Onset",
      option1Value: "5–7 days",
      option2Value: "2–3 days"
    },
    {
      category: "Cost",
      option1Value: "$12–25/unit",
      option2Value: "$4–8/unit"
    },
    {
      category: "Popularity",
      option1Value: "#1 in NYC",
      option2Value: "Growing with younger crowds"
    }
  ];
  
  // What to Expect section data
  const whatToExpectItems = [
    {
      category: "Consultation",
      option1Value: "Discuss goals with injectors (e.g., "softened vs. dramatic")",
      option2Value: ""
    },
    {
      category: "Mapping",
      option1Value: "Injector marks muscles while you animate your face",
      option2Value: ""
    },
    {
      category: "Procedure",
      option1Value: "Ultra-fine needles + ice/numbing cream (10–15 mins)",
      option2Value: ""
    },
    {
      category: "Recovery",
      option1Value: "Mild redness fades by lunch – avoid hot yoga for 24hrs",
      option2Value: ""
    },
    {
      category: "Results",
      option1Value: "Subtle changes in 72hrs; full effect at 14 days",
      option2Value: ""
    }
  ];
  
  // Treatment-specific keywords
  const treatmentKeywords = generateTreatmentKeywords(treatmentName);
  
  // Enhanced content structure for SEO
  const enhancedContent = {
    introduction: [
      `Botox is the most popular injectable cosmetic treatment in New York City, known for its ability to temporarily reduce the appearance of fine lines and wrinkles. As a purified form of botulinum toxin, Botox works by relaxing the facial muscles that cause dynamic wrinkles when you make expressions.`,
      `NYC is home to some of the world's most skilled Botox injectors, with Manhattan and Brooklyn offering exceptional clinics that specialize in natural-looking results. The city's competitive aesthetic market ensures that providers stay at the forefront of injection techniques and patient care.`,
      `At MedSpasNYC, we've carefully vetted the finest Botox providers across New York's boroughs, from luxurious Upper East Side clinics to trendy establishments in SoHo and Williamsburg. Our curated selection ensures you'll find skilled practitioners regardless of your budget or location preferences.`
    ],
    benefits: [
      `Quick, minimally invasive treatment with virtually no downtime — perfect for busy New Yorkers`,
      `Effectively treats forehead lines, crow's feet, and frown lines between the eyebrows`,
      `Preventative benefits when started early (many NYC providers recommend starting in your late 20s/early 30s)`,
      `Results typically last 3-4 months, making it easy to maintain with quarterly appointments`,
      `Can be combined with other treatments like fillers for a comprehensive rejuvenation approach`,
      `NYC's top providers deliver natural results that preserve facial expressiveness`
    ],
    process: [
      `Your Botox journey begins with a consultation at one of our vetted NYC medical spas. During this initial appointment, your provider will assess your facial anatomy, discuss your aesthetic goals, and determine the appropriate number of units for your treatment areas.`,
      `The actual injection process takes just 10-15 minutes, making it the ultimate "lunchtime procedure" for Manhattan professionals. Your provider will use an ultra-fine needle to deliver precise amounts of Botox to the targeted muscles.`,
      `Most NYC Botox specialists use topical numbing cream or ice to minimize discomfort, though many patients report the procedure being less painful than expected. You may feel a slight pinching sensation during each injection, but this subsides almost immediately.`
    ],
    recovery: [
      `One of the major advantages of getting Botox in NYC is the minimal downtime — you can immediately return to your busy New York lifestyle after treatment.`,
      `Your provider will advise you to remain upright for 4 hours after treatment and avoid touching or rubbing the treated areas for 24 hours to prevent the Botox from migrating.`,
      `Minor redness or swelling at injection sites typically resolves within 30 minutes, making it easy to return to work or social activities without anyone noticing you've had treatment.`,
      `Most New York providers recommend avoiding strenuous exercise, saunas, hot showers, and alcohol consumption for 24 hours post-treatment.`
    ],
    results: [
      `Botox results begin to appear within 3-5 days after treatment, with full effects visible at the 2-week mark. This gradual onset ensures natural-looking results and makes the treatment discrete — ideal for image-conscious New Yorkers.`,
      `NYC's premier providers are skilled at creating balanced, harmonious results that preserve natural facial expressions while softening lines and wrinkles. The goal is never a "frozen" appearance but rather a refreshed, well-rested look.`,
      `Results typically last 3-4 months, though many Manhattan clients find that with regular maintenance treatments, the effects may last longer over time as the targeted muscles become weaker.`
    ],
    considerations: [
      `Botox pricing in NYC varies significantly based on provider expertise and clinic location. Manhattan's Upper East Side and Midtown clinics typically charge premium prices (often per unit), while outer borough locations may offer more competitive rates or package deals.`,
      `When selecting a Botox provider in New York, prioritize experience and credentials over price. Board-certified dermatologists, plastic surgeons, and properly trained nurse injectors with extensive experience will help you avoid complications and achieve the best results.`,
      `While Botox is FDA-approved and generally safe, potential side effects include bruising, headache, and temporary drooping (which is rare when administered by skilled NYC providers). During your consultation, your provider will discuss all potential risks and how they minimize them.`
    ]
  };
  
  return (
    <>
      <EnhancedServiceSchema 
        serviceName={treatmentName} 
        description={service.description}
        keywords={treatmentKeywords}
        cityName="NYC"
      />
    
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: treatmentName, href: `/services/${serviceSlug}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ServiceHero 
              imageUrl={service.imageUrl} 
              name={treatmentName} 
              medSpasCount={medSpasWithService.length}
            />
            
            <EnhancedServiceContent 
              serviceName={treatmentName}
              content={enhancedContent}
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <ServicePricing
                serviceName={treatmentName}
                pricingInfo={pricingInfo}
              />
            </div>
            
            {/* Botox vs Dysport Comparison */}
            <ServiceComparison
              title="Botox vs. Dysport in NYC: Which Is Better?"
              option1Name="Botox"
              option2Name="Dysport"
              items={botoxVsDysportItems}
              footnote="Most NYC providers offer both – consult for personalized recommendations."
            />
            
            {/* What to Expect Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-serif font-medium mb-4">
                What to Expect: Your NYC Botox Journey
              </h3>
              <div className="space-y-4">
                {whatToExpectItems.map((item, index) => (
                  <div key={index} className="flex border-b border-gray-100 pb-3">
                    <div className="w-1/3 font-medium text-gray-700">{item.category}</div>
                    <div className="w-2/3 text-gray-600">{item.option1Value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <ServiceFaqs 
              serviceName={treatmentName}
              faqs={faqs}
            />
            
            <ServiceMedSpas
              serviceName={treatmentName}
              medSpas={medSpasWithService}
            />
          </div>
          
          <div className="mt-8 md:mt-0">
            <div className="md:sticky md:top-24 space-y-6">
              <LocationFilter serviceSlug={serviceSlug} />
              
              <ServiceCallToAction serviceName={treatmentName} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotoxPage;
