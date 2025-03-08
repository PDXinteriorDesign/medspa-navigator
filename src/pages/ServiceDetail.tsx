
import { useParams } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import { getServiceBySlug, getMedSpasByService } from "@/lib/data";
import { getServiceSeoContent, getServiceFaqs, getServicePricing } from "@/utils/serviceContent";

// Import components
import ServiceSchema from "@/components/service/ServiceSchema";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceAbout from "@/components/service/ServiceAbout";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceFaqs from "@/components/service/ServiceFaqs";
import ServiceMedSpas from "@/components/service/ServiceMedSpas";
import ServiceCallToAction from "@/components/service/ServiceCallToAction";
import ServiceReviews from "@/components/service/ServiceReviews";

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
  
  return (
    <>
      <ServiceSchema name={service.name} description={service.description} />
    
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ServiceHero 
              imageUrl={service.imageUrl} 
              name={service.name} 
              medSpasCount={medSpasWithService.length}
            />
            
            <ServiceAbout 
              serviceName={service.name}
              seoContent={seoContent}
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
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
          
          <div className="mt-8 md:mt-0">
            <LocationFilter serviceSlug={service.slug} />
            
            <ServiceCallToAction serviceName={service.name} />
            
            <ServiceReviews 
              serviceName={service.name}
              reviews={seoContent.reviews}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
