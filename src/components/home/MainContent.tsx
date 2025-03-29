
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustSignals from "./TrustSignals";
import MedSpaCard from "@/components/MedSpaCard";
import { medSpas } from "@/lib/medspas";

const MainContent = () => {
  // Get top-rated MedSpas for the featured section
  const featuredMedSpas = medSpas.filter(spa => spa.featured || spa.rating >= 4.8).slice(0, 3);
  
  return (
    <section className="py-16">
      <div className="medspa-container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
            Find the Best Med Spas in NYC – Botox, Fillers & Laser Treatments
          </h2>
          <p className="text-xl font-medium text-medspa-teal mb-6">
            Compare NYC's Top-Rated Med Spas by Treatment & Location
          </p>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Looking for the best med spa in NYC? Whether you want Botox in Manhattan, laser hair removal in Brooklyn, or microneedling on the Upper East Side, our directory makes it easy to find board-certified med spas in New York City.
            </p>
            <p className="text-gray-700 mt-4">
              We connect you with verified providers offering FDA-approved aesthetic treatments, including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 list-none">
              <li className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                <span>Neuromodulators (Botox, Dysport, Xeomin) for wrinkle reduction</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                <span>Non-surgical body contouring like CoolSculpting & Emsculpt</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                <span>Collagen-boosting treatments like RF Microneedling & PRP Facials</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                <span>Laser skin resurfacing & IPL photofacials for hyperpigmentation</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                <span>Diode and Alexandrite laser hair removal for all skin types</span>
              </li>
            </ul>
            <TrustSignals />
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                <Link to="/locations">
                  Browse NYC Med Spas Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Featured MedSpas Section */}
        {featuredMedSpas.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-6">
              Featured Med Spas
            </h2>
            <p className="text-gray-700 mb-8">
              Discover our handpicked selection of {medSpas.length}+ top-rated med spas throughout NYC and The Hamptons.
            </p>
            <div className="space-y-6">
              {featuredMedSpas.map(medSpa => (
                <MedSpaCard key={medSpa.id} medSpa={medSpa} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                <Link to="/locations">View All MedSpas</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainContent;
