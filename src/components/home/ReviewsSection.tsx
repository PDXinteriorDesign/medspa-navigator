
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-medspa-cream">
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
          NYC Med Spa Reviews – What Real Patients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-medspa-gold mb-2">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="mb-4 italic text-gray-700">"I found Berry Blonde Spa that has THE best laser hair removal treatments! Amazing price and amazing service."</p>
            <p className="text-sm font-medium">– Crystal <span className="text-gray-500 text-xs">9 months ago</span></p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-medspa-gold mb-2">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="mb-4 italic text-gray-700">"Very thorough in explaining all of my options about my skin concerns."</p>
            <p className="text-sm font-medium">– Lisa C. <span className="text-gray-500 text-xs">3 months ago</span></p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-medspa-gold mb-2">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="mb-4 italic text-gray-700">"Clean office, great doctors, friendly staff, and wait time is usually minimal."</p>
            <p className="text-sm font-medium">– Annie Goodman <span className="text-gray-500 text-xs">6 months ago</span></p>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
            <Link to="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
