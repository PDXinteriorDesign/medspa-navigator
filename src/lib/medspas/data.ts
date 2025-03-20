
import { MedSpa } from "../types";
import { berryBlondeSpa } from "./entries/berry-blonde-spa";
import { deepBlueMedSpa } from "./entries/deep-blue-med-spa";
import { tribecaMedSpa } from "./entries/tribeca-medspa";
import { casaglowMedSpa } from "./entries/casaglow-medspa";
import { skinneyMedSpa } from "./entries/skinney-medspa";
import { skinovaMedSpa } from "./entries/skinova-medspa";

// Combine all individual med spa entries
export const medSpas: MedSpa[] = [
  berryBlondeSpa,
  deepBlueMedSpa,
  tribecaMedSpa,
  casaglowMedSpa,
  skinneyMedSpa,
  skinovaMedSpa
];
