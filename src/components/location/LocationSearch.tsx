
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface LocationSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const LocationSearch = ({ searchTerm, onSearchChange }: LocationSearchProps) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search locations..."
          className="pl-10 py-6"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LocationSearch;
