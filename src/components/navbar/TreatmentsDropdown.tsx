
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
} from "./categories";
import { ChevronDown, Star, Droplet, Zap, Dumbbell, Sparkles } from "lucide-react";

const TreatmentsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-medspa-dark hover:text-medspa-teal transition flex items-center">
        Treatments
        <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[950px] grid grid-cols-5 gap-4 p-4 bg-white">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark flex items-center">
            <Star className="mr-2 h-4 w-4 text-medspa-gold" />
            Favorites
          </h3>
          <DropdownMenuSeparator className="bg-black/10 h-[2px]" />
          <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
            <FavoritesTreatments />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark flex items-center">
            <Droplet className="mr-2 h-4 w-4 text-medspa-teal" />
            Injectables
          </h3>
          <DropdownMenuSeparator className="bg-black/10 h-[2px]" />
          <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
            <InjectablesTreatments />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark flex items-center">
            <Zap className="mr-2 h-4 w-4 text-medspa-teal" />
            Laser Services
          </h3>
          <DropdownMenuSeparator className="bg-black/10 h-[2px]" />
          <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
            <LaserTreatments />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark flex items-center whitespace-nowrap">
            <Dumbbell className="mr-2 h-4 w-4 text-medspa-teal flex-shrink-0" />
            Skin Lift & Fat Reduction
          </h3>
          <DropdownMenuSeparator className="bg-black/10 h-[2px]" />
          <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
            <SkinLiftTreatments />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-medspa-dark flex items-center">
            <Sparkles className="mr-2 h-4 w-4 text-medspa-teal" />
            Facials
          </h3>
          <DropdownMenuSeparator className="bg-black/10 h-[2px]" />
          <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
            <FacialTreatments />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TreatmentsDropdown;
