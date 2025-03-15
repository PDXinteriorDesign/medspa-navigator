
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
  return (
    <section className="py-16">
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
          FAQs – NYC Med Spas Explained
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">What is the Best Med Spa in NYC?</h3>
            <p className="text-gray-700">
              The best med spa in NYC depends on your goals. For Botox, top-rated clinics include Glow Aesthetics NYC and Park Avenue Skin Clinic. For laser skin treatments, visit Tribeca Skin Rejuvenation or Upper East Side Aesthetics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">How Much Does Botox Cost in NYC?</h3>
            <p className="text-gray-700">
              Prices range from $12 – $20 per unit, with an average treatment requiring 20-50 units.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">What Are the Best Non-Surgical Anti-Aging Treatments in NYC?</h3>
            <p className="text-gray-700">
              Botox, dermal fillers, Sofwave skin tightening, RF Microneedling, and PRP facial rejuvenation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">How Do I Choose the Right NYC Med Spa?</h3>
            <p className="text-gray-700">
              Look for board-certified injectors, verified Google reviews, and high-quality before-and-after photos.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
            <Link to="/faq">See More FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
