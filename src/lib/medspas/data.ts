
import { MedSpa } from "../types";
import { berryBlondeSpa } from "./entries/berry-blonde-spa";
import { deepBlueMedSpa } from "./entries/deep-blue-med-spa";
import { tribecaMedSpa } from "./entries/tribeca-medspa";
import { casaglowMedSpa } from "./entries/casaglow-medspa";
import { skinovaMedSpa } from "./entries/skinova-medspa";
import { trifectaMedSpaDowntown } from "./entries/trifecta-med-spa-downtown";
import { laVitaMedSpa } from "./entries/la-vita-medspa";
import { lolaAestheticsMediSpa } from "./entries/lola-aesthetics-medi-spa";
import { minimaleSkin } from "./entries/minimale-skin";
import { fildStudio } from "./entries/fild-studio";
import { jectBridgehampton } from "./entries/ject-bridgehampton";
import { skinStudio9 } from "./entries/skin-studio-9";
import { sohoSanctuary } from "./entries/soho-sanctuary";
import { sohoBubbleSpa } from "./entries/soho-bubble-spa";
import { spaUniqueHamptons } from "./entries/spa-unique-hamptons";
import { beautyAndFlyAestheticWellnessBronxville } from "./entries/beauty-and-fly-aesthetic-wellness-bronxville";
import { rejuvaliftAestheticsSouthampton } from "./entries/rejuvalift-aesthetics-southampton";
import { hamptonsSkinCosmeticsWesthamptonBeach } from "./entries/hamptons-skin-cosmetics-westhampton-beach";
import { roweMedspaHamptons } from "./entries/rowe-medspa-hamptons";
import { lovMedSpa } from "./entries/lov-med-spa";
import { peachyWilliamsburg } from "./entries/peachy-williamsburg";
import { purelyNaturalMedicalSpa } from "./entries/purely-natural-medical-spa";
import { everBodySoho } from "./entries/ever-body-soho";
import { eviveSpaSoho } from "./entries/evive-spa-soho";
import { medSpaPhones } from "./phoneData";

// Import missing entries
import { springStreetDermatologySoho } from "./entries/spring-street-dermatology-soho";
import { studiomdSoho } from "./entries/studiomd-soho";

// Import new entries
import { evolveMedSpaTribeca } from "./entries/evolve-med-spa-tribeca";
import { tribecaSpaOfTranquility } from "./entries/tribeca-spa-of-tranquility";
import { edenMedSpa } from "./entries/eden-med-spa";
import { endlessYouthMedicalSpa } from "./entries/endless-youth-medical-spa";
import { faycedAestheticsNyc } from "./entries/fayced-aesthetics-nyc";
import { upkeepMedSpa } from "./entries/upkeep-med-spa";
import { skinspiritUpperEastSide } from "./entries/skinspirit-upper-east-side";
import { skinceuticalsSkinlabUpperEastSide } from "./entries/skinceuticals-skinlab-upper-east-side";
import { smoothSynergyMedspa } from "./entries/smooth-synergy-medspa";
import { koruWellnessAesthetics } from "./entries/koru-wellness-aesthetics";
import { besoAesthetics } from "./entries/beso-aesthetics";
import { everbodyUpperEastSide } from "./entries/everbody-upper-east-side";
import { beautyfixMedspa } from "./entries/beautyfix-medspa";
import { sovousMedspa } from "./entries/sovous-medspa";
import { perfectMedSpa } from "./entries/perfect-med-spa";
import { cliniqueDesChampsElysees } from "./entries/clinique-des-champs-elysees";
import { radiantBeautyAndHealth } from "./entries/radiant-beauty-and-health";
import { radiantSkinMedSpa } from "./entries/radiant-skin-med-spa";
import { everYoungMedicalAesthetics } from "./entries/everyoung-medical-aesthetics";

// Import new Flushing/Queens med spas
import { flushingMedicalSpa } from "./entries/flushing-medical-spa";
import { prepPrimeMedSpa } from "./entries/prep-prime-med-spa";
import { glamoiMedSpa } from "./entries/glamoi-med-spa";
import { usEvergreenMedspa } from "./entries/us-evergreen-medspa";
import { drWwMedSpa } from "./entries/dr-ww-med-spa";
import { beautyIconMedSpa } from "./entries/beauty-icon-med-spa";
import { wellnessMedArt } from "./entries/wellness-med-art";
import { skinesteemByBBeckford } from "./entries/skinesteem-by-b-beckford";
import { revolveMedSpa } from "./entries/revolve-med-spa";

// Apply phone numbers to any entries that don't have them explicitly defined
const applyMissingPhoneNumbers = (spa: MedSpa): MedSpa => {
  if (spa.phone) return spa;
  const phone = medSpaPhones[spa.id];
  return phone ? { ...spa, phone } : spa;
};

// Combine all individual med spa entries and apply phone numbers where missing
export const medSpas: MedSpa[] = [
  berryBlondeSpa,
  deepBlueMedSpa,
  tribecaMedSpa,
  casaglowMedSpa,
  skinovaMedSpa,
  trifectaMedSpaDowntown,
  laVitaMedSpa,
  lolaAestheticsMediSpa,
  minimaleSkin,
  everBodySoho,
  fildStudio,
  jectBridgehampton,
  spaUniqueHamptons,
  springStreetDermatologySoho,
  eviveSpaSoho,
  sohoSanctuary,
  studiomdSoho,
  skinStudio9,
  sohoBubbleSpa,
  beautyAndFlyAestheticWellnessBronxville,
  rejuvaliftAestheticsSouthampton,
  hamptonsSkinCosmeticsWesthamptonBeach,
  roweMedspaHamptons,
  // Add new entries
  evolveMedSpaTribeca,
  tribecaSpaOfTranquility,
  edenMedSpa,
  purelyNaturalMedicalSpa,
  peachyWilliamsburg,
  endlessYouthMedicalSpa,
  lovMedSpa,
  faycedAestheticsNyc,
  upkeepMedSpa,
  skinspiritUpperEastSide,
  skinceuticalsSkinlabUpperEastSide,
  smoothSynergyMedspa,
  koruWellnessAesthetics,
  besoAesthetics,
  everbodyUpperEastSide,
  beautyfixMedspa,
  sovousMedspa,
  perfectMedSpa,
  cliniqueDesChampsElysees,
  radiantBeautyAndHealth,
  radiantSkinMedSpa,
  everYoungMedicalAesthetics,
  // Queens area clinics - removed the two Astoria listings
  // New Flushing/Queens med spas
  flushingMedicalSpa,
  prepPrimeMedSpa,
  glamoiMedSpa,
  usEvergreenMedspa,
  drWwMedSpa,
  beautyIconMedSpa,
  wellnessMedArt,
  skinesteemByBBeckford,
  revolveMedSpa
].map(applyMissingPhoneNumbers);
