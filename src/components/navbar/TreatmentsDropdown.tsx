
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

const TreatmentsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-medspa-dark hover:text-medspa-teal transition">
        Treatments
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
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
