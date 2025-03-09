
import { Link } from "react-router-dom";
import { Droplet, Snowflake, Sparkles, Heart, Stethoscope } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const FacialTreatments = () => (
  <DropdownMenuGroup className="space-y-1">
    <DropdownMenuItem asChild>
      <Link to="/services/chemical-peels" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Chemical Peels
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/cryogenic-skin-tag-removal" className="flex items-center">
        <Snowflake className="mr-2 h-4 w-4" />
        Cryogenic Skin Tag Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/hydrofacials" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Hydrofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/microdermabrasion" className="flex items-center">
        <Sparkles className="mr-2 h-4 w-4" />
        Microdermabrasion
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/microneedling" className="flex items-center">
        <Heart className="mr-2 h-4 w-4" />
        Microneedling
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/oxygen-facials" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Oxygen Facials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/placenta-facials" className="flex items-center">
        <Stethoscope className="mr-2 h-4 w-4" />
        Placenta Facials
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default FacialTreatments;
