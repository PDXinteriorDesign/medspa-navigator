
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

interface MobileTreatmentsListProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileTreatmentsList = ({ setIsOpen }: MobileTreatmentsListProps) => {
  return (
    <div className="mt-2 ml-4 space-y-4 flex flex-col">
      {/* Injectables */}
      <div className="mb-2">
        <h3 className="font-medium text-medspa-dark mb-1">Injectables</h3>
        <div className="space-y-2 ml-2">
          <Link
            to="/services/botox"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Botox
          </Link>
          <Link
            to="/services/micro-botox"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            MicroBotox
          </Link>
          <Link
            to="/services/fillers"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Fillers
          </Link>
          <Link
            to="/services/kybella"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Kybella
          </Link>
          <Link
            to="/services/prp"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Platelet Rich Plasma
          </Link>
        </div>
      </div>

      {/* Laser Services */}
      <div className="mb-2">
        <h3 className="font-medium text-medspa-dark mb-1">Laser Services</h3>
        <div className="space-y-2 ml-2">
          <Link
            to="/services/photofacials"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Sun className="mr-2 h-4 w-4" />
            Photofacials
          </Link>
          <Link
            to="/services/tattoo-removal"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Zap className="mr-2 h-4 w-4" />
            Tattoo Removal
          </Link>
          <Link
            to="/services/skin-resurfacing"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Sun className="mr-2 h-4 w-4" />
            Skin Resurfacing
          </Link>
          <Link
            to="/services/carbon-laser-facial"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Zap className="mr-2 h-4 w-4" />
            Carbon Laser Facial
          </Link>
          <Link
            to="/services/vaginal-rejuvenation"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Zap className="mr-2 h-4 w-4" />
            Vaginal Rejuvenation
          </Link>
          <Link
            to="/services/laser-hair-removal"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Zap className="mr-2 h-4 w-4" />
            Laser Hair Removal
          </Link>
        </div>
      </div>

      {/* Skin Lift & Fat Reduction */}
      <div className="mb-2">
        <h3 className="font-medium text-medspa-dark mb-1">Skin Lift & Fat Reduction</h3>
        <div className="space-y-2 ml-2">
          <Link
            to="/services/weight-management"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Dumbbell className="mr-2 h-4 w-4" />
            Weight Management Programs
          </Link>
          <Link
            to="/services/coolsculpting"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Snowflake className="mr-2 h-4 w-4" />
            CoolSculpting
          </Link>
          <Link
            to="/services/radio-ultrasound-therapy"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Waves className="mr-2 h-4 w-4" />
            Radio & Ultrasound Therapy
          </Link>
        </div>
      </div>

      {/* Facials */}
      <div className="mb-2">
        <h3 className="font-medium text-medspa-dark mb-1">Facials</h3>
        <div className="space-y-2 ml-2">
          <Link
            to="/services/chemical-peels"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Chemical Peels
          </Link>
          <Link
            to="/services/cryogenic-skin-tag-removal"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Snowflake className="mr-2 h-4 w-4" />
            Cryogenic Skin Tag Removal
          </Link>
          <Link
            to="/services/hydrofacials"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Hydrofacials
          </Link>
          <Link
            to="/services/microdermabrasion"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Microdermabrasion
          </Link>
          <Link
            to="/services/microneedling"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Heart className="mr-2 h-4 w-4" />
            Microneedling
          </Link>
          <Link
            to="/services/oxygen-facials"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Droplet className="mr-2 h-4 w-4" />
            Oxygen Facials
          </Link>
          <Link
            to="/services/placenta-facials"
            className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Stethoscope className="mr-2 h-4 w-4" />
            Placenta Facials
          </Link>
        </div>
      </div>
    </div>
  );
};
