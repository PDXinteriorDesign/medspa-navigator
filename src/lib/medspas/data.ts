
import { MedSpa } from "../types";
import { berryBlondeSpa } from "./entries/berry-blonde-spa";
import { deepBlueMedSpa } from "./entries/deep-blue-med-spa";
import { tribecaMedSpa } from "./entries/tribeca-medspa";
import { casaglowMedSpa } from "./entries/casaglow-medspa";
import { skinneyMedSpa } from "./entries/skinney-medspa";
import { skinovaMedSpa } from "./entries/skinova-medspa";
import { trifectaMedSpaDowntown } from "./entries/trifecta-med-spa-downtown";
import { laVitaMedSpa } from "./entries/la-vita-medspa";
import { sylkMedSpa } from "./entries/sylk-medspa";
import { lolaAestheticsMediSpa } from "./entries/lola-aesthetics-medi-spa";
import { minimaleSkin } from "./entries/minimale-skin";
import { everBodySoho } from "./entries/ever-body-soho";
import { fildStudio } from "./entries/fild-studio";
import { jectBridgehampton } from "./entries/ject-bridgehampton";
import { spaUniqueHamptons } from "./entries/spa-unique-hamptons";

// Combine all individual med spa entries
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
  spaUniqueHamptons
];
