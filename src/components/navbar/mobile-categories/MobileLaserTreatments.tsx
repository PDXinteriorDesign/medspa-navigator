
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileLaserTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
      <MobileTreatmentItem 
        title="Photofacials" 
        url="/services/photofacials" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Laser Hair Removal" 
        url="/services/laser-hair-removal" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Skin Resurfacing" 
        url="/services/skin-resurfacing" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Carbon Laser Facial" 
        url="/services/carbon-laser-facial" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Vaginal Rejuvenation" 
        url="/services/vaginal-rejuvenation" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default MobileLaserTreatments;
