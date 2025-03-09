
import { Star } from "lucide-react";
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileFavoritesTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div>
      <h3 className="font-medium text-medspa-dark mb-1">Favorites</h3>
      <div className="space-y-2 ml-2">
        <MobileTreatmentItem 
          title="Botox" 
          url="/services/botox" 
          icon={Star} 
          onClick={() => setIsOpen(false)} 
        />
        <MobileTreatmentItem 
          title="Fillers" 
          url="/services/fillers" 
          icon={Star} 
          onClick={() => setIsOpen(false)} 
        />
        <MobileTreatmentItem 
          title="Laser Hair Removal" 
          url="/services/laser-hair-removal" 
          icon={Star} 
          onClick={() => setIsOpen(false)} 
        />
      </div>
    </div>
  );
};

export default MobileFavoritesTreatments;
