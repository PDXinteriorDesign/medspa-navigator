
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Droplet, Sun, Dumbbell, Snowflake, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <DropdownMenu>
              <DropdownMenuTrigger className="text-medspa-dark hover:text-medspa-teal transition">
                Treatments
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Favorites</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/services/botox" className="flex items-center">
                    <Droplet className="mr-2 h-4 w-4" />
                    Botox
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/fillers" className="flex items-center">
                    <Droplet className="mr-2 h-4 w-4" />
                    Fillers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/skin-rejuvenation" className="flex items-center">
                    <Sun className="mr-2 h-4 w-4" />
                    Skin Rejuvenation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/weight-management" className="flex items-center">
                    <Dumbbell className="mr-2 h-4 w-4" />
                    Weight Management Programs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/coolsculpting" className="flex items-center">
                    <Snowflake className="mr-2 h-4 w-4" />
                    CoolSculpting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/laser-hair-removal" className="flex items-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Laser Hair Removal
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/microneedling" className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Microneedling
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              <details className="group">
                <summary className="flex items-center justify-between text-medspa-dark hover:text-medspa-teal transition cursor-pointer">
                  Treatments
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="mt-2 ml-4 space-y-2 flex flex-col">
                  <Link
                    to="/services/botox"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Droplet className="mr-2 h-4 w-4" />
                    Botox
                  </Link>
                  <Link
                    to="/services/fillers"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Droplet className="mr-2 h-4 w-4" />
                    Fillers
                  </Link>
                  <Link
                    to="/services/skin-rejuvenation"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Skin Rejuvenation
                  </Link>
                  <Link
                    to="/services/weight-management"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Dumbbell className="mr-2 h-4 w-4" />
                    Weight Management Programs
                  </Link>
                  <Link
                    to="/services/coolsculpting"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Snowflake className="mr-2 h-4 w-4" />
                    CoolSculpting
                  </Link>
                  <Link
                    to="/services/laser-hair-removal"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Laser Hair Removal
                  </Link>
                  <Link
                    to="/services/microneedling"
                    className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Microneedling
                  </Link>
                </div>
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
