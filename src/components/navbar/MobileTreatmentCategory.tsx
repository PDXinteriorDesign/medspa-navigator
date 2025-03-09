
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface MobileTreatmentItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const MobileTreatmentItem = ({ title, url, icon: Icon, onClick }: MobileTreatmentItemProps) => {
  return (
    <Link
      to={url}
      className="text-medspa-dark hover:text-medspa-teal transition flex items-center"
      onClick={onClick}
    >
      <Icon className="mr-2 h-4 w-4" />
      {title}
    </Link>
  );
};

interface MobileTreatmentCategoryProps {
  title: string;
  children: React.ReactNode;
}

export const MobileTreatmentCategory = ({ title, children }: MobileTreatmentCategoryProps) => {
  return (
    <div className="mb-2">
      <h3 className="font-medium text-medspa-dark mb-1">{title}</h3>
      <div className="space-y-2 ml-2">
        {children}
      </div>
    </div>
  );
};
