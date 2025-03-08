
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import MedSpaCard from "@/components/MedSpaCard";
import { getServiceBySlug, getServicesByLocation, getLocationName } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { type Location } from "@/lib/data";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceAbout from "@/components/service/ServiceAbout";
import ServiceFaqs from "@/components/service/ServiceFaqs";
import ServiceCallToAction from "@/components/service/ServiceCallToAction";
import ServiceSchema from "@/components/service/ServiceSchema";
import ServiceLocationSchema from "@/components/service/ServiceLocationSchema";
import ServiceLocationInsights from "@/components/service/ServiceLocationInsights";
import ServiceLocationTiming from "@/components/service/ServiceLocationTiming";
import ServiceLocationProviders from "@/components/service/ServiceLocationProviders";
import ServiceLocationNeighborhoods from "@/components/service/ServiceLocationNeighborhoods";
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
            <ServiceHero 
              imageUrl={service.imageUrl} 
              name={`${service.name} in ${locationName}`} 
              medSpasCount={medSpasInLocation.length} 
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">About {service.name} in {locationName}</h2>
              
              <div className="text-gray-700 mb-6 space-y-4">
                {locationContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <ServiceLocationProviders 
                locationName={locationName} 
                serviceName={service.name}
                providers={locationContent.popularProviders}
              />
              
              <ServiceLocationTiming 
                locationName={locationName} 
                serviceName={service.name}
                timing={locationContent.timing}
              />
            </div>
            
            <ServiceFaqs 
              serviceName={`${service.name} in ${locationName}`}
              faqs={locationFaqs}
            />
            
            <h2 className="section-heading mt-8">MedSpas Offering {service.name} in {locationName}</h2>
            
            {medSpasInLocation.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {medSpasInLocation.map(medSpa => (
                  <MedSpaCard key={medSpa.id} medSpa={medSpa} />
                ))}
              </div>
            ) : (
              <div className="bg-medspa-blue/30 p-6 rounded-lg text-center">
                <p className="text-gray-700 mb-4">No MedSpas currently listed for {service.name} in {locationName}.</p>
                <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
                  <a href={`/services/${service.slug}`}>View All {service.name} Providers</a>
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-8 md:mt-0">
            <LocationFilter serviceSlug={service.slug} currentLocation={location as Location} />
            
            <ServiceCallToAction serviceName={`${service.name} in ${locationName}`} />
            
            <ServiceLocationInsights 
              locationName={locationName} 
              serviceName={service.name}
              insights={locationContent.insights}
            />
            
            <ServiceLocationNeighborhoods 
              locationName={locationName} 
              serviceName={service.name}
              neighborhoods={locationContent.nearbyNeighborhoods}
              serviceSlug={service.slug}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLocationDetail;
