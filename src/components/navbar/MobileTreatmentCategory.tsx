
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
      className="text-medspa-dark hover:text-medspa-teal transition flex items-center py-1"
      onClick={onClick}
    >
      <Icon className="mr-2 h-4 w-4" />
      {title}
    </Link>
  );
};
