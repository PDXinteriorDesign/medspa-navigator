
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const SkinLiftTreatments = () => (
  <DropdownMenuGroup className="space-y-1 divide-y divide-gray-100">
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/weight-management" className="flex items-center">
        Weight Management Programs
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/coolsculpting" className="flex items-center">
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/radio-ultrasound-therapy" className="flex items-center">
        Radio & Ultrasound Therapy
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default SkinLiftTreatments;
