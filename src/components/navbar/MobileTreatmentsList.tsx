
import {
  MobileFavoritesTreatments,
  MobileInjectablesTreatments,
  MobileLaserTreatments,
  MobileSkinLiftTreatments,
  MobileFacialTreatments
} from "./MobileTreatmentCategories";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MobileTreatmentsListProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileTreatmentsList = ({ setIsOpen }: MobileTreatmentsListProps) => {
  return (
    <div className="mt-2 space-y-2">
      <MobileFavoritesTreatments setIsOpen={setIsOpen} />
      
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="injectables" className="border-b-0">
          <AccordionTrigger className="py-2 text-medspa-dark font-medium">
            Injectables
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2">
              <MobileInjectablesTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="laser" className="border-b-0">
          <AccordionTrigger className="py-2 text-medspa-dark font-medium">
            Laser Services
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2">
              <MobileLaserTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="skinlift" className="border-b-0">
          <AccordionTrigger className="py-2 text-medspa-dark font-medium">
            Skin Lift & Fat Reduction
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2">
              <MobileSkinLiftTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="facials" className="border-b-0">
          <AccordionTrigger className="py-2 text-medspa-dark font-medium">
            Facials
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2">
              <MobileFacialTreatments setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
