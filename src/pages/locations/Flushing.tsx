
import React from "react";
import { Navigate } from "react-router-dom";
import { getLocationBySlug } from "@/lib/locationData";

const Flushing = () => {
  // Since we're on a specific location page, we know the locationSlug
  const locationSlug = "flushing";
  const location = getLocationBySlug(locationSlug);
  
  if (!location) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Location Not Found</h1>
        <p>The location you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  // Instead of redirecting to /locations/flushing, redirect directly to /flushing
  // This matches the route pattern in the router
  return <Navigate to={`/${locationSlug}`} replace />;
};

export default Flushing;
