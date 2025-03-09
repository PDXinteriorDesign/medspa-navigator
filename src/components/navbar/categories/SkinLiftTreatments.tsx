
import { Link } from "react-router-dom";
import { Dumbbell, Snowflake, Waves } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const SkinLiftTreatments = () => (
  <DropdownMenuGroup className="space-y-1">
    <DropdownMenuItem asChild>
      <Link to="/services/weight-management" className="flex items-center">
        <Dumbbell className="mr-2 h-4 w-4" />
        Weight Management Programs
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/coolsculpting" className="flex items-center">
        <Snowflake className="mr-2 h-4 w-4" />
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/radio-ultrasound-therapy" className="flex items-center">
        <Waves className="mr-2 h-4 w-4" />
        Radio & Ultrasound Therapy
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default SkinLiftTreatments;
