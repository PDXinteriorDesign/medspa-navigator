
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="medspa-container min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-medspa-teal mb-4">404</h1>
        <p className="text-2xl text-gray-800 mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
            <Link to="/medspas">Browse Directory</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
