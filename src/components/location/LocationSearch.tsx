
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { locationDetails } from "@/lib/locationData";

interface LocationSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const LocationSearch = ({ searchTerm, onSearchChange }: LocationSearchProps) => {
  const [showResults, setShowResults] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(locationDetails);

  // Filter locations based on search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = locationDetails.filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchTerm]);

  const handleClearSearch = () => {
    onSearchChange("");
    setShowResults(false);
  };

  return (
    <div className="max-w-md mx-auto relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search locations..."
          className="pl-10 pr-10 py-6"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => searchTerm && setShowResults(true)}
        />
        {searchTerm && (
          <button 
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredLocations.length > 0 ? (
            <ul className="py-2">
              {filteredLocations.map(location => (
                <li key={location.id}>
                  <Link
                    to={`/locations/${location.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-medspa-teal"
                    onClick={() => setShowResults(false)}
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
