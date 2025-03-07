
import { useParams, useSearchParams, Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { getMedSpaBySlug, getMedSpaById, getServiceBySlug } from "@/lib/data";

const MedSpaDetail = () => {
  const { medSpaSlug } = useParams<{ medSpaSlug: string }>();
  const [searchParams] = useSearchParams();
  const medSpaId = searchParams.get("id");
  
  // Get medspa data - either by slug (static route) or by ID (dynamic route)
  const medSpa = medSpaSlug 
    ? getMedSpaBySlug(medSpaSlug) 
    : medSpaId 
      ? getMedSpaById(medSpaId)
      : undefined;
      
  if (!medSpa) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">MedSpa Not Found</h1>
        <p>The MedSpa you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  // Get service details for this MedSpa
  const medSpaServices = medSpa.services
    .map(serviceId => getServiceBySlug(serviceId))
    .filter(service => service !== undefined);
  
  return (
    <div className="medspa-container py-12">
      <BreadcrumbNav 
        items={[
          { label: "MedSpas", href: "/medspas" },
          { label: medSpa.name, href: `/medspas/${medSpa.slug}`, current: true }
        ]} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="relative h-72 mb-6 rounded-lg overflow-hidden">
            <img 
              src={medSpa.imageUrl} 
              alt={medSpa.name} 
              className="w-full h-full object-cover" 
            />
            {medSpa.featured && (
              <Badge className="absolute top-4 right-4 bg-medspa-gold text-white px-3 py-1">
                Featured
              </Badge>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark">{medSpa.name}</h1>
            <div className="flex items-center mt-2 sm:mt-0">
              <div className="flex text-medspa-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(medSpa.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="ml-2 font-medium">{medSpa.rating}</span>
              <span className="ml-1 text-gray-500">({medSpa.reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-medium mb-4">About {medSpa.name}</h2>
            <p className="text-gray-700 mb-6">{medSpa.description}</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Donec et dapibus enim. Aliquam erat volutpat. Suspendisse potenti. Nunc vitae urna vel metus maximus porttitor ut sed leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-medium mb-4">Services Offered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {medSpaServices.map((service) => (
                service && (
                  <Link 
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="flex items-center p-3 rounded-md border border-gray-200 hover:border-medspa-teal hover:bg-medspa-blue/10 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-md overflow-hidden mr-3">
                      <img src={service.imageUrl} alt={service.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-500">View details</p>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex">
                <MapPin size={20} className="text-medspa-teal mr-3" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-700">{medSpa.address}</p>
                </div>
              </div>
              
              <div className="flex">
                <Phone size={20} className="text-medspa-teal mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-medspa-teal hover:underline">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <Mail size={20} className="text-medspa-teal mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:info@${medSpa.slug}.com`} className="text-medspa-teal hover:underline">
                    info@{medSpa.slug}.com
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <Clock size={20} className="text-medspa-teal mr-3" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-700">Mon-Fri: 9AM - 7PM</p>
                  <p className="text-gray-700">Sat: 10AM - 5PM</p>
                  <p className="text-gray-700">Sun: Closed</p>
                </div>
              </div>
              
              <div className="flex">
                <ExternalLink size={20} className="text-medspa-teal mr-3" />
                <div>
                  <p className="font-medium">Website</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-medspa-teal hover:underline">
                    www.{medSpa.slug}.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-medspa-blue/50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Book an Appointment</h3>
            <p className="text-sm text-gray-700 mb-4">
              Ready to experience the services at {medSpa.name}? Book your appointment now.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                <a href={`tel:+1234567890`}>Call to Book</a>
              </Button>
              <Button variant="outline" className="w-full border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                Request Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedSpaDetail;
