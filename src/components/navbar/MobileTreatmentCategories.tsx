
import { 
  Droplet, 
  Sun, 
  Zap, 
  Dumbbell, 
  Snowflake, 
  Waves, 
  Sparkles, 
  Heart, 
  Stethoscope,
  Star
} from "lucide-react";
import { MobileTreatmentCategory, MobileTreatmentItem } from "./MobileTreatmentCategory";

interface MobileTreatmentCategoriesProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileFavoritesTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <MobileTreatmentCategory title="Favorites">
      <MobileTreatmentItem 
        title="Botox" 
        url="/services/botox" 
        icon={Star} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Fillers" 
        url="/services/fillers" 
        icon={Star} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Laser Hair Removal" 
        url="/services/laser-hair-removal" 
        icon={Star} 
        onClick={() => setIsOpen(false)} 
      />
    </MobileTreatmentCategory>
  );
};

export const MobileInjectablesTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <MobileTreatmentCategory title="Injectables">
      <MobileTreatmentItem 
        title="Botox" 
        url="/services/botox" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="MicroBotox" 
        url="/services/micro-botox" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Fillers" 
        url="/services/fillers" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Kybella" 
        url="/services/kybella" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Platelet Rich Plasma" 
        url="/services/prp" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
    </MobileTreatmentCategory>
  );
};

export const MobileLaserTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <MobileTreatmentCategory title="Laser Services">
      <MobileTreatmentItem 
        title="Photofacials" 
        url="/services/photofacials" 
        icon={Sun} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Tattoo Removal" 
        url="/services/tattoo-removal" 
        icon={Zap} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Skin Resurfacing" 
        url="/services/skin-resurfacing" 
        icon={Sun} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Carbon Laser Facial" 
        url="/services/carbon-laser-facial" 
        icon={Zap} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Vaginal Rejuvenation" 
        url="/services/vaginal-rejuvenation" 
        icon={Zap} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Laser Hair Removal" 
        url="/services/laser-hair-removal" 
        icon={Zap} 
        onClick={() => setIsOpen(false)} 
      />
    </MobileTreatmentCategory>
  );
};

export const MobileSkinLiftTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <MobileTreatmentCategory title="Skin Lift & Fat Reduction">
      <MobileTreatmentItem 
        title="Weight Management Programs" 
        url="/services/weight-management" 
        icon={Dumbbell} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="CoolSculpting" 
        url="/services/coolsculpting" 
        icon={Snowflake} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Radio & Ultrasound Therapy" 
        url="/services/radio-ultrasound-therapy" 
        icon={Waves} 
        onClick={() => setIsOpen(false)} 
      />
    </MobileTreatmentCategory>
  );
};

export const MobileFacialTreatments = ({ setIsOpen }: MobileTreatmentCategoriesProps) => {
  return (
    <MobileTreatmentCategory title="Facials">
      <MobileTreatmentItem 
        title="Chemical Peels" 
        url="/services/chemical-peels" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Cryogenic Skin Tag Removal" 
        url="/services/cryogenic-skin-tag-removal" 
        icon={Snowflake} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Hydrofacials" 
        url="/services/hydrofacials" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Microdermabrasion" 
        url="/services/microdermabrasion" 
        icon={Sparkles} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Microneedling" 
        url="/services/microneedling" 
        icon={Heart} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Oxygen Facials" 
        url="/services/oxygen-facials" 
        icon={Droplet} 
        onClick={() => setIsOpen(false)} 
      />
      <MobileTreatmentItem 
        title="Placenta Facials" 
        url="/services/placenta-facials" 
        icon={Stethoscope} 
        onClick={() => setIsOpen(false)} 
      />
    </MobileTreatmentCategory>
  );
};
