
import { Shield, Star, Check } from "lucide-react";

const TrustSignals = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-8 p-4 bg-medspa-cream rounded-lg">
      <div className="flex items-center mr-4 mb-4 sm:mb-0">
        <Shield size={20} className="text-medspa-teal mr-2" />
        <span className="font-medium">Licensed Providers</span>
      </div>
      <div className="flex items-center mr-4 mb-4 sm:mb-0">
        <Star size={20} className="text-medspa-teal mr-2" />
        <span className="font-medium">Trusted Reviews</span>
      </div>
      <div className="flex items-center">
        <Check size={20} className="text-medspa-teal mr-2" />
        <span className="font-medium">Instant Booking</span>
      </div>
    </div>
  );
};

export default TrustSignals;
