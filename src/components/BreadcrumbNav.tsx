
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-1 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-medspa-teal">
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-1 text-gray-400" />
            {item.current ? (
              <span className="text-medspa-teal font-medium">{item.label}</span>
            ) : (
              <Link 
                to={item.href}
                className="text-gray-500 hover:text-medspa-teal"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
