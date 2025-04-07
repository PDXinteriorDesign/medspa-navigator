
import { Link } from "react-router-dom";

const DesktopNavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <div className="flex items-center space-x-6">
        <Link 
          to="/treatments" 
          className="px-4 py-2 border-2 border-medspa-darkblue text-white rounded-md hover:bg-medspa-darkblue/10 transition"
        >
          Treatments
        </Link>
        <Link 
          to="/locations" 
          className="px-4 py-2 border-2 border-medspa-darkblue text-white rounded-md hover:bg-medspa-darkblue/10 transition"
        >
          Locations
        </Link>
        <Link 
          to="/about" 
          className="px-4 py-2 border-2 border-medspa-darkblue text-white rounded-md hover:bg-medspa-darkblue/10 transition"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavLinks;
