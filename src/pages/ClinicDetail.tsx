
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMedSpaById } from "@/lib/medspas";
import ClinicPage from "@/components/clinic/ClinicPage";
import { getClinicLocations } from "@/utils/locationUtils";

const ClinicDetail = () => {
  const { location, clinicId } = useParams<{ location: string; clinicId: string }>();
  const navigate = useNavigate();
  
  // Find the clinic by ID or slug
  const clinic = clinicId ? getMedSpaById(clinicId) : undefined;
  
  useEffect(() => {
    // If clinic doesn't exist, redirect to locations
    if (!clinic) {
      console.error(`Clinic not found with ID/slug: ${clinicId}`);
      navigate("/locations", { replace: true });
      return;
    }
    
    // If location doesn't match, redirect to correct location
    if (location && clinic) {
      // Get all valid locations for this clinic
      const validLocations = getClinicLocations(clinic.address, clinic.location);
      
      // Check if current URL location is valid for this clinic
      if (!validLocations.includes(location.toLowerCase())) {
        console.warn(`Invalid location: ${location} for clinic: ${clinic.name}. Valid locations: ${validLocations.join(', ')}`);
        // Redirect to first valid location
        navigate(`/${validLocations[0]}/${clinicId}`, { replace: true });
      }
    }
  }, [clinic, clinicId, location, navigate]);
  
  if (!clinic) {
    return null;
  }
  
  return <ClinicPage clinic={clinic} />;
};

export default ClinicDetail;
