
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { MobileTreatmentsList } from "./MobileTreatmentsList";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4">
      <div className="flex flex-col space-y-4">
        <details className="group">
          <summary className="flex items-center justify-between text-medspa-dark hover:text-medspa-teal transition cursor-pointer">
            Treatments
            <span className="transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </summary>
          <MobileTreatmentsList setIsOpen={setIsOpen} />
        </details>
        
        <Link 
          to="/services" 
          className="text-medspa-dark hover:text-medspa-teal transition"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link 
          to="/locations" 
          className="text-medspa-dark hover:text-medspa-teal transition"
          onClick={() => setIsOpen(false)}
        >
          Locations
        </Link>
        <Link 
          to="/medspas" 
          className="text-medspa-dark hover:text-medspa-teal transition"
          onClick={() => setIsOpen(false)}
        >
          Directory
        </Link>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search medspas or services" 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-medspa-teal focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
