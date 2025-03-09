
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { 
  InjectablesTreatments,
  LaserTreatments,
  SkinLiftTreatments,
  FacialTreatments,
  FavoritesTreatments 
} from "./TreatmentCategories";
import { ChevronDown } from "lucide-react";

const TreatmentsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-medspa-dark hover:text-medspa-teal transition flex items-center">
        Treatments
        <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[800px] grid grid-cols-5 gap-4 p-4 bg-white">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark">Favorites</h3>
          <DropdownMenuSeparator />
          <FavoritesTreatments />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark">Injectables</h3>
          <DropdownMenuSeparator />
          <InjectablesTreatments />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark">Laser Services</h3>
          <DropdownMenuSeparator />
          <LaserTreatments />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark">Skin Lift & Fat Reduction</h3>
          <DropdownMenuSeparator />
          <SkinLiftTreatments />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark">Facials</h3>
          <DropdownMenuSeparator />
          <FacialTreatments />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TreatmentsDropdown;
