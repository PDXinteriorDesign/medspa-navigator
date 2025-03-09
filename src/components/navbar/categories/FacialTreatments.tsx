
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const FacialTreatments = () => (
  <DropdownMenuGroup className="divide-y divide-gray-200">
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/chemical-peels" className="flex items-center w-full">
        Chemical Peels
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/cryogenic-skin-tag-removal" className="flex items-center w-full">
        Cryogenic Skin Tag Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/hydrofacials" className="flex items-center w-full">
        Hydrofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/microdermabrasion" className="flex items-center w-full">
        Microdermabrasion
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/microneedling" className="flex items-center w-full">
        Microneedling
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/oxygen-facials" className="flex items-center w-full">
        Oxygen Facials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/placenta-facials" className="flex items-center w-full">
        Placenta Facials
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default FacialTreatments;
