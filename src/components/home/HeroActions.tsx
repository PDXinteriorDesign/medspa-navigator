
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
        <Link to="/locations">
          Browse Directory
        </Link>
      </Button>
      <Button asChild variant="outline" className="border-white text-white bg-medspa-teal hover:bg-medspa-teal/80">
        <Link to="/services">
          Explore Services
        </Link>
      </Button>
    </div>
  );
};

export default HeroActions;
