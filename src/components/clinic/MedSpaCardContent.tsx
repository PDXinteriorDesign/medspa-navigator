
import { Link } from "react-router-dom";
import { Star, MapPin, ShieldCheck } from "lucide-react";
import { type MedSpa } from "@/lib/types";

interface MedSpaCardContentProps {
  medSpa: MedSpa;
  clinicLink: string;
  isMobile: boolean;
  onClaimClick: () => void;
}

const MedSpaCardContent = ({ medSpa, clinicLink, isMobile, onClaimClick }: MedSpaCardContentProps) => {
  if (isMobile) {
    return (
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <Link to={clinicLink} className="group">
            <h3 className="text-base font-serif group-hover:text-medspa-teal transition-colors">{medSpa.name}</h3>
          </Link>
          <div className="flex items-center ml-1">
            <div className="flex text-medspa-gold mr-0.5">
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-xs font-medium">{medSpa.rating}</span>
          </div>
        </div>
        
        <div className="flex items-start mb-2">
          <MapPin size={12} className="text-medspa-teal mt-0.5 mr-1 flex-shrink-0" />
          <p className="text-xs text-gray-600 line-clamp-1">{medSpa.address}</p>
        </div>
        
        <p className="text-xs text-gray-700 line-clamp-2 mb-3">{medSpa.description}</p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={clinicLink}
            className="text-medspa-teal hover:text-medspa-teal/80 text-xs font-medium hover-underline inline-flex items-center"
          >
            View Clinic <span className="ml-1">→</span>
          </Link>
          
          <button 
            onClick={onClaimClick}
            className="bg-medspa-teal/90 hover:bg-medspa-teal text-white text-xs py-1 px-2 rounded-md flex items-center"
          >
            <ShieldCheck size={12} className="mr-1" />
            Claim Listing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <Link to={clinicLink} className="group">
        <h3 className="text-lg font-serif mb-2 group-hover:text-medspa-teal transition-colors">{medSpa.name}</h3>
      </Link>
      
      <div className="flex items-center mb-3">
        <div className="flex text-medspa-gold mr-1">
          <Star size={16} fill="currentColor" />
        </div>
        <span className="text-sm font-medium">{medSpa.rating}</span>
        <span className="text-sm text-gray-500 ml-1">({medSpa.reviewCount} reviews)</span>
      </div>
      
      <div className="flex items-start mb-3">
        <MapPin size={16} className="text-medspa-teal mt-1 mr-1 flex-shrink-0" />
        <p className="text-gray-600 text-sm">{medSpa.address}</p>
      </div>
      
      <p className="text-sm text-gray-700 line-clamp-2 mb-4">{medSpa.description}</p>
      
      <div className="flex items-center justify-between">
        <Link 
          to={clinicLink}
          className="text-medspa-teal hover:text-medspa-teal/80 text-sm font-medium hover-underline inline-flex items-center"
        >
          View Clinic <span className="ml-1">→</span>
        </Link>
        
        <button 
          onClick={onClaimClick}
          className="bg-medspa-teal hover:bg-medspa-teal/90 text-white px-4 py-2 rounded-md flex items-center"
        >
          <ShieldCheck size={16} className="mr-2" />
          Claim Listing
        </button>
      </div>
    </div>
  );
};

export default MedSpaCardContent;
