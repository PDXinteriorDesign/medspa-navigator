
import { Star } from "lucide-react";
import { MobileTreatmentItem } from "../MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileFavoritesTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <div>
      <h3 className="font-medium text-medspa-dark mb-2 flex items-center">
        <Star className="mr-2 h-4 w-4 text-medspa-gold" />
        Favorites
      </h3>
      <div className="ml-2 bg-gray-50 p-2 rounded-md border border-gray-100">
        <MobileTreatmentItem 
          title="Botox" 
          url="/services/botox" 
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
          title="Laser Hair Removal" 
          url="/services/laser-hair-removal" 
          icon={null} 
          onClick={() => setIsOpen(false)} 
        />
      </div>
    </div>
  );
};

export default MobileFavoritesTreatments;
