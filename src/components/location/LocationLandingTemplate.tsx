
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Star } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";

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
        
        <div className="relative h-72 sm:h-80 md:h-[450px] mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
            <div className="p-8 md:p-10">
              <div className="max-w-3xl luxury-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 tracking-tight">{name}</h1>
                <p className="text-white/90 text-lg md:text-xl font-light mb-4">
                  {shortDescription}
                </p>
                <div className="flex items-center">
                  <span className="inline-block h-0.5 w-12 bg-medspa-gold mr-3"></span>
                  <p className="text-white/80 text-sm">{medspaCount} Curated MedSpas in this exclusive locale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-medium mb-4">Popular Treatments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {popularServices.slice(0, 4).map((service, index) => (
                    <div key={index} className="bg-medspa-blue/10 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Star size={18} className="text-medspa-teal mr-2" />
                        <h4 className="font-medium">{service}</h4>
                      </div>
                      <p className="text-sm text-gray-700">
                        {name} is renowned for exceptional {service.toLowerCase()} treatments that deliver remarkable results.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {neighborhoods && neighborhoods.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-serif font-medium mb-4">Neighborhoods in {name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {neighborhoods.map((neighborhood, index) => (
                      <Link 
                        key={index} 
                        to={`/locations/${neighborhood.slug}`}
                        className="group block bg-white p-4 rounded-lg border border-gray-100 hover:border-medspa-teal/50 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start">
                          <MapPin size={18} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium group-hover:text-medspa-teal transition-colors">{neighborhood.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{neighborhood.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex items-center mb-4">
                  <Star size={20} className="text-medspa-gold mr-2" fill="currentColor" />
                  <h3 className="text-xl font-serif font-medium">Editor's Note</h3>
                </div>
                <div className="bg-medspa-blue/20 p-6 rounded-lg text-gray-700">
                  <p className="mb-3">
                    Our team has carefully vetted each MedSpa in {name} to ensure they meet our exacting standards for excellence.
                  </p>
                  <p>
                    From state-of-the-art technology to practitioners with impeccable credentials, these establishments represent the gold standard in aesthetic medicine.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-0 md:mt-0">
            <div className="bg-medspa-cream rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">Why Visit {name}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">Exclusive access to NYC's most elite aesthetic providers</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">Cutting-edge treatments often available before wider release</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">Practitioners with impeccable credentials and clientele</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">Unparalleled luxury aesthetic experiences</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">Popular Services in {name}</h3>
              <ul className="space-y-2">
                {popularServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center text-sm text-gray-700 hover:text-medspa-teal"
                    >
                      <ArrowRight size={14} className="mr-2 text-gray-400" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">{name} Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">Average treatment costs in {name} typically range from $200-900 per session.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">Book appointments 2-3 weeks in advance for the best availability.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">{name} medspas typically offer seasonal promotions in January and September.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">Aesthetic Concierge</h3>
              <p className="text-sm text-gray-700 mb-4">
                Need personalized guidance to find the perfect {name} MedSpa for your specific needs?
              </p>
              <Button className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                Request Personalized Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationLandingTemplate;
