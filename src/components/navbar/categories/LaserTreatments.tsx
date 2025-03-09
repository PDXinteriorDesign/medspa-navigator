
import { Link } from "react-router-dom";
import { Sun, Zap } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const LaserTreatments = () => (
  <DropdownMenuGroup className="space-y-1">
    <DropdownMenuItem asChild>
      <Link to="/services/photofacials" className="flex items-center">
        <Sun className="mr-2 h-4 w-4" />
        Photofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/tattoo-removal" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Tattoo Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/skin-resurfacing" className="flex items-center">
        <Sun className="mr-2 h-4 w-4" />
        Skin Resurfacing
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/carbon-laser-facial" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Carbon Laser Facial
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/vaginal-rejuvenation" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Vaginal Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/laser-hair-removal" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default LaserTreatments;
