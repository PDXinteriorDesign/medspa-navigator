import { useParams } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import { getServiceBySlug, getMedSpasByService } from "@/lib/data";
import { getServiceSeoContent, getServiceFaqs, getServicePricing } from "@/utils/serviceContent";
import { generateNYCServiceKeywords } from "@/utils/keywordGenerator";

import EnhancedServiceSchema from "@/components/service/EnhancedServiceSchema";
import ServiceHero from "@/components/service/ServiceHero";
import EnhancedServiceContent from "@/components/service/EnhancedServiceContent";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceFaqs from "@/components/service/ServiceFaqs";
import ServiceMedSpas from "@/components/service/ServiceMedSpas";
import ServiceCallToAction from "@/components/service/ServiceCallToAction";

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const medSpasWithService = serviceSlug ? getMedSpasByService(serviceSlug) : [];
  
  if (!service) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Service Not Found</h1>
        <p>The service you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const seoContent = getServiceSeoContent(service.name);
  const faqs = getServiceFaqs(service.name);
  const pricingInfo = getServicePricing(service.name);
  
  const serviceKeywords = generateNYCServiceKeywords(service.name);
  
  const enhancedContent = {
    introduction: [
      ...(seoContent.introduction || [`${service.name} is a popular aesthetic treatment offered by top medical spas across New York City. This advanced procedure helps clients achieve their desired aesthetic goals with minimal downtime and remarkable results.`]),
      `At MedSpasNYC, we've curated the finest ${service.name.toLowerCase()} providers in New York, ensuring you receive treatment from skilled professionals using the latest techniques and technology.`,
      `This comprehensive guide covers everything you need to know about ${service.name.toLowerCase()} treatments in NYC, from the procedure itself to expected results and top providers.`
    ],
    benefits: [
      `Natural-looking, long-lasting results tailored to your unique features`,
      `Performed by board-certified practitioners with specialized training`,
      `Minimal downtime allowing you to return to your busy NYC lifestyle quickly`,
      `Advanced techniques that prioritize both safety and aesthetic outcomes`,
      `Customizable treatment plans to address your specific concerns`
    ],
    process: [
      `Your ${service.name} journey begins with a thorough consultation at one of our vetted NYC medical spas. During this initial meeting, your provider will assess your concerns, discuss your aesthetic goals, and determine if you're an ideal candidate for the treatment.`,
      `Before your procedure, your provider will explain each step of the treatment process, potential side effects, and answer any questions you may have. This transparent approach ensures you feel comfortable and informed throughout your experience.`,
      `The actual ${service.name.toLowerCase()} procedure typically takes between 30-60 minutes, depending on the treatment area and your specific needs. Your provider will use precise techniques to ensure optimal results while minimizing discomfort.`
    ],
    recovery: [
      `Most ${service.name} patients can return to their normal activities immediately or within 24-48 hours, making this an ideal treatment for busy New Yorkers.`,
      `You may experience minor swelling, redness, or sensitivity at the treatment site, but these effects typically subside quickly. Your provider will give you specific aftercare instructions to ensure optimal healing and results.`,
      `Follow-up appointments may be recommended to monitor your progress and make any necessary adjustments to your treatment plan.`
    ],
    results: [
      `Results from ${service.name} treatments are designed to enhance your natural beauty while maintaining a refreshed, never overdone appearance.`,
      `Depending on the specific treatment, results may be immediately visible or develop gradually over several weeks as your body responds to the procedure.`,
      `To maintain optimal results, your provider may recommend periodic maintenance treatments tailored to your specific needs and goals.`
    ],
    considerations: [
      `While ${service.name} is considered safe for most healthy adults, certain medical conditions or medications may affect your candidacy. Your provider will review your medical history during your consultation.`,
      `The cost of ${service.name} in NYC varies based on the provider's expertise, location, and the extent of treatment needed. Premium providers in Manhattan neighborhoods like the Upper East Side may charge more than those in other boroughs.`,
      `Choosing a qualified provider is essential for both safety and results. All MedSpasNYC featured providers are thoroughly vetted to ensure they meet our stringent standards for training, experience, and patient satisfaction.`
    ]
  };
  
  return (
    <>
      <EnhancedServiceSchema 
        serviceName={service.name} 
        description={service.description}
        keywords={serviceKeywords}
        cityName="NYC"
      />
    
      <div className="medspa-container">
        <div className="py-8">
          <BreadcrumbNav 
            items={[
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}`, current: true }
            ]} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16">
          <div className="md:col-span-9">
            <ServiceHero 
              imageUrl={service.imageUrl} 
              name={service.name} 
              medSpasCount={medSpasWithService.length}
            />
            
            <EnhancedServiceContent 
              serviceName={service.name}
              content={enhancedContent}
            />
            
            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-10 mb-8">
              <ServicePricing
                serviceName={service.name}
                pricingInfo={pricingInfo}
              />
            </div>
            
            <ServiceFaqs 
              serviceName={service.name}
              faqs={faqs}
            />
            
            <ServiceMedSpas
              serviceName={service.name}
              medSpas={medSpasWithService}
            />
          </div>
          
          <div className="md:col-span-3">
            <div className="sticky top-8">
              <LocationFilter serviceSlug={service.slug} />
              <ServiceCallToAction serviceName={service.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
