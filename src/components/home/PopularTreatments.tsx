
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PopularTreatments = () => {
  return (
    <section className="py-16 bg-medspa-cream">
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-10">
          Most Popular Med Spa Treatments in New York City
        </h2>
        
        {/* Botox & Wrinkle Relaxers */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
            Botox & Wrinkle Relaxers – The NYC Standard
          </h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Botox, Dysport & Xeomin</span> – Relax fine lines & prevent wrinkles.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Sculptra & Radiesse</span> – Non-surgical volume restoration.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Jawline Contouring & Chin Augmentation</span> – Define & lift the face.</span>
            </li>
          </ul>
          <Link to="/services/botox" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
            Find Botox Providers in NYC
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        {/* Skin Rejuvenation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
            Skin Rejuvenation & Anti-Aging Treatments
          </h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Microneedling with PRP</span> – Stimulates collagen for youthful skin.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">HydraFacial & Chemical Peels</span> – Exfoliate, hydrate & brighten.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Laser Skin Resurfacing & IPL Photofacials</span> – Reduce wrinkles & sunspots.</span>
            </li>
          </ul>
          <Link to="/services" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
            Explore Skin Treatments in NYC
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        {/* Body Contouring */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
            Non-Surgical Body Contouring & Fat Reduction
          </h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">CoolSculpting & Kybella</span> – Fat freezing & chin sculpting.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Emsculpt & TruFlex</span> – Muscle-building & body toning.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">RF Skin Tightening & Morpheus8</span> – Non-surgical lifting.</span>
            </li>
          </ul>
          <Link to="/services/coolsculpting" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
            Find Body Contouring Experts in NYC
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        {/* Laser Hair Removal */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
            Laser Hair Removal & Skin Tightening
          </h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Diode & Alexandrite Laser Hair Removal</span> – Permanent hair reduction.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
              <span><span className="font-medium">Ultherapy & Sofwave</span> – Non-invasive skin lifting & collagen boost.</span>
            </li>
          </ul>
          <Link to="/services/laser-hair-removal" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
            Compare Laser Hair Removal Clinics in NYC
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTreatments;
