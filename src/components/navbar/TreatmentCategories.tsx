
import { Link } from "react-router-dom";
import { 
  Droplet, 
  Sun, 
  Zap, 
  Dumbbell, 
  Snowflake, 
  Waves, 
  Sparkles, 
  Heart, 
  Stethoscope 
} from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

export const InjectablesTreatments = () => (
  <DropdownMenuGroup>
    <DropdownMenuLabel>Injectables</DropdownMenuLabel>
    <DropdownMenuSeparator />
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

export const LaserTreatments = () => (
  <DropdownMenuGroup>
    <DropdownMenuLabel>Laser Services</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild>
      <Link to="/services/photofacials" className="flex items-center">
        <Sun className="mr-2 h-4 w-4" />
        Photofacials
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/tattoo-removal" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Tattoo Removal
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/skin-resurfacing" className="flex items-center">
        <Sun className="mr-2 h-4 w-4" />
        Skin Resurfacing
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/carbon-laser-facial" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Carbon Laser Facial
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/vaginal-rejuvenation" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Vaginal Rejuvenation
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/laser-hair-removal" className="flex items-center">
        <Zap className="mr-2 h-4 w-4" />
        Laser Hair Removal
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export const SkinLiftTreatments = () => (
  <DropdownMenuGroup>
    <DropdownMenuLabel>Skin Lift & Fat Reduction</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild>
      <Link to="/services/weight-management" className="flex items-center">
        <Dumbbell className="mr-2 h-4 w-4" />
        Weight Management Programs
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/coolsculpting" className="flex items-center">
        <Snowflake className="mr-2 h-4 w-4" />
        CoolSculpting
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/services/radio-ultrasound-therapy" className="flex items-center">
        <Waves className="mr-2 h-4 w-4" />
        Radio & Ultrasound Therapy
      </Link>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

export const FacialTreatments = () => (
  <DropdownMenuGroup>
    <DropdownMenuLabel>Facials</DropdownMenuLabel>
    <DropdownMenuSeparator />
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
