
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileFacialTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
      <MobileTreatmentItem 
        title="Chemical Peels" 
        url="/services/chemical-peels" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Cryogenic Skin Tag Removal" 
        url="/services/cryogenic-skin-tag-removal" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Hydrofacials" 
        url="/services/hydrofacials" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Microdermabrasion" 
        url="/services/microdermabrasion" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Microneedling" 
        url="/services/microneedling" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Oxygen Facials" 
        url="/services/oxygen-facials" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Placenta Facials" 
        url="/services/placenta-facials" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default MobileFacialTreatments;
