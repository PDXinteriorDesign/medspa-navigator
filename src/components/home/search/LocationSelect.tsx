
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LocationSelectProps {
  allLocations: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
}

const LocationSelect = ({ 
  allLocations, 
  selectedLocation, 
  setSelectedLocation 
}: LocationSelectProps) => {
  return (
    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
      <SelectTrigger className="w-full">
        <div className="flex items-center">
          <MapPin size={16} className="mr-2 text-medspa-teal" />
          <SelectValue placeholder="By Location" />
        </div>
      </SelectTrigger>
      <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
        {allLocations.map((location) => (
          <SelectItem key={location.id} value={location.id}>
            {location.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocationSelect;
