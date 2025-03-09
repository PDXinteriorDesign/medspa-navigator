
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const LaserTreatments = () => (
  <DropdownMenuGroup className="divide-y divide-gray-200">
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/photofacials" className="flex items-center w-full">
        Photofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/tattoo-removal" className="flex items-center w-full">
        Tattoo Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/skin-resurfacing" className="flex items-center w-full">
        Skin Resurfacing
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/carbon-laser-facial" className="flex items-center w-full">
        Carbon Laser Facial
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/vaginal-rejuvenation" className="flex items-center w-full">
        Vaginal Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/laser-hair-removal" className="flex items-center w-full">
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default LaserTreatments;
