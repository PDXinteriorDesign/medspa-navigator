
import { Grid3X3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";

interface ServiceSelectProps {
  selectedService: string;
  setSelectedService: (value: string) => void;
}

const ServiceSelect = ({ selectedService, setSelectedService }: ServiceSelectProps) => {
  return (
    <Select value={selectedService} onValueChange={setSelectedService}>
      <SelectTrigger className="w-full">
        <div className="flex items-center">
          <Grid3X3 size={16} className="mr-2 text-medspa-teal" />
          <SelectValue placeholder="By Treatment" />
        </div>
      </SelectTrigger>
      <SelectContent className="w-[800px] max-h-[400px] overflow-y-auto bg-white">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-3">
            <h3 className="font-serif font-medium text-sm text-medspa-dark mb-2 pb-1 border-b border-gray-100">Popular Treatments</h3>
            <div className="flex flex-col gap-1">
              {services.slice(0, 5).map((service) => (
                <SelectItem key={`popular-${service.id}`} value={service.id} className="cursor-pointer">
                  {service.name}
                </SelectItem>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-serif font-medium text-sm text-medspa-dark mb-2 pb-1 border-b border-gray-100">Injectables</h3>
            <div className="flex flex-col gap-1">
              <SelectItem value="botox" className="cursor-pointer">Botox</SelectItem>
              <SelectItem value="micro-botox" className="cursor-pointer">MicroBotox</SelectItem>
              <SelectItem value="fillers" className="cursor-pointer">Fillers</SelectItem>
              <SelectItem value="kybella" className="cursor-pointer">Kybella</SelectItem>
              <SelectItem value="prp" className="cursor-pointer">PRP Injections</SelectItem>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-serif font-medium text-sm text-medspa-dark mb-2 pb-1 border-b border-gray-100">Laser Treatments</h3>
            <div className="flex flex-col gap-1">
              <SelectItem value="laser-hair-removal" className="cursor-pointer">Laser Hair Removal</SelectItem>
              <SelectItem value="photofacials" className="cursor-pointer">Photofacials</SelectItem>
              <SelectItem value="carbon-laser-facial" className="cursor-pointer">Carbon Laser Facial</SelectItem>
              <SelectItem value="laser-resurfacing" className="cursor-pointer">Laser Resurfacing</SelectItem>
              <SelectItem value="tattoo-removal" className="cursor-pointer">Tattoo Removal</SelectItem>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-serif font-medium text-sm text-medspa-dark mb-2 pb-1 border-b border-gray-100">Body Treatments</h3>
            <div className="flex flex-col gap-1">
              <SelectItem value="coolsculpting" className="cursor-pointer">CoolSculpting</SelectItem>
              <SelectItem value="weight-management" className="cursor-pointer">Weight Management</SelectItem>
              <SelectItem value="radio-ultrasound-therapy" className="cursor-pointer">Radio & Ultrasound</SelectItem>
              <SelectItem value="vaginal-rejuvenation" className="cursor-pointer">Vaginal Rejuvenation</SelectItem>
              <SelectItem value="microdermabrasion" className="cursor-pointer">Microdermabrasion</SelectItem>
            </div>
          </div>
        </div>
      </SelectContent>
    </Select>
  );
};

export default ServiceSelect;
