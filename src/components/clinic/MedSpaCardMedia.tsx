
import { Link } from "react-router-dom";
import { type MedSpa } from "@/lib/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ClinicMap from "@/components/clinic/ClinicMap";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

interface MedSpaCardMediaProps {
  medSpa: MedSpa;
  clinicLink: string;
  isMobile: boolean;
}

const MedSpaCardMedia = ({ medSpa, clinicLink, isMobile }: MedSpaCardMediaProps) => {
  return (
    <div className="relative">
      <Link to={clinicLink}>
        <AspectRatio ratio={16/9}>
          {medSpa.coordinates ? (
            <ClinicMap clinic={medSpa} />
          ) : (
            <img 
              src={medSpa.imageUrl} 
              alt={medSpa.name} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
              width={isMobile ? "400" : "600"}
              height={isMobile ? "225" : "338"} 
            />
          )}
        </AspectRatio>
      </Link>
      {medSpa.featured && (
        <Badge className={`absolute top-${isMobile ? '2' : '3'} right-${isMobile ? '2' : '3'} bg-medspa-gold/90 hover:bg-medspa-gold text-white ${isMobile ? 'text-xs' : ''} font-medium`}>
          Featured
        </Badge>
      )}
      {medSpa.verified && (
        <Badge className={`absolute top-${isMobile ? '2' : '3'} left-${isMobile ? '2' : '3'} bg-medspa-teal/90 hover:bg-medspa-teal text-white ${isMobile ? 'text-xs' : ''} font-medium`}>
          <Shield size={isMobile ? 12 : 14} className="mr-1" /> Verified
        </Badge>
      )}
    </div>
  );
};

export default MedSpaCardMedia;
