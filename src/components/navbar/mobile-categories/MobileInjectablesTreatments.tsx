
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileInjectablesTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div className="space-y-2 divide-y divide-gray-100">
      <MobileTreatmentItem 
        title="Botox" 
        url="/services/botox" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="MicroBotox" 
        url="/services/micro-botox" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Fillers" 
        url="/services/fillers" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Kybella" 
        url="/services/kybella" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Platelet Rich Plasma" 
        url="/services/prp" 
        icon={null} 
        onClick={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default MobileInjectablesTreatments;
