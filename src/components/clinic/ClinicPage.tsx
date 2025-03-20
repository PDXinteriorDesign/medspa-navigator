
import React from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Star, Phone, Clock, ShieldCheck, ExternalLink, ChevronRight, Sparkles } from "lucide-react";
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

  // Generate Google Maps Embed URL based on coordinates or address
  const getMapEmbedUrl = () => {
    if (clinic.coordinates) {
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${clinic.coordinates.lat},${clinic.coordinates.lng}`;
    } else {
      // Fallback to address-based map
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(clinic.address)}`;
    }
  };

  // Additional treatments specific to this clinic - could be added to the MedSpa type in the future
  const additionalTreatments = [
    "Dysport®", 
    "DAXXIFY™", 
    "JUVÉDERM®", 
    "Restylane®", 
    "Radiesse®", 
    "Sculptra®", 
    "Thread Lifts", 
    "Fraxel®", 
    "Clear + Brilliant®", 
    "Laser Genesis", 
    "Ultherapy®", 
    "IPL & Photo Rejuvenation", 
    "CoolTone™", 
    "VelaShape™", 
    "Chemical Peels", 
    "Dermaplaning", 
    "ZO Skin Health®", 
    "ProBLUEMD Skincare"
  ];

  return (
    <>
      <ClinicSchema clinic={clinic} />
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: clinic.location, href: `/${locationSlug}` },
            { label: clinic.name, href: `/${locationSlug}/${clinic.slug || clinic.id}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              {/* Google Maps Embed */}
              <AspectRatio ratio={16/9} className="max-h-[400px]">
                {clinic.coordinates ? (
                  <iframe
                    title={`Map of ${clinic.name}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src={getMapEmbedUrl()}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <img 
                    src={clinic.imageUrl} 
                    alt={clinic.name} 
                    className="w-full h-full object-cover" 
                  />
                )}
              </AspectRatio>
              
              {clinic.featured && (
                <div className="absolute top-4 right-4 bg-medspa-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Clinic
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-serif font-bold text-medspa-dark">{clinic.name}</h1>
                  {clinic.verified && (
                    <span className="flex items-center text-medspa-teal bg-medspa-teal/10 px-3 py-1 rounded-full text-sm">
                      <ShieldCheck size={16} className="mr-1" /> Verified Listing
                    </span>
                  )}
                </div>
                
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
                    <ShieldCheck size={18} className="mr-2" />
                    Claim This Listing
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
                
                {additionalTreatments && additionalTreatments.length > 0 && (
                  <div className="mb-8 p-5 bg-medspa-cream/50 rounded-lg border border-medspa-teal/10">
                    <div className="flex items-center mb-4">
                      <Sparkles size={18} className="text-medspa-gold mr-2" />
                      <h2 className="text-xl font-medium text-medspa-dark">Additional Treatments</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {clinic.name} also offers these premium aesthetic treatments:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {additionalTreatments.map((treatment, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 border border-gray-200 bg-white rounded-md"
                        >
                          <ChevronRight size={16} className="text-medspa-gold mr-2" />
                          <span>{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:sticky md:top-24 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Claim This Listing</h3>
              <p className="text-gray-700 mb-4">Do you own or manage {clinic.name}? Claim this listing to update your business information and access premium features.</p>
              <Button className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                <ShieldCheck size={18} className="mr-2" />
                Claim Now
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
                to={`/${locationSlug}`}
                className="inline-block mt-4 text-medspa-teal hover-underline font-medium"
              >
                View all treatments in {clinic.location}
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Other MedSpas in {clinic.location}</h3>
              <Link 
                to={`/${locationSlug}`}
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
