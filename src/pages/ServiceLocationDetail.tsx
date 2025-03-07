
import { useParams } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import MedSpaCard from "@/components/MedSpaCard";
import { getServiceBySlug, getServicesByLocation, getLocationName } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { type Location } from "@/lib/data";

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
  
  return (
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
          <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
            <img 
              src={service.imageUrl} 
              alt={`${service.name} in ${locationName}`} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{service.name} in {locationName}</h1>
                <p className="text-white/90">{medSpasInLocation.length} MedSpas offering this service</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-medium mb-4">About {service.name} in {locationName}</h2>
            <p className="text-gray-700 mb-6">
              Looking for the best {service.name} providers in {locationName}? We've curated a list of the top medical spas offering this popular treatment in your area.
            </p>
            <p className="text-gray-700">
              {service.description} Many people choose providers in {locationName} for their convenient locations, skilled practitioners, and state-of-the-art facilities.
            </p>
          </div>
          
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
          
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
            <h3 className="text-lg font-medium mb-4">Looking for {service.name} in {locationName}?</h3>
            <p className="text-gray-700 text-sm mb-4">
              Find the top-rated medical spas offering {service.name} in {locationName}.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                <a href={`tel:+1234567890`}>Call to Book Now</a>
              </Button>
              <Button variant="outline" className="w-full border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                Get Price Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocationDetail;
