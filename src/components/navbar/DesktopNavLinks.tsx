
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import TreatmentsDropdown from "./TreatmentsDropdown";

const DesktopNavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <TreatmentsDropdown />
      
      <Link to="/services" className="text-medspa-dark hover:text-medspa-teal transition">
        Services
      </Link>
      <Link to="/locations" className="text-medspa-dark hover:text-medspa-teal transition">
        Locations
      </Link>
      <Link to="/medspas" className="text-medspa-dark hover:text-medspa-teal transition">
        Directory
      </Link>
      <div className="relative ml-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search medspas or services" 
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-medspa-teal focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default DesktopNavLinks;
