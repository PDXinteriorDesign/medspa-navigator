
import { Link } from "react-router-dom";

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
          to="/treatments" 
          className="text-white hover:text-medspa-teal transition py-2 px-4 border border-white/20 rounded"
          onClick={() => setIsOpen(false)}
        >
          Treatments
        </Link>
        <Link 
          to="/locations" 
          className="text-white hover:text-medspa-teal transition py-2 px-4 border border-white/20 rounded"
          onClick={() => setIsOpen(false)}
        >
          Locations
        </Link>
        <Link 
          to="/about" 
          className="text-white hover:text-medspa-teal transition py-2 px-4 border border-white/20 rounded"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
