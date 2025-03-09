
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { MobileTreatmentsList } from "./MobileTreatmentsList";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4">
      <div className="flex flex-col space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="treatments" className="border-none">
            <AccordionTrigger className="py-2 text-medspa-dark hover:text-medspa-teal transition flex items-center">
              Treatments
            </AccordionTrigger>
            <AccordionContent>
              <MobileTreatmentsList setIsOpen={setIsOpen} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
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
          to="/medspas" 
          className="text-medspa-dark hover:text-medspa-teal transition py-2"
          onClick={() => setIsOpen(false)}
        >
          Directory
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
