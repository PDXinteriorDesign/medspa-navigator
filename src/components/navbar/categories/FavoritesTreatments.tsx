
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const FavoritesTreatments = () => (
  <DropdownMenuGroup className="divide-y divide-gray-200">
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/botox" className="flex items-center w-full">
        Botox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/fillers" className="flex items-center w-full">
        Fillers
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/laser-hair-removal" className="flex items-center w-full">
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/coolsculpting" className="flex items-center w-full">
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/skin-resurfacing" className="flex items-center w-full">
        Skin Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/microneedling" className="flex items-center w-full">
        Microneedling
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default FavoritesTreatments;
