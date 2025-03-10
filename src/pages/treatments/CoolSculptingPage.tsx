
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
import ServiceReviews from "@/components/service/ServiceReviews";

const CoolSculptingPage = () => {
  const treatmentName = "CoolSculpting";
  const serviceSlug = "coolsculpting";
  
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
  
  // Treatment-specific keywords
  const treatmentKeywords = generateTreatmentKeywords(treatmentName);
  
  // Enhanced content structure for SEO
  const enhancedContent = {
    introduction: [
      `CoolSculpting is New York City's premier non-invasive fat reduction procedure, using FDA-approved cryolipolysis technology to target and eliminate stubborn fat cells without surgery or downtime. This innovative treatment is particularly popular in image-conscious Manhattan and Brooklyn, where it helps clients achieve more sculpted physiques without disrupting their busy NYC lifestyles.`,
      `New York's leading medical spas offer CoolSculpting as an alternative to traditional liposuction, with specialized applicators designed to target different body areas. The procedure works by cooling fat cells to a temperature that triggers their natural death, after which the body gradually processes and eliminates them over several weeks.`,
      `At MedSpasNYC, we've curated the finest CoolSculpting providers across Manhattan, Brooklyn, and beyond, focusing on clinics that offer the latest CoolSculpting technology, customized treatment plans, and exceptional results. Our featured providers employ skilled technicians who understand how to achieve optimal body contouring results for NYC's diverse clientele.`
    ],
    benefits: [
      `Zero downtime — return to your busy New York schedule immediately after treatment`,
      `Non-surgical approach to fat reduction with no anesthesia, needles, or incisions`,
      `FDA-cleared treatment with proven safety record across thousands of NYC patients`,
      `Targets specific problem areas resistant to diet and exercise, including abdomen, flanks, thighs, and double chin`,
      `Results look natural and develop gradually over 1-3 months, avoiding the "just had work done" appearance`,
      `Single session can reduce fat in the treated area by approximately 20-25%`
    ],
    process: [
      `Your CoolSculpting journey begins with a consultation at one of our vetted NYC medical spas. During this initial meeting, your provider will assess your body composition, discuss your aesthetic goals, and create a customized treatment plan targeting your specific concern areas.`,
      `On treatment day, your provider will position the CoolSculpting applicator on the targeted area. The device uses suction to draw the tissue between cooling panels, and you'll feel an intense cold sensation for the first few minutes before the area becomes numb.`,
      `A standard CoolSculpting treatment session in NYC takes 35-60 minutes per applicator. Many Manhattan and Brooklyn clinics offer DualSculpting, using two machines simultaneously to treat multiple areas and reduce appointment times — perfect for busy New Yorkers.`,
      `During your treatment, you can relax, work on your laptop, watch videos, or even take a nap. This convenience makes CoolSculpting particularly popular among time-conscious NYC professionals.`
    ],
    recovery: [
      `One of CoolSculpting's major advantages for New Yorkers is the complete lack of downtime. You can immediately return to work, exercise, and all normal activities after your treatment.`,
      `The treated area may appear red and swollen temporarily and feel numb, tingly, or stinging — sensations that typically resolve within hours or days. Some patients experience mild bruising or sensitivity.`,
      `New York providers typically recommend light massage of the treated area immediately after the applicator is removed, which has been shown to enhance fat reduction results by up to 68%.`,
      `While rare, some NYC patients report experiencing "paradoxical adipose hyperplasia" (PAH) — a condition where the treated area expands rather than shrinks. Top NYC providers will discuss this uncommon risk (which occurs in less than 1% of cases) during your consultation.`
    ],
    results: [
      `CoolSculpting results develop gradually as your body processes the frozen fat cells. Many NYC clients report seeing initial changes within 3 weeks, with the most dramatic results visible after 2-3 months.`,
      `Clinical studies show that CoolSculpting can reduce fat layer thickness in treated areas by 20-25% after a single session. Many Manhattan and Brooklyn clients opt for multiple sessions to achieve more significant fat reduction.`,
      `Results from CoolSculpting are considered permanent because the treated fat cells are eliminated from the body. However, maintaining your results requires a healthy lifestyle — a fact that reputable NYC providers will emphasize during consultations.`,
      `New York's most experienced CoolSculpting providers can achieve sculpting and contouring effects beyond simple fat reduction by strategically treating specific areas to create more athletic-looking contours.`
    ],
    considerations: [
      `CoolSculpting is not a weight loss solution but rather a body contouring treatment. Ideal candidates are within 30 pounds of their goal weight and have distinct, pinchable pockets of fat. NYC providers typically screen patients carefully to ensure they're good candidates.`,
      `Pricing in New York varies significantly based on treatment areas, number of applications, and provider location. Manhattan's premium medical spas typically charge more than outer borough locations, with treatment packages ranging from $2,000-$4,000 for multiple areas.`,
      `Results vary between individuals, and some patients may require multiple sessions to achieve their desired outcome. Most NYC providers offer package pricing for clients planning multiple treatments.`,
      `Some patients may experience temporary side effects such as numbness, tingling, redness, and minor bruising. NYC's top providers have protocols in place to minimize these effects and ensure your comfort throughout the process.`
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
            <LocationFilter serviceSlug={serviceSlug} />
            
            <ServiceCallToAction serviceName={treatmentName} />
            
            <ServiceReviews 
              serviceName={treatmentName}
              reviews={seoContent.reviews}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoolSculptingPage;
