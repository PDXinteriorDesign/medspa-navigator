
import { Link } from "react-router-dom";
import { Droplet } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const InjectablesTreatments = () => (
  <DropdownMenuGroup className="space-y-1">
    <DropdownMenuItem asChild>
      <Link to="/services/botox" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Botox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/micro-botox" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        MicroBotox
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/fillers" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Fillers
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/kybella" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Kybella
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/prp" className="flex items-center">
        <Droplet className="mr-2 h-4 w-4" />
        Platelet Rich Plasma
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export default InjectablesTreatments;
