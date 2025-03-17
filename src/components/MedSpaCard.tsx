
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { type MedSpa } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface MedSpaCardProps {
  medSpa: MedSpa;
}

const MedSpaCard = ({ medSpa }: MedSpaCardProps) => {
  // Extract location from address to determine the location route and slug
  const getLocationInfo = () => {
    // This is a simplified approach - you may need a more robust mapping
    let route = "/locations";
    let slug = "";
    
    if (medSpa.address.includes("Manhattan")) { 
      route = "/locations/manhattan"; 
      slug = "manhattan";
    }
    else if (medSpa.address.includes("Brooklyn")) { 
      route = "/locations/brooklyn"; 
      slug = "brooklyn";
    }
    else if (medSpa.address.includes("SoHo")) { 
      route = "/locations/soho"; 
      slug = "soho";
    }
    else if (medSpa.address.includes("Upper East Side")) { 
      route = "/locations/upper-east-side"; 
      slug = "upper-east-side";
    }
    else if (medSpa.address.includes("Tribeca")) { 
      route = "/locations/tribeca"; 
      slug = "tribeca";
    }
    else if (medSpa.address.includes("Midtown")) { 
      route = "/locations/midtown";
      slug = "midtown";
    }
    else if (medSpa.address.includes("Williamsburg")) { 
      route = "/locations/williamsburg";
      slug = "williamsburg";
    }
    else if (medSpa.address.includes("Hamptons")) { 
      route = "/locations/the-hamptons";
      slug = "the-hamptons";
    }
    
    return { route, slug };
  };

  const { route, slug } = getLocationInfo();
  const clinicLink = `/${slug}/${medSpa.id}`;

  return (
    <div className="luxury-card group overflow-hidden subtle-hover">
      <div className="relative">
        <Link to={clinicLink}>
          <img 
            src={medSpa.imageUrl} 
            alt={medSpa.name} 
            className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-105" 
          />
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
