
import React from "react";
import { MedSpa } from "@/lib/types";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ClinicSchema from "./ClinicSchema";
import ClinicHeader from "./ClinicHeader";
import ClinicMap from "./ClinicMap";
import ClinicDescription from "./ClinicDescription";
import ClinicServices from "./ClinicServices";
import ClinicAdditionalTreatments from "./ClinicAdditionalTreatments";
import ClinicSidebar from "./ClinicSidebar";
import { getLocationSlug } from "@/utils/locationUtils";

interface ClinicPageProps {
  clinic: MedSpa;
}

const ClinicPage = ({ clinic }: ClinicPageProps) => {
  // Get the location slug from the clinic address
  const locationSlug = getLocationSlug(clinic.address, clinic.location);

  // Additional treatments specific to this clinic - could be added to the MedSpa type in the future
  const additionalTreatments = [
    "Dysport®", 
    "DAXXIFY™", 
    "JUVÉDERM®", 
    "Restylane®", 
    "Radiesse®", 
    "Sculptra®", 
    "Thread Lifts", 
    "Fraxel®", 
    "Clear + Brilliant®", 
    "Laser Genesis", 
    "Ultherapy®", 
    "IPL & Photo Rejuvenation", 
    "CoolTone™", 
    "VelaShape™", 
    "Chemical Peels", 
    "Dermaplaning", 
    "ZO Skin Health®", 
    "ProBLUEMD Skincare"
  ];

  return (
    <>
      <ClinicSchema clinic={clinic} />
      
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations" },
            { label: clinic.location, href: `/${locationSlug}` },
            { label: clinic.name, href: `/${locationSlug}/${clinic.slug || clinic.id}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              {/* Google Maps Embed */}
              <ClinicMap clinic={clinic} />
              
              {clinic.featured && (
                <div className="absolute top-4 right-4 bg-medspa-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Clinic
                </div>
              )}
              
              <ClinicHeader clinic={clinic} />
              
              <div className="p-8 pt-0">
                <ClinicDescription clinicName={clinic.name} description={clinic.description} />
                <ClinicServices clinic={clinic} locationSlug={locationSlug} />
                <ClinicAdditionalTreatments clinicName={clinic.name} additionalTreatments={additionalTreatments} />
              </div>
            </div>
          </div>
          
          <ClinicSidebar clinic={clinic} locationSlug={locationSlug} />
        </div>
      </div>
    </>
  );
};

export default ClinicPage;
