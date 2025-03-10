
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { type LocationDetail } from "@/lib/locationData";

interface LocationDirectoryProps {
  groupedLocations: Record<string, LocationDetail[]>;
  alphabet: string[];
  searchTerm: string;
  filteredLocations: LocationDetail[];
  allSubLocations: {
    name: string;
    slug: string;
    parentName: string;
  }[];
}

const LocationDirectory = ({ 
  groupedLocations, 
  alphabet, 
  searchTerm, 
  filteredLocations,
  allSubLocations
}: LocationDirectoryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-serif font-medium mb-6">All Locations</h2>
      
      {/* Alphabet Quick Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 pb-4">
        {alphabet.map(letter => (
          <a 
            key={letter} 
            href={`#section-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-medspa-teal hover:text-white transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>
      
      {/* Directory Listing */}
      {searchTerm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map(location => (
            <Link 
              key={location.id}
              to={`/locations/${location.slug}`}
              className="flex items-center p-3 rounded-md hover:bg-gray-50"
            >
              <MapPin size={16} className="text-medspa-teal mr-2" />
              <span>{location.name}</span>
              <span className="ml-auto text-sm text-gray-500">{location.medspaCount} MedSpas</span>
            </Link>
          ))}
          
          {/* Also include sub-locations that match the search */}
          {allSubLocations
            .filter(subLoc => 
              subLoc.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(subLoc => (
              <Link 
                key={`subloc-${subLoc.slug}`}
                to={`/locations/${subLoc.slug}`}
                className="flex items-center p-3 rounded-md hover:bg-gray-50"
              >
                <MapPin size={16} className="text-medspa-teal mr-2" />
                <span>{subLoc.name}</span>
                <span className="ml-auto text-sm text-gray-500 italic">
                  {subLoc.parentName}
                </span>
              </Link>
            ))
          }
        </div>
      ) : (
        <>
          {/* Main Neighborhood Sections */}
          {alphabet.map(letter => (
            <div key={letter} id={`section-${letter}`} className="mb-8">
              <h3 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">{letter}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedLocations[letter].map(location => (
                  <Link 
                    key={location.id}
                    to={`/locations/${location.slug}`}
                    className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <MapPin size={16} className="text-medspa-teal mr-2" />
                    <span className="font-medium">{location.name}</span>
                    <span className="ml-auto text-sm text-gray-500">{location.medspaCount} MedSpas</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          {/* Sub-locations Section */}
          <div className="mt-10">
            <h3 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">Neighborhoods & Sub-Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allSubLocations.map(subLoc => (
                <Link 
                  key={`subloc-${subLoc.slug}`}
                  to={`/locations/${subLoc.slug}`}
                  className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <MapPin size={16} className="text-medspa-teal mr-2" />
                  <span className="font-medium">{subLoc.name}</span>
                  <span className="ml-auto text-sm text-gray-500 italic">
                    {subLoc.parentName}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationDirectory;
