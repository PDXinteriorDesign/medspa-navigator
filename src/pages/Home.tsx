
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import MedSpaCard from "@/components/MedSpaCard";
import { services, medSpas } from "@/lib/data";

const Home = () => {
  // Only display featured MedSpas on the homepage
  const featuredMedSpas = medSpas.filter(spa => spa.featured);
  
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-medspa-blue py-20">
        <div className="medspa-container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-medspa-dark mb-6">
              Find the Best MedSpas in NYC
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover top-rated medical spas in New York City offering premium beauty and wellness treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                <Link to="/medspas">
                  Browse Directory
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full"
          style={{
            backgroundImage: `url(${new URL('/lovable-uploads/6e73a095-9647-4201-93b2-9a87c0f2f795.png', import.meta.url).pathname})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
          }}
        >
          <div className="absolute inset-0 bg-medspa-blue/30 mix-blend-multiply"></div>
        </div>
      </section>
      
      {/* Popular Services section */}
      <section className="py-16">
        <div className="medspa-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark">
              Popular Services
            </h2>
            <Link to="/services" className="flex items-center text-medspa-teal hover:text-medspa-teal/80 font-medium">
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured MedSpas section */}
      <section className="py-16 bg-medspa-cream">
        <div className="medspa-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark">
              Featured MedSpas
            </h2>
            <Link to="/medspas" className="flex items-center text-medspa-teal hover:text-medspa-teal/80 font-medium">
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredMedSpas.map(medSpa => (
              <MedSpaCard key={medSpa.id} medSpa={medSpa} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Searches section */}
      <section className="py-16">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
            Popular Searches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/services/botox-in-manhattan" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Botox in Manhattan</h3>
              <p className="text-sm text-gray-500">12 MedSpas</p>
            </Link>
            <Link to="/services/laser-hair-removal-in-brooklyn" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Laser Hair Removal in Brooklyn</h3>
              <p className="text-sm text-gray-500">8 MedSpas</p>
            </Link>
            <Link to="/services/coolsculpting-in-manhattan" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">CoolSculpting in Manhattan</h3>
              <p className="text-sm text-gray-500">10 MedSpas</p>
            </Link>
            <Link to="/services/botox-in-queens" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Botox in Queens</h3>
              <p className="text-sm text-gray-500">6 MedSpas</p>
            </Link>
            <Link to="/services/laser-hair-removal-in-manhattan" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Laser Hair Removal in Manhattan</h3>
              <p className="text-sm text-gray-500">15 MedSpas</p>
            </Link>
            <Link to="/services/coolsculpting-in-brooklyn" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">CoolSculpting in Brooklyn</h3>
              <p className="text-sm text-gray-500">5 MedSpas</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
