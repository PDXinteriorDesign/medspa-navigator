
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMedSpaById } from "@/lib/medspas";
import ClinicPage from "@/components/clinic/ClinicPage";
import { getClinicLocations } from "@/utils/locationUtils";
import { toast } from "@/components/ui/use-toast";

const ClinicDetail = () => {
  const { location, clinicId } = useParams<{ location: string; clinicId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Find the clinic by ID or slug
  const clinic = clinicId ? getMedSpaById(clinicId) : undefined;
  
  useEffect(() => {
    if (!location || !clinicId) {
      console.error("Missing location or clinicId parameters");
      navigate("/locations", { replace: true });
      return;
    }
    
    // If clinic doesn't exist, redirect to locations
    if (!clinic) {
      console.error(`Clinic not found with ID/slug: ${clinicId}`);
      toast({
        title: "Clinic not found",
        description: "The requested clinic could not be found. Redirecting to locations.",
        variant: "destructive"
      });
      navigate("/locations", { replace: true });
      return;
    }
    
    // Get all valid locations for this clinic
    const validLocations = getClinicLocations(clinic.address, clinic.location);
    
    // Case-insensitive location check
    const normalizedLocation = location.toLowerCase();
    const matchingLocation = validLocations.find(
      validLoc => validLoc.toLowerCase() === normalizedLocation
    );
    
    if (!matchingLocation) {
      console.warn(`Invalid location: ${location} for clinic: ${clinic.name}. Valid locations: ${validLocations.join(', ')}`);
      // Redirect to first valid location
      navigate(`/${validLocations[0]}/${clinic.slug || clinic.id}`, { replace: true });
      return;
    }
    
    setIsLoading(false);
  }, [clinic, clinicId, location, navigate]);
  
  if (isLoading) {
    return (
      <div className="medspa-container py-12 text-center">
        <p>Loading clinic information...</p>
      </div>
    );
  }
  
  if (!clinic) {
    return null;
  }
  
  return <ClinicPage clinic={clinic} />;
};

export default ClinicDetail;
