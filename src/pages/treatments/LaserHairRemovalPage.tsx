
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

const LaserHairRemovalPage = () => {
  const treatmentName = "Laser Hair Removal";
  const serviceSlug = "laser-hair-removal";
  
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
      `Laser Hair Removal is one of New York City's most sought-after aesthetic treatments, offering a long-term solution to unwanted hair with minimal discomfort and lasting results. In a city where looking your best is essential, NYC's top medical spas provide cutting-edge laser technology suitable for all skin types and hair colors.`,
      `Manhattan and Brooklyn's premier laser clinics employ board-certified technicians who specialize in customized treatment plans addressing each client's unique needs. From Brazilian treatments to full-body packages, New York offers specialized solutions for every hair removal concern.`,
      `At MedSpasNYC, we've carefully vetted the finest laser hair removal providers across New York's boroughs, focusing on clinics that offer the latest FDA-approved technology, customized treatment protocols, and exceptional results for diverse skin types and tones.`
    ],
    benefits: [
      `Long-term reduction of unwanted hair — many NYC clients report 80-90% permanent hair reduction`,
      `Significant time savings compared to shaving, waxing, or other temporary methods — perfect for busy New Yorkers`,
      `Treatment works on multiple body areas including face, underarms, bikini area, legs, back, and chest`,
      `Modern lasers used in NYC's top clinics are effective for all skin types, including darker complexions`,
      `Minimal discomfort with advanced cooling systems and numbing options available at premium NYC locations`,
      `Prevents ingrown hairs and related skin issues common with other hair removal methods`
    ],
    process: [
      `Your laser hair removal journey begins with a consultation at one of our vetted NYC medical spas. During this initial meeting, your provider will assess your skin type, hair color, and treatment goals to determine the optimal laser type and treatment protocol for your needs.`,
      `Top NYC clinics use advanced laser systems including Alexandrite, Nd:YAG, Diode, and IPL devices, each optimized for different skin and hair combinations. Your provider will select the technology best suited to your specific characteristics.`,
      `Before treatment, the area is cleaned and prepared, and many Manhattan and Brooklyn providers apply a topical numbing cream for sensitive areas like the upper lip or bikini line. Protective eyewear is provided to shield your eyes from the laser light.`,
      `During the procedure, the provider moves the laser handpiece across the treatment area. The laser emits light that is absorbed by the pigment in your hair follicles, damaging them and inhibiting future growth. A cooling mechanism helps keep the skin comfortable throughout the treatment.`,
      `Treatment times vary based on the area, with smaller regions like the upper lip taking just minutes, while larger areas like full legs may require up to an hour. Many NYC clinics offer expedited appointments to accommodate busy schedules.`
    ],
    recovery: [
      `One of the advantages of getting laser hair removal in NYC is the minimal downtime. You can return to most normal activities immediately after treatment.`,
      `The treated area may appear red and slightly swollen, similar to a mild sunburn. Premium NYC clinics provide cooling gels and post-treatment care instructions to minimize these effects, which typically subside within hours.`,
      `New York providers typically recommend avoiding sun exposure for 1-2 weeks before and after treatment and emphasize the importance of using broad-spectrum SPF 30+ sunscreen on treated areas that may be exposed to sunlight.`,
      `Most patients experience hair shedding in the treated area within 7-14 days after treatment — a sign that the procedure was effective. Between sessions, you may shave unwanted hair, but should avoid waxing, plucking, or other methods that remove hair from the root.`
    ],
    results: [
      `Laser hair removal requires multiple sessions to target hair in different growth cycles. Most NYC clients need 6-8 treatments spaced 4-8 weeks apart for optimal results.`,
      `Progressive results become visible after each treatment, with many New Yorkers reporting significant reduction after just 3-4 sessions. By completing a full treatment series, most clients achieve 80-90% permanent hair reduction.`,
      `New York's top providers will explain that "permanent hair reduction" rather than "permanent hair removal" is the technically accurate term, as some fine, light hair may eventually return. Maintenance sessions once or twice a year can address this regrowth.`,
      `Results are long-lasting but can be affected by hormonal changes related to pregnancy, menopause, or certain medical conditions. NYC's most experienced providers discuss these factors during consultations and adjust treatment plans accordingly.`
    ],
    considerations: [
      `New York City pricing varies significantly based on treatment area, provider location, and the technology used. Manhattan's Upper East Side and Midtown clinics typically charge premium rates, while outer borough locations may offer more competitive pricing or package deals.`,
      `When choosing a laser hair removal provider in NYC, prioritize clinics that offer multiple laser technologies rather than one-size-fits-all solutions. Different lasers work better for different skin types and hair colors, and versatile providers achieve better results.`,
      `For darker skin tones (common among NYC's diverse population), seek providers specializing in laser treatments for melanin-rich skin. Nd:YAG lasers are typically the safest option for darker complexions, and experienced technicians will adjust settings appropriately.`,
      `While generally safe, potential side effects include temporary redness, swelling, and in rare cases, blistering or changes in skin pigmentation. NYC's top providers minimize these risks through proper patient screening, appropriate laser selection, and skilled technique.`
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

export default LaserHairRemovalPage;
