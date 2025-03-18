
import { useParams, useNavigate } from "react-router-dom";
import { type Location } from "@/lib/types";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { useEffect } from "react";

const ServiceLocationDetail = () => {
  const { serviceSlug, location } = useParams<{ serviceSlug: string; location: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug, location]);
  
  // Parse the location from URL if it contains a dash format (serviceSlug-in-location)
  const parsedTreatmentSlug = serviceSlug?.includes("-in-") 
    ? serviceSlug.split("-in-")[0] 
    : serviceSlug;
    
  const parsedLocation = serviceSlug?.includes("-in-")
    ? serviceSlug.split("-in-")[1]
    : location;
  
  if (!parsedTreatmentSlug || !parsedLocation) {
    navigate("/not-found", { replace: true });
    return null;
  }

  return (
    <TreatmentLocationTemplate
      serviceSlug={parsedTreatmentSlug}
      location={parsedLocation as Location}
    />
  );
};

export default ServiceLocationDetail;
