
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
          backgroundImage: "url('https://images.unsplash.com/photo-1581182815808-b6eb627a8798?q=80&w=3205&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
        }}
      >
        <div className="absolute inset-0 bg-medspa-blue/30 mix-blend-multiply"></div>
      </div>
    </section>
  );
};

export default HeroSection;
