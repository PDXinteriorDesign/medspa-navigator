
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
      <DropdownMenuContent className="w-[1000px] grid grid-cols-5 gap-4 p-6 bg-white border border-gray-200/60 shadow-lg">
        <div className="space-y-3">
          <h3 className="font-serif font-medium text-sm text-medspa-dark flex items-center">
            <Star className="mr-2 h-4 w-4 text-medspa-gold" />
            Favorites
          </h3>
          <DropdownMenuSeparator className="bg-medspa-gold/30 h-[1px]" />
          <div className="bg-gray-50/70 p-3 rounded-md border border-gray-100/80 hover:bg-gray-50 transition-colors">
            <FavoritesTreatments />
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-serif font-medium text-sm text-medspa-dark flex items-center">
            <Droplet className="mr-2 h-4 w-4 text-medspa-teal" />
            Injectables
          </h3>
          <DropdownMenuSeparator className="bg-medspa-gold/30 h-[1px]" />
          <div className="bg-gray-50/70 p-3 rounded-md border border-gray-100/80 hover:bg-gray-50 transition-colors">
            <InjectablesTreatments />
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-serif font-medium text-sm text-medspa-dark flex items-center">
            <Zap className="mr-2 h-4 w-4 text-medspa-teal" />
            Laser Services
          </h3>
          <DropdownMenuSeparator className="bg-medspa-gold/30 h-[1px]" />
          <div className="bg-gray-50/70 p-3 rounded-md border border-gray-100/80 hover:bg-gray-50 transition-colors">
            <LaserTreatments />
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-serif font-medium text-sm text-medspa-dark flex items-center whitespace-nowrap">
            <Dumbbell className="mr-2 h-4 w-4 text-medspa-teal flex-shrink-0" />
            Skin Lift & Fat Reduction
          </h3>
          <DropdownMenuSeparator className="bg-medspa-gold/30 h-[1px]" />
          <div className="bg-gray-50/70 p-3 rounded-md border border-gray-100/80 hover:bg-gray-50 transition-colors">
            <SkinLiftTreatments />
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-serif font-medium text-sm text-medspa-dark flex items-center">
            <Sparkles className="mr-2 h-4 w-4 text-medspa-teal" />
            Facials
          </h3>
          <DropdownMenuSeparator className="bg-medspa-gold/30 h-[1px]" />
          <div className="bg-gray-50/70 p-3 rounded-md border border-gray-100/80 hover:bg-gray-50 transition-colors">
            <FacialTreatments />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TreatmentsDropdown;
