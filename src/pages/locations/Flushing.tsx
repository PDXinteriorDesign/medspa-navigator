
import React from "react";
import LocationDetail from "../LocationDetail";
import { useParams } from "react-router-dom";

const Flushing = () => {
  const { locationSlug } = useParams();
  
  return <LocationDetail />;
};

export default Flushing;
