
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PopularTreatments = () => {
  return (
    <section className="py-16 bg-medspa-cream">
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
          Most Popular Med Spa Treatments in New York City
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Botox & Wrinkle Relaxers */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg font-serif font-bold mb-3 text-medspa-dark border-b border-gray-100 pb-2">
              Botox & Wrinkle Relaxers
            </h3>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">Botox, Dysport & Xeomin</span> – Relax fine lines</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">Jawline Contouring</span> – Define the face</span>
              </li>
            </ul>
            <Link to="/treatments/botox" className="text-sm text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Find Botox Providers
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          {/* Skin Rejuvenation */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg font-serif font-bold mb-3 text-medspa-dark border-b border-gray-100 pb-2">
              Skin Rejuvenation
            </h3>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">Microneedling with PRP</span> – Boost collagen</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">HydraFacial & Peels</span> – Brighten skin</span>
              </li>
            </ul>
            <Link to="/treatments" className="text-sm text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Explore Skin Treatments
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          {/* Body Contouring */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg font-serif font-bold mb-3 text-medspa-dark border-b border-gray-100 pb-2">
              Body Contouring
            </h3>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">CoolSculpting & Kybella</span> – Fat reduction</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">Emsculpt & TruFlex</span> – Muscle toning</span>
              </li>
            </ul>
            <Link to="/treatments/coolsculpting" className="text-sm text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Find Body Contouring
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          {/* Laser Hair Removal */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg font-serif font-bold mb-3 text-medspa-dark border-b border-gray-100 pb-2">
              Laser Treatments
            </h3>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">Laser Hair Removal</span> – Permanent reduction</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={14} className="text-medspa-teal mr-2 mt-1" />
                <span className="text-sm"><span className="font-medium">Ultherapy & Sofwave</span> – Skin lifting</span>
              </li>
            </ul>
            <Link to="/treatments/laser-hair-removal" className="text-sm text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Compare Laser Clinics
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTreatments;
