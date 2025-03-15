
import { Link } from "react-router-dom";

const DesktopNavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <div className="flex items-center space-x-6">
        <Link to="/treatments" className="text-medspa-dark hover:text-medspa-teal transition">
          Treatments
        </Link>
        <Link to="/locations" className="text-medspa-dark hover:text-medspa-teal transition">
          Locations
        </Link>
        <Link to="/about" className="text-medspa-dark hover:text-medspa-teal transition">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavLinks;
