
import React from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone, Clock, CalendarDays, ExternalLink, ChevronRight } from "lucide-react";
import ClinicSchema from "./ClinicSchema";

interface ClinicPageProps {
  clinic: MedSpa;
}

const ClinicPage = ({ clinic }: ClinicPageProps) => {
  // Get the location slug from the clinic address
  const getLocationSlug = () => {
    if (clinic.address.includes("Manhattan")) return "manhattan";
    if (clinic.address.includes("Brooklyn")) return "brooklyn";
    if (clinic.address.includes("SoHo")) return "soho";
    if (clinic.address.includes("Upper East Side")) return "upper-east-side";
    if (clinic.address.includes("Tribeca")) return "tribeca"; 
    if (clinic.address.includes("Midtown")) return "midtown";
    if (clinic.address.includes("Williamsburg")) return "williamsburg";
    if (clinic.address.includes("Hamptons")) return "the-hamptons";
    
    // Default fallback
    return clinic.location.toLowerCase().replace(/\s+/g, "-");
  };
  
  const locationSlug = getLocationSlug();

  return (
    <>
      <ClinicSchema clinic={clinic} />
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: clinic.location, href: `/locations/${locationSlug}` },
            { label: clinic.name, href: `/${locationSlug}/${clinic.id}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="h-64 relative">
                <img 
                  src={clinic.imageUrl} 
                  alt={clinic.name} 
                  className="w-full h-full object-cover" 
                />
                {clinic.featured && (
                  <div className="absolute top-4 right-4 bg-medspa-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Clinic
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl font-serif font-bold text-medspa-dark mb-4">{clinic.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-medspa-gold mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < Math.floor(clinic.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(clinic.rating) ? "text-medspa-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{clinic.rating}</span>
                  <span className="text-gray-500 ml-1">({clinic.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-start mb-4">
                  <MapPin size={20} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{clinic.address}</p>
                </div>
                
                <div className="flex items-start mb-4">
                  <Phone size={20} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">212-555-{Math.floor(1000 + Math.random() * 9000)}</p>
                </div>
                
                <div className="flex items-start mb-6">
                  <Clock size={20} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Monday - Friday: 9am - 7pm</p>
                    <p className="text-gray-700">Saturday: 10am - 6pm</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <Button className="bg-medspa-teal hover:bg-medspa-teal/90">
                    <CalendarDays size={18} className="mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                    <ExternalLink size={18} className="mr-2" />
                    Visit Website
                  </Button>
                </div>
                
                <h2 className="text-xl font-medium mb-4">About {clinic.name}</h2>
                <p className="text-gray-700 mb-6">{clinic.description}</p>
                
                {clinic.services && clinic.services.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-medium mb-4">Services Offered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {clinic.services.map((serviceId) => {
                        const formattedService = serviceId.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');
                        
                        return (
                          <Link 
                            key={serviceId}
                            to={`/treatments/${serviceId}-in-${locationSlug}`}
                            className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 hover:border-medspa-teal/30"
                          >
                            <ChevronRight size={16} className="text-medspa-teal mr-2" />
                            <span>{formattedService}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:sticky md:top-24 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Book an Appointment</h3>
              <p className="text-gray-700 mb-4">Schedule your consultation or treatment at {clinic.name} today.</p>
              <Button className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                <CalendarDays size={18} className="mr-2" />
                Book Now
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Treatments at {clinic.name}</h3>
              <div className="space-y-2">
                {clinic.services?.slice(0, 5).map((serviceId) => {
                  const formattedService = serviceId.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ');
                  
                  return (
                    <Link 
                      key={serviceId}
                      to={`/treatments/${serviceId}`}
                      className="flex items-center p-2 text-gray-700 hover:text-medspa-teal"
                    >
                      <ChevronRight size={16} className="text-medspa-teal mr-2" />
                      <span>{formattedService}</span>
                    </Link>
                  );
                })}
              </div>
              <Link 
                to={`/locations/${locationSlug}`}
                className="inline-block mt-4 text-medspa-teal hover-underline font-medium"
              >
                View all treatments in {clinic.location}
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Other MedSpas in {clinic.location}</h3>
              <Link 
                to={`/locations/${locationSlug}`}
                className="text-medspa-teal hover-underline font-medium"
              >
                Browse all {clinic.location} MedSpas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicPage;
