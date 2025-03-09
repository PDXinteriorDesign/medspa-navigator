
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const InjectablesTreatments = () => (
  <DropdownMenuGroup className="space-y-1 divide-y divide-gray-100">
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/botox" className="flex items-center">
        Botox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/micro-botox" className="flex items-center">
        MicroBotox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/fillers" className="flex items-center">
        Fillers
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/kybella" className="flex items-center">
        Kybella
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-2 py-1 hover:bg-medspa-blue">
      <Link to="/services/prp" className="flex items-center">
        Platelet Rich Plasma
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default InjectablesTreatments;
