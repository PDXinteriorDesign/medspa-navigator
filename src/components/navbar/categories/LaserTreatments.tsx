
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const LaserTreatments = () => (
  <DropdownMenuGroup className="space-y-1 divide-y divide-gray-100">
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/photofacials" className="flex items-center">
        Photofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/tattoo-removal" className="flex items-center">
        Tattoo Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/skin-resurfacing" className="flex items-center">
        Skin Resurfacing
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/carbon-laser-facial" className="flex items-center">
        Carbon Laser Facial
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/vaginal-rejuvenation" className="flex items-center">
        Vaginal Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/laser-hair-removal" className="flex items-center">
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default LaserTreatments;
