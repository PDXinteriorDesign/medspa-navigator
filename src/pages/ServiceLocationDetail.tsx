
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { getServiceBySlug, getServicesByLocation, getLocationName } from "@/lib/data";
import { type Location } from "@/lib/data";
import ServiceLocationSchema from "@/components/service/ServiceLocationSchema";
import ServiceLocationMainContent from "@/components/service/ServiceLocationMainContent";
import ServiceLocationSidebar from "@/components/service/ServiceLocationSidebar";
import { getLocationContent, getLocationFaqs } from "@/utils/locationContent";

const ServiceLocationDetail = () => {
  const { serviceSlug, location } = useParams<{ serviceSlug: string; location: Location }>();
  
  // Fetch service, location name, and medspas
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const locationName = location ? getLocationName(location as Location) : "";
  const medSpasInLocation = serviceSlug && location ? 
    getServicesByLocation(serviceSlug, location as Location) : [];
  
  if (!service || !location) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Service or Location Not Found</h1>
        <p>The service or location you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  // Generate location-specific content
  const locationContent = getLocationContent(service.name, locationName);
  const locationFaqs = getLocationFaqs(service.name, locationName);
  
  return (
    <>
      <ServiceLocationSchema 
        serviceName={service.name} 
        locationName={locationName} 
        description={service.description} 
      />
    
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}` },
            { label: locationName, href: `/services/${service.slug}-in-${location}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ServiceLocationMainContent
              serviceName={service.name}
              serviceSlug={service.slug}
              locationName={locationName}
              imageUrl={service.imageUrl}
              medSpasInLocation={medSpasInLocation}
              locationContent={locationContent}
              locationFaqs={locationFaqs}
            />
          </div>
          
          <div className="mt-8 md:mt-0">
            <ServiceLocationSidebar
              serviceSlug={service.slug}
              serviceName={service.name}
              location={location as Location}
              locationName={locationName}
              locationContent={locationContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLocationDetail;
