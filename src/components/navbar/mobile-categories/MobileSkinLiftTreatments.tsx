
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileSkinLiftTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div className="space-y-2 divide-y divide-gray-100">
      <MobileTreatmentItem 
        title="Weight Management Programs" 
        url="/services/weight-management" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="CoolSculpting" 
        url="/services/coolsculpting" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Radio & Ultrasound Therapy" 
        url="/services/radio-ultrasound-therapy" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default MobileSkinLiftTreatments;
