
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const SkinLiftTreatments = () => (
  <DropdownMenuGroup className="divide-y divide-gray-200">
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/weight-management" className="flex items-center w-full">
        Weight Management Programs
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/coolsculpting" className="flex items-center w-full">
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/radio-ultrasound-therapy" className="flex items-center w-full">
        Radio & Ultrasound Therapy
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default SkinLiftTreatments;
