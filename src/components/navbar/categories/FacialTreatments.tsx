
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const FacialTreatments = () => (
  <DropdownMenuGroup className="space-y-1 divide-y divide-gray-100">
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/chemical-peels" className="flex items-center">
        Chemical Peels
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/cryogenic-skin-tag-removal" className="flex items-center">
        Cryogenic Skin Tag Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/hydrofacials" className="flex items-center">
        Hydrofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/microdermabrasion" className="flex items-center">
        Microdermabrasion
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/microneedling" className="flex items-center">
        Microneedling
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/oxygen-facials" className="flex items-center">
        Oxygen Facials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/placenta-facials" className="flex items-center">
        Placenta Facials
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default FacialTreatments;
