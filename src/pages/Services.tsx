
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

const Services = () => {
  return (
    <div className="medspa-container py-12">
      <BreadcrumbNav 
        items={[
          { label: "Services", href: "/services", current: true }
        ]} 
      />
      
      <h1 className="page-heading">Aesthetic Services</h1>
      
      <p className="text-lg text-gray-700 mb-10">
        Browse popular aesthetic treatments available at medical spas throughout New York City.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
