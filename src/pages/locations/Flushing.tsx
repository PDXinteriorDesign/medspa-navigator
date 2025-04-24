
import React from "react";
import LocationDetail from "../LocationDetail";
import { getLocationBySlug } from "@/lib/locationData";
import { useParams } from "react-router-dom";

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
  
  return <LocationDetail />;
};

export default Flushing;
