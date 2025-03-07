
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { type MedSpa } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface MedSpaCardProps {
  medSpa: MedSpa;
}

const MedSpaCard = ({ medSpa }: MedSpaCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={medSpa.imageUrl} 
          alt={medSpa.name} 
          className="w-full h-48 object-cover" 
        />
        {medSpa.featured && (
          <Badge className="absolute top-3 right-3 bg-medspa-gold text-white">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-5">
        <Link to={`/medspas/${medSpa.slug}`}>
          <h3 className="text-lg font-medium mb-2 hover:text-medspa-teal transition">{medSpa.name}</h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex text-medspa-gold mr-1">
            <Star size={16} fill="currentColor" />
          </div>
          <span className="text-sm font-medium">{medSpa.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({medSpa.reviewCount} reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{medSpa.address}</p>
        <p className="text-sm text-gray-700 line-clamp-2 mb-4">{medSpa.description}</p>
        <Link 
          to={`/medspas/${medSpa.slug}`}
          className="text-medspa-teal hover:text-medspa-teal/80 text-sm font-medium"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default MedSpaCard;
