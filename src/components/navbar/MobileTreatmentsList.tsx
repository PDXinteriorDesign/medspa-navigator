
import {
  MobileFavoritesTreatments,
  MobileInjectablesTreatments,
  MobileLaserTreatments,
  MobileSkinLiftTreatments,
  MobileFacialTreatments
} from "./MobileTreatmentCategories";

interface MobileTreatmentsListProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileTreatmentsList = ({ setIsOpen }: MobileTreatmentsListProps) => {
  return (
    <div className="mt-2 ml-4 space-y-4 flex flex-col">
      <MobileFavoritesTreatments setIsOpen={setIsOpen} />
      <MobileInjectablesTreatments setIsOpen={setIsOpen} />
      <MobileLaserTreatments setIsOpen={setIsOpen} />
      <MobileSkinLiftTreatments setIsOpen={setIsOpen} />
      <MobileFacialTreatments setIsOpen={setIsOpen} />
    </div>
  );
};
