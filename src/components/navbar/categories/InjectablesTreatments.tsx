
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const InjectablesTreatments = () => (
  <DropdownMenuGroup className="divide-y divide-gray-200">
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/botox" className="flex items-center w-full">
        Botox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/micro-botox" className="flex items-center w-full">
        MicroBotox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/fillers" className="flex items-center w-full">
        Fillers
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/kybella" className="flex items-center w-full">
        Kybella
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild className="px-3 py-2 hover:bg-medspa-blue">
      <Link to="/services/prp" className="flex items-center w-full">
        Platelet Rich Plasma
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default InjectablesTreatments;
