
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { type MedSpa } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface MedSpaCardProps {
  medSpa: MedSpa;
}

const MedSpaCard = ({ medSpa }: MedSpaCardProps) => {
  const isMobile = useIsMobile();
  
  // Extract location from address to determine the location route and slug
  const getLocationInfo = () => {
    // This is a simplified approach - you may need a more robust mapping
    let slug = "";
    
    if (medSpa.address.includes("Manhattan")) { 
      slug = "manhattan";
    }
    else if (medSpa.address.includes("Brooklyn")) { 
      slug = "brooklyn";
    }
    else if (medSpa.address.includes("SoHo")) { 
      slug = "soho";
    }
    else if (medSpa.address.includes("Upper East Side")) { 
      slug = "upper-east-side";
    }
    else if (medSpa.address.includes("Tribeca")) { 
      slug = "tribeca";
    }
    else if (medSpa.address.includes("Midtown")) { 
      slug = "midtown";
    }
    else if (medSpa.address.includes("Williamsburg")) { 
      slug = "williamsburg";
    }
    else if (medSpa.address.includes("Hamptons")) { 
      slug = "the-hamptons";
    }
    
    return { slug };
  };

  const { slug } = getLocationInfo();
  const clinicLink = `/${slug}/${medSpa.id}`;

  if (isMobile) {
    // Mobile layout
    return (
      <div className="luxury-card group overflow-hidden subtle-hover rounded-lg border bg-white shadow-sm">
        <div className="relative">
          <Link to={clinicLink}>
            <AspectRatio ratio={16/9}>
              <img 
                src={medSpa.imageUrl} 
                alt={medSpa.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
                width="400"
                height="225" 
              />
            </AspectRatio>
          </Link>
          {medSpa.featured && (
            <Badge className="absolute top-2 right-2 bg-medspa-gold/90 hover:bg-medspa-gold text-white text-xs font-medium">
              Featured
            </Badge>
          )}
        </div>
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
          
          <Link 
            to={clinicLink}
            className="text-medspa-teal hover:text-medspa-teal/80 text-xs font-medium hover-underline inline-flex items-center"
          >
            View Clinic <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="luxury-card group overflow-hidden subtle-hover rounded-lg border bg-white shadow-sm">
      <div className="relative">
        <Link to={clinicLink}>
          <AspectRatio ratio={16/9}>
            <img 
              src={medSpa.imageUrl} 
              alt={medSpa.name} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
              width="600"
              height="338" 
            />
          </AspectRatio>
        </Link>
        {medSpa.featured && (
          <Badge className="absolute top-3 right-3 bg-medspa-gold/90 hover:bg-medspa-gold text-white font-medium">
            Featured
          </Badge>
        )}
      </div>
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
        
        <Link 
          to={clinicLink}
          className="text-medspa-teal hover:text-medspa-teal/80 text-sm font-medium hover-underline inline-flex items-center"
        >
          View Clinic <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default MedSpaCard;
