
import { useParams, Helmet } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import MedSpaCard from "@/components/MedSpaCard";
import { getServiceBySlug, getServicesByLocation, getLocationName } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { type Location } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Star } from "lucide-react";

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
      {/* SEO Metadata */}
      <Helmet>
        <title>{service.name} in {locationName} | Best {locationName} {service.name} Providers | MedSpasNYC</title>
        <meta 
          name="description" 
          content={`Find the best ${service.name} providers in ${locationName}, NYC. Compare prices, read reviews, and book appointments with top ${locationName} medical spas.`} 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": `${service.name} in ${locationName}`,
            "description": `${service.name} treatments available in ${locationName}, NYC.`,
            "procedureType": "https://schema.org/CosmeticProcedure",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "MedSpasNYC",
              "url": "https://medspasnyc.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": locationName,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": locationName,
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>
    
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
              
              <div className="text-gray-700 mb-6 space-y-4">
                {locationContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {/* Neighborhood Information */}
              <div className="mt-8 mb-6">
                <h3 className="text-lg font-medium mb-3">Popular {locationName} {service.name} Providers</h3>
                <div className="bg-medspa-blue/20 p-5 rounded-lg">
                  <ul className="space-y-4">
                    {locationContent.popularProviders.map((provider, index) => (
                      <li key={index} className="flex items-start">
                        <MapPin size={18} className="text-medspa-teal mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">{provider.name}</h4>
                          <p className="text-sm text-gray-600">{provider.address}</p>
                          <div className="flex items-center mt-1">
                            <div className="flex text-yellow-400">
                              {Array(5).fill(0).map((_, i) => (
                                <Star key={i} size={12} fill={i < provider.rating ? "currentColor" : "none"} />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">{provider.reviewCount} reviews</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Best Times & Scheduling */}
              <div className="mt-8 mb-6">
                <h3 className="text-lg font-medium mb-3">Best Times for {service.name} in {locationName}</h3>
                <div className="bg-medspa-cream p-5 rounded-lg flex items-start">
                  <Clock size={20} className="text-medspa-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-2">{locationContent.timing.bestTimes}</p>
                    <p className="text-gray-700 mb-2">{locationContent.timing.peakHours}</p>
                    <p className="text-sm text-gray-500 italic">{locationContent.timing.tip}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section specific to this location */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">FAQs About {service.name} in {locationName}</h2>
              <Accordion type="single" collapsible className="w-full">
                {locationFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
            
            {/* Local Insights */}
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">{locationName} {service.name} Insights</h3>
              <ul className="space-y-3">
                {locationContent.insights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">{insight}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Nearby Neighborhoods */}
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">Nearby Neighborhoods</h3>
              <ul className="space-y-2">
                {locationContent.nearbyNeighborhoods.map((neighborhood, index) => (
                  <li key={index}>
                    <a
                      href={`/services/${service.slug}-in-${neighborhood.slug}`}
                      className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
                    >
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      {service.name} in {neighborhood.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper functions to generate location-specific content
const getLocationContent = (serviceName, locationName) => {
  const content = {
    paragraphs: [
      `Looking for the best ${serviceName} providers in ${locationName}? You've come to the right place. ${locationName} is home to some of NYC's premier medical spas and aesthetic clinics specializing in ${serviceName} treatments.`,
      `${locationName} offers a unique blend of luxury and clinical expertise in the ${serviceName} space. With its concentration of board-certified practitioners and state-of-the-art facilities, it's no wonder that clients from across the city travel to ${locationName} for their ${serviceName} treatments.`
    ],
    popularProviders: [],
    timing: {
      bestTimes: `The best time to book your ${serviceName} appointment in ${locationName} is typically mid-week (Tuesday through Thursday), when MedSpas are less crowded.`,
      peakHours: `Most ${locationName} aesthetic clinics experience their busiest hours between 12-2pm and after 5pm on weekdays.`,
      tip: `Pro tip: Book your ${serviceName} appointment 2-3 weeks in advance to secure your preferred time slot with top providers in ${locationName}.`
    },
    insights: [
      `${locationName} MedSpas offering ${serviceName} typically charge 10-15% more than other NYC neighborhoods, but often provide enhanced amenities and services.`,
      `${serviceName} providers in ${locationName} frequently offer package deals and membership options for repeat clients.`,
      `Many ${locationName} aesthetic clinics participate in seasonal promotions, typically in January and September.`,
      `First-time ${serviceName} clients in ${locationName} can often request a brief consultation before committing to treatment.`
    ],
    nearbyNeighborhoods: []
  };

  // Customize content based on location
  switch (locationName) {
    case "Manhattan":
      content.paragraphs.push(`Manhattan's ${serviceName} providers are known for their cutting-edge techniques and celebrity clientele. From luxury MedSpas in the Upper East Side to trendy aesthetic studios in SoHo, you'll find a wide range of options for your ${serviceName} needs.`);
      content.popularProviders = [
        { name: "Glow MedSpa", address: "123 5th Avenue, Midtown", rating: 4.8, reviewCount: 124 },
        { name: "Elite Aesthetic Center", address: "456 Madison Avenue, Upper East Side", rating: 4.7, reviewCount: 98 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Brooklyn", slug: "brooklyn" },
        { name: "Queens", slug: "queens" }
      ];
      break;
    case "Brooklyn":
      content.paragraphs.push(`Brooklyn has emerged as a hotspot for boutique ${serviceName} providers offering personalized experiences at competitive prices. Williamsburg and Park Slope in particular host several highly-rated MedSpas specializing in ${serviceName}.`);
      content.popularProviders = [
        { name: "Brooklyn Beauty Clinic", address: "789 Bedford Ave, Williamsburg", rating: 4.5, reviewCount: 75 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Manhattan", slug: "manhattan" },
        { name: "Queens", slug: "queens" }
      ];
      break;
    case "Queens":
      content.paragraphs.push(`Queens offers some of the most diverse ${serviceName} providers in NYC, with practitioners trained in techniques from around the world. Many clients appreciate the attentive service and competitive pricing found at Queens MedSpas.`);
      content.popularProviders = [
        { name: "Queens Laser Spa", address: "101 Queens Blvd, Forest Hills", rating: 4.3, reviewCount: 62 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Brooklyn", slug: "brooklyn" },
        { name: "Manhattan", slug: "manhattan" }
      ];
      break;
    case "Bronx":
      content.paragraphs.push(`The Bronx is home to a growing number of ${serviceName} providers offering quality treatments at accessible prices. The area's MedSpas are known for their welcoming atmosphere and skilled practitioners.`);
      content.popularProviders = [
        { name: "Bronx Aesthetic Studio", address: "222 Fordham Rd, Fordham", rating: 4.2, reviewCount: 45 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Manhattan", slug: "manhattan" },
        { name: "Queens", slug: "queens" }
      ];
      break;
    case "Staten Island":
      content.paragraphs.push(`Staten Island's ${serviceName} providers offer the perfect blend of personal attention and professional expertise. Many locals prefer staying on the island for their treatments rather than traveling to Manhattan.`);
      content.popularProviders = [
        { name: "Staten Island Beauty Center", address: "333 Richmond Ave, New Dorp", rating: 4.4, reviewCount: 38 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Brooklyn", slug: "brooklyn" },
        { name: "Manhattan", slug: "manhattan" }
      ];
      break;
    default:
      content.paragraphs.push(`NYC offers world-class ${serviceName} providers across all five boroughs. Whether you're looking for luxury experiences or affordable options, you'll find the perfect match for your ${serviceName} needs.`);
      content.popularProviders = [
        { name: "NYC Beauty Clinic", address: "100 Main St, NYC", rating: 4.5, reviewCount: 50 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Manhattan", slug: "manhattan" },
        { name: "Brooklyn", slug: "brooklyn" }
      ];
  }

  return content;
};

const getLocationFaqs = (serviceName, locationName) => {
  return [
    {
      question: `How much does ${serviceName} cost in ${locationName}?`,
      answer: `${serviceName} prices in ${locationName} typically range from $X to $Y depending on the provider, their expertise, and the specific treatment details. ${locationName} prices are generally ${locationName === "Manhattan" ? "higher" : "competitive"} compared to other NYC boroughs. Many ${locationName} MedSpas offer new client specials and package discounts.`
    },
    {
      question: `What's the best MedSpa for ${serviceName} in ${locationName}?`,
      answer: `The "best" MedSpa depends on your specific needs and preferences. In ${locationName}, highly-rated providers include ${getTopProviders(locationName)}. We recommend reading reviews, checking before/after photos, and scheduling consultations before making your decision.`
    },
    {
      question: `How far in advance should I book my ${serviceName} appointment in ${locationName}?`,
      answer: `For popular ${locationName} providers, we recommend booking ${serviceName} appointments 2-3 weeks in advance, especially if you want weekend or evening time slots. During busy seasons (pre-summer and pre-holiday), consider booking even earlier.`
    },
    {
      question: `Do ${locationName} MedSpas offer financing options for ${serviceName}?`,
      answer: `Many ${locationName} MedSpas offer financing options through services like CareCredit or in-house payment plans for ${serviceName} treatments. Some also provide membership plans with discounted rates for regular clients. Always ask about available payment options during your consultation.`
    },
    {
      question: `What should I look for in a ${locationName} ${serviceName} provider?`,
      answer: `When choosing a ${serviceName} provider in ${locationName}, verify their credentials and experience, check reviews and before/after photos, ensure they use FDA-approved technology, schedule a consultation to assess your comfort level, and clarify all pricing details before proceeding with treatment.`
    }
  ];
};

const getTopProviders = (locationName) => {
  switch (locationName) {
    case "Manhattan":
      return "Glow MedSpa, Elite Aesthetic Center, and Manhattan Laser Studio";
    case "Brooklyn":
      return "Brooklyn Beauty Clinic, Williamsburg Aesthetic Center, and Park Slope MedSpa";
    case "Queens":
      return "Queens Laser Spa, Astoria Beauty Clinic, and Forest Hills Aesthetics";
    case "Bronx":
      return "Bronx Aesthetic Studio, Riverdale Beauty Center, and Fordham MedSpa";
    case "Staten Island":
      return "Staten Island Beauty Center, South Shore Aesthetics, and New Dorp MedSpa";
    default:
      return "several top-rated clinics that specialize in this treatment";
  }
};

export default ServiceLocationDetail;
