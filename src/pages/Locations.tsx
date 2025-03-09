import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Star } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";

const locationData = [
  {
    id: "manhattan",
    name: "Manhattan",
    slug: "manhattan",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Manhattan is home to some of the world's most prestigious medical spas and aesthetic centers, offering cutting-edge treatments in sleek, luxurious settings.",
    medspaCount: 142,
    featured: true
  },
  {
    id: "upper-east-side",
    name: "Upper East Side",
    slug: "upper-east-side",
    imageUrl: "https://images.unsplash.com/photo-1595625516077-3228563ccec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "The Upper East Side is synonymous with luxury medical aesthetics, hosting numerous high-end medspas that cater to an affluent clientele seeking premium, results-driven treatments in discreet settings.",
    medspaCount: 45,
    featured: true
  },
  {
    id: "soho",
    name: "SoHo",
    slug: "soho",
    imageUrl: "https://images.unsplash.com/photo-1595467959776-6eb7a123d2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "SoHo's trendsetting medspa scene offers cutting-edge treatments in design-forward spaces, attracting a younger, fashion-conscious clientele interested in preventative skincare and subtle enhancements.",
    medspaCount: 38,
    featured: true
  },
  {
    id: "tribeca",
    name: "Tribeca",
    slug: "tribeca",
    imageUrl: "https://images.unsplash.com/photo-1565876427315-7086480146d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Tribeca has established itself as a premier destination for ultra-luxury medspa services, with exclusive clinics offering bespoke treatments to a discerning clientele.",
    medspaCount: 28,
    featured: true
  },
  {
    id: "midtown",
    name: "Midtown",
    slug: "midtown",
    imageUrl: "https://images.unsplash.com/photo-1605304978115-40267b3a9ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Midtown's medspas cater to the fast-paced professional crowd with efficient, high-impact treatments that deliver results with minimal downtime, making them popular with the business district's busy executives.",
    medspaCount: 34,
    featured: false
  },
  {
    id: "brooklyn",
    name: "Brooklyn",
    slug: "brooklyn",
    imageUrl: "https://images.unsplash.com/photo-1567552261736-4b808a7997f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Brooklyn has emerged as a vibrant hub for innovative aesthetic treatments, blending medical expertise with a more approachable, personalized experience.",
    medspaCount: 78,
    featured: true
  },
  {
    id: "williamsburg",
    name: "Williamsburg",
    slug: "williamsburg",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Williamsburg has redefined the medspa experience with its creative approach to aesthetic treatments, housed in stylish, industrial-chic spaces that reflect the neighborhood's artistic soul.",
    medspaCount: 29,
    featured: false
  },
  {
    id: "park-slope",
    name: "Park Slope",
    slug: "park-slope",
    imageUrl: "https://images.unsplash.com/photo-1573566791129-e05aa3074c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Park Slope's medspas embody the neighborhood's wellness-focused ethos, offering holistic aesthetic treatments that emphasize natural beauty and long-term skin health.",
    medspaCount: 19,
    featured: false
  },
  {
    id: "the-hamptons",
    name: "The Hamptons",
    slug: "the-hamptons",
    imageUrl: "https://images.unsplash.com/photo-1543855379-ef501d27b451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "The Hamptons represents the pinnacle of seasonal medspa luxury, with many elite Manhattan practices opening summer locations to serve their clientele who migrate east during the warmer months.",
    medspaCount: 34,
    featured: true
  }
];

const Locations = () => {
  const featuredLocations = locationData.filter(location => location.featured);
  const otherLocations = locationData.filter(location => !location.featured);
  
  return (
    <>
      <Helmet>
        <title>Elite MedSpa Locations | Manhattan, Brooklyn, The Hamptons | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover top MedSpas in NYC's most exclusive neighborhoods including Manhattan, SoHo, Upper East Side, and more. Find luxury treatments in your area." 
        />
      </Helmet>
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations", current: true }
          ]} 
        />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">NYC MedSpa Destinations</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The definitive guide to New York's most exclusive aesthetic clinics and wellness sanctuaries.
          </p>
          <div className="w-20 h-1 bg-medspa-gold/70 mx-auto mt-8"></div>
        </div>
        
        <div className="mb-16">
          {featuredLocations.map((location, index) => (
            <div 
              key={location.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                gap-8 mb-20 items-center`}
            >
              <div className="md:w-1/2 relative group overflow-hidden rounded-lg">
                <Link to={`/locations/${location.slug}`}>
                  <img 
                    src={location.imageUrl} 
                    alt={location.name} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8">
                      <div className="flex items-center mb-3">
                        <Star size={16} className="text-medspa-gold mr-2" fill="currentColor" />
                        <span className="text-white text-sm font-medium uppercase tracking-wider">Editor's Selection</span>
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-white mb-2">{location.name}</h2>
                      <p className="text-white/90">{location.medspaCount} Curated MedSpas</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="md:w-1/2">
                <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
                  Luxury Destination
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">The Essence of {location.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{location.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-gray-500 uppercase">Signature Experiences</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-medspa-blue/20 text-medspa-dark px-3 py-1 rounded-full text-sm">
                      Premium Treatments
                    </span>
                    <span className="bg-medspa-blue/20 text-medspa-dark px-3 py-1 rounded-full text-sm">
                      Expert Practitioners
                    </span>
                    <span className="bg-medspa-blue/20 text-medspa-dark px-3 py-1 rounded-full text-sm">
                      Luxury Setting
                    </span>
                  </div>
                </div>
                
                <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
                  <Link to={`/locations/${location.slug}`}>
                    Explore {location.name} MedSpas
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {otherLocations.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">More Exclusive Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherLocations.map(location => (
                <Link 
                  key={location.id}
                  to={`/locations/${location.slug}`}
                  className="group block"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={location.imageUrl} 
                      alt={location.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-medspa-gold transition-colors">{location.name}</h3>
                        <div className="flex items-center text-white/80">
                          <MapPin size={14} className="mr-1" />
                          <span className="text-sm">{location.medspaCount} MedSpas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-2">{location.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        <div className="bg-gradient-to-r from-medspa-blue/30 to-medspa-teal/30 rounded-lg p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-medium mb-3">
              Stay Informed About NYC's Elite Beauty Scene
            </h3>
            <p className="text-gray-700 mb-6">
              Join our exclusive list to receive invitations to private events, seasonal treatment recommendations, and insights from NYC's top aesthetic experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
              />
              <Button className="bg-medspa-teal hover:bg-medspa-teal/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
