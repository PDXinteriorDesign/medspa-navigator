
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="medspa-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-medspa-teal">MedSpas<span className="text-medspa-gold">NYC</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-medspa-dark hover:text-medspa-teal transition">
              Services
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
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medspa-dark focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/services" 
                className="text-medspa-dark hover:text-medspa-teal transition"
                onClick={() => setIsOpen(false)}
              >
                Services
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
