
import { useParams, useNavigate } from "react-router-dom";
import { type Location } from "@/lib/data";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";
import { useEffect } from "react";

const ServiceLocationDetail = () => {
  const params = useParams<{ serviceSlug: string; location: string }>();
  const navigate = useNavigate();
  
  // Extract serviceSlug and location from URL parameters
  let serviceSlug, location;
  
  // Handle both URL formats: /:serviceSlug-in-:location and /:serviceSlug/:location
  if (params.serviceSlug && params.location) {
    // Regular route format
    serviceSlug = params.serviceSlug;
    location = params.location;
  } else if (params['*']) {
    // Handle the format /botox-in-tribeca
    const path = params['*'];
    const matches = path.match(/([^-]+)-in-([^/]+)/);
    
    if (matches && matches.length === 3) {
      serviceSlug = matches[1];
      location = matches[2];
    }
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug, location]);
  
  if (!serviceSlug || !location) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Service or Location Not Found</h1>
        <p>The service or location you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <TreatmentLocationTemplate
      serviceSlug={serviceSlug}
      location={location as Location}
    />
  );
};

export default ServiceLocationDetail;
