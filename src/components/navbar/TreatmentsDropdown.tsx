
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
      <DropdownMenuContent className="w-64 bg-white">
        <FavoritesTreatments />
        <DropdownMenuSeparator />
        <InjectablesTreatments />
        <DropdownMenuSeparator />
        <LaserTreatments />
        <DropdownMenuSeparator />
        <SkinLiftTreatments />
        <DropdownMenuSeparator />
        <FacialTreatments />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TreatmentsDropdown;
