
import { Link } from "react-router-dom";

const DesktopNavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <div className="flex items-center space-x-6">
        <Link to="/treatments" className="text-medspa-dark hover:text-[#0A3D62] transition">
          Treatments
        </Link>
        <Link to="/locations" className="text-medspa-dark hover:text-[#0A3D62] transition">
          Locations
        </Link>
        <Link to="/about" className="text-medspa-dark hover:text-[#0A3D62] transition">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavLinks;
