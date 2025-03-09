
import {
  MobileFavoritesTreatments,
  MobileInjectablesTreatments,
  MobileLaserTreatments,
  MobileSkinLiftTreatments,
  MobileFacialTreatments
} from "./MobileTreatmentCategories";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Droplet, Zap, Dumbbell, Sparkles } from "lucide-react";

interface MobileTreatmentsListProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileTreatmentsList = ({ setIsOpen }: MobileTreatmentsListProps) => {
  return (
    <div className="mt-3 space-y-2">
      <MobileFavoritesTreatments setIsOpen={setIsOpen} />
      
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="injectables" className="border-b-0">
          <AccordionTrigger className="py-2.5 text-medspa-dark font-medium">
            <span className="flex items-center">
              <Droplet className="mr-2 h-4 w-4 text-medspa-teal" />
              Injectables
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2 bg-gray-50 p-3 rounded-md border border-gray-100">
              <MobileInjectablesTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="laser" className="border-b-0">
          <AccordionTrigger className="py-2.5 text-medspa-dark font-medium">
            <span className="flex items-center">
              <Zap className="mr-2 h-4 w-4 text-medspa-teal" />
              Laser Services
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2 bg-gray-50 p-3 rounded-md border border-gray-100">
              <MobileLaserTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="skinlift" className="border-b-0">
          <AccordionTrigger className="py-2.5 text-medspa-dark font-medium">
            <span className="flex items-center">
              <Dumbbell className="mr-2 h-4 w-4 text-medspa-teal flex-shrink-0" />
              Skin Lift & Fat Reduction
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2 bg-gray-50 p-3 rounded-md border border-gray-100">
              <MobileSkinLiftTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="facials" className="border-b-0">
          <AccordionTrigger className="py-2.5 text-medspa-dark font-medium">
            <span className="flex items-center">
              <Sparkles className="mr-2 h-4 w-4 text-medspa-teal" />
              Facials
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2 bg-gray-50 p-3 rounded-md border border-gray-100">
              <MobileFacialTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
