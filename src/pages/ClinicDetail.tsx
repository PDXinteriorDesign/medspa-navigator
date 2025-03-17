
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMedSpaById } from "@/lib/data";
import ClinicPage from "@/components/clinic/ClinicPage";

const ClinicDetail = () => {
  const { location, clinicId } = useParams<{ location: string; clinicId: string }>();
  const navigate = useNavigate();
  
  // Find the clinic by ID
  const clinic = clinicId ? getMedSpaById(clinicId) : undefined;
  
  useEffect(() => {
    // If clinic doesn't exist or location doesn't match, redirect to locations
    if (!clinic) {
      navigate("/locations", { replace: true });
    }
  }, [clinic, navigate]);
  
  if (!clinic) {
    return null;
  }
  
  return <ClinicPage clinic={clinic} />;
};

export default ClinicDetail;
