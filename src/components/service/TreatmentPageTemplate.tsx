
import React, { ReactNode } from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import { getServiceBySlug, getMedSpasByService } from "@/lib/data";
import { getServiceSeoContent, getServiceFaqs, getServicePricing } from "@/utils/serviceContent";
import { generateTreatmentKeywords } from "@/utils/keywordGenerator";

import EnhancedServiceSchema from "@/components/service/EnhancedServiceSchema";
import ServiceHero from "@/components/service/ServiceHero";
import EnhancedServiceContent from "@/components/service/EnhancedServiceContent";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceFaqs from "@/components/service/ServiceFaqs";
import ServiceMedSpas from "@/components/service/ServiceMedSpas";
import ServiceCallToAction from "@/components/service/ServiceCallToAction";
import ServiceStyles from "@/components/service/ServiceStyles";

interface TreatmentPageTemplateProps {
  treatmentName: string;
  serviceSlug: string;
  enhancedContent: {
    introduction: string[];
    benefits: string[];
    process: string[];
    recovery: string[];
    results: string[];
    considerations: string[];
  };
  customContent?: ReactNode;
}

const TreatmentPageTemplate = ({ 
  treatmentName, 
  serviceSlug,
  enhancedContent,
  customContent
}: TreatmentPageTemplateProps) => {
  const service = getServiceBySlug(serviceSlug);
  const medSpasWithService = getMedSpasByService(serviceSlug);
  
  // If service isn't found in the database, create a fallback service object
  const fallbackService = {
    id: serviceSlug,
    name: treatmentName,
    slug: serviceSlug,
    description: enhancedContent.introduction[0] || `${treatmentName} is a popular aesthetic treatment in NYC.`,
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  };
  
  const effectiveService = service || fallbackService;
  
  const seoContent = getServiceSeoContent(treatmentName);
  const faqs = getServiceFaqs(treatmentName);
  const pricingInfo = getServicePricing(treatmentName);
  
  // Treatment-specific keywords
  const treatmentKeywords = generateTreatmentKeywords(treatmentName);
  
  return (
    <>
      <ServiceStyles />
      <EnhancedServiceSchema 
        serviceName={treatmentName} 
        description={effectiveService.description}
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
              imageUrl={effectiveService.imageUrl} 
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
            
            {customContent && (
              <div className="mb-6">
                {customContent}
              </div>
            )}
            
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

export default TreatmentPageTemplate;
