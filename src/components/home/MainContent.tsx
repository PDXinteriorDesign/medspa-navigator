
import { Link } from "react-router-dom";
import { Check, Shield, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustSignals from "./TrustSignals";

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
        
        {/* Why Choose Our Directory section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-6">
            Why Choose Our NYC MedSpa Directory?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Check size={20} className="text-medspa-teal mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Exclusive Listings</h3>
                <p className="text-gray-600">Only top-tier NYC med spas are featured.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check size={20} className="text-medspa-teal mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Compare Top-Rated Clinics</h3>
                <p className="text-gray-600">Read verified patient reviews & real before-and-afters.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check size={20} className="text-medspa-teal mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Certified Aesthetic Experts</h3>
                <p className="text-gray-600">Every provider is licensed, insured & board-certified.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check size={20} className="text-medspa-teal mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Treatment Finder</h3>
                <p className="text-gray-600">Search by Botox, fillers, laser hair removal, body sculpting & more.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check size={20} className="text-medspa-teal mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Exclusive Deals</h3>
                <p className="text-gray-600">Access discounted packages & first-time patient specials.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-medspa-cream text-medspa-teal border border-medspa-teal hover:bg-medspa-teal/10">
              <Link to="/locations" className="flex items-center">
                <Search size={18} className="mr-2" />
                Search Med Spas Near You
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
