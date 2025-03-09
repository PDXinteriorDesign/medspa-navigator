
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const FavoritesTreatments = () => (
  <DropdownMenuGroup className="space-y-1">
    <DropdownMenuItem asChild>
      <Link to="/services/botox" className="flex items-center">
        <Star className="mr-2 h-4 w-4" />
        Botox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/fillers" className="flex items-center">
        <Star className="mr-2 h-4 w-4" />
        Fillers
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/laser-hair-removal" className="flex items-center">
        <Star className="mr-2 h-4 w-4" />
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/coolsculpting" className="flex items-center">
        <Star className="mr-2 h-4 w-4" />
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/skin-resurfacing" className="flex items-center">
        <Star className="mr-2 h-4 w-4" />
        Skin Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/microneedling" className="flex items-center">
        <Star className="mr-2 h-4 w-4" />
        Microneedling
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default FavoritesTreatments;
