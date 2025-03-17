
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/types";

interface ServiceListProps {
  services: Service[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <div className="space-y-4">
      {services.map(service => (
        <Card key={service.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4">
              <img 
                src={service.imageUrl} 
                alt={service.name} 
                className="w-full h-48 md:h-full object-cover" 
              />
            </div>
            <CardContent className="flex-1 p-6">
              <Link to={`/services/${service.slug}`} className="hover:underline">
                <h3 className="text-xl font-medium mb-2">{service.name}</h3>
              </Link>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Available in all NYC locations
                </div>
                <Link 
                  to={`/services/${service.slug}`}
                  className="text-medspa-teal hover:underline font-medium"
                >
                  View details
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ServiceList;
