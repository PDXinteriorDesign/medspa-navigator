import { MedSpa } from "@/lib/types";
import { medSpaPhones } from "@/lib/medspas/phoneData";

/**
 * Apply phone numbers to all med spa entries
 * @param spas Array of MedSpa objects
 * @returns Array of MedSpa objects with phone numbers
 */
export const applyPhoneNumbers = (spas: MedSpa[]): MedSpa[] => {
  return spas.map(spa => {
    // If the spa already has a phone number, keep it
    if (spa.phone) return spa;
    
    // Try to find a matching phone number in our database
    const phone = medSpaPhones[spa.id];
    
    // Return the spa with the phone number if found, otherwise return the original
    return phone ? { ...spa, phone } : spa;
  });
};
