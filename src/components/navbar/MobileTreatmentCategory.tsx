
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface MobileTreatmentItemProps {
  title: string;
  url: string;
  icon: LucideIcon | null;
  onClick: () => void;
}

export const MobileTreatmentItem = ({ title, url, icon: Icon, onClick }: MobileTreatmentItemProps) => {
  return (
    <Link
      to={url}
      className="text-medspa-dark hover:text-medspa-teal transition flex items-center py-2 border-b border-gray-100 last:border-0"
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {title}
    </Link>
  );
};
