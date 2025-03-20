
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
  const [debugInfo, setDebugInfo] = useState<{
    location?: string;
    clinicId?: string;
    clinic?: any;
    validLocations?: string[];
  }>({});
  
  useEffect(() => {
    // Log parameters for debugging
    console.log(`ClinicDetail mounted: location=${location}, clinicId=${clinicId}`);
    
    if (!location || !clinicId) {
      console.error("Missing location or clinicId parameters");
      toast({
        title: "Invalid URL",
        description: "Missing location or clinic information. Redirecting to locations page.",
        variant: "destructive"
      });
      navigate("/locations", { replace: true });
      return;
    }
    
    // Find the clinic by ID or slug
    const clinic = getMedSpaById(clinicId);
    
    // Store debug info
    setDebugInfo({
      location,
      clinicId,
      clinic,
      validLocations: clinic ? getClinicLocations(clinic.address, clinic.location) : []
    });
    
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
    console.log(`Valid locations for ${clinic.name}: ${validLocations.join(', ')}`);
    
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
  }, [location, clinicId, navigate]);
  
  // Moved this inside the component body rather than in the useEffect
  const clinic = clinicId ? getMedSpaById(clinicId) : undefined;
  
  if (isLoading) {
    return (
      <div className="medspa-container py-12 text-center">
        <p>Loading clinic information...</p>
        {Object.keys(debugInfo).length > 0 && (
          <div className="mt-4 p-4 bg-gray-100 rounded text-left text-xs">
            <h3 className="font-bold mb-2">Debug Info:</h3>
            <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
  
  if (!clinic) {
    return null;
  }
  
  return <ClinicPage clinic={clinic} />;
};

export default ClinicDetail;
