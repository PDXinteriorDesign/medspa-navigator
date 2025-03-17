
import { useParams } from "react-router-dom";
import { type Location } from "@/lib/data";
import TreatmentLocationTemplate from "@/components/service/TreatmentLocationTemplate";

const ServiceLocationDetail = () => {
  const { serviceSlug, location } = useParams<{ serviceSlug: string; location: string }>();
  
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
