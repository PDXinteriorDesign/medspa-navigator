
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainContent = () => {
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
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                <Link to="/locations">
                  Browse NYC Med Spas Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
