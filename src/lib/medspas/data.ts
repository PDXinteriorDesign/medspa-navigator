import { MedSpa } from "../types";
import { berryBlondeSpa } from "./entries/berry-blonde-spa";
import { deepBlueMedSpa } from "./entries/deep-blue-med-spa";
import { tribecaMedSpa } from "./entries/tribeca-medspa";
import { casaglowMedSpa } from "./entries/casaglow-medspa";
import { skinneyMedSpa } from "./entries/skinney-medspa";
import { skinovaMedSpa } from "./entries/skinova-medspa";
import { trifectaMedSpaDowntown } from "./entries/trifecta-med-spa-downtown";
import { laVitaMedSpa } from "./entries/la-vita-medspa";
import { medSpaPhones } from "./phoneData";

// Import new entries
import { evolveMedSpaTribeca } from "./entries/evolve-med-spa-tribeca";
import { tribecaSpaOfTranquility } from "./entries/tribeca-spa-of-tranquility";
import { edenMedSpa } from "./entries/eden-med-spa";
import { purelyNaturalMedicalSpa } from "./entries/purely-natural-medical-spa";
import { peachyWilliamsburg } from "./entries/peachy-williamsburg";
import { endlessYouthMedicalSpa } from "./entries/endless-youth-medical-spa";
import { lovMedSpa } from "./entries/lov-med-spa";
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
import { revivalMedSpa } from "./entries/revival-med-spa";

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
  skinneyMedSpa,
  skinovaMedSpa,
  trifectaMedSpaDowntown,
  laVitaMedSpa,
  sylkMedSpa,
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
  airemAestheticSpaBridgehampton,
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
  revivalMedSpa
].map(applyMissingPhoneNumbers);
