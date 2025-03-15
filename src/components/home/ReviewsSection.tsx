
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
            <p className="mb-4 italic text-gray-700">"Best Botox in NYC! My forehead lines disappeared instantly."</p>
            <p className="text-sm font-medium">– Michelle R.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-medspa-gold mb-2">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="mb-4 italic text-gray-700">"CoolSculpting actually worked! Lost inches without surgery."</p>
            <p className="text-sm font-medium">– Jason W.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-medspa-gold mb-2">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="mb-4 italic text-gray-700">"I found the perfect laser hair removal clinic through this directory!"</p>
            <p className="text-sm font-medium">– Lisa D.</p>
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
