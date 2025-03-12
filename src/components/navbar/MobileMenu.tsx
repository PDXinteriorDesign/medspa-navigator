
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4">
      <div className="flex flex-col space-y-4">
        <Link 
          to="/services" 
          className="text-medspa-dark hover:text-medspa-teal transition py-2"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link 
          to="/locations" 
          className="text-medspa-dark hover:text-medspa-teal transition py-2"
          onClick={() => setIsOpen(false)}
        >
          Locations
        </Link>
        <Link 
          to="/about" 
          className="text-medspa-dark hover:text-medspa-teal transition py-2"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <div className="relative mt-2">
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
