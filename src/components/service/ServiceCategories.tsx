
import { Link } from "react-router-dom";

const ServiceCategories = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-serif font-medium mb-6">Browse NYC Treatments by Category</h2>
      
      {/* Injectables Category */}
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Injectables</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/treatments/botox" className="treatment-link">Botox</Link>
          <Link to="/treatments/micro-botox" className="treatment-link">MicroBotox</Link>
          <Link to="/treatments/fillers" className="treatment-link">Fillers</Link>
          <Link to="/treatments/kybella" className="treatment-link">Kybella</Link>
          <Link to="/treatments/prp" className="treatment-link">Platelet Rich Plasma</Link>
        </div>
      </div>
      
      {/* Laser Treatments Category */}
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Laser Treatments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/treatments/laser-hair-removal" className="treatment-link">Laser Hair Removal</Link>
          <Link to="/treatments/photofacials" className="treatment-link">Photofacials</Link>
          <Link to="/treatments/tattoo-removal" className="treatment-link">Tattoo Removal</Link>
          <Link to="/treatments/laser-resurfacing" className="treatment-link">Skin Resurfacing</Link>
          <Link to="/treatments/carbon-laser-facial" className="treatment-link">Carbon Laser Facial</Link>
          <Link to="/treatments/vaginal-rejuvenation" className="treatment-link">Vaginal Rejuvenation</Link>
        </div>
      </div>
      
      {/* Body Contouring Category */}
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Body Contouring</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/treatments/coolsculpting" className="treatment-link">CoolSculpting</Link>
          <Link to="/treatments/weight-management" className="treatment-link">Weight Management Programs</Link>
          <Link to="/treatments/radio-ultrasound-therapy" className="treatment-link">Radio & Ultrasound Therapy</Link>
        </div>
      </div>
      
      {/* Facial Treatments Category */}
      <div>
        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">Facial Treatments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/treatments/chemical-peels" className="treatment-link">Chemical Peels</Link>
          <Link to="/treatments/microdermabrasion" className="treatment-link">Microdermabrasion</Link>
          <Link to="/treatments/microneedling" className="treatment-link">Microneedling</Link>
          <Link to="/treatments/hydrofacials" className="treatment-link">Hydrofacials</Link>
          <Link to="/treatments/oxygen-facials" className="treatment-link">Oxygen Facials</Link>
          <Link to="/treatments/cryogenic-skin-tag-removal" className="treatment-link">Cryogenic Skin Tag Removal</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
