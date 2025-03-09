
import { Dumbbell, Snowflake, Waves } from "lucide-react";
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileSkinLiftTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div className="space-y-2">
      <MobileTreatmentItem 
        title="Weight Management Programs" 
        url="/services/weight-management" 
        icon={Dumbbell} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="CoolSculpting" 
        url="/services/coolsculpting" 
        icon={Snowflake} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Radio & Ultrasound Therapy" 
        url="/services/radio-ultrasound-therapy" 
        icon={Waves} 
        onClick={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default MobileSkinLiftTreatments;
