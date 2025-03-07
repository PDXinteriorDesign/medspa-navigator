
import { useParams } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import MedSpaCard from "@/components/MedSpaCard";
import { getServiceBySlug, getMedSpasByService } from "@/lib/data";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // Fetch service and medspas that offer this service
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
  
  return (
    <div className="medspa-container py-12">
      <BreadcrumbNav 
        items={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}`, current: true }
        ]} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
            <img 
              src={service.imageUrl} 
              alt={service.name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{service.name}</h1>
                <p className="text-white/90">{medSpasWithService.length} MedSpas offering this service in NYC</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-medium mb-4">About {service.name}</h2>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Donec et dapibus enim. Aliquam erat volutpat. Suspendisse potenti. Nunc vitae urna vel metus maximus porttitor ut sed leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          
          <h2 className="section-heading mt-8">MedSpas Offering {service.name}</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {medSpasWithService.map(medSpa => (
              <MedSpaCard key={medSpa.id} medSpa={medSpa} />
            ))}
          </div>
        </div>
        
        <div className="mt-8 md:mt-0">
          <LocationFilter serviceSlug={service.slug} />
          
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
            <h3 className="text-lg font-medium mb-4">Looking for {service.name} providers?</h3>
            <p className="text-gray-700 text-sm mb-4">
              Find the top-rated medical spas offering {service.name} in your area of NYC.
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

export default ServiceDetail;
