
import { Helmet } from "react-helmet";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationHero from "./LocationHero";
import LocationEditorNote from "./LocationEditorNote";
import LocationTimingInfo from "./LocationTimingInfo";
import LocationSignatureTreatments from "./LocationSignatureTreatments";
import LocationCallToAction from "./LocationCallToAction";
import LocationInsights from "./LocationInsights";
import LocationPopularServices from "./LocationPopularServices";
import LocationWhyVisit from "./LocationWhyVisit";

interface LocationLandingTemplateProps {
  name: string;
  imageUrl: string;
  description: string;
  shortDescription: string;
  popularServices: string[];
  medspaCount: number;
  neighborhoods?: Array<{
    name: string;
    slug: string;
    description: string;
  }>;
}

const LocationLandingTemplate = ({
  name,
  imageUrl,
  description,
  shortDescription,
  popularServices,
  medspaCount,
  neighborhoods = []
}: LocationLandingTemplateProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  
  const insights = [
    {
      title: "Average Treatment Costs",
      description: `Average treatment costs in ${name} typically range from $200-900 per session.`
    },
    {
      title: "Booking in Advance",
      description: "Book appointments 2-3 weeks in advance for the best availability."
    },
    {
      title: "Seasonal Promotions",
      description: `${name} medspas typically offer seasonal promotions in January and September.`
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>{name} MedSpas | Luxury Aesthetic Treatments | MedSpasNYC</title>
        <meta 
          name="description" 
          content={`Discover the most exclusive MedSpas in ${name}. Experience luxury aesthetic treatments in New York's premier destination for beauty and wellness.`} 
        />
      </Helmet>
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: name, href: `/locations/${slug}`, current: true }
          ]} 
        />
        
        <LocationHero 
          imageUrl={imageUrl}
          name={name}
          medspaCount={medspaCount}
          tagline={shortDescription}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-6">
                <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
                  Curator's Selection
                </div>
                <h2 className="text-2xl font-serif font-medium mb-5">The Definitive Guide to {name} MedSpas</h2>
                
                <div className="text-gray-700 space-y-4">
                  <p className="leading-relaxed">{description}</p>
                  <p className="text-sm border-l-2 border-medspa-gold/60 pl-4 py-1 italic text-gray-600 my-6">
                    "{name} represents the pinnacle of aesthetic excellence, where discerning clients expect nothing less than transformative results in settings of uncompromising luxury."
                  </p>
                </div>
              </div>
              
              <LocationSignatureTreatments locationName={name} />
              <LocationTimingInfo locationName={name} />
              <LocationEditorNote locationName={name} />
            </div>
          </div>
          
          <div className="mt-0 md:mt-0">
            <LocationWhyVisit locationName={name} />
            
            <LocationPopularServices locationName={name} services={popularServices} />
            <LocationInsights locationName={name} insights={insights} />
            <LocationCallToAction locationName={name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationLandingTemplate;
