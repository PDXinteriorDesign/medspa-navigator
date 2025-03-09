
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const FavoritesTreatments = () => (
  <DropdownMenuGroup className="space-y-1 divide-y divide-gray-100">
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/botox" className="flex items-center">
        Botox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/fillers" className="flex items-center">
        Fillers
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/laser-hair-removal" className="flex items-center">
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/coolsculpting" className="flex items-center">
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/skin-resurfacing" className="flex items-center">
        Skin Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/microneedling" className="flex items-center">
        Microneedling
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default FavoritesTreatments;
