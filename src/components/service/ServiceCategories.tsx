
import { Link } from "react-router-dom";

const ServiceCategories = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-serif font-medium mb-6">Browse NYC Treatments by Category</h2>
      
      {/* Injectables Category */}
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Injectables</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/services/botox" className="treatment-link">Botox</Link>
          <Link to="/services/micro-botox" className="treatment-link">MicroBotox</Link>
          <Link to="/services/fillers" className="treatment-link">Fillers</Link>
          <Link to="/services/kybella" className="treatment-link">Kybella</Link>
          <Link to="/services/prp" className="treatment-link">Platelet Rich Plasma</Link>
        </div>
      </div>
      
      {/* Laser Treatments Category */}
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Laser Treatments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/services/laser-hair-removal" className="treatment-link">Laser Hair Removal</Link>
          <Link to="/services/photofacials" className="treatment-link">Photofacials</Link>
          <Link to="/services/tattoo-removal" className="treatment-link">Tattoo Removal</Link>
          <Link to="/services/skin-resurfacing" className="treatment-link">Skin Resurfacing</Link>
          <Link to="/services/carbon-laser-facial" className="treatment-link">Carbon Laser Facial</Link>
          <Link to="/services/vaginal-rejuvenation" className="treatment-link">Vaginal Rejuvenation</Link>
        </div>
      </div>
      
      {/* Body Contouring Category */}
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Body Contouring</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/services/coolsculpting" className="treatment-link">CoolSculpting</Link>
          <Link to="/services/weight-management" className="treatment-link">Weight Management Programs</Link>
          <Link to="/services/radio-ultrasound-therapy" className="treatment-link">Radio & Ultrasound Therapy</Link>
        </div>
      </div>
      
      {/* Facial Treatments Category */}
      <div>
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Facial Treatments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/services/chemical-peels" className="treatment-link">Chemical Peels</Link>
          <Link to="/services/microdermabrasion" className="treatment-link">Microdermabrasion</Link>
          <Link to="/services/microneedling" className="treatment-link">Microneedling</Link>
          <Link to="/services/hydrofacials" className="treatment-link">Hydrofacials</Link>
          <Link to="/services/oxygen-facials" className="treatment-link">Oxygen Facials</Link>
          <Link to="/services/placenta-facials" className="treatment-link">Placenta Facials</Link>
          <Link to="/services/cryogenic-skin-tag-removal" className="treatment-link">Cryogenic Skin Tag Removal</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
